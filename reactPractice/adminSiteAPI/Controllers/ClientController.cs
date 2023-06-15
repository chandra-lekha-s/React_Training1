using Microsoft.AspNetCore.Mvc;
using adminSiteAPI.Model;
using System.Data.SqlClient;

namespace adminSiteAPI.Controllers
{
    [ApiController]
    public class ClientController : Controller
    {
        [HttpGet]
        [Route("api/admin/getClientList")]
        public List<Client> getClientList()
        {
            List<Client> client = new List<Client>();
            SqlConnection con = new SqlConnection(@"Data Source=CHANDRALEK-LT;Initial Catalog=React_Training;Integrated Security=True");
            con.Open();
            SqlCommand cmd = new SqlCommand("select * from Client", con);
            SqlDataReader dr = cmd.ExecuteReader();
            while (dr.Read())
            {
                client.Add(new Client
                {
                    Id = dr["id"].ToString(),
                    ClientName = dr["clientName"].ToString(),
                    Permission = dr["Permission"].ToString(),
                    ClientType = dr["clientType"].ToString(),
                });
            }
            return client;
        }

        [HttpGet]
        [Route("api/Admin/getClientListbyID/{id}")]
        public Client getClientListbyID(int id)
        {
            Client client = new Client();
            SqlConnection con = new SqlConnection(@"Data Source=CHANDRALEK-LT;Initial Catalog=React_Training;Integrated Security=True");
            con.Open();
            SqlCommand cmd = new SqlCommand("select * from Client where id=@id", con);
            cmd.Parameters.AddWithValue("@id", id);
            SqlDataReader dr = cmd.ExecuteReader();
            if (dr.Read())
            {
                client.Id = dr["id"].ToString();
                client.ClientName = dr["clientName"].ToString();
                client.Permission = dr["Permission"].ToString();
                client.ClientType = dr["clientType"].ToString();
            }
            return client;
        }

        [HttpPost]
        [Route("api/Admin/addClient")]
        public int addClient([FromBody] Client client)
        {
            SqlConnection con = new SqlConnection(@"Data Source=CHANDRALEK-LT;Initial Catalog=React_Training;Integrated Security=True");
            con.Open();
            string sqlStr = "insert into Client values(@id,@clientName,@Permission,@clientType)";
            SqlCommand cmd = new SqlCommand(sqlStr, con);
            cmd.Parameters.AddWithValue("@id", client.Id);
            cmd.Parameters.AddWithValue("@clientName", client.ClientName);
            cmd.Parameters.AddWithValue("@Permission", client.Permission);
            cmd.Parameters.AddWithValue("@clientType", client.ClientType);
            int result = cmd.ExecuteNonQuery();
            return result;
        }

        [HttpDelete]
        [Route("api/Admin/deleteClient/{id}")]
        public int deleteClient(int id)
        {
            Console.WriteLine("DELETE");
            SqlConnection con = new SqlConnection(@"Data Source=CHANDRALEK-LT;Initial Catalog=React_Training;Integrated Security=True");
            con.Open();
            string sqlStr = "delete from Client where id=@id";
            SqlCommand cmd = new SqlCommand(sqlStr, con);
            var client = getClientListbyID(id);
            cmd.Parameters.AddWithValue("@id", client.Id);
            int result = cmd.ExecuteNonQuery();
            return result;
        }
    }
}
