import {getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate }                            from 'react-router-dom';

const Registration = () => {

    const navigate = useNavigate();
    const auth = getAuth();
 
const onRegisterFormSubmithandler = (e) => {
    e.preventDefault();
     
    const email = e.target.username.value;
    const password = e.target.password.value;
    
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            navigate('/');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
};
 
return(
        <section className="register">
        <form onSubmit={onRegisterFormSubmithandler} >
            <fieldset>
                <legend>Registration:</legend>
                <p className="field">
                    <label htmlFor="username">Email</label>
                    <span className="input">
                        <input type="text" name="username" id="username" placeholder="Email" />
                        <span className="actions"></span>
                        <i className="fas fa-user"></i>
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="password">Password</label>
                    <span className="input">
                        <input type="password" name="password" id="password" placeholder="Password" />
                        <span className="actions"></span>
                        <i className="fas fa-key"></i>
                    </span>
                </p>
                <input className="button" type="submit" className="submit" value="Register" />
            </fieldset>
        </form>
    </section>
    )
};

export default Registration;