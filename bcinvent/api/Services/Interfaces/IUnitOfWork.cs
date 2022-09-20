using api.Repos.Interfaces;

namespace api.Services.Interfaces
{
    public interface IUnitOfWork
    {
        IClassRoomRepository ClassRoom { get; }
    }
}
