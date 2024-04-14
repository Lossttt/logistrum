using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ParcelBooking.Migrations
{
    /// <inheritdoc />
    public partial class AddParcelIdentificationNumber : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ParcelId",
                table: "Parcels",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ParcelId",
                table: "Parcels");
        }
    }
}
