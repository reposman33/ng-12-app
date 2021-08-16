import { Injectable } from '@angular/core';
import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const config = {
	apiKey: "AIzaSyBT8_0sovEhbeBquwHVvgLqUriv-TttJo0",
	authDomain: "ifactuur-v2.firebaseapp.com",
	databaseUrl: "https://ifactuur-v2.firebaseio.com",
	projectId: "ifactuur-v2",
	projectPublicName: "UurtjeFactuurtje"
}

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
	auth
	db
	user: any
	firebase
	federatedProviders: {Facebook: any; Github: any; Google: any}

	constructor() {
		firebase.initializeApp(config)
		this.auth = firebase.auth()
		this.auth.useDeviceLanguage()
		this.db = firebase.firestore()
		this.user = null
		this.firebase = firebase
	//configure federated signIn
		this.federatedProviders = {
			Facebook: new firebase.auth.FacebookAuthProvider(),
			Github: new firebase.auth.GithubAuthProvider(),
			Google: new firebase.auth.GoogleAuthProvider()
		}
	 }

  // createUserWithEmailAndPassword = (email, password) => {
	// 	this.auth.createUserWithEmailAndPassword(email, password)
	// 	this.user = this.auth.currentUser
	// }

	// passwordReset = (email) => this.auth.sendPasswordResetEmail(email);

	// passwordUpdate = (password) => this.auth.currentUser.updatePassword(password);

	signInWithEmailAndPassword = (email: string, password: string) =>
		// make this login valid during the browser's session
		this.auth
			.setPersistence(firebase.auth.Auth.Persistence.SESSION)
			.then(() => this.auth.signInWithEmailAndPassword(email, password))
			.then((res) => {
				if (res.user?.uid) {
					this.user = res.user
					sessionStorage.setItem("userUid", this.user.uid)
				}
				return res
			})
			.catch((error) => {
				return error
			});

	signOut = () => {
		this.auth.signOut()
			.then(e => {
				if(sessionStorage.getItem("userUid")) {
					sessionStorage.removeItem("userUid")
				}
			})
			.catch(err => console.log("ERROR signing out: ", err))
	};

	// getCurrentUserId = () => this.user && this.user.userUid ? this.user.userUid : sessionStorage.getItem("userUid");

	isAuthenticated() {return !!this.user}

	// setUser = (user) => this.user = user

	// // FEDERATED LOGIN / SIGN IN WITH...
	// signInWithProvider = (p) => {
	// 	const provider = this.federatedProviders[p]
	// 	return this.onSignInWithProvider(provider)
	// }

	// onSignInWithProvider = (provider) => this.firebase
	// 	.auth()
	// 	.signInWithPopup(provider)
	// 	.then((result) => {
	// 		if (result.user) {
	// 			this.setUser(result.user)
	// 			// This gives you a Facebook Access Token. You can use it to access the Facebook API.
	// 			// var accessToken = credential.accessToken;
	// 		}
	// 	})

}
