
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;
using TOP.API.Responses;
using TOP.Data.Repository;

namespace TOP.Server.Controllers
{
    [ApiController]
    [Route("api/v1")]
    public class SearchController: ControllerBase {


        IPageRepository pageRepository;
        public SearchController() {
            this.pageRepository = new PageRepository(new Data.TopDbContext());
        }

        [HttpGet("{param}")]
        public async Task<SearchResponse> search(string param)
        {

            var searchResults = await this.pageRepository.FindAllAsync(param);
            var response = new SearchResponse()
            {
                searchResults = searchResults
            };
            searchResults.ForEach(result => { Console.WriteLine(result.title); });
            return response;
        }
    }

}