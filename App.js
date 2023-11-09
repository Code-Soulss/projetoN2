import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  const [favoritado, setFavoritado] = useState(false);
  const [nomePesquisado, setNomePesquisado] = useState('');

  const toggleFavorito = () => {
    setFavoritado(!favoritado);
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* Barra Superior */}
      <View style={{ height: 80, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end', padding: 20 }}>
        <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>Pesquisador de Jogadores</Text>
      </View>

      {/* Espaço para a Imagem */}
      <View style={{ alignItems: 'center', margin: 5, position: 'relative' }}>
        <Image
          style={{ width: 150, height: 150, borderRadius: 5 }}
          source={{ uri: 'https://uploads.metropoles.com/wp-content/uploads/2022/12/15091252/GettyImages-963682404.jpg' }}
        />
      </View>

      {/* Botão de Favoritar e Nome "Favoritar" (na mesma linha) */}
      <View style={{ alignItems: 'center', margin: 5, flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity onPress={toggleFavorito} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <AntDesign name={favoritado ? 'heart' : 'hearto'} size={24} color={favoritado ? 'red' : 'black'} />
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>
            {favoritado ? ' Favorito' : ' Favoritar'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Nome Pesquisado (maior e em negrito) */}
      <View style={{ alignItems: 'center', margin: 5 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'black' }}>{nomePesquisado}</Text>
      </View>

      {/* Caixa de Pesquisa */}
      <View style={{ alignItems: 'center', margin: 20 }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}></Text>
        <TextInput
          style={{ width: '80%', height: 40, borderWidth: 1, borderRadius: 5, paddingLeft: 10 }}
          placeholder="Pesquisar..."
          onChangeText={(text) => setNomePesquisado(text)}
        />
      </View>

      {/* Botão para navegar para a tela de Favoritos */}
      <View style={{ alignItems: 'center', margin: 20 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Favoritos')}
          style={{
            backgroundColor: 'blue',
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Ir para Favoritos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function FavoritosScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>Tela de Favoritos</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tela inicial" component={HomeScreen} />
        <Stack.Screen name="Favoritos" component={FavoritosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}