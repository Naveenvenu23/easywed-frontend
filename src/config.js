
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDcF4Uo48x-n9w5DjEJrJ9dfB0E8APDJoY",
  authDomain: "easywed-a0a3d.firebaseapp.com",
  projectId: "easywed-a0a3d",
  storageBucket: "easywed-a0a3d.appspot.com",
  messagingSenderId: "403734025446",
  appId: "1:403734025446:web:e0bfe48f418fc3ed1a5727",
  measurementId: "G-LRMK2ELTGQ"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();


export { auth, provider };
export default auth;
