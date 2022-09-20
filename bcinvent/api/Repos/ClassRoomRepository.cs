using api.Entities;
using api.Repos.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace api.Repos
{
    public class ClassRoomRepository : Repository<ClassRoomEntity>, IClassRoomRepository
    {
        private InventoryDbContext _dbContext => (InventoryDbContext)_context;
        public ClassRoomRepository(InventoryDbContext context) : base(context)
        {

        }

        public async override Task AddAsync(ClassRoomEntity entity)
        {
            entity.Id = Guid.NewGuid();
            entity.ClassID = GenerateClassID();
            await _dbContext.AddAsync(entity);
            await _dbContext.SaveChangesAsync();
        }
        private int GenerateClassID()
        {
            var highestId = _dbContext.ClassRoom.OrderByDescending(x => x.ClassID).FirstOrDefault();
            if (highestId != null)
            {
                return highestId.ClassID + 1;
            }
            return 1;
        }

    }

}
