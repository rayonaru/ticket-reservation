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

        public IEnumerable<test> GetTest()
        {
            var data = from game in _context.Games
                           join team1 in _context.Teams 
                                on game.TeamsFK1 equals team1.Id
                           join team2 in _context.Teams 
                                on game.TeamsFK2 equals team2.Id
                       select new test 
                       { 
                           id = game.Id, 
                           name1 = team1.Name, 
                           name2 = team2.Name,
                           timestamp = game.Timestamp
                       };

            return data.ToList();
        }
    }
}
