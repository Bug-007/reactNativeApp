import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import ListItem from './components/ListItem';
import { useEffect, useState } from 'react';

export default function App() {

  const [apiData, setapiData] = useState([]);
  const [categories, setcategories] = useState([]);

  async function fectchAllProducts() {
    fetch('https://fakestoreapi.com/products/')
      .then(res => res.json())
      .then(json => {
        setapiData([...json]);
      })
  }

  async function fectchAllCatogories() {
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(json => {
        const processedData = json?.map((item) => {
          return { label: item?.toUpperCase(), value: item }
        })
        processedData?.push({ label: 'ALL', value: null });
        setcategories(processedData)
      });
  }
  async function fectchByCategory(category) {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then(res => res.json())
      .then(json => {
        setapiData([...json]);
      })

  }


  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  useEffect(() => {
    fectchAllProducts();
    fectchAllCatogories();
  }, []);

  useEffect(() => {
    if (value) {
      fectchByCategory(value);
    }
    else {
      fectchAllProducts();
    }
  }, [value]);

  return (
    <View style={styles.container}>
        <DropDownPicker
          open={open}
          value={value}
          items={categories}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setcategories}
        />
        <FlatList
          style={styles.flatliststyle}
          data={apiData}
          renderItem={({ item }) => <ListItem
            price={item?.price} rate={item?.rating?.rate} title={item?.title} image={item?.image} />}
          keyExtractor={item => item.id}
        />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 90
  },
  flatliststyle: {
    width: '95%',
  }
});
