using BCInventApi.Repos.Interface;

namespace BCInventApi.Services.Interfaces
{
  public interface IUnitOfWork
  {
    IClassRoomRepository ClassRoom { get; }
  }
}
