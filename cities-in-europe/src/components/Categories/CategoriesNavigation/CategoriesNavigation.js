import {Link} from 'react-router-dom'

function CategoriesNavigation () { 
    return(
     <nav className="navbar">
        <ul>
            <li><Link to='/categories/All'      >All</Link></li>
            <li><Link to='/categories/Bulgaria '>Bulgaria</Link></li>
            <li><Link to='/categories/Germany'  >Germany</Link></li>
            <li><Link to='/categories/Italy'    >Italy</Link></li>
            <li><Link to='/categories/Spain'    >Spain</Link></li>
            <li><Link to='/categories/Other'    >Other</Link></li>
        </ul>
    </nav>
   )
};

export default CategoriesNavigation;