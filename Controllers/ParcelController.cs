using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging; // Add this namespace
using ParcelBooking.Data;
using ParcelBooking.DTO;
using ParcelBooking.Model;
using ParcelBooking.Services;

namespace ParcelBooking.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ParcelBookingController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly ILogger<ParcelBookingController> _logger; // Add ILogger
        private readonly IParcelIdService _parcelIdService;

        public ParcelBookingController(ApplicationDbContext context, ILogger<ParcelBookingController> logger, IParcelIdService parcelIdService) // Add ILogger to constructor parameters
        {
            _context = context;
            _logger = logger; // Initialize ILogger
            _parcelIdService = parcelIdService;
        }

        [HttpPost]
        public async Task<ActionResult<Parcel>> PostParcel(ParcelDTO parcelDTO)
        {
            try
            {
                _logger.LogInformation("Received request to create a new parcel.");

                string parcelId = _parcelIdService.GenerateParcelId();
                _logger.LogInformation("Generated parcel ID: {ParcelId}", parcelId);

                Parcel parcel = new Parcel
                {
                    Name = parcelDTO.Name,
                    ParcelId = parcelId,
                    Address = parcelDTO.Address,
                    Postcode = parcelDTO.Postcode,
                    City = parcelDTO.City,
                    Country = parcelDTO.Country,
                    Weight = parcelDTO.Weight,
                    Length = parcelDTO.Length,
                    Height = parcelDTO.Height,
                    Width = parcelDTO.Width
                };

                _context.Parcels.Add(parcel);
                await _context.SaveChangesAsync();

                _logger.LogInformation("Parcel created successfully.");

                return CreatedAtAction(nameof(GetParcel), new { id = parcel.Id }, parcel);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to create parcel: {ErrorMessage}", ex.Message);
                return BadRequest($"Failed to create parcel: {ex.Message}");
            }
        }

        [HttpGet]
        public IEnumerable<Parcel> GetParcelBookings()
        {
            try
            {
                _logger.LogInformation("Received request to fetch all parcel bookings.");
                return _context.Parcels.ToList();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to fetch parcel bookings: {ErrorMessage}", ex.Message);
                throw;
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Parcel>> GetParcel(int id)
        {
            try
            {
                _logger.LogInformation("Received request to fetch parcel details for ID: {ParcelId}", id);

                var parcel = await _context.Parcels.FindAsync(id);

                if (parcel == null)
                {
                    _logger.LogInformation("Parcel with ID {ParcelId} not found.", id);
                    return NotFound();
                }

                _logger.LogInformation("Parcel details fetched successfully.");
                return parcel;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Failed to fetch parcel details for ID: {ParcelId}. Error: {ErrorMessage}", id, ex.Message);
                return StatusCode(500, "An error occurred while fetching parcel details.");
            }
        }
    }
}
