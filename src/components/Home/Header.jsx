import React from 'react';
import classes from '../../styles/Header.module.css'
import { Link } from 'react-router-dom';
import Body from './Body';
import { MobileMenuComponent, ScrollMenuComponent } from './HeaderJ';


const Header = () => {
    return (
        <div>
            <>
            {/* <ScrollMenuComponent></ScrollMenuComponent>
            <MobileMenuComponent></MobileMenuComponent> */}
                <nav className={classes.nav} id="menu">
                    <div className={classes.wrap}>
                        <div className={classes.brand}>
                            <span>Campass</span>
                        </div>
                        <button id="mobile-btn" className={classes.hamburgerBtn}>
                            <span className={classes.hamburgerLine} />
                            <span className={classes.hamburgerLine} />
                            <span className={classes.hamburgerLine} />
                        </button>
                        <ul className={classes.topMenu} id="top-menu">
                            <li>
                                {/* <Link to="#">
                                    <i className="fa fa-home" aria-hidden="true" />
                                </Link> */}
                            </li>
                            <li>
                                <Link to="/programs">Programs</Link>
                            </li>
                            <li>
                                <Link to="#">Countries</Link>
                            </li>
                            <li>
                                <Link to="#">Habitations</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact Us</Link>
                            </li>
                            <li>
                                <Link to="#">About</Link>
                            </li>
                            <li>
                                <Link to="#" class={`${classes.button} ${classes.flower}`}></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Body></Body>
                {/* <Switch>
                    <Route path="/programs">
                        <Programs />
                    </Route>
                    <Route path="/countries">
                        <Countries />
                    </Route>
                    <Route path="/habitatiopns">
                        <Habitatiopns />
                    </Route>
                    <Route path="/contact">
                        <ContactUs />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/">
                        <Body />
                    </Route>
                </Switch> */}
                <footer className={classes.footer}>
                    <div className={classes.row}>
                        {/* <div className={classes.col6}>
                            <p>
                                <i className="fa fa-phone" aria-hidden="true" /> +44 (0)123 456 789
                            </p>
                            <p>
                                <i className="fa fa-envelope" aria-hidden="true" />{" "}
                                info@landingpage.com
                            </p>
                        </div> */}
                        <div className={classes.col4} style={{ textAlign: "left" }}>
                            <h3>Campass</h3>
                            <Link>
                                Contact Us
                            </Link>
                            <br></br>
                            <Link>
                                About
                            </Link>
                        </div>
                        <div className={classes.col4} style={{ textAlign: "left" }}>
                            <Link>
                                Programs
                            </Link>
                            <br></br>
                            <Link>
                                Countries
                            </Link>
                        </div>
                        <div className={classes.col4} style={{ textAlign: "left" }}>
                            <Link>
                                Profile
                            </Link>
                        </div>
                    </div>
                    {/* <hr />
                    <div className={classes.row}>
                        <div className={classes.col12}>
                            © 2017 Brand - <a href="#">Facebook</a> - <a href="#">Twitter</a>
                        </div>
                    </div> */}
                </footer>
            </>
        </div>
    );
}

export default Header;
