using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace api.Entities
{
    public class ClassRoomEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public string ClassName { get; set; }
        public string LocationName { get; set; }
        public int ClassID { get; set; }
        public string ClassIP { get; set; }
        public int ClassComputer { get; set; }
        public int ClassScreens { get; set; }
        public int ClassMouses { get; set; }
        public int ClassKeyboards { get; set; }
        public int LecturerPC { get; set; }
        public int LecturerScreens { get; set; }
        public int ClassTVs { get; set; }
        public int ClassTVRemotes { get; set; }
        public int ClassServers { get; set; }
        public int Micrphones { get; set; }
        public int Projectors { get; set; }
        public IFormFile classLayoutImage { get; set; }
    }
}

