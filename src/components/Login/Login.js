import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
const [loggedInUser, setLoggedInUser] =useContext(UserContext);
const history = useHistory();
  const location = useLocation();
  const {from} = location.state ||{from: {pathname: "/"} };

if(firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}


const handleGoogleSignIn =() => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {

        const {displayName, email} = result.user;
        const signedInUser = {Name: displayName, email}
        setLoggedInUser(signedInUser)
        history.replace(from);
    }).catch(function(error) {
        const errorMessage = error.message;
        console.error(errorMessage)
    });  
}
return (
    <div>
        <h1>This is Login</h1>
        <button onClick={handleGoogleSignIn}>Google Sign In</button>
    </div>
);
};

export default Login;


//44.4
// import React, { useContext } from 'react';
// import * as firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from './firebase.config';
// import { UserContext } from '../../App';
// import { useHistory, useLocation } from 'react-router-dom';

// const Login = () => {
// const [loggedInUser, setLoggedInUser] =useContext(UserContext);
// const history = useHistory();
//   const location = useLocation();
//   const {from} = location.state ||{from: {pathname: "/"} };

// if(firebase.apps.length === 0) {
//     firebase.initializeApp(firebaseConfig);
// }


// const handleGoogleSignIn =() => {
//     var provider = new firebase.auth.GoogleAuthProvider();
//     firebase.auth().signInWithPopup(provider).then(function(result) {

//         const {displayName, email} = result.user;
//         const signedInUser = {Name: displayName, email}
//         setLoggedInUser(signedInUser)
//         history.replace(from);
//         // ...
//     }).catch(function(error) {
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         var email = error.email;
//         var credential = error.credential;
//         // ...
//     });  
// }
// return (
//     <div>
//         <h1>This is Login</h1>
//         <button onClick={handleGoogleSignIn}>Google Sign In</button>
//     </div>
// );
// };

// export default Login;

//44.3
//import React, { useContext } from 'react';
// import * as firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from './firebase.config';
// import { UserContext } from '../../App';

// const Login = () => {
// const [loggedInUser, setLoggedInUser] =useContext(UserContext);

// if(firebase.apps.length === 0) {
//     firebase.initializeApp(firebaseConfig);
// }


// const handleGoogleSignIn =() => {
//     var provider = new firebase.auth.GoogleAuthProvider();
//     firebase.auth().signInWithPopup(provider).then(function(result) {
//         // var user = result.user;
//         // console.log(user)

//         const {displayName, email} = result.user;
//         const signedInUser = {Name: displayName, email}
//         setLoggedInUser(signedInUser)
//         // ...
//     }).catch(function(error) {
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         var email = error.email;
//         var credential = error.credential;
//         // ...
//     });  
// }
// return (
//     <div>
//         <h1>This is Login</h1>
//         <button onClick={handleGoogleSignIn}>Google Sign In</button>
//     </div>
// );
// };

// export default Login;// 


// 44.2
// import React, { useContext } from 'react';
// import * as firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from './firebase.config';

// const Login = () => {
//     firebase.initializeApp(firebaseConfig);
//     const handleGoogleSignIn =() => {
//         var provider = new firebase.auth.GoogleAuthProvider();
//         firebase.auth().signInWithPopup(provider).then(function(result) {
//             // This gives you a Google Access Token. You can use it to access the Google API.
//             var token = result.credential.accessToken;
//             // The signed-in user info.
//             var user = result.user;
//             console.log(user)
//             // ...
//           }).catch(function(error) {
//             // Handle Errors here.
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             // The email of the user's account used.
//             var email = error.email;
//             // The firebase.auth.AuthCredential type that was used.
//             var credential = error.credential;
//             // ...
//           });  
//     }
//     return (
//         <div>
//             <h1>This is Login</h1>
//             <button onClick={handleGoogleSignIn}>Google Sign In</button>
//         </div>
//     );
// };

// export default Login;