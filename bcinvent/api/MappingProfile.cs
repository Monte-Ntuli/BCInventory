using api.Entities;
using api.Models;
using api.Models.DTO;
using AutoMapper;

namespace api
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<ClassRoomEntity, ClassRoomModel>().ReverseMap();
            CreateMap<ClassRoomEntity, CreateClassRoomDTO>().ReverseMap();
            CreateMap<ClassRoomEntity, UpdateClassRoomDTO>().ReverseMap();
            CreateMap<ClassRoomEntity, ClassRoomIdDTO>().ReverseMap();
        }
    }
}
