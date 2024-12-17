import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import React, {useState} from 'react';
import {MyStatusBar} from '../components/MyStatusBar';
import {BLACK, WHITE} from '../constants/color';
import {HEIGHT, WIDTH} from '../constants/config';
import DatePicker from '../components/DatePicker';
import {
  CalenderImg,
  CircleImg,
  DogImg,
  DoubleBedImg,
  HomeImg,
  HotelImg,
  LodgeImg,
  ManSKImg,
  MapImg,
  MApImg,
  SearchImg,
} from '../constants/imagepath';

const Page1 = ({navigation}) => {
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [dates, setDates] = useState({checkIn: null, checkOut: null});

  const handleDateSelect = selectedDates => {
    setDates(selectedDates);
  };
  return (
    <ScrollView>
      <View style={{flex: 1, backgroundColor: WHITE, alignSelf: 'center'}}>
        <MyStatusBar
          backgroundColor={WHITE}
          barStyle="dark-content"
          translucent={false}
        />
        <View style={{height: HEIGHT * 0.4, width: WIDTH * 1}}>
          <Image source={MApImg} style={{height: '100%', width: '100%'}} />
        </View>
        <View
          style={{
            height: HEIGHT * 0.6,
            width: WIDTH * 1,
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: HEIGHT * 0.58,
              width: WIDTH * 0.9,
              backgroundColor: 'lightgrey',
              borderRadius: 15,
            }}>
            <View
              style={{
                height: HEIGHT * 0.12,
                width: WIDTH * 0.9,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: HEIGHT * 0.1,
                  width: WIDTH * 0.85,
                  borderRadius: 10,
                  backgroundColor: WHITE,
                  alignItems: 'center',
                }}>
                <View style={{height: HEIGHT * 0.1, width: WIDTH * 0.8}}>
                  <View
                    style={{
                      height: HEIGHT * 0.03,
                      width: WIDTH * 0.8,
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                    }}>
                    <Text
                      allowFontScaling={false}
                      style={{
                        fontSize: 12,
                        fontWeight: 'bold',
                        color: BLACK,
                        top: '10%',
                      }}>
                      Select Location
                    </Text>
                  </View>
                  <View
                    style={{
                      height: HEIGHT * 0.07,
                      width: WIDTH * 0.8,
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        height: HEIGHT * 0.07,
                        width: WIDTH * 0.1,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={MapImg}
                        style={{height: '60%', width: '70%', tintColor: 'red'}}
                      />
                    </View>
                    <View
                      style={{
                        height: HEIGHT * 0.07,
                        width: WIDTH * 0.64,
                        justifyContent: 'center',
                      }}>
                      <Text
                        allowFontScaling={false}
                        style={{fontSize: 10, color: BLACK}}>
                        Ground floor, Andree Rd, behind Axis Bank, Shanti Nagar,
                        Bengaluru, Karnataka 560027
                      </Text>
                    </View>
                    <View
                      style={{
                        height: HEIGHT * 0.07,
                        width: WIDTH * 0.06,
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={SearchImg}
                        style={{height: '30%', width: '80%'}}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            {/* second con */}
            <View
              style={{
                height: HEIGHT * 0.18,
                width: WIDTH * 0.9,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: HEIGHT * 0.17,
                  width: WIDTH * 0.85,
                  borderRadius: 10,
                  backgroundColor: WHITE,
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: HEIGHT * 0.05,
                    width: WIDTH * 0.8,
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                  }}>
                  <Text
                    allowFontScaling={false}
                    style={{fontSize: 10, color: BLACK, fontWeight: 'bold'}}>
                    You'r Searching for
                  </Text>
                </View>
                <View
                  style={{
                    height: HEIGHT * 0.12,
                    width: WIDTH * 0.8,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View
                    style={{
                      height: HEIGHT * 0.1,
                      width: WIDTH * 0.18,
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      style={{
                        height: HEIGHT * 0.07,
                        width: WIDTH * 0.17,
                        backgroundColor: 'lightgrey',
                        borderRadius: 10,
                        elevation: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={HomeImg}
                        style={{height: '60%', width: '60%'}}
                      />
                    </TouchableOpacity>
                    <View
                      style={{
                        height: HEIGHT * 0.03,
                        width: WIDTH * 0.18,
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                      }}>
                      <Text
                        allowFontScaling={false}
                        style={{fontSize: 10, color: BLACK, fontWeight: '700'}}>
                        Home stay
                      </Text>
                    </View>
                  </View>

                  {/* second */}
                  <View
                    style={{
                      height: HEIGHT * 0.1,
                      width: WIDTH * 0.18,
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      style={{
                        height: HEIGHT * 0.07,
                        width: WIDTH * 0.17,
                        backgroundColor: 'lightgrey',
                        borderRadius: 10,
                        elevation: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={HotelImg}
                        style={{height: '60%', width: '60%'}}
                      />
                    </TouchableOpacity>
                    <View
                      style={{
                        height: HEIGHT * 0.03,
                        width: WIDTH * 0.18,
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                      }}>
                      <Text
                        allowFontScaling={false}
                        style={{fontSize: 10, color: BLACK, fontWeight: '700'}}>
                        Hotels
                      </Text>
                    </View>
                  </View>

                  {/* third */}
                  <View
                    style={{
                      height: HEIGHT * 0.1,
                      width: WIDTH * 0.18,
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      style={{
                        height: HEIGHT * 0.07,
                        width: WIDTH * 0.17,
                        backgroundColor: 'lightgrey',
                        borderRadius: 10,
                        elevation: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={DoubleBedImg}
                        style={{height: '55%', width: '55%'}}
                      />
                    </TouchableOpacity>
                    <View
                      style={{
                        height: HEIGHT * 0.03,
                        width: WIDTH * 0.18,
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                      }}>
                      <Text
                        allowFontScaling={false}
                        style={{
                          fontSize: 10,
                          color: BLACK,
                          fontWeight: '700',
                          top: '40%',
                        }}>
                        Budget Hotels
                      </Text>
                    </View>
                  </View>

                  {/* fourth */}
                  <View
                    style={{
                      height: HEIGHT * 0.1,
                      width: WIDTH * 0.18,
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      style={{
                        height: HEIGHT * 0.07,
                        width: WIDTH * 0.17,
                        backgroundColor: 'lightgrey',
                        borderRadius: 10,
                        elevation: 5,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={LodgeImg}
                        style={{height: '70%', width: '70%'}}
                      />
                    </TouchableOpacity>
                    <View
                      style={{
                        height: HEIGHT * 0.03,
                        width: WIDTH * 0.18,
                        justifyContent: 'flex-end',
                        alignItems: 'center',
                      }}>
                      <Text
                        allowFontScaling={false}
                        style={{fontSize: 10, color: BLACK, fontWeight: '700'}}>
                        Lodge
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>

            {/* third con */}
            <View
              style={{
                height: HEIGHT * 0.08,
                width: WIDTH * 0.9,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: HEIGHT * 0.065,
                  width: WIDTH * 0.85,
                  backgroundColor: WHITE,
                  borderRadius: 10,
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: HEIGHT * 0.065,
                    width: WIDTH * 0.8,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => setPickerVisible(true)}
                    style={{
                      height: HEIGHT * 0.06,
                      width: WIDTH * 0.28,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        height: HEIGHT * 0.06,
                        width: WIDTH * 0.08,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={CalenderImg}
                        style={{height: 20, width: 20, right: '10%'}}
                      />
                    </View>
                    <View
                      style={{
                        height: HEIGHT * 0.06,
                        width: WIDTH * 0.2,
                        alignItems: 'flex-start',
                      }}>
                      <View
                        style={{
                          height: HEIGHT * 0.03,
                          width: WIDTH * 0.2,
                          justifyContent: 'flex-end',
                          alignItems: 'flex-start',
                        }}>
                        <Text
                          allowFontScaling={false}
                          style={{
                            fontSize: 10,
                            color: BLACK,
                            fontWeight: 'bold',
                          }}>
                          Check in
                        </Text>
                      </View>
                      <View
                        style={{
                          height: HEIGHT * 0.03,
                          width: WIDTH * 0.2,
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                        }}>
                        <Text
                          allowFontScaling={false}
                          adjustsFontSizeToFit
                          numberOfLines={1}
                          style={{fontSize: 13, color: BLACK,fontWeight:'500',top:'10%'}}>
                          {dates.checkIn?.toDateString() || 'DD-MON-YYYY'}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <View
                    style={{
                      height: HEIGHT * 0.06,
                      width: WIDTH * 0.2,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <TouchableOpacity
                      onPress={() => setPickerVisible(true)}
                      style={{
                        height: HEIGHT * 0.025,
                        width: WIDTH * 0.18,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 0.7,
                        borderColor: BLACK,
                        borderRadius: 10,
                      }}>
                      <Text
                        allowFontScaling={false}
                        style={{
                          fontSize: 10,
                          color: BLACK,
                          fontWeight: 'bold',
                        }}>
                        N Nights
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    style={{
                      height: HEIGHT * 0.06,
                      width: WIDTH * 0.28,
                      alignItems: 'flex-end',
                    }}>
                    <View
                      style={{
                        height: HEIGHT * 0.06,
                        width: WIDTH * 0.2,
                        alignItems: 'flex-start',
                      }}>
                      <View
                        style={{
                          height: HEIGHT * 0.03,
                          width: WIDTH * 0.2,
                          justifyContent: 'flex-end',
                          alignItems: 'flex-start',
                        }}>
                        <Text
                          allowFontScaling={false}
                          style={{
                            fontSize: 10,
                            color: BLACK,
                            fontWeight: 'bold',
                          }}>
                          Check out
                        </Text>
                      </View>
                      <View
                        style={{
                          height: HEIGHT * 0.03,
                          width: WIDTH * 0.2,
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                        }}>
                        <Text
                          allowFontScaling={false}
                          adjustsFontSizeToFit
                          numberOfLines={1}
                          style={{fontSize: 13, color: BLACK,fontWeight:'500',top:'10%'}}>
                          {dates.checkOut?.toDateString() || 'DD-MON-YYYY'}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <DatePicker
                    show={isPickerVisible}
                    onClose={() => setPickerVisible(false)}
                    onDateSelect={handleDateSelect}
                  />
                </View>
              </View>
            </View>

            {/* forth con */}

            <View
              style={{
                height: HEIGHT * 0.12,
                width: WIDTH * 0.9,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  height: HEIGHT * 0.1,
                  width: WIDTH * 0.85,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  style={{
                    height: HEIGHT * 0.09,
                    width: WIDTH * 0.36,
                    backgroundColor: WHITE,
                    borderRadius: 10,
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      height: HEIGHT * 0.03,
                      width: WIDTH * 0.3,
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                    }}>
                    <Text
                      allowFontScaling={false}
                      style={{fontSize: 11, color: BLACK, fontWeight: 'bold'}}>
                      Guest and Rooms
                    </Text>
                  </View>
                  <View
                    style={{
                      height: HEIGHT * 0.06,
                      width: WIDTH * 0.3,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        height: HEIGHT * 0.06,
                        width: WIDTH * 0.09,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={ManSKImg}
                        style={{height: 25, width: 25, bottom: '5%'}}
                      />
                    </View>
                    <View
                      style={{
                        height: HEIGHT * 0.06,
                        width: WIDTH * 0.21,
                        justifyContent: 'flex-start',
                      }}>
                      <View
                        style={{
                          height: HEIGHT * 0.027,
                          width: WIDTH * 0.21,
                          alignItems: 'flex-start',
                          justifyContent: 'flex-end',
                        }}>
                        <Text
                          allowFontScaling={false}
                          numberOfLines={1}
                          adjustsFontSizeToFit
                          style={{fontSize: 10, color: BLACK}}>
                          2adults,0childs
                        </Text>
                      </View>
                      <View
                        style={{
                          height: HEIGHT * 0.033,
                          width: WIDTH * 0.21,
                          alignItems: 'flex-start',
                          justifyContent: 'flex-start',
                        }}>
                        <Text
                          allowFontScaling={false}
                          numberOfLines={1}
                          adjustsFontSizeToFit
                          style={{fontSize: 10, color: BLACK}}>
                          1 Room
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    height: HEIGHT * 0.09,
                    width: WIDTH * 0.36,
                    backgroundColor: WHITE,
                    borderRadius: 10,
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      height: HEIGHT * 0.03,
                      width: WIDTH * 0.3,
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                    }}>
                    <Text
                      allowFontScaling={false}
                      style={{fontSize: 11, color: BLACK, fontWeight: 'bold'}}>
                      Pet Friendly
                    </Text>
                  </View>
                  <View
                    style={{
                      height: HEIGHT * 0.06,
                      width: WIDTH * 0.34,
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}>
                    <View
                      style={{
                        height: HEIGHT * 0.06,
                        width: WIDTH * 0.09,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image source={DogImg} style={{height: 25, width: 25}} />
                    </View>
                    <View
                      style={{
                        height: HEIGHT * 0.06,
                        width: WIDTH * 0.19,
                        justifyContent: 'center',
                      }}>
                      <Text
                        allowFontScaling={false}
                        style={{fontSize: 8, color: BLACK, fontWeight: '500'}}>
                        Are you transtion with your body
                      </Text>
                    </View>
                    <View
                      style={{
                        height: HEIGHT * 0.06,
                        width: WIDTH * 0.06,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        source={CircleImg}
                        style={{height: 15, width: 15}}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </View>

            {/* fifth con */}

            <View
              style={{
                height: HEIGHT * 0.06,
                width: WIDTH * 0.9,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Page2');
                }}
                style={{
                  height: HEIGHT * 0.05,
                  width: WIDTH * 0.28,
                  backgroundColor: '#FF6B6B',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 10,
                }}>
                <Text
                  allowFontScaling={false}
                  style={{fontSize: 14, color: WHITE, fontWeight: '900'}}>
                  Search
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Page1;
