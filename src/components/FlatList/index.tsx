import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 44,
  },
  label: {
    width: 200,
    height: 400,
  },
  separator: {
    height: 1,
    backgroundColor: 'gray',
  },
  header: {
    height: 100,
    backgroundColor: 'gray',
  },
  footer: {
    height: 100,
    backgroundColor: 'gray',
  },
});

const data = [
  { id: 'first', title: 'ひとつめ' },
  { id: 'second', title: 'ふたつめ' },
  { id: 'third', title: 'みっつめ' },
  { id: 'fourth', title: 'よっつめ' },
  { id: 'fifth', title: 'いつつめ' },
  { id: 'sixth', title: 'むっつめ' },
  { id: 'seventh', title: 'ななつめ' },
];

const Component = () => {
  const list = React.useRef<FlatList<any>>(null);
  const scrollToThird = React.useCallback(() => {
    list?.current?.scrollToIndex({ index: 2 });
  }, [list]);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={scrollToThird}>
        <Text>Scroll to third</Text>
      </TouchableOpacity>
      <FlatList
        ref={list}
        data={data}
        renderItem={({ item }) => (
          <Text style={styles.label}>{item.title}</Text>
        )}
      />
    </View>
  );
};

export default Component;
