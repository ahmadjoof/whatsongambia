
// Initialize Firebase
var config = {
  apiKey: "AIzaSyAYgrUpWDBAEeEWEdiHJWQ_9lY7olKgDGc",
  authDomain: "whatsongamnbia.firebaseapp.com",
  databaseURL: "https://whatsongamnbia.firebaseio.com",
  projectId: "whatsongamnbia",
  storageBucket: "whatsongamnbia.appspot.com",
  messagingSenderId: "330655189582"
};
firebase.initializeApp(config);
var db = firebase.firestore();
const settings = {timestampsInSnapshots: true};
db.settings(settings);
//list of queries
const titleList = document.querySelector('#title-listview');
const dateList = document.querySelector('#date-listview');
const categoryList = document.querySelector('#category-listview');
const allNewsButton = document.querySelector('#main-buttons');
var hello = '<div>hello world</div>';
//Data models
var titleData = db.collection('newspages').where('born', '==', 1815);
var dateData = db.collection('newspages').where('last', '==', 'Lovelace');
var categoryData = db.collection('newspages').where('search', '==', 'Ada');
var newspages = db.collection('newspages');

function allNews() {
  db.collection('newspages').onSnapshot(function(snapshot) {
    snapshot.docChanges().forEach(function(change){
      if (change.type === 'added') {

      }
    });
  });
}
//Constructors and getters and setters  //lastName
