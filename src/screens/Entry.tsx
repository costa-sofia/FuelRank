
import React from 'react';
import { Image, Text, View } from 'react-native';
import { But } from '../components/button';



const Entry =({ navigation }: { navigation: any }) => {  
  return (
    <View className="flex-1 items-center justify-evenly bg-[#011108] font-Inter">
      
      <Text className='text-white text-center font-semibold text-3xl'>WELCOME TO{'\n'}
      <Text className='text-[#03C95D]'>FUEL RANK</Text>
      </Text>
      
      <Image source={require('../assets/logoinitial.png')} />
      
      <But text="START" onPress={() => navigation.navigate('Car')} />
    </View>
  );
};

export default Entry;


