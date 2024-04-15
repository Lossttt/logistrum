using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace logistrum.Model.Auth
{

    public class BaseUser : IdentityUser
    {
        // public int Id { get; set; }

        [Required(ErrorMessage = "Fullname is required")]
        [StringLength(50, ErrorMessage = "Name must be less than 100 characters")]
        public required string FullName { get; set; }

        [Required(ErrorMessage = "Gender is required")]
        [StringLength(5, ErrorMessage = "Gender must be less than 5 characters")]
        public required string Gender { get; set; }
        public DateTime DateOfBirth { get; set; }

        [Required(ErrorMessage = "Email is required")]
        [StringLength(255, ErrorMessage = "Must be between 5 and 255 characters", MinimumLength = 5)]
        public required string Email { get; set; }

        [Required(ErrorMessage = "Password is required")]
        [StringLength(255, ErrorMessage = "Must be between 5 and 255 characters", MinimumLength = 5)]
        [DataType(DataType.Password)]
        public required string Password { get; set; }

        [Required(ErrorMessage = "Confirm Password is required")]
        [StringLength(255, ErrorMessage = "Must be between 5 and 255 characters", MinimumLength = 5)]
        [DataType(DataType.Password)]
        [Compare("Password")]
        [NotMapped]
        public required string ConfirmPassword { get; set; }
        public required string Address { get; set; }
        public required string CountryCode { get; set; }
    }
}