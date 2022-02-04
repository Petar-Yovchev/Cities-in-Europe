import { useState}        from 'react'
import * as dataFaetching from '../../services/dataFetching'

const City = ({
    id,
    name,
    description,
    imageURL,
    category,
    likes
}) => {
    
    const [like, setLike] = useState(likes)
    const [clicked, setClicked] = useState(true);
    const [cityId, setCityId] = useState(id)
    const error = ''
    
    const onClickLikeHandler = () => {
          if(clicked){
            setLike(like + 1)
            setClicked(false)
            setCityId(id)
          }else {
              error = 'liked';
              console.log('liked')
          }
        dataFaetching.cityLike(cityId, like)
    };
   
   return(
    <li className="otherCity">
    <h3>Name Of The City: {name}</h3>
    <p>Category: {category}</p>
    <p className="img"><img src={imageURL}/></p>
    <p className="description"><b>{description}</b></p>
    <div className="city-info">
       <a><button className="button" name='countLike' onClick={onClickLikeHandler}><i className="fas fa-heart"></i> City </button></a>
        <i className="fas fa-heart"></i> <span>{like}</span>
    </div>
</li>

   )
};

export default City;