    import React from 'react';
     import './Footer.css'; 

     const Footer: React.FC = () => {
       return (
         <footer className="footer">
           <div className="footer-content">
             <p>&copy; {new Date().getTime()} Jesse Falleur Enterprises</p>
           </div>
         </footer>
       );
     };

     export default Footer; 