import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <view style={styles.box}>
        <Text> ni idea </Text>
      </view>
      <view style={styles.box}>
        <text>sisis</text>
      </view>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: 'green',
    height: 100,
    width: 100,
});

