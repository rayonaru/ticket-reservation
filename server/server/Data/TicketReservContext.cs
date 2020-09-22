using Microsoft.EntityFrameworkCore;
using server.Controllers;
using server.ModelConfigurations;
using server.Models;

namespace server.Data
{
    public class TicketReservContext : DbContext
    {
        public TicketReservContext(DbContextOptions<TicketReservContext> opt) : base(opt) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new TeamConfigure());
            modelBuilder.ApplyConfiguration(new GameConfigure());
        }

        public DbSet<Game> Games { get; set; }
        public DbSet<Place> Places { get; set; }
        public DbSet<Team> Teams { get; set; }

    }
}
