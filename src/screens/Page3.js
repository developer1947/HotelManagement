import {View, Text, ScrollView, Image, FlatList, StyleSheet,Animated} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import {BLACK, GRAY, WHITE} from '../constants/color';
import {MyStatusBar} from '../components/MyStatusBar';
import {HEIGHT, WIDTH} from '../constants/config';
import {
  DirectionImg,
  GardenImg,
  GymImg,
  ManImg,
  MApImg,
  ParkingImg,
  PoolImg,
  ResturantImg,
} from '../constants/imagepath';


const Page3 = () => {
  const images = [
    require('../assets/images/garden.png'), 
    require('../assets/images/garden.png'),
    require('../assets/images/garden.png'),
    require('../assets/images/garden.png'),
    require('../assets/images/garden.png'),
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current; 
  const flatListRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length; 
      setCurrentIndex(nextIndex);

      
      flatListRef.current.scrollToOffset({
        offset: nextIndex * WIDTH,
        animated: true,
      });
    }, 2500); 

    return () => clearInterval(interval); 
  }, [currentIndex]);


  const renderImage = ({ item }) => (
    <View style={styles.imageContainer}>
      <Image source={item} style={styles.image} />
    </View>
  );
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
            height: HEIGHT * 0.52,
            width: WIDTH * 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: HEIGHT * 0.5,
              width: WIDTH * 0.9,
              backgroundColor: WHITE,
              elevation: 5,
              borderRadius: 10,
              alignItems: 'center',
            }}>
            <View style={{height: HEIGHT * 0.2, width: WIDTH * 0.85,justifyContent:'center',alignItems:'center'}}>
              
               <FlatList
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderImage}
        ref={flatListRef} 
        onScroll={(event) => {
          const slide = Math.ceil(event.nativeEvent.contentOffset.x / WIDTH);
          setCurrentIndex(slide);
        }}
        scrollEnabled={false}
      />
      <View style={styles.indicatorsContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              currentIndex === index && styles.activeIndicator,
            ]}
          />
        ))}
      </View>
     
            </View>
            <View
              style={{
                height: HEIGHT * 0.1,
                width: WIDTH * 0.9,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View style={{height: HEIGHT * 0.09, width: WIDTH * 0.85}}>
                <View
                  style={{
                    height: HEIGHT * 0.06,
                    width: WIDTH * 0.85,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      height: HEIGHT * 0.06,
                      width: WIDTH * 0.6,
                      justifyContent: 'center',
                    }}>
                    <Text
                      allowFontScaling={false}
                      style={{fontSize: 18, color: BLACK}}>
                      SINQ BEACH RESORT
                    </Text>
                  </View>
                  <View
                    style={{
                      height: HEIGHT * 0.06,
                      width: WIDTH * 0.25,
                      alignItems: 'flex-end',
                      justifyContent: 'flex-end',
                    }}>
                    <View
                      style={{
                        height: HEIGHT * 0.04,
                        width: WIDTH * 0.25,
                        backgroundColor: '#FFFFED',
                        bottom: '15%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 8,
                      }}>
                      <Text
                        allowFontScaling={false}
                        numberOfLines={1}
                        adjustsFontSizeToFit
                        style={{
                          fontSize: 12,
                          color: '#FFC107',
                          fontWeight: '900',
                        }}>
                        ★ 3 star hotel
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    height: HEIGHT * 0.03,
                    width: WIDTH * 0.6,
                    justifyContent: 'flex-start',
                  }}>
                  <Text
                    allowFontScaling={false}
                    style={{fontSize: 9, color: GRAY}}>
                    No 9 Ground Floor Santi Nagar, Bengaluru, Karnataka 560027
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                height: HEIGHT * 0.18,
                width: WIDTH * 0.9,
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: HEIGHT * 0.08,
                  width: WIDTH * 0.85,
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                }}>
                <Text
                  allowFontScaling={false}
                  style={{fontSize: 16, color: BLACK}}>
                  Anamities
                </Text>
              </View>
              <View
                style={{
                  height: HEIGHT * 0.1,
                  width: WIDTH * 0.85,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View style={{height: HEIGHT * 0.1, width: WIDTH * 0.2}}>
                  <View
                    style={{
                      height: HEIGHT * 0.07,
                      width: WIDTH * 0.2,
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={PoolImg}
                      style={{height: '80%', width: '60%', tintColor: GRAY}}
                    />
                  </View>
                  <View
                    style={{
                      height: HEIGHT * 0.03,
                      width: WIDTH * 0.2,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      allowFontScaling={false}
                      style={{color: 'grey', fontSize: 12}}>
                      Pool
                    </Text>
                  </View>
                </View>

                <View style={{height: HEIGHT * 0.1, width: WIDTH * 0.2}}>
                  <View
                    style={{
                      height: HEIGHT * 0.07,
                      width: WIDTH * 0.2,
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={ResturantImg}
                      style={{height: '80%', width: '60%', tintColor: GRAY}}
                    />
                  </View>
                  <View
                    style={{
                      height: HEIGHT * 0.03,
                      width: WIDTH * 0.2,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      allowFontScaling={false}
                      style={{color: 'grey', fontSize: 12}}>
                      Resturant
                    </Text>
                  </View>
                </View>

                <View style={{height: HEIGHT * 0.1, width: WIDTH * 0.2}}>
                  <View
                    style={{
                      height: HEIGHT * 0.07,
                      width: WIDTH * 0.2,
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={GymImg}
                      style={{height: '80%', width: '60%', tintColor: GRAY}}
                    />
                  </View>
                  <View
                    style={{
                      height: HEIGHT * 0.03,
                      width: WIDTH * 0.2,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      allowFontScaling={false}
                      style={{color: 'grey', fontSize: 12}}>
                      Gym
                    </Text>
                  </View>
                </View>

                <View style={{height: HEIGHT * 0.1, width: WIDTH * 0.2}}>
                  <View
                    style={{
                      height: HEIGHT * 0.07,
                      width: WIDTH * 0.2,
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                    }}>
                    <Image
                      source={ParkingImg}
                      style={{height: '80%', width: '60%', tintColor: GRAY}}
                    />
                  </View>
                  <View
                    style={{
                      height: HEIGHT * 0.03,
                      width: WIDTH * 0.2,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      allowFontScaling={false}
                      style={{color: 'grey', fontSize: 12}}>
                      Parking
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            height: HEIGHT * 0.1,
            width: WIDTH * 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: HEIGHT * 0.09,
              width: WIDTH * 0.9,
              backgroundColor: WHITE,
              elevation: 5,
              borderRadius: 10,
              flexDirection: 'row',
            }}>
            <View
              style={{
                height: HEIGHT * 0.09,
                width: WIDTH * 0.7,
                alignItems: 'flex-end',
              }}>
              <View style={{height: HEIGHT * 0.09, width: WIDTH * 0.65}}>
                <View
                  style={{
                    height: HEIGHT * 0.04,
                    width: WIDTH * 0.65,
                    justifyContent: 'center',
                  }}>
                  <Text
                    allowFontScaling={false}
                    style={{color: BLACK, fontSize: 16}}>
                    Location
                  </Text>
                </View>
                <View
                  style={{
                    height: HEIGHT * 0.05,
                    width: WIDTH * 0.65,
                    justifyContent: 'flex-start',
                  }}>
                  <Text
                    allowFontScaling={false}
                    style={{fontSize: 9, color: BLACK}}>
                    No 9 Ground Floor Santi Nagar, Bengaluru, Karnataka 560027
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                height: HEIGHT * 0.09,
                width: WIDTH * 0.2,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: 40,
                  width: 40,
                  backgroundColor: 'blue',
                  borderRadius: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={DirectionImg}
                  style={{height: 15, width: 15, tintColor: WHITE}}
                />
              </View>
              <Text
                allowFontScaling={false}
                style={{color: 'blue', fontSize: 10, fontWeight: '800'}}>
                Direction
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            height: HEIGHT * 0.4,
            width: WIDTH * 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: HEIGHT * 0.36,
              width: WIDTH * 0.9,
              backgroundColor: WHITE,
              elevation: 5,
              borderRadius: 10,
            }}>
            <View
              style={{
                height: HEIGHT * 0.08,
                width: WIDTH * 0.9,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: HEIGHT * 0.08,
                  width: WIDTH * 0.85,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image source={ManImg} style={{height: '70%', width: '15%'}} />
                <View
                  style={{
                    height: HEIGHT * 0.08,
                    width: WIDTH * 0.65,
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    paddingStart: '2%',
                  }}>
                  <Text
                    allowFontScaling={false}
                    style={{fontSize: 13, color: BLACK}}>
                    Name
                  </Text>
                  <Text
                    allowFontScaling={false}
                    style={{fontSize: 11, color: GRAY}}>
                    Review
                  </Text>
                </View>
              </View>
            </View>
            <View
              style={{
                height: HEIGHT * 0.1,
                width: WIDTH * 0.9,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: HEIGHT * 0.1,
                  width: WIDTH * 0.85,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  allowFontScaling={false}
                  style={{fontSize: 12, color: BLACK}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </Text>
              </View>
            </View>
            <View
              style={{
                height: HEIGHT * 0.16,
                width: WIDTH * 0.9,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: HEIGHT * 0.14,
                  width: WIDTH * 0.85,
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <View style={{height: HEIGHT * 0.14, width: WIDTH * 0.4}}>
                  <Image
                    source={GardenImg}
                    style={{height: '100%', width: '100%'}}
                  />
                </View>
                <View style={{height: HEIGHT * 0.14, width: WIDTH * 0.4}}>
                  <Image
                    source={GardenImg}
                    style={{height: '100%', width: '100%'}}
                  />
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
 
  imageContainer: {
    width: WIDTH,
    height: HEIGHT * 0.2,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  indicatorsContainer: {
    position: 'absolute',
      bottom: 10,
      left: 0,
      right: 0,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 5,
  },
  activeIndicator: {
    backgroundColor: '#000',
  },
  slider: {
    width: WIDTH * 0.85,
    marginTop: 20,
  },
});
export default Page3;
