import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default function App({ price, rate, title, image }) {

  function truncate(string) {
    if (string?.length > 15) {
      string = string?.substring(0, 14) + "...";
    }
    return string;
  }

  return (
    <View style={styles.container}>
      <View style={styles.anothercontainer}>

        {/* upper card part */}
        <View style={styles.topcontainer}>
          <ImageBackground style={styles.bgimg} source={{ uri: image }}>
            <View style={styles.dishshow}>
              <View style={styles.dishshowkg}>

                <Text style={styles.dishshowkgtext}>{truncate(title)}- ${price}</Text>
              </View>

              <View style={styles.star}>

                <Text style={styles.starText}>{rate}</Text>
                <Image height={'80px'} width={'80px'} source={require('../assets/star.png')}></Image>
              </View>

            </View>
            <View style={styles.deliverycont}>
              <Image height={'80px'} width={'80px'} source={require('../assets/delivery-boy.png')}></Image>
              <Text style={styles.deliveryconttext}> Free delivery</Text>
            </View>

          </ImageBackground>
        </View>
        {/* lower card part */}
        <View style={styles.dishnamecontainer}>
          <View>

            <Text style={styles.dishname}>{truncate(title)}</Text>
            <View style={styles.tagcontain}>
              <Text style={styles.tagbg}>Gulab Jamun</Text>
              <Text style={styles.tagbg}>Rasgulla</Text>
            </View>
          </View>
          <View style={styles.distimecontainer}>
            <View style={styles.distancecontainer}>
              <Image height={'20px'} width={'20px'} source={require('../assets/place.png')}></Image>
              <Text style={styles.distancetext}>2 km</Text>
            </View>
            <View style={styles.distancecontainer}>

              <Image height={'20px'} width={'20px'} source={require('../assets/clock.png')}></Image>
              <Text style={styles.distancetext}>30-40 mins</Text>
            </View>
          </View>
        </View>
        <View style={styles.br}></View>

        <StatusBar style="auto" />
      </View>
      <View style={styles.discount}>
        <Text style={styles.distext}> Flat 100 OFF above 249</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '10%',
    // paddingLeft: '2%',
    flex: 1,
    backgroundColor: '##AAC1FF',
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    borderColor: '#E8E8E8',
    borderWidth: 3,
    borderRadius: 10
  },
  discount: {
    backgroundColor: '#AAC1FF80',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 30
  },
  distext: {
    color: '#001FAB',
    fontSize: 12,
    fontWeight: '500'
  },
  br: {
    height: 2, borderWidth: 1, borderColor: '#ddd', borderStyle: 'dashed',
    marginTop: 5,
  }
  ,
  dishshow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  }
  ,
  dishshowkg: {
    backgroundColor: '#3D3D3DC9',
    padding: '1%',
    borderRadius: 6
  }
  ,
  dishshowkgtext: {
    fontSize: 9,
    color: '#ffffff',
  },
  star: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#3D3D3DC9',
    padding: '1%',
    borderRadius: 10
  }
  , starText: {
    fontSize: 9,
    paddingRight: 6,
    color: '#ffffff',
    paddingLeft: 4
  },
  topcontainer: {
    height: 154,
    backgroundColor: '#EB8317',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // paddingTop:10,
    paddingBottom: 10,
    // paddingLeft:5,
    // paddingRight:5,
    borderRadius: 10,
    overflow: 'hidden'
  },
  deliverycont: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    marginTop: 100
  },
  deliveryconttext: {
    fontSize: 10,
    color: '#ffffff'
  },
  bgimg: {
    backgroundColor: '#E4E0E1',
    width: "100%",
    height: '105%'
  },
  dishname: {
    fontSize: 18,
    fontWeight: '500'
  },
  tagcontain: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent:'space-evenly'
    marginTop: 10
  }
  ,
  tagbg: {
    backgroundColor: '#EAE8E8C2', flex: 0,
    padding: 3,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 10,
    height: "100%",
    fontSize: 9,
    marginLeft: 5,
    color: '#757575'
  }
  ,
  dishnamecontainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  distancecontainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 10,
    marginTop: 12
  },
  distancetext: {
    fontSize: 10,
    marginLeft: 4
  },
  distimecontainer: {
    display: 'flex',
    flexDirection: 'column',
  }
  ,
  anothercontainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    // height: '100%',
    width: '95%',
    overflow: 'hidden'
  }
});
