//StudentListScreen.js
import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
// import db from './StudentScreen';
import {openDatabase} from 'react-native-sqlite-storage';

var db = openDatabase({name: 'SchoolDatabase.db'});
const DATA = [
  {
    id: 1,
    title: 'First Item',
    name: 'Roman Didoshak',
  },
  {
    id: 2,
    title: 'Second Item',
    name: 'Вася',
  },
  {
    id: 3,
    title: 'Third Item',
    name: 'Міша',
  },
];

export default function StudentListScreen() {
  // const [list, setList] = useState([]);
  const [students, setStudents] = useState(DATA);
  const [students1, setStudents1] = useState([]);
  const [students2, setStudents2] = useState([]);
  // const [list1, setList1] = useState(DATA);
  // console.log('list=', list);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadStudentList();
  }, []);

  //Вибірка даних
  const loadStudentList = () => {
    console.log('*** loadStudentList ***');
    db.transaction(tx => {
      console.log('*** loadStudentList1 ***');
      tx.executeSql('SELECT * FROM Student_Table', [], (tx, results) => {
        console.log('*** loadStudentList2 ***');
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

  const renderList = () => {
    // console.log('students=', students);
    return students.map(item => {
      // key={item.id} - бажано у списках
      return (
        <Text key={item.id} style={{paddingLeft: 5, color: '#3340B2'}}>
          {item.id} {item.title} {item.name}
        </Text>
      );
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
      <View>
        <Text style={{textAlign: 'center', fontSize: 22, color: 'red'}}>
          StudentListScreen 1
        </Text>
        <Text style={{textAlign: 'center', fontSize: 14, color: 'brown'}}>
          Data
        </Text>
        {renderList()}
        <Text style={{textAlign: 'center', fontSize: 14, color: 'brown'}}>
          Students
        </Text>
        {renderStudentList()}
      </View>
    </SafeAreaView>
  );
}
