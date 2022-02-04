import { getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate }                        from 'react-router-dom';
import { useState }                           from 'react'; 


const Login = () => {
    
    const [user, setUser] = useState()
    const auth = getAuth();
    let navigate = useNavigate();
   
       const onLoginFormSubmithandler = (e) => {
            e.preventDefault();
        
        const username = e.target.username.value;
        const password = e.target.password.value;
        
        signInWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
            setUser( userCredential.user);
             navigate('/');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        })
    }

  return(
    <section className="login">
        <form onSubmit={onLoginFormSubmithandler}>
            <fieldset>
                <legend>Login:</legend>
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
                <input className="button" type="submit" className="submit" value="Login" />
            </fieldset>
        </form>
    </section>
  
    )
};

export default Login;