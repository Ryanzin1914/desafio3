import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.H1}>MEUS 10 FILMES FAVORITOS</Text>
      <View style={styles.contentContainer}>
        <Image source={require('./assets/imagens/AsBranquelas.png')} style={styles.image} />
        <Image source={require('./assets/imagens/atividadeparanormal.png')} style={styles.image} />
        <Image source={require('./assets/imagens/inatividadeparanormal.png')} style={styles.image} />
        <Image source={require('./assets/imagens/invocaçãodomal.png')} style={styles.image} />
        <Image source={require('./assets/imagens/m3gan.png')} style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <Image source={require('./assets/imagens/oexorcistadopapa.png')} style={styles.image} />
        <Image source={require('./assets/imagens/panico6.png')} style={styles.image} />
        <Image source={require('./assets/imagens/riverdale.png')} style={styles.image} />
        <Image source={require('./assets/imagens/thewalkingdead.png')} style={styles.image} />
        <Image source={require('./assets/imagens/Velozesefuriosos.png')} style={styles.image} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    backgroundColor: '#444'
  },

  image: {
    width: 300,
    height: 500,
    border: '3px solid black',
    borderRadius: 15,
    margin: 20
  },

  contentContainer: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row'
  },

  H1: {
    color: 'white',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: '900'
  }
});