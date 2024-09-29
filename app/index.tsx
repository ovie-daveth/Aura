import { Image, StyleSheet, Platform, ScrollView, Text, View } from 'react-native';


export default function HomeScreen() {
  return (
      <View style={styles.container}>
        <Text>Hello</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
  
});
