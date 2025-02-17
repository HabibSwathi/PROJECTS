// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBJETsnG6grsTe5UdMvYasK4crxIDPNzZg",
    authDomain: "chat-application-50c02.firebaseapp.com",
    projectId: "chat-application-50c02",
    storageBucket: "chat-application-50c02.firebasestorage.app",
    messagingSenderId: "911150884605",
    appId: "1:911150884605:web:d5cedee40e4288d8c38094",
    measurementId: "G-5JVVHGCFZS"
};

const app = firebase.initializeApp(firebaseConfig); //we are intializing firebase confirgurations in app
const authenticationRoom = firebase.auth(); //importing authentication room from firebase to create users
const databaseRoom = firebase.database(); //we are importing database room to store messages in database