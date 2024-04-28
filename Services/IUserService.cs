using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using logistrum.Model.Auth;

namespace logistrum.Services
{
    public interface IUserService
    {
        Task<User> CreateUserAsync(User user);
        Task<User> ActivateUserAsync(int userId);
    }
}