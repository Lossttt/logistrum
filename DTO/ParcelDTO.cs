using System;
using System.ComponentModel.DataAnnotations;

namespace ParcelBooking.DTO
{
    public class ParcelDTO
    {
        [Required(ErrorMessage = "Name is required.")]
        public required string Name { get; set; }

        [Required(ErrorMessage = "Address is required.")]
        public required string Address { get; set; }

        [Required(ErrorMessage = "Postcode is required.")]
        public required string Postcode { get; set; }

        [Required(ErrorMessage = "City is required.")]
        public required string City { get; set; }

        [Required(ErrorMessage = "Country is required.")]
        public required string Country { get; set; }        
        public double Weight { get; set; }
        public double Length { get; set; }
        public double Height { get; set; }
        public double Width { get; set; }
    }
}
