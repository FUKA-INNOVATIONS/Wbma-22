import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';

const ListItem = (props) => {
  return (
    <TouchableOpacity style={styles.row}>
      <View style={styles.imagebox}>
        <Image
          source={{uri: props.singleMedia.thumbnails.w160}}
          style={styles.image}
        />
      </View>
      <View style={styles.textbox}>
        <Text style={styles.listTitle}>{props.singleMedia.title}</Text>
        <Text style={styles.description}>{props.singleMedia.description}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#192538',
    marginBottom: 10,
  },
  imagebox: {
    flex: 4,
  },
  image: {
    flex: 1,
    borderBottomLeftRadius: 40,
  },
  textbox: {
    flex: 5,
    padding: 10,
  },
  listTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
  },
  description: {
    color: '#888888',
  }
});

ListItem.propTypes = {
  singleMedia: PropTypes.object.isRequired,
};

export default ListItem;
