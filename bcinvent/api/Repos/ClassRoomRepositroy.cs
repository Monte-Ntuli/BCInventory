using api.Entities;
using api.Repos.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace api.Repos
{
  public class ClassRoomRepositroy : Repository<ClassRoomEntity>, IClassRoomRepository
  {
    private InventoryDbContext _dbContext => (InventoryDbContext)_context;
    public ClassRoomRepositroy(InventoryDbContext context) : base(context)
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
