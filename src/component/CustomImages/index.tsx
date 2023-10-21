import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import {styles} from './style';

const CustomImages = () => {
  console.disableYellowBox = true;
  const [userInput, setUserInput] = useState<any>('');
  const [imgData, setImgData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    const url = `https://api.pexels.com/v1/search?query=${userInput}`;
    var options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization:
          'VH7zlLT42ED55L4Xom7f0ypcRjDfrLOf1jkfq1YrUOH93D6a2IlErABV',
      },
    };
    fetch(url, options)
      .then(function (res) {
        return res.json();
      })
      .then(function (resJson) {
        let lclImages = [...imgData, ...resJson.photos];
        setImgData(lclImages);
        setIsLoading(false);
        return resJson;
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
      });
  };

  const renderFooter = () => {
    if (isLoading) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    } else null;
  };

  const renderItems = ({item}: any) => {
    return (
      <View style={styles.imgContainer}>
        <Image
          source={{uri: item.src.medium}}
          resizeMode="cover"
          style={styles.imageStyle}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Please Input Image Type</Text>
      <TextInput
        placeholder="Enter the Api       "
        style={styles.textInputStyle}
        value={userInput}
        onChange={value => setUserInput(value)}
        onEndEditing={() => {
          getData();
        }}
      />
      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
      {imgData.length > 0 && (
        <FlatList
          contentContainerStyle={{margin: 4, paddingTop: 20}}
          horizontal={false}
          numColumns={2}
          data={imgData}
          renderItem={renderItems}
          onEndReached={getData}
          onEndReachedThreshold={0.8}
          ListFooterComponent={renderFooter}
          keyExtractor={ele => ele.id.toString()}
        />
      )}
    </View>
  );
};
export default CustomImages;
