using System.Configuration;
using System.Net.Http;
using System.Web.Http;
using System.IO;
using System.Web;
using System.Net.Http.Headers;

namespace WebApplication.Controllers
{
    public class RedirectController : ApiController
    {
        /// <summary>
        /// 固定回傳vue build過之index.html
        /// </summary>
        /// <returns></returns>
        [HttpGet, HttpPost, HttpPut, HttpDelete, HttpHead, HttpOptions, AcceptVerbs("PATCH")]
        public HttpResponseMessage Handle404()
        {
            var path = ConfigurationManager.AppSettings["VuePath"];
            var response = new HttpResponseMessage();
            response.Content = new StringContent(File.ReadAllText(HttpContext.Current.Server.MapPath(path)));
            response.Content.Headers.ContentType = new MediaTypeHeaderValue("text/html");
            return response;
        }
    }
}
