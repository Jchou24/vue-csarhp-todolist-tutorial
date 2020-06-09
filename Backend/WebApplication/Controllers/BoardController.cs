using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using WebApplication.Models;

namespace WebApplication.Controllers
{
    public class BoardController : ApiController
    {
        /// <summary>
        /// 讀取board data
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public IHttpActionResult GetBoardData()
        {
            return Ok(GlobalData.BoardData);
        }

        /// <summary>
        /// 儲存board data
        /// </summary>
        /// <param name="boardData"></param>
        /// <returns></returns>
        [HttpPost]
        public IHttpActionResult SaveBoardData(Board boardData)
        {
            GlobalData.BoardData = boardData;
            return Ok(boardData);
        }
    }
}
