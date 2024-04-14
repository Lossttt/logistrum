using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ParcelBooking.Services
{
    public interface IParcelIdService
    {
        string GenerateParcelId();
    }
}