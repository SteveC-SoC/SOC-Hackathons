﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Server.Models;
using Server.Data;

namespace Server.Controllers
{
    [ApiController]
    [Route("red")]
    public class RedCountryController : ControllerBase
    {
        private readonly IRepository<RedCountry> _redCountryRepository;

        public RedCountryController(IRepository<RedCountry> redCountryRepository)
       {
           _redCountryRepository = redCountryRepository;
       }

       [HttpGet]
       public IEnumerable<RedCountry> GetAll(string search)
       {    if(search != null){
           return _redCountryRepository.Search(search);
       }
        //    var redCountries =
           return  _redCountryRepository.GetAll();
       }
      
    }
}
