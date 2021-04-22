// Initialize Firebase
var config = {
     apiKey: "AIzaSyA7xvnxxWkMhBonpj5AiZ5Hkkdv-jZAqDk",
        authDomain: "maliste-d4c03.firebaseapp.com",
        databaseURL: "https://maliste-d4c03.firebaseio.com",
        projectId: "maliste-d4c03",
        storageBucket: "maliste-d4c03.appspot.com",
        messagingSenderId: "552655235785",
        appId: "1:552655235785:web:a4b660caf5882e4be57b18",
        measurementId: "G-V6R9FPCSG1"
};

firebase.initializeApp(config);


const dbRef = firebase.database().ref();

const usersRef = dbRef.child('users');
const userListUI = document.getElementById("userList");

usersRef.on("child_added", snap => {

	let user = snap.val();

	let $li = document.createElement("li");
	$li.innerHTML = user.name;
	$li.setAttribute("child-key", snap.key);
	$li.addEventListener("click", userClicked)
	userListUI.append($li);

});


function userClicked(e) {

	var userID = e.target.getAttribute("child-key");

	const userRef = dbRef.child('users/' + userID);
	const userDetailUI = document.getElementById("userDetail");

	userDetailUI.innerHTML = ""

	userRef.on("child_added", snap => {


		var $p = document.createElement("p");
		$p.innerHTML = snap.key  + " - " +  snap.val()
		userDetailUI.append($p);


	});

}


