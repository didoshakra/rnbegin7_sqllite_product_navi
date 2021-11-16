//RenderHtml.js//https://www.kindacode.com/article/how-to-render-html-content-in-react-native/
import React from 'react';
import {Button, Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 22, color: 'red'}}>
        Home Page
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text
          style={styles.textButton}
          onPress={() => navigation.navigate('flatlist')}>
          FlatlistS
        </Text>
        <Text
          style={styles.textButton}
          onPress={() => navigation.navigate('list')}>
          Person
        </Text>

        <Text
          style={styles.textButton}
          onPress={() => navigation.navigate('student')}>
          Student
        </Text>
        <Text
          style={styles.textButton}
          onPress={() => navigation.navigate('student-list')}>
          StudentList
        </Text>
        <Text
          style={styles.textButton}
          onPress={() => navigation.navigate('product')}>
          Product
        </Text>
        {/* <Button
          height="30"
          color="#00B8D4"
          title="StudentList"
          onPress={() => navigation.navigate('studentlist')}
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 100,
  },
  textButton: {
    margin: 2,
    height: 30,
    width: '20%',
    alignItems: 'center',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderWidth: 1,
    // color: '#8b0000',
    color: '#FFFF',
    borderColor: '#00B8D4',
    backgroundColor: '#00B8D4',
    // backgroundColor: '#6FB8EE',

    borderRadius: 7,
    marginTop: 15,
  },
});

export default HomeScreen;
