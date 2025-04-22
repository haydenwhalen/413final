import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom'; // ✅ Added Link
import axios from 'axios';

interface Entertainer {
  entertainerId: number;
  entStageName: string;
  entSSN: string;
  entStreetAddress: string;
  entCity: string;
  entState: string;
  entZipCode: string;
}

const EntertainerDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [entertainer, setEntertainer] = useState<Entertainer | null>(null);

  useEffect(() => {
    axios.get<Entertainer>(`http://localhost:5273/api/entertainers/${id}`)
      .then(res => setEntertainer(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this entertainer?")) {
      axios.delete(`http://localhost:5273/api/entertainers/${id}`)
        .then(() => navigate('/entertainers'))
        .catch(err => console.error(err));
    }
  };

  if (!entertainer) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>Details for {entertainer.entStageName}</h2>
      <ul className="list-group">
        <li className="list-group-item"><strong>SSN:</strong> {entertainer.entSSN}</li>
        <li className="list-group-item"><strong>Street Address:</strong> {entertainer.entStreetAddress}</li>
        <li className="list-group-item"><strong>City:</strong> {entertainer.entCity}</li>
        <li className="list-group-item"><strong>State:</strong> {entertainer.entState}</li>
        <li className="list-group-item"><strong>Zip Code:</strong> {entertainer.entZipCode}</li>
      </ul>

      <div className="mt-3">
        <button
          className="btn btn-warning me-2"
          onClick={() => navigate(`/edit-entertainer/${entertainer.entertainerId}`)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger me-2"
          onClick={handleDelete}
        >
          Delete
        </button>

        {/* 👇 Booking Stats Link */}
        <Link to="/entertainer-stats" className="btn btn-outline-secondary">
          View All Booking Stats
        </Link>
      </div>
    </div>
  );
};

export default EntertainerDetails;



