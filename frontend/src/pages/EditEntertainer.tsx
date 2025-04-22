import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditEntertainer = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    entStageName: '',
    entSSN: '',
    entStreetAddress: '',
    entCity: '',
    entState: '',
    entZipCode: '',
    entPhoneNumber: '',
    entWebPage: '',
    entEmailAddress: '',
    dateEntered: ''
  });

  useEffect(() => {
    axios.get<typeof formData>(`http://localhost:5273/api/entertainers/${id}`)
      .then(res => setFormData(res.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    axios.put(`http://localhost:5273/api/entertainers/${id}`, formData)
      .then(() => navigate('/entertainers'))
      .catch(err => console.error(err));
  };

  return (
    <div className="container mt-4">
      <h2>Edit Entertainer</h2>
      <form onSubmit={handleSubmit}>
        {Object.entries(formData).map(([key, value]) => (
          <div className="mb-3" key={key}>
            <label className="form-label">{getLabel(key)}</label>
            <input
              type="text"
              className="form-control"
              name={key}
              value={value}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit" className="btn btn-primary">Save Changes</button>
      </form>
    </div>
  );
};

const getLabel = (key: string) => {
  const labels: { [key: string]: string } = {
    entStageName: 'Entertainer Name',
    entSSN: 'SSN',
    entStreetAddress: 'Street Address',
    entCity: 'City',
    entState: 'State',
    entZipCode: 'Zip Code',
    entPhoneNumber: 'Phone Number',
    entWebPage: 'Website',
    entEmailAddress: 'Email Address',
    dateEntered: 'Date Entered'
  };
  return labels[key] || key;
};

export default EditEntertainer;
