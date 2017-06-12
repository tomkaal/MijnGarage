importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

var config = {
    apiKey: "AIzaSyCiX3Lyz9ARVeXS6FjumAEb4Lc92OcUlj0",
    authDomain: "mijn-garage.firebaseapp.com",
    databaseURL: "https://mijn-garage.firebaseio.com",
    projectId: "mijn-garage",
    storageBucket: "mijn-garage.appspot.com",
    messagingSenderId: "923966749182"
};

firebase.initializeApp(config)

const messaging = firebase.messaging();