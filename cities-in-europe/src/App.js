import { useEffect, useState }        from 'react';
import { Routes, Route}               from 'react-router-dom';

import Header        from './components/Header/Header';
import Footer        from './components/Footer/Footer';
import Categories    from './components/Categories/Categories';
import CreateCity    from './components/CreateCity/CreateCity';
import Registration  from './components/Registration/Registration';
import Login         from './components/Login/Login';
import Logout        from './components/Logout/Logout';

import './utils/firebase';
import { getAuth, onAuthStateChanged } from "firebase/auth";

import './App.css';


function App() {

     const [user, setUser] = useState(null);
     const auth = getAuth();

      useEffect(() => {
        onAuthStateChanged(auth, authUser => {
          if (authUser) {
              console.log('Login');
              setUser(authUser);
            //  const uid = user.uid;
          } else {
              setUser(null);
          }
        });
 }, [])
 
 return (
    <div id="container">
      <Header  isAuthenticated={Boolean(user)}/>
      
      <Routes>
          <Route path='categories/:category' element={<Categories />} />
        <Route path='/city/create'         element={<CreateCity />} />
        <Route path='/register/user/'      element={<Registration />} />
        <Route path='/login/'              element={<Login />} />
        <Route path='/logout/'             element={<Logout/>}/>
        <Route path='/'                    element={<Categories />} />
      </Routes>

      <Footer />
    </div>
  )
};

export default App;
