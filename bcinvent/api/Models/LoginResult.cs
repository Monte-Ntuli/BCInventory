using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace api.Models
{
  public class LoginResult
  {
    public bool Success { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string Id { get; set; }
    public string Encoded { get; set; }
    public int? StudentId { get; set; }
    public int? EmployeeId { get; set; }
    public bool Impersonate { get; set; }
  }
}
