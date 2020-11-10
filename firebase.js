var myAPI = config.API_KEY;
var msgID = config.MSG_ID;
var apiID = config.API_ID;
var meaID = config.MES_ID;

var firebaseConfig = {
  apiKey: myAPI,
  authDomain: "contact-form-3ec8b.firebaseapp.com",
  databaseURL: "https://contact-form-3ec8b.firebaseio.com",
  projectId: "contact-form-3ec8b",
  storageBucket: "contact-form-3ec8b.appspot.com",
  messagingSenderId: msgID,
  appId: apiID,
  measurementId: meaID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var messagesRef = firebase.database().ref("messages");

// On form submit
document.getElementById("contact-form").addEventListener("submit", submitForm);

// get values from all input
function getValues(id) {
  return document.getElementById(id).value;
}

// handle Form submit function
function submitForm(event) {
  event.preventDefault();
  var name = getValues("name");
  var email = getValues("email");
  var company = getValues("company");
  var phone = getValues("phone");
  var message = getValues("message");

  saveMessage(name, company, email, phone, message);

  document.getElementById("contact-form").reset();
}

// save messgae to firebase

function saveMessage(name, company, email, phone, message) {
  var newMsgRef = messagesRef.push();
  newMsgRef.set({
    name: name,
    email: email,
    company: company,
    phone: phone,
    message: message,
  });
}
