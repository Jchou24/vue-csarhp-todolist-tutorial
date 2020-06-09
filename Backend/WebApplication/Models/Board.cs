using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication.Models
{
    /// <summary>
    /// 用來存放Todo list跟Done list之內容
    /// </summary>
    public class Board
    {
        public Task[] Todo { get; set; } = new Task[] { };
        public Task[] Done { get; set; } = new Task[] { };
    }
}