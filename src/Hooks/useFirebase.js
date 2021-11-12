import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Components/LogIn/Firebase/firebase.init";

initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [admin,setAdmin]=useState(false);


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // create email registration handle
    const handleEmailChange = e => {
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    const handleNameChange = e => {
        console.log(e.target.value);
        setName(e.target.value);
    }

    const loggedINUser = e => {
        e.preventDefault();
        console.log(email, password);
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('Password Must be 6 character');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password, name)
            .then(result => {
                setError('');
                alert('Registration successfully complete..!!');
                e.target.reset();
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to database
                saveUser(email, name, 'POST');
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
            })
            .catch(error => {
                setError(error.message);
            })
    }

    // Sign in using google
    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);

    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    // signout
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://stormy-everglades-33424.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    useEffect(()=>{
        fetch(`https://stormy-everglades-33424.herokuapp.com/users/${user.email}`)
        .then(res=>res.json())
        .then(data=>setAdmin(data.admin))
    },[user.email])

    return {
        user,
        admin,
        isLoading,
        signInUsingGoogle,
        logOut,
        handleRegistration,
        handleNameChange,
        handleEmailChange,
        handlePasswordChange,
        error,
        loggedINUser,
        saveUser
    }
}


export default useFirebase;