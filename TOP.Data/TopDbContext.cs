using Microsoft.EntityFrameworkCore;
using System.Data.Common;
using TOP.Data.Entity;

namespace TOP.Data
{



    public class TopDbContext : DbContext
    {
        public string connectionstring;
        public TopDbContext()
        {
            connectionstring = "";
        }
        public TopDbContext(DbContextOptions options) : base(options)
        {
            
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql("Server=127.0.0.1;Port=5432;Database=TopDb;User Id=admin;Password=string;");
        }
        public DbSet<PageEntity> Pages { get; set; }

    }
}
