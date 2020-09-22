using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace server.Models
{
    [Table("cd_places", Schema = "common")]
    public class Place
    {
        [Key]
        [Column("id", TypeName = "uuid")]
        public Guid Id { get; set; }

        [Column("c_number", TypeName = "text")]
        public String Number { get; set; }

        [Column("b_busy", TypeName = "bool")]
        [DefaultValue(false)]
        public Boolean Busy { get; set; }

        [Column("f_game", TypeName = "uuid")]
        public Guid GamesFK { get; set; }
    }
}
