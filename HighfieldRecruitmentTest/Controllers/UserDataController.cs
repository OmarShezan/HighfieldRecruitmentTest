using HighfieldRecruitmentTest.BusinessLogic;
using HighfieldRecruitmentTest.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace HighfieldRecruitmentTest.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserDataController : ControllerBase
    {
        private UserHandlers handler = new UserHandlers();
        [Route("ColourFrequency")]
        [HttpGet]
        public Task<Array> GetAsync()
        {
            return handler.GetSortedColourFrequency();
        }

        [HttpGet]
        [Route("Over20s")]
        public Task<Array> GetUsersOver20YearsOld()
        {
            return handler.GetUsersOver20YearsOld();
        }
    }
}
