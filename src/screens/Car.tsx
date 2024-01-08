
import React, { useContext, useEffect, useState } from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import { But } from '../components/button';
import { Menu } from '../components/menu';
import { CarContext } from '../contexts/carcontext';



const Car: React.FC<{ navigation: any }> = ({ navigation }) => {

  const [gasolineAutonomy, setGasolineAutonomy] = useState<number>(0);
  const [alcoholAutonomy, setAlcoholAutonomy] = useState<number>(0);

  const{ carAutonomy,  carinfo} = useContext(CarContext)

  useEffect(() => {
    const { gasolineAutonomy, alcoholAutonomy } = carinfo;
    console.log("Car values:", gasolineAutonomy, alcoholAutonomy);
  }, [carinfo]);

  function handleSave() {
    if (!isNaN(gasolineAutonomy) && !isNaN(alcoholAutonomy)) {
      carAutonomy(gasolineAutonomy, alcoholAutonomy);
    } else {
      carAutonomy(0, 0);
      alert("Please enter valid numeric values for both gasoline and alcohol autonomy.");
    }
  }
  

  return (
    <View className="flex justify-between bg-[#011108] font-Inter h-[100%]">
        
      <View className="flex justify-center items-center bg-[#03C95D] h-[200] rounded-b-3xl"> 
        <Text className='text-white font-semibold text-3xl'> CAR AUTONOMY </Text>
      </View>
  
      <Text className="text-[#03C95D] text-center text-3xl">AUTONOMY</Text>
      <View className="flex-row items-center justify-around">
        <View>
          <Text className='text-white text-2xl font-light text-center'>GASOLINE</Text>
         
          <TextInput
            style={{
              borderWidth: 1,
              borderBottomColor: 'white',
              borderTopColor: '#011108',
              borderLeftColor: '#011108',
              borderRightColor: '#011108',
              width: 150,
              height: 70,
              color: 'white',
              paddingLeft: 20,
            }}
            placeholderTextColor="white"
            defaultValue={gasolineAutonomy.toString()}
            keyboardType="numeric"
            onChangeText={(text) => setGasolineAutonomy(parseFloat(text) || 0)}
          />
        
        
        </View>
        <View>
          <Text className='text-white text-2xl font-light text-center'>ALCOHOL</Text>
          <TextInput
            style={{
              borderWidth: 1,
              borderBottomColor: 'white',
              borderTopColor: '#011108',
              borderLeftColor: '#011108',
              borderRightColor: '#011108',
              width: 150,
              height: 70,
              color: 'white',
              paddingLeft: 20,
            }}
            placeholderTextColor="white"
            defaultValue={alcoholAutonomy.toString()}
            keyboardType="numeric"
            onChangeText={(text) => setAlcoholAutonomy(parseFloat(text) || 0)}
          />
        </View>
      </View>

      <View className='flex items-center'>
        <But text="SAVE"  onPress={handleSave} />
      </View>

      <Menu activeScreen='car' navigation={navigation}/>
    </View>
  );
};

export default Car;


