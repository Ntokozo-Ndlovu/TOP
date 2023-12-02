
using Microsoft.AspNetCore.Mvc;
using TOP.API.Responses;

namespace TOP.Server.Controllers
{
    [ApiController]
    [Route("api/v1")]
    public class SearchController: ControllerBase {

        [HttpGet]
        public ActionResult<SearchResponse> search()
        {
            return Ok();
        }
    }

}