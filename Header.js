import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.texto}
          placeholder="Que haras hoy?"
          onChangeText={this.props.cambiarTexto}
          onSubmitEditing={this.props.agregar}
          value={this.props.texto}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#24292e',
    justifyContent: 'center', 
  },
  texto: {
        paddingHorizontal: 16,
        color: '#000000',
        fontSize: 24
    }   
});

export default Header;