import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddEntertainer = () => {
  const [formData, setFormData] = useState({
    entStageName: '',
    entSSN: '',
    entStreetAddress: '',
    entCity: '',
    entState: '',
    entZipCode: ''
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    axios.post('http://localhost:5273/api/entertainers', formData)
      .then(() => navigate('/entertainers'))
      .catch(err => console.error(err));
  };

  return (
    <div className="container mt-4">
      <h2>Add New Entertainer</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Entertainer Name</label>
          <input
            type="text"
            className="form-control"
            name="entStageName"
            value={formData.entStageName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">SSN</label>
          <input
            type="text"
            className="form-control"
            name="entSSN"
            value={formData.entSSN}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Street Address</label>
          <input
            type="text"
            className="form-control"
            name="entStreetAddress"
            value={formData.entStreetAddress}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">City</label>
          <input
            type="text"
            className="form-control"
            name="entCity"
            value={formData.entCity}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">State</label>
          <input
            type="text"
            className="form-control"
            name="entState"
            value={formData.entState}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Zip Code</label>
          <input
            type="text"
            className="form-control"
            name="entZipCode"
            value={formData.entZipCode}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-success">Add Entertainer</button>
      </form>
    </div>
  );
};

export default AddEntertainer;

