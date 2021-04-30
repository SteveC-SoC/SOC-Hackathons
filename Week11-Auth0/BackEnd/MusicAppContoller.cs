using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;


[ApiController]
[Route("MusicApp")]
public class MusicAppController : ControllerBase
{
    private readonly IRepository<MusicApp> _musicAppRepository;

    public MusicAppController(IRepository<MusicApp> musicAppRepository)
    {
        _musicAppRepository = musicAppRepository;
    }


    //Get -> GetAll
    [HttpGet]
    public async Task<IActionResult> GetAll(string search = null)
    {

        if (search != null)
        {
            try
            {
                var searchResult = await _musicAppRepository.Search(search);
                return Ok(searchResult);
            }
            catch (Exception)
            {
                return BadRequest("The text you've entered is invalid.");
            }
        }

        try
        {
            var allMusic = await _musicAppRepository.GetAll();
            return Ok(allMusic);
        }
        catch (Exception)
        {
            return NotFound("There is no music.");
        }
    }

    //Get{Id} -> Get(id)
    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(long id)
    {
        try
        {
            var returnedMusic = await _musicAppRepository.Get(id);

            return Ok(returnedMusic);
        }
        catch (Exception)
        {
            return BadRequest("Id not found");
        }
    }


    //Put{id} -> Update(announcement)
    [HttpPut("{id}")]

    public async Task<IActionResult> Update(long id, [FromBody] MusicApp musicApp)
    {
        try
        {
            var updatedMusic = await _musicAppRepository.Update(new MusicApp { Id = id, Genre = musicApp.Genre, Song = musicApp.Song, Artist = musicApp.Artist, YouTubeLink = musicApp.YouTubeLink });

            return Ok(updatedMusic);
        }
        catch (Exception)
        {
            return BadRequest("Id not found");
        }
    }


    //Post -> Insert
    [HttpPost]
    public async Task<IActionResult> Insert([FromBody] MusicApp musicApp)
    {
        try
        {
            var insertedMusic = await _musicAppRepository.Insert(musicApp);
            return Created($"/musicapp/{insertedMusic.Id}", insertedMusic);
        }
        catch (Exception)
        {
            return BadRequest("Not a valid entry");
        }
    }

    //Delete{id} -> Delete
    [HttpDelete("{id}")]

    public IActionResult Delete(long id)
    {
        try
        {
            _musicAppRepository.Delete(id);
            return Ok($"Music at {id} is deleted");
        }
        catch (Exception)
        {
            return BadRequest("Id is not valid");
        }
    }


}