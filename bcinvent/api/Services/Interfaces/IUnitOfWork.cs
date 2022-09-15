using api.Repos.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace api.Services.Interfaces
{
  public interface IUnitOfwork
  {
    IClassRoomRepository ClassRoom { get; }
  }
}
