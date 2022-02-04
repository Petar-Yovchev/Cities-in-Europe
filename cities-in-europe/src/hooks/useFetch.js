import {useState, useEffect} from 'react';
import { useParams }         from 'react-router-dom';



function deserializeData(x) {return x.json()};

function catchError(error) {return console.log(error)};


const useFetchDataAndRouteCategory = (url) => {

        const [state, setState] = useState([]);

        let {category} = useParams();

        const urlHrefHome = 'http://localhost:3000/' ;
        const urlHrefCategoryAll = 'http://localhost:3000/categories/All';
       
        const urlDataFetch ='http://localhost:9000/cities/';
        const urlDataFatchCategory = `http://localhost:9000/cities/?category=${category}`;
           
        useEffect(() => {
                if(url === urlHrefHome || url === urlHrefCategoryAll ){
                    fetch( urlDataFetch)
                    .then(deserializeData)
                    .then(result => setState(result))
                    .catch(catchError)
                }else{
                    fetch(urlDataFatchCategory)
                    .then(res => res.json())
                    .then(result => setState(result))
                    .catch(catchError)
                }
            },[url])
        
            return [
                state,
            ]
}; 

export default useFetchDataAndRouteCategory;