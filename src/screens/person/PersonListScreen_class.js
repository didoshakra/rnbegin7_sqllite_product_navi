//PersonListScreen.js
import React, {Component} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {PersonListItem} from './PersonListItem';

export class PersonListScreen extends Component {
  state = {
    list: [],
    isLoading: false,
  };

  componentDidMount = () => {
    console.log('componentDidMount');
    this.onRefresh();
  };

  getMoreData = isRefreshing => {
    const limit = 15;
    const offset = isRefreshing ? 0 : this.state.list.length;
    const page = Math.ceil(offset / limit) + 1;
    fetch(`https://randomuser.me/api/?seed=foobar&results=15&page=${page}`)
      .then(r => r.json())
      .then(json => {
        this.setState({
          list: isRefreshing
            ? this.state.list.concat(json.results)
            : json.results,
        });
      })
      .catch(e => {
        console.log(e);
      });
  };

  onRefresh = () => {
    this.getMoreData(true);
  };

  onScrollToEnd = ({distanceFromEnd}) => {
    if (distanceFromEnd < 0) {
      return;
    }
    this.getMoreData(false);
  };

  onItemPress = item => {
    this.props.navigation.navigate('info', {person: item});
  };

  keyExtractor = person => person.login.uuid;

  renderItem = ({item}) => {
    return (
      <PersonListItem
        person={item}
        onPress={this.onItemPress.bind(this, item)}
      />
    );
  };
  render() {
    const {isLoading, list} = this.state;
    return (
      <View>
        <Text style={{textAlign: 'center', fontSize: 22, color: 'red'}}>
          PersonListScreen-class
        </Text>
        <View>
          <FlatList
            data={list}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
            refreshing={isLoading}
            onRefresh={this.onRefresh}
            onEndReached={this.onScrollToEnd}
            onEndReachedThreshold={0.2}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
