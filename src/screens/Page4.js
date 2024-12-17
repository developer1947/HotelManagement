import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {MyStatusBar} from '../components/MyStatusBar';
import {BLACK, GRAY, WHITE} from '../constants/color';
import { HEIGHT, WIDTH } from '../constants/config';
import { GardenImg, UploadImg } from '../constants/imagepath';

const Page4 = () => {
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
        <View style={{height:HEIGHT*0.21,width:WIDTH*1,justifyContent:'center',alignItems:'center'}}>
             <View style={{height:HEIGHT*0.18,width:WIDTH*0.9,flexDirection:'row',alignItems:'center'}}>
              <View style={{height:HEIGHT*0.18,width:WIDTH*0.5,justifyContent:'center',alignItems:'center'}}>
                <Image source={GardenImg} style={{height:'90%',width:'90%',borderRadius:10}}/>
              </View>
              <View style={{height:HEIGHT*0.18,width:WIDTH*0.3,justifyContent:'flex-start',alignItems:"flex-start",paddingTop:'8%'}}>
<Text allowFontScaling={false} style={{color:GRAY,fontSize:10}}>SinQ Beach Resort</Text>
<Text allowFontScaling={false} style={{color:GRAY,fontSize:10}}>Price in rs</Text>
              </View>
             </View>
        </View>


<View style={{height:HEIGHT*0.26,width:WIDTH*1,alignItems:'center'}}>

  <View style={{height:HEIGHT*0.06,width:WIDTH*0.85,justifyContent:'center',alignItems:'flex-start'}}>
    <Text allowFontScaling={false} style={{fontSize:16,color:'red',fontWeight:'800'}}>About location</Text>
  </View>
  <View style={{height:HEIGHT*0.1,width:WIDTH*0.85,justifyContent:'center',alignItems:'center'}}>
    <Text allowFontScaling={false} style={{fontSize:11,color:BLACK}}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Text>
  </View>
  <View style={{height:HEIGHT*0.1,width:WIDTH*0.85,justifyContent:'center'}}>
    <View style={{height:HEIGHT*0.06,width:WIDTH*0.85,justifyContent:'center',alignItems:'center',borderWidth:1,borderColor:'#FCB439',backgroundColor:'#F8F8B3',borderRadius:10}}>
      <Text allowFontScaling={false} style={{fontSize:12,color:'#FCB439',fontWeight:'700'}}>For each we prefer to submit your id online</Text>
    </View>
  </View>
</View>

<View style={{height:HEIGHT*0.24,width:WIDTH*1,justifyContent:'center',alignItems:"center"}}>
 <View style={{height:HEIGHT*0.22,width:WIDTH*0.8,borderWidth:1,borderColor:GRAY,borderStyle:"dashed",borderRadius:10}}>
  <View style={{height:HEIGHT*0.08,width:WIDTH*0.8,flexDirection:'row',alignItems:'center'}}>
      <View style={{height:HEIGHT*0.08,width:WIDTH*0.4,justifyContent:'center',alignItems:"center"}}>
        <Text allowFontScaling={false} style={{fontSize:12,color:BLACK}}>Enter Name</Text>
        <View style={{ height: 1, width: '70%', backgroundColor: 'black', marginTop: '5%',left:'10%'}} />
      </View>
      <View style={{height:HEIGHT*0.08,width:WIDTH*0.4,justifyContent:'center',alignItems:"center"}}>
      <Text allowFontScaling={false} style={{fontSize:12,color:BLACK}}>Age</Text>
      <View style={{ height: 1, width: '20%', backgroundColor: 'black', marginTop: '5%',}} />
      </View>
  </View>
  <View style={{height:HEIGHT*0.06,width:WIDTH*1,justifyContent:'center',alignItems:'center'}}>
    <Text allowFontScaling={false} style={{fontSize:13,color:GRAY}}>Upload documents (Any Id</Text>
    <Text allowFontScaling={false} style={{fontSize:13,color:GRAY,right:'18%'}}>Card)</Text>
  </View>
  <View style={{height:HEIGHT*0.07,width:WIDTH*0.8,justifyContent:'center',alignItems:'flex-end'}}>
       <TouchableOpacity style={{height:HEIGHT*0.055,width:WIDTH*0.38,backgroundColor:"#F4F4F4",right:'10%',borderRadius:10,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
        <Image source={UploadImg} style={{height:25,width:25}}/>
<Text allowFontScaling={false} style={{fontSize:10,color:BLACK,left:'3%'}}>Upload from device</Text>
       </TouchableOpacity>
  </View>
 </View>
</View>


<View style={{height:HEIGHT*0.25,width:WIDTH*1,justifyContent:'flex-end',alignItems:'center'}}>
  <View style={{height:HEIGHT*0.08,width:WIDTH*0.9,backgroundColor:'#F4F4F4',borderBottomLeftRadius:18,borderBottomRightRadius:18,flexDirection:'row',alignItems:'center'}}>
    <View style={{height:HEIGHT*0.08,width:WIDTH*0.45,justifyContent:'center',alignItems:'flex-start',paddingStart:'2%'}}>
      <Text allowFontScaling={false} style={{color:BLACK,fontSize:15,fontWeight:'700'}}>Rs. XXXX/day</Text>
      <Text allowFontScaling={false} style={{color:GRAY,fontSize:6,top:'5%'}}>+GST 500RS</Text>
    </View>
    <View style={{height:HEIGHT*0.08,width:WIDTH*0.45,justifyContent:'center',alignItems:'flex-end',paddingRight:'5%'}}>
<TouchableOpacity style={{height:HEIGHT*0.05,width:WIDTH*0.35,backgroundColor:'#FDEEEE',elevation:5,justifyContent:'center',alignItems:'center',borderRadius:10}}>
  <Text allowFontScaling={false} style={{fontSize:12,color:'red',fontWeight:'900'}}>Book now</Text>
</TouchableOpacity>
    </View>
  </View>
</View>
<View style={{height:HEIGHT*0.02,width:WIDTH*1}}></View>
      </View>
    </ScrollView>
  );
};

export default Page4;
