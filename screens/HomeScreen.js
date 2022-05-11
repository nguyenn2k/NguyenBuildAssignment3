import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, SafeAreaView, Dimensions} from 'react-native';
import React, { useState } from 'react';

const images = [
  'https://cdn.pixabay.com/photo/2017/10/27/15/12/geeks-2894621_960_720.jpg',
  'https://cdn.pixabay.com/photo/2022/03/27/04/56/easter-7094070_960_720.png',
  'https://cdn.pixabay.com/photo/2020/03/30/18/04/banner-4985016_960_720.jpg'
]

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const HomeScreen = () => {
  const [imgActive, setimgActive] = useState(0);
  /*
  onchange = (nativeEvent) =>{
    if(nativeEvent){
      const slide = Math.ceil(nativeEvent.containOffset.x/ nativeEvent.layoutMeasurement.width);
      if(slide != imgActive){
        setimgActive(slide);
      }
    }
  }*/
  return (
    <ScrollView>
      {/**Layout Top */}
      <View style = {styles.LayoutTop}>
          <Image
            source={require('../assets/images/Rectangle17.png')}
          />
          <View style= {styles.RabbitRight}>
            <Image
              source={require('../assets/images/Group1128.png')}
            />
          </View>
          <View style = {styles.Unions}>
            <Image
              source={require('../assets/images/Union.png')}
            />
            <Text style = {styles.TextInUnion}>
              Chief
              {"\n"}
              <Text style = {{fontWeight:'bold'}}>Nathan Ang</Text>
            </Text>
          </View>
          <View style = {styles.Logo}>
            <Image
              source={require('../assets/images/Logo.png')}
            />
          </View>
          <Text style = {styles.TextLayoutTop}>
            <Text style = {{fontWeight:'bold'}}>Welcome Nathan</Text>
            {"\n"}
            Bishan Fluffle
          </Text>
          <View style = {styles.faceLogo}>
            <Image
              source={require('../assets/images/face.png')}
            />
          </View>
      </View>
      {/**Border Rectangle 34 & Rectangle 32 */}
      <View>
        <Image
            style = {styles.boderRectangl34}
            source={require('../assets/images/Rectangle34.png')}
        />
        <Image
            style = {styles.boderRectangl32}
            source={require('../assets/images/Rectangle32.png')}
        />
        <Text style = {styles.TextR3432}>
            My Carrot Wallet
            {"\n"}
            <Text style = {{fontWeight:'bold'}}>50</Text>
        </Text>
        {/**IconRight-Rectangle34 */}
        <View>
          <Image
            style = {{height: 30, width: 35, top: -320, left: 200}}
            source={require('../assets/icons/game-controller.png')}
          />
          <TouchableOpacity style = {{top: -310, left: 200}}>
            <Text >
              Game
            </Text>
          </TouchableOpacity>
          <Image
            style = {{height: 30, width: 35, top: -290, left: 200}}
            source={require('../assets/icons/survey.png')}
          />
          <TouchableOpacity style = {{top: -290, left: 200}}>
            <Text>
              Quizzes and {"\n"}Surveys
            </Text>
          </TouchableOpacity>

          <Image
            style = {{height: 40, width: 40, top: -430, left: 309}}
            source={require('../assets/icons/deal.png')}
          />
          <TouchableOpacity style = {{top: -433, left: 309}}>
            <Text>Deal</Text>
          </TouchableOpacity>
          <Image
            style = {{height: 30, width: 35, top: -410, left: 310}}
            source={require('../assets/icons/smart-farm.png')}
          />
          <TouchableOpacity style = {{top: -410, left: 310}}>
            <Text>Farm</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/**What's new */}
      <View>
        <Image
          style = {{top: -350, left: 120}}
          source={require('../assets/images/Whatsnew.png')}
        />
      </View>
      {/**Carousel Item */}
      <>
        <SafeAreaView style = {styles.carouselContainer}>
          <View style = {styles.carouselWrap}>
            <ScrollView
              //onScroll = {({nativeEvent}) => onchange(nativeEvent)}
              showHorizontalScrollIndicator = {false}
              pagingEnabled
              horizontal
              style = {styles.carouselWrap}
            >
              {
                images.map((e, index) =>
                  <Image
                    key = {e}
                    resizeMode = 'stretch'
                    style = {styles.carouselWrap}
                    source = {{uri:e}}
                  />
                )
              }
            </ScrollView>
            {/**dotwrap */}
            <View style = {styles.dotWrap}>
              {
                images.map((e,index) =>
                  <Text 
                    key = {e}
                    style = {imgActive == index ? styles.dotActive: styles.dot}
                  >
                    ●
                  </Text>
                )
              }
            </View>
          </View>
        </SafeAreaView>
      </>
      {/**latest Deals */}
      <View>
        <Image
          style = {{top: -328, left: 250}}
          source={require('../assets/images/icon021.png')}
        />
        <Image
          style = {{top: -328, left: 20}}
          source={require('../assets/images/icon022.png')}
        />    
        <Image
          style = {{top: -350, left: 70}}
          source={require('../assets/images/LatestDeals.png')}
        />
        <Image
          style = {{top: -238, left: 1, position:'absolute'}}
          source={require('../assets/images/Rectangle21.png')}
        />
        <Image
          style = {{top: -238, left: 1, position:'absolute'}}
          source={require('../assets/images/Frame7.png')}
        />
        <Image
          style = {{bottom: 58, left: 160}}
          source={require('../assets/images/Frame1907.png')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  LayoutTop:{
    //position: 'absolute',
    width: 415,
    top: 0,
    background: '#304D95'
  },
  RabbitRight:{
    position: 'absolute', //1
    width: 183.7,
    height: 226.97,
    left: 230,
    top: 28,
  },
  Unions:{
    position: 'absolute',
    width: 240,
    height: 124,
    left: -1,
    top: 180,
    background: '#FCD62B'
  },
  Logo:{
    position: 'absolute',
    left: 31,
    height: 30,
    width: 125,
    top: 77,
  },
  TextLayoutTop:{
    position: 'absolute',
    width: 165,
    height: 60,
    left: 30,
    top: 133,
    fontFamily: 'Montserrat',
    fontSize: 16,
    color: 'white',
  },
  TextInUnion:{
    position: 'absolute',
    top: 35,
    left: 89,
    color: '#355389'
  },
  faceLogo:{
    position: 'absolute',
    width: 39,
    height: 39,
    left: 31,
    top: 220,
    borderRadius:100,
  },
  boderRectangl34:{
    //position: 'absolute',
    width: 400,
    height: 200,
    left: 10,
    top: 30,
  },
  boderRectangl32:{
    width: 156,
    height: 175,
    top: -161,
    left: 30
  },
  TextR3432:{
    position: 'absolute',
    width: 122,
    height: 35,
    left: 45,
    top: 100,
    fontFamily: 'Montserrat',
    fontSize: 15,
  },
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },
  //Carousel Container:
  carouselContainer:{
    flex: 1,
    top: -340,
  },
  carouselWrap:{
    width: WIDTH,
    height: HEIGHT *0.3,
  },
  dotWrap: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 0,
    alignSelf: 'center'
  },
  dotActive:{
    margin: 3,
    color: 'white',
  },
  dot:{
    margin: 3,
    color: '#888',
  }
})

export default HomeScreen;