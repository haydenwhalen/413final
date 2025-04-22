import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface BookingStat {
  entertainerId: number;
  entStageName: string;
  bookingCount: number;
  lastBookingDate: string | null;
}

const EntertainerStats = () => {
  const [stats, setStats] = useState<BookingStat[]>([]);

  useEffect(() => {
    axios.get<BookingStat[]>('http://localhost:5273/api/entertainers/with-bookings')
      .then(res => setStats(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Entertainer Booking Stats</h2>
      <table className="table table-bordered table-hover">
        <thead className="table-light">
          <tr>
            <th>Stage Name</th>
            <th>Booking Count</th>
            <th>Last Booking Date</th>
          </tr>
        </thead>
        <tbody>
          {stats.map(stat => (
            <tr key={stat.entertainerId}>
              <td>{stat.entStageName}</td>
              <td>{stat.bookingCount}</td>
              <td>{stat.lastBookingDate ?? 'Never'}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ✅ Add Entertainer Button */}
      <div className="mt-4">
        <Link to="/add-entertainer" className="btn btn-success">
          Add Entertainer
        </Link>
      </div>
    </div>
  );
};

export default EntertainerStats;
