//StudentListScreen.js
import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {StudentListItem} from './StudentListItem';

export const StudentListScreen = ({navigation}) => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   onRefresh();
  // }, []);

  // const getMoreData = isRefreshing => {
  //   const limit = 15;
  //   const offset = isRefreshing ? 0 : list.length;
  //   // const page = Math.ceil(offset / limit) + 1;
  //   db.transaction(tx => {
  //     tx.executeSql('SELECT * FROM Student_Table', [], (tx, results) => {
  //       setList(isRefreshing ? list.concat(json.results) : json.results);
  //       // for (let i = 0; i < results.rows.length; ++i)
  //       //   list.push(results.rows.item(i));
  //       console.log(temp);
  //     });
  //   });
  // };

  // const onRefresh = () => {
  //   getMoreData(true);
  // };

  // const onScrollToEnd = ({distanceFromEnd}) => {
  //   if (distanceFromEnd < 0) {
  //     return;
  //   }
  //   getMoreData(false);
  // };

  // const onItemPress = item => {
  //   navigation.navigate('info', {student: item});
  // };

  // const keyExtractor = student => student.login.uuid;

  // const renderItem = ({item}) => {
  //   return <StudentListItem student={item} onPress={() => onItemPress(item)} />;
  // };

  // const {isLoading, list} = this.state;
  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 22, color: 'red'}}>
        StudentListScreen-function
      </Text>
      {/* <View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
