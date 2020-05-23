using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Data;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace backend.Controllers
{
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly UserContext _context;

        public UserController(UserContext context) {
            _context = context;

        }
        // GET: api/<controller>
        [HttpGet]
        public IActionResult GetUsers()
        {
            var values = _context.Users.ToList();
            return Ok(values);
        }

        [HttpGet("{id}")]
        public IActionResult GetUser(int id) {
            var value = _context.Users.FirstOrDefault(x => x.Id == id);
            return Ok(value);
        }


        
    }
}
