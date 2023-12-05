using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TOP.Data.Entity;

namespace TOP.Data.Repository
{

    public class PageRepository : IPageRepository
    {

        private TopDbContext topDbContext;
        public PageRepository(TopDbContext topDbContext)
        {
            this.topDbContext = topDbContext;
        }

        public void CreatePage(PageEntity entity)
        {
            this.topDbContext.Pages.Add(entity);
            this.topDbContext.SaveChanges();
        }

        public Task<List<PageEntity>> FindAllAsync(string query)
        {
            var list = this.topDbContext.Pages.Where(t => t.title.Contains(query)).ToListAsync();
            return list;
        }




        public void GetAll()
        {
            throw new NotImplementedException();
        }
    }
}
