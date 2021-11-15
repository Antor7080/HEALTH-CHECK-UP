import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, updateProfile, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] =useState("");
    const auth = getAuth();
    const [isLoading, setIsLoading] = useState(true);

    const signInWithGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .finally(() => setIsLoading(false));
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])
    const userName = (e) => {
        setName(e.target.value);
    };
    const userEmail = (e) => {
        setEmail(e.target.value);
    };
    const userPassword = (e) => {
        setPassword(e.target.value);
    };

    const setUserInfo = () => {
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            
          }).catch((error) => {
            setError(error.message)
          });
    }
    
    
      // regitration with email and password
      const createUserWithEmail = (e) => {
        e.preventDefault();
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
          .then((result) => {
            setUserInfo();
            console.log(result.user);
            setUser(result.user);
            setError("");
          })
          .catch((error) => {
            setError(error.message);
          })
          .finally(() => setIsLoading(false))
      };
      const getUserEmail = (e) => {
        setEmail(e.target.value);
      };
      const getUserPassword = (e) => {
        setPassword(e.target.value);
      };
      const signInWithEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
          setUser(result.user);
          setError("");
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => setIsLoading(false))
      
      }

    const logOut = () => {
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }
    return {
        user,
        error,
        isLoading,
        signInWithGoogle,
        logOut,
        createUserWithEmail,
        signInWithEmail,
        userName,
        userEmail,
        userPassword,
        getUserEmail,
        getUserPassword

    }
}
export default useFirebase;