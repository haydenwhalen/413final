using Microsoft.AspNetCore.Mvc;
using final.API.Models;
using Microsoft.EntityFrameworkCore;

namespace final.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EntertainersController : ControllerBase
    {
        private readonly EntertainmentAgencyExampleContext _context;

        public EntertainersController(EntertainmentAgencyExampleContext context)
        {
            _context = context;
        }

        // GET: api/entertainers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Entertainer>>> GetEntertainers()
        {
            return await _context.Entertainers.ToListAsync();
        }

        // GET: api/entertainers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Entertainer>> GetEntertainer(int id)
        {
            var entertainer = await _context.Entertainers.FindAsync(id);

            if (entertainer == null)
                return NotFound();

            return entertainer;
        }

        // POST: api/entertainers
        [HttpPost]
        public async Task<ActionResult<Entertainer>> AddEntertainer(Entertainer entertainer)
        {
            _context.Entertainers.Add(entertainer);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetEntertainer), new { id = entertainer.EntertainerId }, entertainer);
        }

        // PUT: api/entertainers/5
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateEntertainer(int id, Entertainer entertainer)
        {
            if (id != entertainer.EntertainerId)
                return BadRequest();

            _context.Entry(entertainer).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/entertainers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEntertainer(int id)
        {
            var entertainer = await _context.Entertainers.FindAsync(id);
            if (entertainer == null)
                return NotFound();

            _context.Entertainers.Remove(entertainer);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
