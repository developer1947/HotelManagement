import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {BLACK, WHITE} from '../constants/color';
import {MyStatusBar} from '../components/MyStatusBar';
import {HEIGHT, WIDTH} from '../constants/config';
import Slider from '@react-native-community/slider';
import {GardenImg, StarImg} from '../constants/imagepath';

const Page2 = ({navigation}) => {
  const [price, setPrice] = useState(999);
  
  return (
    <ScrollView style={{backgroundColor: WHITE, flex: 1}}>
      <View
        style={{
          flex: 1,
          backgroundColor: WHITE,
          alignSelf: 'center',
          justifyContent: 'flex-start',
        }}>
        <MyStatusBar
          backgroundColor={WHITE}
          barStyle="dark-content"
          translucent={false}
        />
        <View
          style={{
            height: HEIGHT * 0.76,
            width: WIDTH * 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: HEIGHT * 0.75,
              width: WIDTH * 0.9,
              backgroundColor: 'lightgrey',
              borderRadius: 10,
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                height: HEIGHT * 0.2,
                width: WIDTH * 0.9,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: HEIGHT * 0.18,
                  width: WIDTH * 0.85,
                  backgroundColor: WHITE,
                  borderRadius: 10,
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: HEIGHT * 0.04,
                    width: WIDTH * 0.8,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                  }}>
                  <Text
                    allowFontScaling={false}
                    style={{fontSize: 14, color: 'grey'}}>
                    You can request you'r price
                  </Text>
                </View>
                <View
                  style={{
                    height: HEIGHT * 0.06,
                    width: WIDTH * 0.8,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    allowFontScaling={false}
                    style={{fontSize: 20, color: 'grey', fontWeight: 'bold'}}>
                    RS. <Text style={{color: BLACK}}>{price}</Text>
                  </Text>
                </View>
                <View
                  style={{
                    height: HEIGHT * 0.08,
                    width: WIDTH * 0.8,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View style={styles.blackLine} />

                  {/* Slider Component */}
                  <View style={styles.sliderContainer}>
                    <Slider
                      style={styles.slider}
                      minimumValue={999} 
                      maximumValue={10000}
                      minimumTrackTintColor="#FF0000" 
                      maximumTrackTintColor="#F5A9A9"
                      thumbTintColor="#FF0000" 
                      value={price}
                      onValueChange={value => setPrice(Math.round(value))}
                    />
                  </View>

                  
                  <View style={styles.labelContainer}>
                    <Text style={styles.label}>Min Price</Text>
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                height: HEIGHT * 0.45,
                width: WIDTH * 0.9,
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: HEIGHT * 0.42,
                  width: WIDTH * 0.85,
                  backgroundColor: WHITE,
                  borderRadius: 10,
                }}>
                <View
                  style={{
                    height: HEIGHT * 0.2,
                    width: WIDTH * 0.85,
                    alignItems: 'center',
                  }}>
                  <Image
                    source={GardenImg}
                    style={{height: '100%', width: '100%'}}
                  />
                  <View
                    style={{
                      width: WIDTH * 0.85,
                      alignItems: 'flex-end',
                      justifyContent: 'flex-start',
                    }}>
                    <Image source={StarImg} style={{height: 25, width: 25}} />
                  </View>
                </View>
                <View
                  style={{
                    height: HEIGHT * 0.09,
                    width: WIDTH * 0.9,
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      height: HEIGHT * 0.07,
                      width: WIDTH * 0.85,
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        height: HEIGHT * 0.07,
                        width: WIDTH * 0.5,
                        alignItems: 'flex-start',
                      }}>
                      <View
                        style={{
                          eight: HEIGHT * 0.04,
                          width: WIDTH * 0.5,
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                        <View
                          style={{
                            height: HEIGHT * 0.03,
                            width: WIDTH * 0.13,
                            backgroundColor: 'violet',
                            borderRadius: 8,
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <Text
                            allowFontScaling={false}
                            style={{
                              color: WHITE,
                              fontSize: 12,
                              fontWeight: '900',
                            }}>
                            4.0
                          </Text>
                        </View>
                        <View
                          style={{
                            height: HEIGHT * 0.04,
                            width: WIDTH * 0.38,
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                          }}>
                          <Text
                            allowFontScaling={false}
                            numberOfLines={1}
                            adjustsFontSizeToFit
                            style={{color: 'blue', fontSize: 16,left:'3%'}}>
                            Very Good (4898 Ratings)
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          eight: HEIGHT * 0.03,
                          width: WIDTH * 0.45,
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                        }}>
                        <Text
                          allowFontScaling={false}
                          style={{fontSize: 12, color: 'grey'}}>
                          SinQ Beach Resort
                        </Text>
                        <Text
                          allowFontScaling={false}
                          style={{fontSize: 6, color: 'grey', top: '10%'}}>
                          X km away
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        height: HEIGHT * 0.07,
                        width: WIDTH * 0.32,
                        justifyContent: 'center',
                        alignItems: 'flex-end',
                      }}>
                      <Text
                        allowFontScaling={false}
                        style={{
                          color: BLACK,
                          fontSize: 12,
                          fontWeight: 'bold',
                          right: '3%',
                        }}>
                        RS. 999
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    height: HEIGHT * 0.11,
                    width: WIDTH * 0.9,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                   onPress={()=>{navigation.navigate('Page3')}}
                    style={{
                      height: HEIGHT * 0.05,
                      width: WIDTH * 0.4,
                      borderWidth: 1,
                      borderColor: 'grey',
                      borderRadius: 15,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      allowFontScaling={false}
                      style={{fontSize: 12, color: 'grey'}}>
                      View Hotel
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                  onPress={()=>{navigation.navigate('Page4')}}
                    style={{
                      height: HEIGHT * 0.05,
                      width: WIDTH * 0.4,
                      borderWidth: 1,
                      borderColor: '#FF0000',
                      borderRadius: 15,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#FFC0C0',
                    }}>
                    <Text
                      allowFontScaling={false}
                      style={{fontSize: 12, color: '#FF0000'}}>
                      Accept Booking
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: '100%',
  },
  blackLine: {
    position: 'absolute',
    left: 30, 
    height: 20,
    width: 2,
    backgroundColor: 'black',
  },
  sliderContainer: {
    width: 300,
  },
  slider: {
    width: '100%',
    height: 40,
  },
  labelContainer: {
    position: 'absolute',
    left: 15,
    bottom: 10,
  },
  label: {
    fontSize: 12,
    color: '#333',
  },
  priceText: {
    marginTop: 10,
    fontSize: 16,
    color: '#000',
  },
});
export default Page2;
