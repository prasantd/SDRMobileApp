import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';
import email from 'react-native-email';

export default class SongRequest extends Component{

    constructor(props){
        super(props);
        this.state = {
          fullName: '',
          songName: '',
          songMessage: ''
      }
    
      };
    
      fullNameHandler = val => {
              this.setState(
              {fullName: val}
              );
        
      };
      songNameHandler = val => {
        this.setState(
          {songName: val}
        );
      };
    
      songMessageHandler = val => {
        this.setState(
          {songMessage: val}
        );
      };
    
      SendRequestHandler = () => {
          const to = 'info@shuddhdesiradio.com'
          email(to,{
            subject: 'Request Song from App: ' + Platform.OS,
            body: 'Song Name: ' + this.state.songName + "\n\n" + 'Message: ' + this.state.songMessage + "\n\n\n" + 'From: ' + this.state.fullName,
            
          }).catch(console.error)
      };

    render(){
        return(
            <View style={styles.container}>
                <TextInput 
                style={styles.fieldinput} 
                onChangeText = {this.fullNameHandler}
                placeholder = {'Your Full Name'}
                value={this.state.fullName} />


                <TextInput
                style = {styles.fieldinput}
                onChangeText = {this.songNameHandler}
                placeholder = {'Song you want to request'}
                value={this.state.songName}
                />

                <TextInput 
                style = {styles.fieldinput} 
                onChangeText = {this.songMessageHandler}
                multiline = {true}
                numberofLines = {3}
                placeholder = {'Details of the song or the message you want us to say on Radio'}
                value={this.state.songMessage} />

                <Button title ="Send Request" style={styles.buttonstyles} onPress = {this.SendRequestHandler}/>
            </View>
         );
     }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'stretch',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    fieldinput:{
      alignItems: 'stretch',
      backgroundColor: '#F5F5F5',
      justifyContent: 'space-evenly',
      borderColor: 'black',
      borderWidth: 1,
    },
    buttonstyles: {
        justifyContent: 'space-around',
        alignItems: 'flex-start',
    }
  });