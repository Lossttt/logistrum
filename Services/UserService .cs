using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using logistrum.Model.Auth;
using ParcelBooking.Data;

namespace logistrum.Services
{
public class UserService : IUserService
{
    private readonly ApplicationDbContext _dbContext; // Inject your database context here

    public UserService(ApplicationDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public async Task<User> CreateUserAsync(User user)
    {
        // Add user to database
        _dbContext.Users.Add(user);
        await _dbContext.SaveChangesAsync();

        return user;
    }

    public async Task<User> ActivateUserAsync(int userId)
    {
        var user = await _dbContext.Users.FindAsync(userId);
        if (user != null)
        {
            user.IsActivated = true;
            await _dbContext.SaveChangesAsync();
        }

        return user;
    }
}
}