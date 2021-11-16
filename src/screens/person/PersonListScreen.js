//PersonListScreen.js
import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {PersonListItem} from './PersonListItem';

export const PersonListScreen = ({navigation}) => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // componentDidMount = () => {
  //   console.log('componentDidMount');
  //   this.onRefresh();
  // };
  useEffect(() => {
    onRefresh();
  }, []);

  const getMoreData = isRefreshing => {
    const limit = 15;
    const offset = isRefreshing ? 0 : list.length;
    const page = Math.ceil(offset / limit) + 1;
    fetch(`https://randomuser.me/api/?seed=foobar&results=15&page=${page}`)
      .then(r => r.json())
      .then(json => {
        setList(isRefreshing ? list.concat(json.results) : json.results);
        // setList(json.results);
        // console.log('list=', list);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const onRefresh = () => {
    getMoreData(true);
  };

  const onScrollToEnd = ({distanceFromEnd}) => {
    if (distanceFromEnd < 0) {
      return;
    }
    getMoreData(false);
  };

  const onItemPress = item => {
    navigation.navigate('info', {person: item});
  };

  const keyExtractor = person => person.login.uuid;

  const renderItem = ({item}) => {
    // return <PersonListItem person={item} onPress={onItemPress(item)} />-зразу спрацьовувало;
    return <PersonListItem person={item} onPress={() => onItemPress(item)} />;
    // return <PersonListItem person={item} />;
  };
  // const {isLoading, list} = this.state;
  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 22, color: 'red'}}>
        PersonListScreen-function
      </Text>
      <View>
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          refreshing={isLoading}
          // onRefresh={onRefresh}
          onEndReached={onScrollToEnd}
          onEndReachedThreshold={0.2}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
