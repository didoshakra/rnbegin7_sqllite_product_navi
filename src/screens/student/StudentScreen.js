//app.js https://reactnativecode.com/insert-data-into-sqlite-database-in-react-native/
//Insert Data Into SQLite//SchoolDatabase.db'+'Student_Table'
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {openDatabase} from 'react-native-sqlite-storage';
export var db = openDatabase({name: 'SchoolDatabase.db'});

const App = () => {
  const [S_Name, setName] = useState('');
  const [S_Phone, setPhone] = useState();
  const [S_Address, setAddress] = useState('');
  const [students, setStudents] = useState([]);
  const [students1, setStudents1] = useState([]);
  const [students2, setStudents2] = useState([]);

  useEffect(() => {
    createTable();
    loadStudentList();
  }, []);

  const createTable = () => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='Student_Table'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS Student_Table', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS Student_Table(student_id INTEGER PRIMARY KEY AUTOINCREMENT, student_name VARCHAR(30), student_phone INT(15), student_address VARCHAR(255))',
              [],
            );
          }
        },
      );
    });
    // Alert.alert('SQLite Database and Table Successfully Created...');
  };

  const insertData = () => {
    db.transaction(function (tx) {
      tx.executeSql(
        'INSERT INTO Student_Table (student_name, student_phone, student_address) VALUES (?,?,?)',
        [S_Name, S_Phone, S_Address],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert('Data Inserted Successfully....');
          } else Alert.alert('Failed....');
        },
      );
    });

    viewStudent();
  };

  //Відображення даних
  const viewStudent = () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM Student_Table', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i)
          temp.push(results.rows.item(i));
        console.log(temp);
      });
    });
  };

  //Вибірка даних
  const loadStudentList = () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM Student_Table', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
          students1.push(results.rows.item(i));
        }
        setStudents2(temp);
        // console.log('results=', results);
        console.log('students2=', students2);
        console.log('students1=', students1);
        console.log('temp=', temp);
      });
    });
  };

  const column = (item, k) => {
    //Формування колонок
    return (item + '                    ').substr(0, k) + '  ';
  };
  const renderStudentList = () => {
    // console.log('students=', students);
    return students2.map(item => {
      return (
        <Text key={item.id} style={{paddingLeft: 5, color: '#A740CD'}}>
          {column(item.student_id, 3)}
          {column(item.student_name, 20)}
          {column(item.student_phone, 5)}
          {column(item.student_address, 7)}
        </Text>
      );
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.mainContainer}>
        <Text style={{fontSize: 20, textAlign: 'center', color: 'red'}}>
          Data Into SQLite Database
        </Text>

        <TextInput
          style={styles.textInputStyle}
          onChangeText={text => setName(text)}
          placeholder="Enter Student Name"
          value={S_Name}
        />

        <TextInput
          style={styles.textInputStyle}
          onChangeText={text => setPhone(text)}
          placeholder="Enter Student Phone Number"
          keyboardType={'numeric'}
          value={S_Phone}
        />

        <TextInput
          style={[styles.textInputStyle, {marginBottom: 20}]}
          onChangeText={text => setAddress(text)}
          placeholder="Enter Student Address"
          value={S_Address}
        />

        <TouchableOpacity style={styles.touchableOpacity} onPress={insertData}>
          <Text style={styles.touchableOpacityText}>Insert</Text>
        </TouchableOpacity>
        {renderStudentList()}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },

  touchableOpacity: {
    backgroundColor: '#0091EA',
    alignItems: 'center',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
  },

  touchableOpacityText: {
    color: '#FFFFFF',
    fontSize: 15,
    textAlign: 'center',
    padding: 2,
  },

  textInputStyle: {
    height: 35,
    width: '90%',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#00B8D4',
    borderRadius: 7,
    marginTop: 5,
  },
});

export default App;
