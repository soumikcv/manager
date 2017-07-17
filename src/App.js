import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';


class App extends Component{
	componentWillMount() {
		var config = {
		    apiKey: "AIzaSyDhTiSKlch-ibJJ9rQpPAOeNkdaxGGQVdA",
		    authDomain: "manager-be11d.firebaseapp.com",
		    databaseURL: "https://manager-be11d.firebaseio.com",
		    projectId: "manager-be11d",
		    storageBucket: "",
		    messagingSenderId: "137783562405"
	  };
	  firebase.initializeApp(config);

	}
	render(){
		return (
			<Provider store={createStore(reducers)}>
			<View>
			 	<Text>Hello</Text>
			</View>
			</Provider>
		);
	}
}

export default App;