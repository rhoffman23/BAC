using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using BAC.Models;

namespace BAC.Data
{
    public class UserLoginContext : DbContext
    {
        public UserLoginContext (DbContextOptions<UserLoginContext> options)
            : base(options)
        {
        }

        public DbSet<BAC.Models.Userlogin> Userlogin { get; set; }
    }
}
