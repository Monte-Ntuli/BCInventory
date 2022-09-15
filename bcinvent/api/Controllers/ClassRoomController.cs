using api.Entities;
using api.Models;
using api.Models.Requests;
using api.Services.Interfaces;
using api.Utils;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace api.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ClassRoomController : ControllerBase
  {
    private readonly IUnitOfwork _unitOfWork;
    private readonly ILogger<ClassRoomController> _logger;
    private readonly IMapper _mapper;
    private readonly IConfiguration _config;
    public ClassRoomController(IUnitOfwork unitOfWork, ILogger<ClassRoomController> logger, IMapper mapper, IConfiguration config)
    {
      _unitOfWork = unitOfWork;
      _logger = logger;
      _mapper = mapper;
      _config = config;
    }

    #region Create Class Room
    [HttpPost()]
    public async Task<IActionResult> AddClassRoom([FromBody] CreateClassRoomRequestModel classRoom)
    {
      try
      {
        await _unitOfWork.ClassRoom.AddAsync(_mapper.Map<ClassRoomEntity>(classRoom));
        return Accepted("Class Room Created");
      }
      catch (Exception ex)
      {
        var error = new ErrorModel
        {
          title = ex.Message
        };

        return BadRequest(error);
      }
    }
    #endregion
  }
}
