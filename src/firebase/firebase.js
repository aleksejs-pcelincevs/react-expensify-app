import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {
    firebase,
    database as default
};



// //child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })


// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })


// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses);
//     });

// database.ref('expenses').push({
//     description: 'Rent',
//     note: 'note',
//     amount: 1,
//     createdAt: 0
// });


// database.ref('notes/-LgCzpTCEGT3IWfRvio0').remove();

// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native, Angular, Python'
// });


// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is ${val.job.title} at ${val.job.company}`);
// }, (e) => {
//     console.log('Error fetching data', e);
// })


// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     })


// database.ref().set({
//     name: "Alex P",
//     age: 44,
//     stressLevel: 6,
//     job: {
//         title: 'Software Deveoper',
//         company: 'Google'
//     },
//     location: {
//         city: 'Riga',
//         country: 'Latvia'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((error) => {
//     console.log('This failed. ', error);
// });



// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seatle'
// });



// database.ref('isSingle').set(null);



// database.ref()
//     .remove()
//     .then(() => {
//         console.log('Data was removed');
//     })
//     .catch((e) => {
//         console.log('Did not remove data', e)
//     })





// database.ref().set('This is my data');

// database.ref('age').set(45);
// database.ref('location/city').set('D-pils');

// database.ref('attributes').set({
//     height: 170,
//     weight: 70
// }).then(() => {
//     console.log('Data is saved');
// }).catch((error) => {
//     console.log('This failed. ', error);
// });

// console.log('I mage a request to change the data.');