import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator, createAppContainer} from 'react-navigation';
import SongRequest from './songrequest';

 class ListenLiveTab extends Component{
  render(){
      return(
          <View>
              <Text>Listen Live</Text>
          </View>
      );
  }
}

 class ScheduleTab extends Component{
    render(){
        return(
            <View>
                <Text>Schedule</Text>
            </View>
        );
    } 
}
 class RequestSongTab extends Component{
    render(){
        return(
           
                <SongRequest/>
           
        );
    }
}
 const SDRTabNavigator = createBottomTabNavigator({
  Listen: ListenLiveTab,
  Schedule:ScheduleTab,
  SongRequest: RequestSongTab,
});

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
  });

export default createAppContainer(SDRTabNavigator);
