using api.Entities;
using api.Models;
using api.Models.DTO;
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
        private readonly IUnitOfWork _unitOfWork;
        private readonly ILogger<ClassRoomController> _logger;
        private readonly IMapper _mapper;
        private readonly IConfiguration _config;
        public ClassRoomController(IUnitOfWork unitOfWork, ILogger<ClassRoomController> logger, IMapper mapper, IConfiguration config)
        {
            _unitOfWork = unitOfWork;
            _logger = logger;
            _mapper = mapper;
            _config = config;
        }

        #region Create Class Room
        [HttpPost("CreateClassRoom")]
        public async Task<IActionResult> AddClassRoom([FromBody] CreateClassRoomDTO createClassRoom)
        {
            try
            {
                await _unitOfWork.ClassRoom.AddAsync(_mapper.Map<ClassRoomEntity>(createClassRoom));
                return Accepted("Class Room Created");
            }
            catch (Exception ex)
            {
                var error = new ErrorModel { title = ex.Message };

                return BadRequest(error);
            }
        }
    #endregion

    #region Update Class Room
    [HttpPost("UpdateClassRoom")]
    public async Task<IActionResult> UpdateClassRoom([FromBody] UpdateClassRoomDTO updateClassRoom)
    {
      try
      {
        await _unitOfWork.ClassRoom.UpdateAsync(_mapper.Map<ClassRoomEntity>(updateClassRoom));
        return Accepted("success");
      }
      catch (Exception ex)
      {
        var error = new ErrorModel { title = ex.Message };

        return BadRequest(error);
      }
    }
    #endregion

    #region Delete Class Room
    [HttpDelete("DeleteClassRoom")]
    public async Task<IActionResult> DeleteClassRoom([FromBody] ClassRoomIdDTO deleteClassRoom)
    {
      try
      {
        await _unitOfWork.ClassRoom.DeleteAsync(_mapper.Map<ClassRoomEntity>(deleteClassRoom));
        return Accepted("success");
      }
      catch (Exception ex)
      {
        var error = new ErrorModel { title = ex.Message };

        return BadRequest(error);
      }
    }
    #endregion

    #region Get All ClassRooms
    [HttpGet("GetAllClassRooms")]
    public async Task<IActionResult> GetAllClassRooms()
    {
      try
      {
        var classRooms = await _unitOfWork.ClassRoom.GetAllAsync();
        return Accepted(classRooms);
      }
      catch (Exception ex)
      {
        var error = new ErrorModel { title = ex.Message };

        return BadRequest(error);
      }
    }
    #endregion

    #region Get Specific ClassRoom
    [HttpGet("GetSpecificClassRoom/{classRoomId}")]
    public async Task<IActionResult> GetSpecificClassRoom(int classRoomId)
    {
      try
      {
        var classRoom = await _unitOfWork.ClassRoom.GetSpecificClassRoomAsync(classRoomId);
        return Accepted(classRoom);
      }
      catch (Exception ex)
      {
        var error = new ErrorModel { title = ex.Message };

        return BadRequest(error);
      }
    }
    #endregion
  }
}

