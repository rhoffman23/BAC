using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BAC.Models
{
    public class Userlogin
    {
        [Key]
        public int u_id { get; set; }

		[Required]
		public string first_name { get; set; }

		[Required]
		public string last_name { get; set; }

		[Required]
		public string email { get; set; }

		[Required]
		public string password { get; set; }

	}
}
