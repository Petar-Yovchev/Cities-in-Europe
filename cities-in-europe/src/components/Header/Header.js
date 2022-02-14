import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CurrentUserContext from '../../utils/userContext';


function Header() {
    let user = useContext(CurrentUserContext)

    const isLoginOrLogout = (user) => {
        if (user) {
            return (
                <header id="site-header">
                    <nav className="navbar">
                        <section className="navbar-dashboard">
                            <div className="first-bar">
                                <Link to="/">Dashboard</Link>
                                <Link className="button" to="/city/create">Add City</Link>
                            </div>
                            <div className="second-bar">
                                <ul>
                                    <li>Welcome, {user.email}!</li>
                                    <li><Link to='/logout/'><i className="fas fa-sign-out-alt"  ></i>Logout</Link></li>
                                </ul>
                            </div>
                        </section>
                        <section className="navbar-anonymous">
                            <ul>
                                <li><Link to='/register/user/'><i className="fas fa-user-plus"></i> Register</Link></li>
                                <li><Link to="/login"><i className="fas fa-sign-in-alt"></i> Login</Link></li>
                            </ul>
                        </section>
                    </nav>
                </header>
             )
        } else {
            return (
                <header id="site-header">
                    <nav className="navbar">
                        <div className="second-bar">
                            <ul>
                                <li>Welcome, Guest</li>
                            </ul>
                        </div>
                        <section className="navbar-anonymous">
                            <ul>
                                <li><Link to='/register/user/'><i className="fas fa-user-plus"></i> Register</Link></li>
                                <li><Link to="/login"><i className="fas fa-sign-in-alt"></i> Login</Link></li>
                            </ul>
                        </section>
                    </nav>
                </header>
            )
        }
    }

    return isLoginOrLogout(user)
};

export default Header;







