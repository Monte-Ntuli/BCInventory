using api.Entities;

namespace api.Repos.Interfaces
{
    public interface IClassRoomRepository
    {
        Task AddAsync(ClassRoomEntity createClassRoom);
        Task<ClassRoomEntity> UpdateClassNameAsync(ClassRoomEntity updateClassRoom);
        Task<ClassRoomEntity> UpdateClassRoomAsync(ClassRoomEntity entity);
        Task<ClassRoomEntity> DeleteAsync(ClassRoomEntity entity);
        Task<List<ClassRoomEntity>> GetAllAsync();
        Task<ClassRoomEntity> GetSpecificClassRoomAsync(int classRoomId);
    Task<ClassRoomEntity> UploadClassRoomLayoutAsync(ClassRoomEntity entity);

    }
}
