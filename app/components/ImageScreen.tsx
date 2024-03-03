import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type imageType = {
  id: string;
  urls: {
    thumb: string;
    full: string;
  };
  alt_description?: string;
  user: {
    name: string;
  };
};

type RootStackParamList = {
  Gallery: undefined;
  Image: { image: imageType };
};

type ImageScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Image'>;

type Props = {
  navigation: ImageScreenNavigationProp; 
  route: RouteProp<RootStackParamList, 'Image'>;
};

const ImageScreen: React.FC<Props> = ({ navigation, route }) => {
  const {image} = route.params;
  console.log(image);
  

  return (
    <View style={styles.container}>
      <Image source={{ uri: image.urls.full }} style={styles.image} />
      <Text>{image.user.name}</Text>
      <Text>{image.alt_description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
});

export default ImageScreen;
