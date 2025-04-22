import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Entertainer {
  entertainerId: number;
  entStageName: string; // MUST match what your API returns
}

const EntertainersPage = () => {
  const [entertainers, setEntertainers] = useState<Entertainer[]>([]);

  useEffect(() => {
    axios.get<Entertainer[]>('http://localhost:5273/api/entertainers')
      .then(res => setEntertainers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Entertainers</h2>
      <table className="table table-bordered table-hover">
        <thead className="table-light">
          <tr>
            <th>Stage Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {entertainers.map(ent => (
            <tr key={ent.entertainerId}>
              <td>{ent.entStageName}</td>
              <td>
                <Link
                  to={`/entertainers/${ent.entertainerId}`}
                  className="btn btn-sm btn-info me-2"
                >
                  Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link to="/add-entertainer" className="btn btn-success mt-3">
        Add Entertainer
      </Link>
    </div>
  );
};

export default EntertainersPage;

