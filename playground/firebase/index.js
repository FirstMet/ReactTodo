firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0.0'
    },
    isRunning: true,
    user: {
        name: 'Fragments',
        age: 26
    }
});

// firebaseRef.update({
//     'app/name': 'Todo Application',
//     'user/name': 'Mike'
// });

// firebaseRef.child('app').update({
//     name: 'Yet Another Todo'
// });
//
// firebaseRef.child('user').update({
//     name: 'Moss'
// });

// firebaseRef.child('user/age').remove();
//
// firebaseRef.update({
//     isRunning: null
// });

var logdata = (snapshot) => {
    console.log(snapshot.val());
};

firebaseRef.on('value', logdata);

firebaseRef.update({
    'app/name': 'TO-DO',
    'user/name': 'Mike'
});

firebaseRef.child('todos').on('child_added', (snapshot) => {
    console.log('New todo added', snapshot.key, snapshot.val());
});

firebaseRef.child('todos').push({
    text: 'todo1'
});

firebaseRef.child('todos').push({
    text: 'todo2'
});
