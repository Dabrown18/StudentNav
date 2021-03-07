import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, FlatList } from "react-native";

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const Item = ({item, ...rest}) => (
  <TouchableOpacity style={styles.item} {...rest}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

const HomeScreen = (props) => {
  return (
    <View>
      <SafeAreaView>
        <FlatList
          data={DATA}
          renderItem={({item}) => {
            return (
              <Item
                item={item}
                onPress={() => props.navigation.navigate('Details', item)}
              />
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
