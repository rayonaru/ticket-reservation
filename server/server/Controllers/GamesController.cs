using Microsoft.AspNetCore.Mvc;
using server.Data;
using server.Models;
using System;
using System.Collections.Generic;

namespace server.Controllers
{
    [Route("api/games")]
    [ApiController]
    public class GamesController : ControllerBase
    {
        private readonly IGameRepo _repository;

        public GamesController(IGameRepo repository)
        {
            _repository = repository;
        }

        //private readonly MockGameRepo _repository = new MockGameRepo();

        //GET api/games
        [HttpGet]
        public ActionResult<IEnumerable<Game>> GetAllGames()
        {
            var gameItems = _repository.GetAllGames();

            return Ok(gameItems);
        }

        // GET api/games/{id}
        [HttpGet("{id}")]
        public ActionResult<Game> GetGameById(Guid id)
        {
            var gameItem = _repository.GetGameById(id);

            return Ok(gameItem);
        }
    }
}
