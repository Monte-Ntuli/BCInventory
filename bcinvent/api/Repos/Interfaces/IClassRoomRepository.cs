using api.Entities;

namespace api.Repos.Interfaces
{
    public interface IClassRoomRepository
    {
        Task AddAsync(ClassRoomEntity classRoom);

    }
}
