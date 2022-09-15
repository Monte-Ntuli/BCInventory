using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace api.Models.Requests
{
  public class CreateClassRoomRequestModel
  {
    public string ClassName { get; set; }
    public string ClassIP { get; set; }
  }
}
