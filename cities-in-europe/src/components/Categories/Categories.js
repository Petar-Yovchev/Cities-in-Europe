import { useContext } from 'react';
import CurrentUserContext from '../../utils/userContext';


import CategoriesNavigation from './CategoriesNavigation/CategoriesNavigation'
import City from '../City/City';

import useFetchDataAndRouteCategory from '../../hooks/useFetch';


function Categories() {

  const [data] = useFetchDataAndRouteCategory(window.location.href);

  let user = useContext(CurrentUserContext);

  const isHasUser = (user) => {
    if (user) {
     return ( <section className="dashboard">
        <h1>Dashboard-Cities of Europe</h1>

        <CategoriesNavigation />

        <ul className="other-cities-list">
          {data.map(x =>
            <City key={x.id} {...x} />
          )}
        </ul>
      </section>
     )}else {
     return (
      <div style={{justifyContent:'center'}}>
        {/* <p style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>Welome!</p> */}
        <img className='home-image' src='https://aea-eal.eu/wp-content/uploads/2021/02/coc.jpg' alt='Europe Map'/>
     </div>) 
    }
  }
  
  
  return isHasUser(user)

};

export default Categories;