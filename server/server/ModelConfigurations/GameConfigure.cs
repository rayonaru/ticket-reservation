using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using server.Models;

namespace server.ModelConfigurations
{
    public class GameConfigure : IEntityTypeConfiguration<Game>
    {
        public void Configure(EntityTypeBuilder<Game> builder)
        {
            builder.HasMany(game => game.Places)
                .WithOne().HasForeignKey(place => place.GamesFK);
        }
    }
}
