using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using server.Models;

namespace server.ModelConfigurations
{
    public class TeamConfigure : IEntityTypeConfiguration<Team>
    {
        public void Configure(EntityTypeBuilder<Team> builder)
        {
            builder.HasMany(team => team.Games1)
                .WithOne().HasForeignKey(games => games.TeamsFK1);

            builder.HasMany(team => team.Games2)
                .WithOne().HasForeignKey(games => games.TeamsFK2);
        }
    }
}
