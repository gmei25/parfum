import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const firebaseConfig = {
    apiKey: "AIzaSyAiy25rjFTqec_GdLw3-2t-J-7oupWxVy0",
    authDomain: "parfumreact.firebaseapp.com",
    projectId: "parfumreact",
    storageBucket: "parfumreact.appspot.com",
    messagingSenderId: "1048252066512",
    appId: "1:1048252066512:web:353a1365ca7359c4808cd5"
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<App />
</React.StrictMode>
);

