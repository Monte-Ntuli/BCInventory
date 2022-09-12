using BCInventApi.Models;
using BCInventApi.Models.DTO_s;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Net;
using System.Text;

namespace BCInventApi.Controllers
{
 
  [Route("api/[controller]")]
  [ApiController]
  public class UserLoginController : ControllerBase
  {
    [HttpPost]
    [Route("Login")]
    public async Task<LoginResult> Authenticate(string email, string password)
    {
      var request = WebRequest.CreateHttp("https://www.belgiumcampus.ac.za/utility-api/api/adauth");
      request.Method = "POST";
      request.ContentType = "application/json";
      using (var stream = await request.GetRequestStreamAsync())
      {
        var bytes = Encoding.UTF8.GetBytes(JsonConvert.SerializeObject(new UserLoginDTO()
        {
          Username = email,
          Password = password
        }));
        stream.Write(bytes, 0, bytes.Length);
      }
      try
      {
        using (var response = (HttpWebResponse)request.GetResponse())
        {
          if (response.StatusCode == HttpStatusCode.NotFound) { return null; }
          if (response.StatusCode == HttpStatusCode.OK || response.StatusCode == HttpStatusCode.Unauthorized)
          {
            using (var stream = response.GetResponseStream())
            using (var reader = new StreamReader(stream)) { return JsonConvert.DeserializeObject<LoginResult>(await reader.ReadToEndAsync()); }
          }
          throw new Exception("Authentication server error: " + (int)response.StatusCode);
        }
      }
      catch (WebException error)
      {
        if (error.Response != null)
        {
          if (((HttpWebResponse)error.Response).StatusCode == HttpStatusCode.NotFound) { return null; }
          if (((HttpWebResponse)error.Response).StatusCode == HttpStatusCode.Unauthorized)
          {
            using (var stream = error.Response.GetResponseStream())
            using (var reader = new StreamReader(stream)) { return JsonConvert.DeserializeObject<LoginResult>(await reader.ReadToEndAsync()); }
          }
        }
        throw;
      }
    }
  }
}
