using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using logistrum.DTO.Auth;
using logistrum.Model.Auth;
using logistrum.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace logistrum.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AccountController : ControllerBase
    {
        private readonly IEmailService _emailService;
        private readonly IUserService _userService;
        private readonly UserManager<User> _userManager;

        public AccountController(IEmailService emailService, UserManager<User> userManager)
        {
            _emailService = emailService;
            _userManager = userManager;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] UserDTO model)
        {
            var user = new User
            {
                Email = model.Email,
                Password = model.Password,
                IsActivated = false
            };

            var createdUser = await _userService.CreateUserAsync(user);

            // Send activation email
            var activationLink = $"{Request.Scheme}://{Request.Host}/api/account/activate?email={createdUser.Email}";
            var emailSubject = "Activate your account";
            var emailMessage = $"Click <a href='{activationLink}'>here</a> to activate your account.";

            await _emailService.SendEmailAsync(createdUser.Email, emailSubject, emailMessage);

            return Ok(new { Message = "Registration successful. Please check your email to activate your account." });
        }

[HttpGet("activate")]
public async Task<IActionResult> ActivateAccount([FromQuery] string email)
{
    if (string.IsNullOrEmpty(email))
    {
        return BadRequest(new { Message = "Email address is required for activation." });
    }

    // Retrieve the user based on the email address
    var user = await _userManager.FindByEmailAsync(email);

    if (user == null)
    {
        return BadRequest(new { Message = "User not found." });
    }

    // Activate user account using UserService
    var activatedUser = await _userService.ActivateUserAsync(user.Id);

    if (activatedUser == null)
    {
        return BadRequest(new { Message = "Invalid activation request." });
    }

    return Ok(new { Message = "User account activated successfully." });
}

    }
}