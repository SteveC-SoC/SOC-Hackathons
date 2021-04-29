using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

// namespace BackEnd.Controllers
//{
[ApiController]
[Route("[controller]")] //Socs will be root added s to make is plural
public class SocController : ControllerBase
{
    private readonly IRepository<Soc> _socRepository;

    public SocController(IRepository<Soc> socRepository)
    {
        _socRepository = socRepository;
    }

    [HttpGet]
    public async Task<IActionResult> GetAll()
    {
        try
        {
            var allSoc = await _socRepository.GetAll();
            return Ok(allSoc);
        }
        catch (Exception)
        {
            return NotFound($"There is nothing that can be returned");
        }
    }
}
//}
