using api.Repos;
using api.Repos.Interfaces;
using api.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace api.Services
{
  public class UnitOfWork : IUnitOfwork
  {
    readonly InventoryDbContext _context;

    public UnitOfWork(InventoryDbContext context)
    {
      _context = context;
    }

    public IClassRoomRepository _classRoom;
    public IClassRoomRepository ClassRoom
    {
      get
      {
        if (_classRoom == null)
        {
          _classRoom = new ClassRoomRepositroy(_context);
        }
        return _classRoom;
      }
    }
  }
}
