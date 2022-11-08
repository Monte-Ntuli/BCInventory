using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    public partial class LocationName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LocationID",
                table: "ClassRoom");

            migrationBuilder.AddColumn<string>(
                name: "LocationName",
                table: "ClassRoom",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LocationName",
                table: "ClassRoom");

            migrationBuilder.AddColumn<int>(
                name: "LocationID",
                table: "ClassRoom",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
