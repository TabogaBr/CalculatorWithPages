import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function SettingScreen({ route }) {

    const { list } = route.params;

    return (
        <View>
            <FlatList contentContainerStyle={styles.items}
                style={styles.list}
                data={list}
                renderItem={({ item }) => <Text> {item.key} </Text>}
                ListHeaderComponent={<Text style={styles.title} > History </Text>}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    list: {
      paddingVertical: '5%',
    },
    items: {
      alignItems: 'center',
    },
    title: {
      fontSize: 18,
    },
  });
