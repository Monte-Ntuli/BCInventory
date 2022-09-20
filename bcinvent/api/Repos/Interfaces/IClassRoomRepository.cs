using api.Entities;

namespace api.Repos.Interfaces
{
    public interface IClassRoomRepository
    {
        Task AddAsync(ClassRoomEntity createClassRoom);
        Task<ClassRoomEntity> UpdateAsync(ClassRoomEntity updateClassRoom);
    Task<ClassRoomEntity> DeleteAsync(ClassRoomEntity entity);
    Task<List<ClassRoomEntity>> GetAllAsync();
    Task<ClassRoomEntity> GetSpecificClassRoomAsync(int classRoomId);

    }
}
