import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { fetchImages } from '../store/actions/fetchImages';

type RootStackParamList = {
  Gallery: undefined;
  Image: { image: imageType };
};

type GalleryScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Gallery'>;
type Props = {
  navigation: GalleryScreenNavigationProp;
};

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

const GalleryScreen: React.FC<Props> = ({ navigation }) => {
  const [images, setImages] = useState<imageType[]>([]);

  useEffect(() => {
    const fetchImagesData = async () => {
      try {
        const response = await fetchImages()
        setImages(response);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
  
    fetchImagesData();
  }, []);
  

  const handleimagePress = (image: imageType) => {
    navigation.navigate('Image', { image });
    console.log('====================================');
    console.log(image);
    console.log('====================================');
  };

  const renderimageItem = ({ item }: { item: imageType }) => (
    <TouchableOpacity onPress={() => handleimagePress(item)}>
      <View style={styles.imageItem}>
        <Image source={{ uri: item.urls.thumb }} style={styles.imageImage} />
        <Text style={styles.imageTitle}>{item.alt_description || 'Untitled'}</Text>
        <Text style={styles.imageAuthor}>{item.user.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderimageItem}
        keyExtractor={(item) => item.id}
        numColumns={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  imageItem: {
    margin: 5,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
  imageImage: {
    width: '100%',
    height: 150,
    borderRadius: 5,
  },
  imageTitle: {
    marginTop: 5,
    fontWeight: 'bold',
  },
  imageAuthor: {
    marginTop: 2,
    color: 'gray',
  },
});

export default GalleryScreen;
