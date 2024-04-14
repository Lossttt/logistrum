using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ParcelBooking.Services
{
    public class ParcelIdService : IParcelIdService
    {
        public string GenerateParcelId()
        {
            // Generate a random number between 1000 and 9999
            Random rnd = new Random();
            int randomNumber = rnd.Next(1000, 10000);

            // Concatenate the prefix with the random number
            string prefix = "NL-";
            string suffix = "-ALFA";
            string parcelId = prefix + randomNumber.ToString() + suffix;

            return parcelId;
        }
    }
}