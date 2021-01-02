import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, SectionList, TouchableOpacity } from 'react-native';

export default function App() {
  const [selected,setSeleced] = React.useState(null);
  const count = 0

  const OBJ = [
    {id:'1',val:'Coucou'},
    {id:'2',val:'Hello'},
    {id:'3',val:'Hey'},
    {id:'4',val:'Goodbye'},
    {id:'1',val:'Coucou'},
    {id:'2',val:'Hello'},
    {id:'3',val:'Hey'},
    {id:'4',val:'Goodbye'}
  ];

  const SECTIONS = [
    {
      title: 'Ma Section',
      data: ['element 1', 'element 2', 'element 3']
    },
    {
      title: 'Mon Autre Section',
      data: ['item 1', ' item 2', 'item 3']
    }
  ]

  const changeColor = (item) => { 
    console.log(item.id);
    setSeleced(item.id);
  }

  const listItem = (index,{item}) => (
    <TouchableOpacity onPress={() => changeColor(item)}>
    <View style={{padding: 20, backgroundColor:
      selected === item.id
      ? 'blue'
      : 'red'
      , margin: 10}}>
    <Text style={{color: 'white'}}>{ item.id } {item.val}</Text>
    </View>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <SectionList 
        sections={SECTIONS}
        renderItem={({item})=> <Text>{item}</Text>}
        renderSectionHeader={({section}) => <Text>{section.title}</Text>}
      />
      <FlatList 
        data={ OBJ }
        renderItem={({item},index) => listItem(index,{item})}
        keyExtractor={(item,index) => index.toString()}
        // onEndReached={ () => alert('The End')}
        // onEndReachedThreshold={ 0.1 }
        // numColumns={ 2 }
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
