using BCInventApi.Entities;
using BCInventApi.Repos.Interface;
using Microsoft.EntityFrameworkCore;

namespace BCInventApi.Repos
{
  public class ClassRoomRepository : Repository<ClassRoomEntity>, IClassRoomRepository
  {
    private InventDbContext _dbContext => (InventDbContext)_context;
    public ClassRoomRepository(DbContext context) : base(context)
    {
    }

    public async override Task AddAsync(ClassRoomEntity entity)
    {
      entity.Id = Guid.NewGuid();
      await _dbContext.AddAsync(entity);
      await _dbContext.SaveChangesAsync();
    }
  }
}
