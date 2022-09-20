using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace api.Models.DTO
{
    public class UserLoginInfoEndpointDTO
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}

