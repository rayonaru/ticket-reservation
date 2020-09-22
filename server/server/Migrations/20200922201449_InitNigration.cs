using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace server.Migrations
{
    public partial class InitNigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.EnsureSchema(
                name: "common");

            migrationBuilder.CreateTable(
                name: "cs_teams",
                schema: "common",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    c_name = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_cs_teams", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "cd_games",
                schema: "common",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    d_timestamp = table.Column<DateTime>(type: "timestamp", nullable: false),
                    f_team1 = table.Column<Guid>(type: "uuid", nullable: false),
                    f_team2 = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_cd_games", x => x.id);
                    table.ForeignKey(
                        name: "FK_cd_games_cs_teams_f_team1",
                        column: x => x.f_team1,
                        principalSchema: "common",
                        principalTable: "cs_teams",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_cd_games_cs_teams_f_team2",
                        column: x => x.f_team2,
                        principalSchema: "common",
                        principalTable: "cs_teams",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "cd_places",
                schema: "common",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    c_number = table.Column<string>(type: "text", nullable: true),
                    b_busy = table.Column<bool>(type: "bool", nullable: false),
                    f_game = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_cd_places", x => x.id);
                    table.ForeignKey(
                        name: "FK_cd_places_cd_games_f_game",
                        column: x => x.f_game,
                        principalSchema: "common",
                        principalTable: "cd_games",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_cd_games_f_team1",
                schema: "common",
                table: "cd_games",
                column: "f_team1");

            migrationBuilder.CreateIndex(
                name: "IX_cd_games_f_team2",
                schema: "common",
                table: "cd_games",
                column: "f_team2");

            migrationBuilder.CreateIndex(
                name: "IX_cd_places_f_game",
                schema: "common",
                table: "cd_places",
                column: "f_game");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "cd_places",
                schema: "common");

            migrationBuilder.DropTable(
                name: "cd_games",
                schema: "common");

            migrationBuilder.DropTable(
                name: "cs_teams",
                schema: "common");
        }
    }
}
