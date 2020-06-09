using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication.Models
{
    /// <summary>
    /// 用來存放一個Task之內容
    /// </summary>
    public class Task
    {
        public string Title { get; set; }
        public string Content { get; set; }
    }
}