using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using logistrum.Model.Auth;
using Microsoft.EntityFrameworkCore;
using ParcelBooking.Model;

namespace ParcelBooking.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
        public DbSet<Parcel> Parcels { get; set; }
        public DbSet<User> Users { get; set; }
    }
}