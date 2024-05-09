import React from 'react';
import classes from '../../Styles/Footer.module.css'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className={classes.scallopup}></div>
            <div className={classes.colourblock}>
                <h1>Campass</h1>
                <p><Link to='/programs'>Programs</Link></p>
                <p><Link to='/countries'>Countries</Link></p>
                <p><Link to='/company/programs'>Campany</Link></p>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
            </div>
        </>
    );
}

export default Footer;












// import React from 'react';
// import classes from '../../Styles/Header.module.css'
// import { Link } from 'react-router-dom';

// const Footer = () => {
//     return (
//         <footer className={classes.footer}>
//                     <div className={classes.row}>
//                         {/* <div className={classes.col6}>
//                             <p>
//                                 <i className="fa fa-phone" aria-hidden="true" /> +44 (0)123 456 789
//                             </p>
//                             <p>
//                                 <i className="fa fa-envelope" aria-hidden="true" />{" "}
//                                 info@landingpage.com
//                             </p>
//                         </div> */}
//                         <div className={classes.col4} style={{ textAlign: "left" }}>
//                             <h3>Campass</h3>
//                             <Link>
//                                 Contact Us
//                             </Link>
//                             <br></br>
//                             <Link>
//                                 About
//                             </Link>
//                         </div>
//                         <div className={classes.col4} style={{ textAlign: "left" }}>
//                             <Link>
//                                 Programs
//                             </Link>
//                             <br></br>
//                             <Link>
//                                 Countries
//                             </Link>
//                         </div>
//                         <div className={classes.col4} style={{ textAlign: "left" }}>
//                             <Link>
//                                 Profile
//                             </Link>
//                         </div>
//                     </div>
//                     {/* <hr />
//                     <div className={classes.row}>
//                         <div className={classes.col12}>
//                             © 2017 Brand - <a href="#">Facebook</a> - <a href="#">Twitter</a>
//                         </div>
//                     </div> */}
//                 </footer>
//     );
// }

// export default Footer;
