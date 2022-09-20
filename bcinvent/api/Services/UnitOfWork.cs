using api.Repos;
using api.Repos.Interfaces;
using api.Services.Interfaces;

namespace api.Services
{
    public class UnitOfWork : IUnitOfWork
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

                    _classRoom = new ClassRoomRepository(_context);

                return _classRoom;
            }
        }

    }
}
