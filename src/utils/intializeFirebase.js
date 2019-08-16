import firebase from "firebase/app";

export default function initializeFirebase(){
  if(firebase.apps.length === 0){
    const firebaseConfig = {
      apiKey: "AIzaSyB3T5aeuAMD5HY4KcvwgF4_2UYgelnFe0I",
      authDomain: "arcrawler-web.firebaseapp.com",
      databaseURL: "https://arcrawler-web.firebaseio.com",
      projectId: "arcrawler-web",
      storageBucket: "",
      messagingSenderId: "257357879856",
      appId: "1:257357879856:web:5ed927f891e0132f"
    };
    firebase.initializeApp(firebaseConfig);
  }
}