using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Services;
using System.IO;
namespace Project2
{
    public partial class login : System.Web.UI.Page
    {
        public static string dataPath = HttpContext.Current.Server.MapPath(".") + @"\data\";

        protected void Page_Load(object sender, EventArgs e)
        {

        }

        [WebMethod]
        public static string SaveCSV(string request)
        {
            string[] requestArray = request.Split('~');
            string filePath = dataPath + requestArray[0] + "1.CSV";

            StreamWriter output = new StreamWriter(filePath);

            // split out the rows into a string array
            string[] rowArray = requestArray[1].Split('|');

            for (int i = 0; i < rowArray.Length; i++)
                output.WriteLine(rowArray[i]);

            output.Close();
            return "SaveCSV";
        }

        [WebMethod]
        public static string LoadCSV(string request)
        {
            string inLine = "";
            string loadString = "";

            StreamReader input = new StreamReader(dataPath + request + ".CSV");

            while ((inLine = input.ReadLine()) != null)
            {
                if (inLine.Trim() != "")
                    loadString += inLine + "|";
            }

            if (loadString.Length > 0)
                loadString = loadString.Substring(0, loadString.Length - 1);

            input.Close();

            loadString = "LoadCSV" + "~" + loadString;
            return loadString;
        }
    }
}