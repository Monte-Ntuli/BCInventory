using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    public partial class ClassRoomLocationID : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Location",
                table: "ClassRoom");

            migrationBuilder.AddColumn<int>(
                name: "LocationID",
                table: "ClassRoom",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LocationID",
                table: "ClassRoom");

            migrationBuilder.AddColumn<string>(
                name: "Location",
                table: "ClassRoom",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }
    }
}
