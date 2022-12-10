import React from 'react';
import { View, Text, Platform, KeyboardAvoidingView } from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebase = require('firebase');
require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyDMOGX046RMukyarD3uPBYX3ghBrJITY2k",
  authDomain: "test-79df6.firebaseapp.com",
  projectId: "test-79df6",
  storageBucket: "test-79df6.appspot.com",
  messagingSenderId: "295531132062",
  appId: "1:295531132062:web:a990a5babb30585880f78f",
  measurementId: "G-YPW1BEJKPJ"
}

export default class Chat extends React.Component {
  constructor() {
    super();
    //initialize firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    //reference the messages collection on firebase
    this.referenceChatMessages = firebase.firestore().collection("messages");

    this.state = {
      messages: [],
      uid: '',
      loggedInText: '',
    }
  }

  componentDidMount() {
    let name = this.props.route.params.name;
    this.props.navigation.setOptions({ title: name });

    this.authUnsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
      this.setState({
        uid: user.uid,
        messages: [],
      });
      this.unsubscribe = this.referenceChatMessages
        .orderBy("createdAt", "desc")
        .onSnapshot(this.onCollectionUpdate);
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
    this.authUnsubscribe();
  }

  onCollectionUpdate = (querySnapshot) => {
    const messages = [];
    // go through each document
    querySnapshot.forEach((doc) => {
      // get the QueryDocumentSnapshot's data
      let data = doc.data();
      messages.push({
        _id: data._id,
        text: data.text,
        createdAt: data.createdAt.toDate(),
        user: data.user,
      });
    });
    //set state so we can see stored messages from firebase
    this.setState({
      messages,
    });
  }

  //add message to firebase
  addMessage = () => {
    const message = this.state.messages[0];
    this.referenceChatMessages.add({
      uid: this.state.uid,
      _id: message._id,
      text: message.text || '',
      createdAt: message.createdAt,
      user: message.user,
    });
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }),
      () => this.addMessage())
  }

  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#000'
          }
        }}
      />
    )
  }

  render() {
    let background = this.props.route.params.background;
    let name = this.props.route.params.name;

    return (
      <View style={{ flex: 1, backgroundColor: background }}>
        <GiftedChat
          renderBubble={this.renderBubble.bind(this)}
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: this.state.uid,
            avatar: 'https://placeimg.com/140/140/any',
            name: name,
          }}
        />
        {Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null}
      </View>
    )
  }
}