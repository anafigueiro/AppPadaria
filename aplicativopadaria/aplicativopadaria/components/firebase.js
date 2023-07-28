import firebase from 'firebase';

  const firebaseConfig = {
    databaseURL: "https://apppadariaanaemaria-default-rtdb.firebaseio.com/",
    apiKey: "AIzaSyC2-oqFq4vJ1_Y7SpucPUg5KMCvaCI42II",
    authDomain: "apppadariaanaemaria.firebaseapp.com",
    projectId: "apppadariaanaemaria",
    storageBucket: "apppadariaanaemaria.appspot.com",
    messagingSenderId: "790100671976",
    appId: "1:790100671976:web:897e997a902a64a3bbf85d"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  export default firebase;