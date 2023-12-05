using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TOP.Data.Entity;

namespace TOP.Data.Repository
{
    public interface IPageRepository: IRepository
    {
        public  Task<List<PageEntity>> FindAllAsync(string query);
        public void CreatePage(PageEntity entity);  
    }
}
