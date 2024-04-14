using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ParcelBooking.Model
{
    public class Parcel
    {
        public int Id { get; set; }
        public required string ParcelId { get; set; }
        public required string Name { get; set; }
        // public DateTime DeliveryDate { get; set; }
        public required string Address { get; set; }
        public required string Postcode { get; set; }
        public required string City { get; set; }
        public required string Country { get; set; }
        public double Weight { get; set; }
        public double Length { get; set; }
        public double Height { get; set; }
        public double Width { get; set; }
    }
}