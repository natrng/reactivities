using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : IdentityDbContext<AppUser>
    {

        public DataContext(DbContextOptions options) : base(options) { }
        public DbSet<Activity> Activities { get; set; }
        public DbSet<UserActivity> UserActivities { get; set; }
        public DbSet<Photo> Photos { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<UserActivity>(x => x.HasKey(ua => new { ua.AppUserId, ua.ActivityId })); //Configures a relationship where this entity type has a collection that contains instances of the other type in the relationship.
            builder.Entity<UserActivity>().HasOne(u => u.AppUser).WithMany(a => a.UserActivity).HasForeignKey(u => u.AppUserId); // create the realationship in the db and set the FK
            builder.Entity<UserActivity>().HasOne(a => a.Activity).WithMany(u => u.UserActivity).HasForeignKey(a => a.ActivityId); // same, but from the other side
        }
    }
}