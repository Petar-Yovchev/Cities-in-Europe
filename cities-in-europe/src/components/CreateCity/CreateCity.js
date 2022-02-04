import { useNavigate }    from 'react-router-dom';
import * as dataFaetching from '../../services/dataFetching'


function CreateCity () {
  
    const navigation = useNavigate();
  
   const onCreateCitySubmitHandler = (e) => {
        e.preventDefault()
         
    const {name, description, imageURL, category} = e.target;
        
    if( name.value === '' || description.value === '' || imageURL.value === ''){
            console.log('Error: This entrance is empty');
          }else{
        dataFaetching.createCity(name.value, description.value, imageURL.value, category.value)
            .then(() => {
                navigation('/')
        })
      }
    }

return(
    <section className="create">
    <form onSubmit={onCreateCitySubmitHandler}>
        <fieldset>
            <legend>Add new City</legend>
            <p className="field">
                <label htmlFor="name">Name</label>
                 <span className="input">
                    <input type="text" name="name" id="name" placeholder="Name" />
                    <span className="actions"></span>
                </span>
            </p>
            <p className="field">
                <label htmlFor="description">Description</label>
                <span className="input">
                    <textarea rows="4" cols="45" type="text" name="description" id="description"
                        placeholder="Description"></textarea>
                    <span className="actions"></span>
                </span>
            </p>
            <p className="field">
                <label htmlFor="image">Image</label>
                <span className="input">
                    <input type="text" name="imageURL" id="image" placeholder="Image" />
                    <span className="actions"></span>
                </span>
            </p>
            <p className="field">
                <label htmlFor="category">Category</label>
                <span className="input">
                    <select type="text" name="category">
                        <option>Bulgaria</option>
                        <option>Germany</option>
                        <option>Italy</option>
                        <option>Spain</option>
                        <option>Other</option>
                    </select>
                    <span className="actions"></span>
                </span>
            </p>
            <input className="button" type="submit" className="submit" value="Add City" />
        </fieldset>
    </form>
</section>
   )
};

export default CreateCity;


