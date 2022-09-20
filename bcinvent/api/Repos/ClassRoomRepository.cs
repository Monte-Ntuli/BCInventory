using api.Entities;
using api.Repos.Interfaces;
using Microsoft.EntityFrameworkCore;
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

    public async Task<ClassRoomEntity> UpdateAsync(ClassRoomEntity entity)
    {
      var classRoom = await _dbContext.ClassRoom.FirstOrDefaultAsync(x => x.ClassID == entity.ClassID);

      if (classRoom == null)
      {
        return null;
      }

       
      _dbContext.Update(entity);
      _dbContext.Remove(classRoom);
      await _dbContext.SaveChangesAsync();
      return entity;
    }

    public async Task<ClassRoomEntity> DeleteAsync(ClassRoomEntity entity)
    {
      var classRoom = await _dbContext.ClassRoom.FirstOrDefaultAsync(x => x.ClassID == entity.ClassID);

      if (classRoom == null)
      {
        return null;
      }

      _dbContext.ClassRoom.Remove(classRoom);
      await _dbContext.SaveChangesAsync();
      return classRoom;


    }
    public async Task<List<ClassRoomEntity>> GetAllAsync()
    {
      var classRoom = await _dbContext.ClassRoom.ToListAsync<ClassRoomEntity>();

      if (classRoom != null)
      {
        return classRoom;
      }
      else
      {
        return null;
      }

    }
    public async Task<ClassRoomEntity> GetSpecificClassRoomAsync(int classRoomId)
    {
      var classRoom = await _dbContext.ClassRoom.FirstOrDefaultAsync(x => x.ClassID == classRoomId);

      if (classRoom != null)
      {
        return classRoom;
      }
      else
      {
        return null;
      }

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
