using Microsoft.EntityFrameworkCore;
using server.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace server.Data
{
    public class SqlGameRepo : IGameRepo
    {
        private readonly TicketReservContext _context;

        public SqlGameRepo(TicketReservContext context)
        {
            _context = context;
        }

        public IEnumerable<Game> GetAllGames()
        {
            var games = _context.Games.ToList();
            var places = _context.Places.ToList();
            var teams = _context.Teams.ToList();

            var data = from game in _context.Games
                       join team in _context.Teams on game.TeamsFK1 equals team.Id
                       select new { id = game.Id, team1 = team.Name };

            return games;
        }

        public Game GetGameById(Guid id)
        {
            return _context.Games.FirstOrDefault(p => p.Id == id);
        }
    }
}
