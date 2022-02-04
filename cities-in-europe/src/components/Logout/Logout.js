import { getAuth, signOut } from "firebase/auth";
import { useNavigate,Link } from 'react-router-dom';
import { useEffect }        from "react";

const LogOut = () => {
    const auth = getAuth();
    const navigation = useNavigate();

    useEffect(() => {
        signOut(auth).then(() => {
             console.log('Sign-out successful.');
            navigation('/')
        }).catch((error) => {
            console.log('error')
        })
   },[])
   
    return(
      <Link to='/logout/'/>
    )
};

export default LogOut

