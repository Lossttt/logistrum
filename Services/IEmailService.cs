using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace logistrum.Services
{
    public interface IEmailService
    {
        Task SendEmailAsync(string email, string subject, string htmlMessage);
    }
}