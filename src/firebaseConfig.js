import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyD4VpmogJDTHbhO8y90yZ7b2S-pq2kd7J4',
    authDomain: 'ui-de9e4.firebaseapp.com',
    projectId: 'ui-de9e4',
    storageBucket: 'ui-de9e4.appspot.com',
    messagingSenderId: '67960767793',
    appId: '1:67960767793:web:e3eb67fbb695bb5f1fdc10',
    measurementId: 'G-ZHFCXEKJWW',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const name = result.user.displayName;
        const profilePic = result.user.photoURL;

        localStorage.setItem('name', name);
        localStorage.setItem('profilePic', profilePic);

        window.location.reload();
    } catch (error) {
        console.log(error);
    }
};

export const handleSignOut = async () => {
    await signOut(auth);
    localStorage.removeItem('name');
    localStorage.removeItem('profilePic');

    window.location.reload();
};
