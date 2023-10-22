import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
export const environment = {
    production: false,
    firebase: {
      apiKey: "AIzaSyDZrWeJOrE0UYzgn45uWSbEUtJMgFpQNEk",
      authDomain: "pan-mar.firebaseapp.com",
      databaseURL: "https://pan-mar-default-rtdb.firebaseio.com",
      projectId: "pan-mar",
      storageBucket: "pan-mar.appspot.com",
      messagingSenderId: "904175046266",
      appId: "1:904175046266:web:0eb8b343bfc164988d35c3",
      measurementId: "G-2JXFZC09KW"
    }
  };
const app = initializeApp(environment.firebase);
const analytics = getAnalytics(app);