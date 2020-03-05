using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BAC.Data;
using BAC.Models;

namespace BAC.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class UserLoginController : ControllerBase
    {
        private readonly UserLoginContext _context;
        private readonly IDataRepository<Userlogin> _repo;

        public UserLoginController(UserLoginContext context, IDataRepository<Userlogin> repo)
        {
            _context = context;
            _repo = repo;
        }

        // GET: api/UserLogin
        [HttpGet]
        public IEnumerable<Userlogin> GetUserLogin()
        {
            return _context.Userlogin.OrderByDescending(p => p.u_id);
        }

        // GET: api/UserLogin/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetUserLogin([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userLogin = await _context.Userlogin.FindAsync(id);

            if (userLogin == null)
            {
                return NotFound();
            }

            return Ok(userLogin);
        }

        // PUT: api/UserLogin/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUserLogin([FromRoute] int id, [FromBody] Userlogin userLogin)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != userLogin.u_id)
            {
                return BadRequest();
            }

            _context.Entry(userLogin).State = EntityState.Modified;

            try
            {
                _repo.Update(userLogin);
                var save = await _repo.SaveAsync(userLogin);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserLoginExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/UserLogin
        [HttpPost]
        public async Task<IActionResult> PostUserLogin([FromBody] Userlogin userLogin)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _repo.Add(userLogin);
            var save = await _repo.SaveAsync(userLogin);

            return CreatedAtAction("GetUserLogin", new { id = userLogin.u_id }, userLogin);
        }

        // DELETE: api/BlogPosts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUserLogin([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userLogin = await _context.Userlogin.FindAsync(id);
            if (userLogin == null)
            {
                return NotFound();
            }

            _repo.Delete(userLogin);
            var save = await _repo.SaveAsync(userLogin);

            return Ok(userLogin);
        }

        private bool UserLoginExists(int id)
        {
            return _context.Userlogin.Any(e => e.u_id == id);
        }
    }
}
