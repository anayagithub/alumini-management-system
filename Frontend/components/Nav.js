// import React from 'react';
// import "./Nav.css";

// const Nav = ({ setCurrentPage }) => {
//   return (
//     <div>
//       <nav className="navbar">
//         <div className="navdiv">
//           <div className="logo">
//             <a href="#">ALUMNI MANAGEMENT</a>
//           </div>
//           <ul>
//             <li><a href="#" onClick={() => setCurrentPage("home")}>Home</a></li>
//             <li><a href="#" onClick={() => setCurrentPage("about")}>About</a></li>
//             <li><a href="#" onClick={() => setCurrentPage("contact")}>Contact</a></li>
//             <li><a href="#" onClick={() => setCurrentPage("services")}>Services</a></li>
//             <button onClick={() => setCurrentPage("login")}>
//               <a href="#">Login</a> {/* Navigate to Login Page */}
//             </button>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Nav;
// import React from 'react';

// const Nav = ({ setCurrentPage }) => {
//   return (
//     <div>
//       <nav className="bg-gray-800 p-4">
//         <div className="flex justify-between items-center">
//           <div className="text-white text-xl font-bold">
//             <a href="#">ALUMNI MANAGEMENT</a>
//           </div>
//           <ul className="flex space-x-4">
//             <li><a href="#" onClick={() => setCurrentPage("home")} className="text-white hover:underline">Home</a></li>
//             <li><a href="#" onClick={() => setCurrentPage("about")} className="text-white hover:underline">About</a></li>
//             <li><a href="#" onClick={() => setCurrentPage("contact")} className="text-white hover:underline">Contact</a></li>
//             <li><a href="#" onClick={() => setCurrentPage("services")} className="text-white hover:underline">Services</a></li>
//             <li>
//               <a 
//                 href="#" 
//                 onClick={() => setCurrentPage("login")}
//                 className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
//               >
//                 Login
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Nav;
import React from 'react';

const Nav = ({ setCurrentPage }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="flex justify-between items-center">
          <div className="text-white text-xl font-bold">
            <a href="#" onClick={() => { setCurrentPage("home"); scrollToSection('home'); }}>
              ALUMNI MANAGEMENT
            </a>
          </div>
          <ul className="flex space-x-4">
            <li><a href="#" onClick={() => { setCurrentPage("home"); scrollToSection('home'); }} className="text-white hover:underline">Home</a></li>
            <li><a href="#" onClick={() => scrollToSection('about')} className="text-white hover:underline">About</a></li>
            <li><a href="#" onClick={() => scrollToSection('contact')} className="text-white hover:underline">Contact</a></li>
            <li><a href="#" onClick={() => scrollToSection('services')} className="text-white hover:underline">Services</a></li>
            <li>
              <a 
                href="#"
                onClick={() => setCurrentPage("login")}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
