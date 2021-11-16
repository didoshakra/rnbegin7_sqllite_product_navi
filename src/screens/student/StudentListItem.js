//StudentListItem.js
import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Image, Text, View} from 'react-native';

export function StudentListItem({onPress, student}) {
  // const {onPress, student} = props;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{uri: student.picture.medium}}
        resizeMode={'contain'}
        style={styles.avatar}
      />
      <View style={styles.col}>
        <Text style={styles.name}>
          {student.student_id} {student.student_name}
          {student.student_phone}
          {student.student_address}
        </Text>
        {/* <Text style={styles.email}>{student.student_address}</Text> */}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderBottomColor: '#b0b0b0',
    borderBottomWidth: 0.4,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  col: {
    marginLeft: 10,
  },
  name: {
    fontSize: 16,
    color: '#2e2e2e',
  },
  email: {
    marginTop: 10,
    fontSize: 13,
    color: '#b0b0b0',
  },
});
