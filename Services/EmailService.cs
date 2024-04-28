using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Threading.Tasks;

namespace logistrum.Services
{
public class EmailService : IEmailService
{
    private readonly SmtpClient _smtpClient;

    public EmailService(IConfiguration configuration)
    {
        _smtpClient = new SmtpClient
        {
            Host = configuration["Smtp:Host"],
            Port = int.Parse(configuration["Smtp:Port"]),
            Credentials = new NetworkCredential(configuration["Smtp:Username"], configuration["Smtp:Password"]),
            EnableSsl = true
        };
    }

    public async Task SendEmailAsync(string email, string subject, string htmlMessage)
    {
        var message = new MailMessage("your-email@example.com", email, subject, htmlMessage)
        {
            IsBodyHtml = true
        };

        await _smtpClient.SendMailAsync(message);
    }
}
}