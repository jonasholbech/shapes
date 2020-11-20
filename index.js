// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// Add the Firebase products that you want to use
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCPLF1cHyfzBNcy8571NCeBWyRkDGB4Tus",
    authDomain: "frontenda2020-12870.firebaseapp.com",
    databaseURL: "https://frontenda2020-12870.firebaseio.com",
    projectId: "frontenda2020-12870",
    storageBucket: "frontenda2020-12870.appspot.com",
    messagingSenderId: "472899254580",
    appId: "1:472899254580:web:e99020d6efc35b392d8d61"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  const svg = document.querySelector("svg");

  document.querySelector("button").addEventListener("click",e=>{
    /*var citiesRef = db.collection("cities");

    citiesRef.doc("MI").set({
        name: "Firestore City", state: "CA", country: "USA",
        capital: false, population: 860001,
        regions: ["west_coast", "norcal"] });*/
  })


  db.collection("shapes")
    .onSnapshot(function(snapshot) {
        snapshot.docChanges().forEach(function(change) {
            if (change.type === "added") {
                console.log("New city: ", change.doc.data());
                add(change.doc.data(), change.doc.id)
            }
            if (change.type === "modified") {
                console.log("Modified city: ", change.doc.data());

            }
            if (change.type === "removed") {
                console.log("Removed city: ", change.doc.data());
            }
        });
    });

    function add(data, id){
        var xmlns = "http://www.w3.org/2000/svg";
        var shape = document.createElementNS(xmlns, data.type);
        for (const property in data) {
            console.log(`${property}: ${data[property]}`);
            shape.setAttributeNS(null, property, data[property])
          }
          shape.dataset.id=id;
        svg.appendChild(shape)
    }
/*
  db.collection("cities").where("state", "==", "CA")
    .onSnapshot(function(querySnapshot) {
        var cities = [];
        querySnapshot.forEach(function(doc) {
            cities.push(doc.data().name);
        });
        console.log("Current cities in CA: ", cities.join(", "));
    });

    */
/*
   db.collection("shapes")
   .get()
   .then(function(querySnapshot) {

       querySnapshot.forEach(function(doc) {
           // doc.data() is never undefined for query doc snapshots
           console.log(doc.id, " => ", doc.data());
       });
   })
   .catch(function(error) {
       console.log("Error getting documents: ", error);
   });*/