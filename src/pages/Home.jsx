import React, { useState, useEffect } from 'react';
import './Style.css';
import UserDriveTable from '../components/UserDriveTable';
import OurStaff from './OurStaff';
import Features from './Features';
import PlacementPage from './PlacementPage';
import { FaBars, FaTimes } from 'react-icons/fa';

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check on initial render
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="app-container">
      {/* Mobile Navigation Toggle */}
      {isMobile && (
        <button className="mobile-nav-toggle" onClick={toggleNav}>
          {isNavOpen ? <FaTimes /> : <FaBars />}
        </button>
      )}

      {/* Navigation Section - You'll need to add your actual navigation component */}
      <nav className={`main-nav ${isMobile ? 'mobile-nav' : ''} ${isNavOpen ? 'nav-open' : ''}`}>
        {/* Your navigation links go here */}
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#drives">Drives</a></li>
          <li><a href="#placement">Placement</a></li>
          <li><a href="#companies">Companies</a></li>
          <li><a href="#staff">Staff</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        {/* Placement Info Section */}
        <section className="placement-info">
          <div className="title">
            <h1>WELCOME TO OUR PLACEMENT SYSTEM</h1>
            <p>
              Here you can find all the information about the placement drives <br />
              and the companies that are participating in the drives
            </p>
            <p>We are here to help you get the best job in the best company.</p>
            <button>Read More</button>
          </div>
        </section>

        {/* Upcoming Drives Section */}
        <div className="root">
          <UserDriveTable />
        </div>

        <div>
          <PlacementPage />
        </div>

        {/* Company Partners Section */}
        <section className="company-partners">
          <h2>Recent Company Drives</h2>
          <p>These companies have hired more than 100+ students</p>
          <div className="partner-logos">
            <img
              src="https://logowik.com/content/uploads/images/accenture-new6057.logowik.com.webp"
              alt="Company 1 Logo"
            />
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.D7R3f5a-RSgu1mW8rpAkkAHaHa&pid=Api&P=0&h=180"
              alt="Company 2 Logo"
            />
            <img
              src="https://www.financialexpress.com/wp-content/uploads/2017/05/wipro.jpg?w=1024"
              alt="Company 3 Logo"
            />
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.Gb4xi3k-tu1DaNbtFzui_wHaHa&pid=Api&P=0&h=180"
              alt="Company 4 Logo"
              className="part-four"
            />
            <img
              src="https://tse2.mm.bing.net/th?id=OIP.DhJ5ryOk4fS5LMSakYeBkgHaEK&pid=Api&P=0&h=180"
              alt="Company 5 Logo"
            />
            <img
              src="https://www.pngarts.com/files/10/Nvidia-Logo-PNG-Image.png"
              alt="Company 6 Logo"
            />
          </div>
        </section>
        
        <div>
          <OurStaff />
        </div>

        <div>
          <Features />
        </div>

        {/* Testimonials Section */}
        <section className="testimonials">
          <h1>
            <u>What Our Students Say About Us?</u>
          </h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, consequatur?</p>
          <div className="row">
            <div className="col">
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.leRaZskYpTKA55a0St0tZgHaJa&pid=Api&rs=1&c=1&qlt=95&w=90&h=114"
                alt="Student 1"
              />
              <div>
                <h3>Karthik.G</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque facere accusantium ratione, cumque quidem
                  ea, reprehenderit animi excepturi necessitatibus voluptas optio praesentium. Dolore aliquid iste
                  similique est distinctio? Ipsa, quos?
                </p>
              </div>
            </div>
            <div className="col">
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.YIre5HGHiqBa7DCmrF4KwwHaJQ&pid=Api&P=0&h=180"
                alt="Student 1"
              />
              <div>
                <h3>Mallesh.K</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque facere accusantium ratione, cumque quidem
                  ea, reprehenderit animi excepturi necessitatibus voluptas optio praesentium. Dolore aliquid iste
                  similique est distinctio? Ipsa, quos?
                </p>
              </div>
            </div>
            <div className="col">
              <img
                src="https://tse1.mm.bing.net/th?id=OIP.y-nGyqT5AwES8oqp344z4gHaHa&pid=Api&rs=1&c=1&qlt=95&w=109&h=109"
                alt="Student 2"
              />
              <div>
                <h3>Rama.D</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque facere accusantium ratione, cumque quidem
                  ea, reprehenderit animi excepturi necessitatibus voluptas optio praesentium. Dolore aliquid iste
                  similique est distinctio? Ipsa, quos?
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer>
          <p>&copy; 2024 College Placement System. All Rights Reserved.</p>
          <p>&reg; Contact us @collegeplacement.in</p>
          <p>Made with ❤️ by Karthik</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
