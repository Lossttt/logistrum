using logistrum.Services;
using Microsoft.EntityFrameworkCore;
using ParcelBooking.Data;
using ParcelBooking.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<ApplicationDbContext>(options =>
    options.UseSqlite(connectionString));

builder.Services.AddControllersWithViews();

// Initialize services
builder.Services.AddScoped<IParcelIdService, ParcelIdService>();
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IEmailService, EmailService>();

var app = builder.Build();

// Configure CORS
app.UseCors(builder => builder
    .WithOrigins("https://localhost:44495", "https://localhost:7016")
    .AllowAnyMethod()
    .AllowAnyHeader()
    .AllowCredentials()
);

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();
