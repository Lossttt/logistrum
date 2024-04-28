using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace logistrum.Model.Auth
{
    public class User
    {
        public int Id { get; set; }
        public required string Email { get; set; }
        public required string Password { get; set; }
        public bool IsActivated { get; set; }
    }
}