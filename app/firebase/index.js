import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyAlc_0UVhpKKzZxnnQ7V2UOuLBFWiaHjwY",
        authDomain: "todoapp-fab00.firebaseapp.com",
        databaseURL: "https://todoapp-fab00.firebaseio.com",
        storageBucket: "todoapp-fab00.appspot.com",
        messagingSenderId: "326714467620"
    };
    firebase.initializeApp(config);
} catch(e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
