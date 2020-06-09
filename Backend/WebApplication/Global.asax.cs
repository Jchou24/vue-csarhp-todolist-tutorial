using System.Web.Http;

namespace WebApplication
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            GlobalConfiguration.Configure(WebApiConfig.Register);

            // 改為預設回傳json
            GlobalConfiguration.Configuration.Formatters.XmlFormatter.SupportedMediaTypes.Clear();
        }

        /// <summary>
		/// web api 啟用 session
		/// </summary>
		//protected void Application_PostAuthorizeRequest()
  //      {
  //          System.Web.HttpContext.Current.SetSessionStateBehavior(System.Web.SessionState.SessionStateBehavior.Required);
  //      }
    }
}
