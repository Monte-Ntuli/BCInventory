using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BCInventApi.Entities
{
  public class ClassRoomEntity
  {
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid Id { get; set; }
    public int ClassRoomNumber { get; set; }
    public string ClassRoomName { get; set; }
    public string ClassRoomIP { get; set; }
    public int Mouses { get; set; }
    public int Keyboards { get; set; }
    public int LecturerScreens { get; set; }
    public int ThinClients { get; set; }
    public int Screens { get; set; }
    public int TVs { get; set; }
    public int TVRemotes { get; set; }
    public int Servers { get; set; }
    public int Projectors { get; set; }
    public int Microphones { get; set; }
  }
}
