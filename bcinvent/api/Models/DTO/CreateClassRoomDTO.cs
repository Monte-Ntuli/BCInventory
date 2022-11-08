using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace api.Models.DTO
{
    public class CreateClassRoomDTO
    {
        public string ClassName { get; set; }
        public string ClassIP { get; set; }
        public string LocationName { get; set; }
  }
}

