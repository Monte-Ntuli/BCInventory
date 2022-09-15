using api.Entities;
using api.Models;
using api.Models.Requests;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace api
{
  public class MappingProfile : Profile
  {
    public MappingProfile()
    {
      CreateMap<ClassRoomEntity, ClassRoomModel>().ReverseMap();
      CreateMap<ClassRoomEntity, CreateClassRoomRequestModel>().ReverseMap();
    }
  }
}
