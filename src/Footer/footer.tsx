    import React from 'react';
     import './footer.css'; 

     const Footer: React.FC = () => {
       return (
         <footer className="footer">
           <div className="footer-content">
             <p>&copy; {new Date().getFullYear()} Jesse Falleur Enterprises</p>
           </div>
         </footer>
       );
     };

     export default Footer; 