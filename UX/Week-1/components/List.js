import React from "react";
import {
  FlatList,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  Text
} from "react-native";
import ListItem from "./ListItem";

import * as Icon from "react-native-feather";

const mediaArray = [
  {
    key: "0",
    title: "Title 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    thumbnails: {
      w160: "http://placekitten.com/160/161"
    },
    filename: 'http://placekitten.com/2048/1920',
  },
  {
    key: "1",
    title: "Title 2",
    description:
      "Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut.",
    thumbnails: {
      w160: "http://placekitten.com/160/164"
    },
    filename: "http://placekitten.com/2041/1922"
  },
  {
    key: "2",
    title: 'Title 3',
    description: 'Phasellus imperdiet nunc tincidunt molestie vestibulum.',
    thumbnails: {
      w160: 'http://placekitten.com/160/167',
    },
    filename: 'http://placekitten.com/2039/1920',
  },
  {
    key: "3",
    title: "Title 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    thumbnails: {
      w160: "http://placekitten.com/160/161"
    },
    filename: 'http://placekitten.com/2048/1920',
  },
  {
    key: "4",
    title: "Title 2",
    description:
      "Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut.",
    thumbnails: {
      w160: "http://placekitten.com/160/164"
    },
    filename: "http://placekitten.com/2041/1922"
  },
  {
    key: "5",
    title: 'Title 3',
    description: 'Phasellus imperdiet nunc tincidunt molestie vestibulum.',
    thumbnails: {
      w160: 'http://placekitten.com/160/167',
    },
    filename: 'http://placekitten.com/2039/1920',
  },
];

const ListHeader = () => {
  const headerImage = { uri: mediaArray[ 0 ].filename };

  return (
    <View style={styles.headerContainer}>
      <ImageBackground
        source={headerImage}
        style={styles.headerImage}
        resizeMode="cover"
      >
        <View style={styles.headerIcon}>
          <Icon.Settings stroke={'white'} height={'32'} width={'32'} />
        </View>
        <View style={styles.headerTitle}>
          <Text style={styles.headerTitleText}>Homeless Kittens</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const List = () => {
  return (
    <View style={styles.mainContainer}>
      <FlatList
        contentContainerStyle={styles.listContainer}
        ListHeaderComponent={ListHeader}
        data={mediaArray}
        renderItem={({item}) => <ListItem singleMedia={item} /> } />
    </View>
  );
};

export default List;

const styles = StyleSheet.create( {
  mainContainer: {
  flex: 1,
    backgroundColor: 'black',
  },
  listContainer: {
    marginHorizontal: 3,
    justifyContent: 'space-evenly',
  },
  headerIcon: {
    position: 'absolute',
    right: 20,
    top: 30,
  },
  headerTitle: {
    alignSelf: 'flex-end',
    backgroundColor: '#0052cc',
    bottom: 15,
  },
  headerTitleText: {
    fontSize: 30,
    color: 'white',
    margin: 10,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 25,
    position: 'relative',
    borderBottomRightRadius: 40,
    overflow: 'hidden',
  },
  headerImage: {
    flexDirection: 'row',
    position: 'relative',
    width: Dimensions.get('window').width,
    height: 300,
  },
  settingsIcon: {
    width: 32,
    height: 32,
  },
});
