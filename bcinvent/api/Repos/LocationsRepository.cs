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
  public class LocationsRepository : Repository<LocationsEntity>, ILocationsRepository
  {
    private InventoryDbContext _dbContext => (InventoryDbContext)_context;

    public LocationsRepository(InventoryDbContext context) : base(context)
    {

    }
  }
}
