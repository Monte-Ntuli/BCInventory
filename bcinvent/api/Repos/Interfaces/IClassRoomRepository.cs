using api.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace api.Repos.Interfaces
{
  public interface IClassRoomRepository
  {
    Task AddAsync(ClassRoomEntity classRoom);
  }
}
