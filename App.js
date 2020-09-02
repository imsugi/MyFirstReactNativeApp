import React, {useRef, useEffect} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Animated,
  TextInput,
  SnapshotViewIOS,
} from 'react-native';
import dekisugi from './1.jpg';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return <MainComponent />;
};

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 8000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}>
      {props.children}
    </Animated.View>
  );
};

const MainComponent = () => {
  return (
    <View style={MainComponentStyle.Property}>
      <Text style={TextComponentStyle.Property}>Hello !</Text>
      <Image
        style={ImageComponentStyle.Property}
        source={{uri: 'https://placeimg.com/480/600/people'}}
      />
      <FadeInView>
        <Text style={TextComponentStyle.Property}>
          Have A Great Day For You
        </Text>
      </FadeInView>
    </View>
  );
};

const MainComponentStyle = StyleSheet.create({
  Property: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    position: 'relative',
    flex: 1,
    backgroundColor: '#EFA6A6',
    // borderRadius: 10,
    resizeMode: 'cover',
  },
});

const TextComponentStyle = StyleSheet.create({
  Property: {
    position: 'relative',
    padding: 50,
    // flex: 1,
    fontFamily: 'sans-serif-thin',
    fontSize: 45,
    display: 'flex',
    textAlign: 'center',
  },
});

const ImageComponentStyle = StyleSheet.create({
  Property: {
    position: 'relative',
    // width: 480,
    // height: 640,
    flex: 1,
    resizeMode: 'center',
    borderRadius: 10,
  },
});

export default App;
