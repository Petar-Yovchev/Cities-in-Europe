import React  from 'react';
import {Link} from 'react-router-dom';
import CurrentUserContext from '../../utils/userContext';
import {auth} from '../../utils/firebase';

function Header ({
    isAuthenticated,
}) {
       const user = auth.currentUser;
  
   return( 
    <CurrentUserContext.Provider value='user'>
       <header id="site-header">
          <nav className="navbar">
            <section className="navbar-dashboard">
                <div className="first-bar">
                    <Link to="/">Dashboard</Link>
                    <Link className="button" to="/city/create">Add City</Link>
                </div>
                <div className="second-bar">
                    <ul>
                        {isAuthenticated
                            ? <li>Welcome, {user.email}!</li>
                            : <li>Welcome, Guest</li>
                        }
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
    </CurrentUserContext.Provider>
    )
 };
 
 export default Header;