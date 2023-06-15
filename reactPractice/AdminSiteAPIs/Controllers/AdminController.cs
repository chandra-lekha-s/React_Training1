using Microsoft.AspNetCore.Mvc;
using AdminSiteAPIs.Model;
using System.Data.SqlClient;

namespace AdminSiteAPIs.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AdminController : Controller
    {
        public List<User> Index()
    {
        List<User> users = new List<User>();
        //users.Add(new User { })
        SqlConnection con = new SqlConnection(@"Data Source=CHANDRALEK-LT;Initial Catalog=React_Training;Integrated Security=True");
        con.Open();
        SqlCommand cmd = new SqlCommand("select * from Users", con);
        SqlDataReader dr = cmd.ExecuteReader();
        while (dr.Read())
        {
            users.Add(new User
            {
                id = dr["id"].ToString(),
                userName = dr["username"].ToString(),
                CompanyID = dr["CompanyID"].ToString(),
                CompanyName = dr["CompanyName"].ToString(),
                usertype = dr["usertype"].ToString()
            });
        }
        return users;

    }
}
}
