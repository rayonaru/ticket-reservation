using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models
{
    [Table("cs_teams", Schema = "common")]
    public class Team
    {
        [Key]
        [Column("id", TypeName = "uuid")]
        public Guid Id { get; set; }

        [Column("c_name", TypeName = "text")]
        public String Name { get; set; }

        public ICollection<Game> Games1 { get; set; }

        public ICollection<Game> Games2 { get; set; }
    }
}
