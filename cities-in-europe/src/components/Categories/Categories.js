import CategoriesNavigation          from './CategoriesNavigation/CategoriesNavigation'
import City                          from '../City/City';

import useFetchDataAndRouteCategory  from '../../hooks/useFetch';


function Categories () {

const [data] = useFetchDataAndRouteCategory (window.location.href);

return(
    <section className="dashboard">
    <h1>Dashboard-Cities in Europe</h1>
      
     <CategoriesNavigation />
        
     <ul className="other-cities-list">
       {data.map(x => 
         <City key={x.id} {...x}/>
        )}
    </ul>
</section>
  )
};

export default Categories;