import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import Tarea from './Tarea';

class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.cargando && 
        <ActivityIndicator 
        size='large'
        color='#640064'
        />
        }
        {!this.props.cargando && 
          <Text style={styles.title}>Lista de tareas con React Native:</Text>
        }
        {!this.props.cargando && 
          <FlatList 
          data={this.props.tareas} 
          renderItem={
            ({item}) => <Tarea item={item} eliminar={this.props.eliminar} />  
          }
          
          />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    backgroundColor: '#424956',
  },
  title:{
    fontSize: 20,
    color: '#61dafb'
  }
});

export default Body;