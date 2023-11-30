import { getFirestore, updateDoc, doc } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-analytics.js";

function findUrlParameter(parameterName) {
    let result = null;
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.has(parameterName)) {
      result = searchParams.get(parameterName);
    }
    return result;
  }

function findUrlParameterFromString(parameterName,url) {
    let result = null;
    const searchParams = new URLSearchParams(url);
    if (searchParams.has(parameterName)) {
      result = searchParams.get(parameterName);
    }
    return result;
  }
  
  function redirectToDesktop() {
    console.log('Tapped');
    var currentURL = window.location.href;
     const redirecturl = "https://wriety-online.web.app?" + currentURL.split('/#')[1];
     var url = new URL(redirecturl);
     var queryParams = url.searchParams;
     const code = queryParams.get("code");
    const appLinkScheme = "https";
    const appLinkAuthority = "wriety-online.web.app";
    const appLinkUrl = `${appLinkScheme}://${appLinkAuthority}/googleAuth/?code=${code}`;
    setTimeout(() => {
      window.location.assign(appLinkUrl)
    }, 100);
}

function updateData() {

  const firebaseConfig = {
    apiKey: "AIzaSyAgbiqNG502TQMrxiKJFIwu6T3iIFNN_uA",
    authDomain: "wriety-online.firebaseapp.com",
    databaseURL: "https://wriety-online-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "wriety-online",
    storageBucket: "wriety-online.appspot.com",
    messagingSenderId: "649407930400",
    appId: "1:649407930400:web:eb1520f7e888c48ec71c45",
    measurementId: "G-DGLTVGR7QY"
  };
  

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const firestore = getFirestore(app);

  var currentURL = window.location.href;

  const data =  currentURL.split('/#')[1];

  firestore.collection('gdrive').doc('data').update({
    'currentURL': currentURL,
  })
  .then(() => {
    console.log('Document successfully updated!');
  })
  .catch((error) => {
    console.error('Error updating document: ', error);
  });
}




