import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

const DetailsScreen = (props) => {
  console.log('Props: ', props.route.params);
  const {
    title,
  } = props.route.params;
  return (
    <View>
      <SafeAreaView>
        <Text>{title}</Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: 1,
})

export default DetailsScreen;
