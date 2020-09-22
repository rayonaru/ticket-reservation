using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models
{
    [Table("cd_games", Schema = "common")]
    public class Game
    {
        [Key]
        [Column("id", TypeName = "uuid")]
        public Guid Id { get; set; }

        [Column("d_timestamp", TypeName = "timestamp")]
        public DateTime Timestamp { get; set; }

        [Column("f_team1", TypeName = "uuid")]
        public Guid TeamsFK1 { get; set; }

        [Column("f_team2", TypeName = "uuid")]
        public Guid TeamsFK2 { get; set; }

        public ICollection<Place> Places { get; set; }
    }
}
