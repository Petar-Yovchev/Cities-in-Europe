import 'firebase/compat/auth';
import 'firebase/compat/firestore'; 
import { initializeApp } from 'firebase/app';
import { getAuth}        from 'firebase/auth';
 



       const firebaseConfig = {
            apiKey: "AIzaSyBe3RZQ14mLKrFEvGT8XzSzxBKvj4CYxeo",
            authDomain: "react-cities-europe.firebaseapp.com",
            projectId: "react-cities-europe",
            storageBucket: "react-cities-europe.appspot.com",
            messagingSenderId: "278027302738",
        appId: "1:278027302738:web:f6fe1bd949ba10cb58ec8b"
        };

        
export const app = initializeApp(firebaseConfig);
      
export const auth = getAuth(app);
    



