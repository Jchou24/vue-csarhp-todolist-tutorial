using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication.Models
{
    /// <summary>
    /// 用來模擬DB。將前端之資料存到記憶體中，以模擬DB之行為
    /// </summary>
    public class GlobalData
    {
        public static Board BoardData { get; set; } = new Board();
    }
}