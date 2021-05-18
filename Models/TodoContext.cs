using Microsoft.EntityFrameworkCore;

namespace ProjectAngDotNet.Models
{
    public class TodoContext : Microsoft.EntityFrameworkCore.DbContext
    {
        public TodoContext(DbContextOptions<TodoContext> options) : base (options)
        {

        }

        public DbSet<TodoItem> TodoItems { get; set; }
    }
}
