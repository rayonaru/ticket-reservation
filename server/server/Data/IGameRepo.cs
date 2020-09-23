using server.Models;
using System;
using System.Collections.Generic;

namespace server.Data
{
    public interface IGameRepo
    {
        IEnumerable<Game> GetAllGames();
        Game GetGameById(Guid id);
        IEnumerable<test> GetTest();
    }
}
