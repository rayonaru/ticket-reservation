using server.Models;
using System;
using System.Collections.Generic;

namespace server.Data
{
    public class MockGameRepo : IGameRepo
    {
        public Game GetGameById(Guid id)
        {
            return new Game { Id = Guid.NewGuid(), Timestamp = DateTime.Now };
        }

        public IEnumerable<Game> GetAllGames()
        {
            var games = new List<Game>
            {
                new Game { Id = Guid.NewGuid(), Timestamp = DateTime.Now },
                new Game { Id = Guid.NewGuid(), Timestamp = DateTime.Now },
                new Game { Id = Guid.NewGuid(), Timestamp = DateTime.Now }
            };

            return games;
        }

        public IEnumerable<test> GetTest()
        {
            throw new NotImplementedException();
        }
    }
}
