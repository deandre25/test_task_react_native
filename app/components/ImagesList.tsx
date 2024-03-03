import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const ImagesList = () => {
  return (
    <TouchableOpacity>
      <View>
        <Image />
        <View>
          <Text style={styles.descriptionItem}>author</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: 200,
  },
  imgContainer: {
    position: 'relative',
  },
  descriptionContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    opacity: 0.6,
    padding: 5,
  },
  descriptionItem: {
    flex: 1,
    color: 'black',
    marginLeft: 10,
  }
})

export default ImagesList;