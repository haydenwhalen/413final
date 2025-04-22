import { Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout';
import EntertainersPage from './pages/EntertainersPage';
import EntertainerDetails from './pages/EntertainerDetails';
import AddEntertainer from './pages/AddEntertainer';
import EditEntertainer from './pages/EditEntertainer';
import EntertainerStats from './pages/EntertainerStats';
import cartmanImg from './assets/cartman.jpg'; // ✅ Import image

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
              <h2 style={{ marginBottom: '2rem' }}>Welcome to the Entertainment Agency, your one stop shop for all Entertainment!</h2>

              {/* ✅ Cartman Image */}
              <img
                src={cartmanImg}
                alt="Cartman"
                style={{
                  maxWidth: '300px',
                  height: 'auto',
                  borderRadius: '8px',
                  marginBottom: '2rem',
                }}
              />

              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <Link to="/entertainers" className="btn btn-primary">View Entertainers</Link>
                <Link to="/entertainer-stats" className="btn btn-outline-info">Booking Stats</Link>
              </div>
            </div>
          }
        />
        <Route path="entertainers" element={<EntertainersPage />} />
        <Route path="entertainers/:id" element={<EntertainerDetails />} />
        <Route path="add-entertainer" element={<AddEntertainer />} />
        <Route path="edit-entertainer/:id" element={<EditEntertainer />} />
        <Route path="entertainer-stats" element={<EntertainerStats />} />
      </Route>
    </Routes>
  );
}

export default App;






