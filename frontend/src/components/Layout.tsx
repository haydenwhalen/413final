import { Outlet, Link } from 'react-router-dom';
import { CSSProperties } from 'react';

const Layout = () => {
  return (
    <div style={styles.wrapper}>
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <h1 style={styles.title}>Entertainment Agency</h1>
          <nav style={styles.nav}>
            <Link to="/" style={styles.navButton}>Home</Link>
            <Link to="/entertainers" style={styles.navButton}>Entertainers</Link>
            <Link to="/entertainer-stats" style={styles.navButton}>Booking Stats</Link>
          </nav>
        </div>
      </header>

      <main style={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  wrapper: {
    backgroundColor: '#e6f0ff',
    minHeight: '100vh',
    fontFamily: '"Inter", sans-serif',
    margin: 0,
    padding: 0,
    width: '100%',
  },
  header: {
    backgroundColor: '#e6f0ff',
    borderBottom: '2px solid #0056b3',
    padding: '20px 40px',
    width: '100%',
  },
  headerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
  },
  title: {
    fontSize: '2rem',
    color: '#003366',
    margin: 0,
    flex: '1',
  },
  nav: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap',
  },
  navButton: {
    backgroundColor: '#0056b3',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'background-color 0.3s',
  },
  main: {
    padding: '40px',
    width: '100%',
    maxWidth: '1400px',
    margin: '0 auto',
  },
};

export default Layout;







