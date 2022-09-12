using BCInventApi.Repos;
using BCInventApi.Repos.Interface;
using BCInventApi.Services.Interfaces;

namespace BCInventApi.Services
{
  public class UnitOfWork : IUnitOfWork
  {
     readonly InventDbContext _context;

    public UnitOfWork(InventDbContext context)
    {
      _context = context;
    }
    public IClassRoomRepository _classRoom;
    public IClassRoomRepository ClassRoom
    {
      get
      {
        if (_classRoom == null)
          _classRoom = new ClassRoomRepository(_context);

        return _classRoom;
      }
    }
  }
}
