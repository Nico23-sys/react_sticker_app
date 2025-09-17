import {View, StyleSheet } from 'react-native';

import ImageViewer from '@/components/ImageViewer';

const PlaceholderImage = require('@/assets/images/background-image.png');


const Index = () => (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
         <ImageViewer imgSource={PlaceholderImage} />
        </View>  
    </View>
  );


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

export default Index;
