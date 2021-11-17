//RootNavigator.js
import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import FlatlistSelectableComponents from '../components/FlatlistSelectableComponents';
import {PersonListScreen} from '../screens/person/PersonListScreen';
import {PersonInfoScreen} from '../screens/person/PersonInfoScreen';
import ProductScreen from '../screens/product/ProductScreen';
import StudentScreen from '../screens/student/StudentScreen';
import StudentListScreen from '../screens/student/StudentListScreen';
import {
  ViewAllStudentScreen,
  EditRecordScreen,
} from '../screens/student/StudentScreen';

const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'home'}>
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="flatlist" component={FlatlistSelectableComponents} />
      <Stack.Screen name="list" component={PersonListScreen} />
      <Stack.Screen name="info" component={PersonInfoScreen} />
      <Stack.Screen name="product" component={ProductScreen} />
      <Stack.Screen name="student" component={StudentScreen} />
      <Stack.Screen name="student-list" component={StudentListScreen} />
      <Stack.Screen
        // name="view-student-screen"
        name="ViewAllStudentScreen"
        component={ViewAllStudentScreen}
      />

      <Stack.Screen name="EditRecordScreen" component={EditRecordScreen} />
    </Stack.Navigator>
  );
};
//
