using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using System.Web.Http.Cors;

namespace WebApplication
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            // 讓所有/api/底線的request對應到API controller
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{action}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            // 讓所以不是/api/開頭的request固定執行Redirect Controller的Handle404
            config.Routes.MapHttpRoute(
                name: "Error404",
                routeTemplate: "{*url}",
                defaults: new { controller = "Redirect", action = "Handle404" }
            );

#if DEBUG
            // 讓開發環境暫時允許CORS
            // 這樣就可以前後端都啟動開發用暫時server
            var cors = new EnableCorsAttribute("*", "*", "*")
            {
                SupportsCredentials = true
            };
            config.EnableCors(cors);
#else

#endif
        }
    }
}
