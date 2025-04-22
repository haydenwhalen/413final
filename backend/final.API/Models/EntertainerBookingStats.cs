namespace final.API.Models
{
    public class EntertainerBookingStats
    {
        public int EntertainerId { get; set; }
        public string EntStageName { get; set; }
        public int BookingCount { get; set; }
        public DateOnly? LastBookingDate { get; set; }

    }
}