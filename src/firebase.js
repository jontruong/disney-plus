import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyARNwUc-L4XjWQoboHsAsNhvOjJR7TLOPg",
    authDomain: "disneyplus-clone-7e3d5.firebaseapp.com",
    projectId: "disneyplus-clone-7e3d5",
    storageBucket: "disneyplus-clone-7e3d5.appspot.com",
    messagingSenderId: "870513417099",
    appId: "1:870513417099:web:73ea5f7b54e2b62deb6d8e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider =  new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage};

  export default db;