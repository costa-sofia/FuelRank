
import React, { useContext, useEffect, useState } from 'react';
import { Image, Text, View, TextInput } from 'react-native';
import { But } from '../components/button';
import { Menu } from '../components/menu';
import { FuelContext } from '../contexts/fuelcontext';
import { CarContext } from '../contexts/carcontext';




const Calculator = ({ navigation }: { navigation: any }) => {
  const { carinfo } = useContext(CarContext);
  const gasolineAutonomy = carinfo.gasolineAutonomy;
  const alcoholAutonomy = carinfo.alcoholAutonomy;

  const [gasolinePrice, setGasolinePrice] = useState<number>(0);
  const [alcoholPrice, setAlcoholPrice] = useState<number>(0);
  const [bestFuel, setBestFuel] = useState<string>('');

  const { fuelPrices, fuelinfo } = useContext(FuelContext);

  useEffect(() => {
    const { gasolinePrice, alcoholPrice } = fuelinfo;
    console.log("Fuel values:", gasolinePrice, alcoholPrice);
  }, [fuelinfo]);

  function handleCalculate() {
    if (!isNaN(gasolinePrice) && !isNaN(alcoholPrice)) {
      fuelPrices(gasolinePrice, alcoholPrice);

      if (gasolinePrice === 0 && alcoholPrice === 0) {
        alert("Please provide the autonomy values on the Autonomy screen to calculate the best fuel for you.");
      } else {
        const priceRelation = alcoholPrice / gasolinePrice;
        const autonomyRelation = alcoholAutonomy / gasolineAutonomy;

        if (priceRelation > autonomyRelation) {
          setBestFuel("GASOLINE");
          console.log({ bestFuel });
        } else {
          setBestFuel("ALCOHOL");
          console.log({ bestFuel });
        }
      }
    } else {
      fuelPrices(0, 0);
      alert("Please enter valid numeric values for both gasoline and alcohol prices.");
    }
  }

  return (
    <View className="flex justify-between bg-[#011108] font-Inter h-[100%]">
        
    <View className="flex justify-center items-center bg-[#03C95D] h-[200] rounded-b-3xl"> 
      <Text className='text-white font-semibold text-3xl'> CALCULATOR </Text>
    </View>
    
    <Text className="text-[#03C95D] text-center text-3xl">PRICES</Text>
    
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
            defaultValue={gasolinePrice.toString()}
            keyboardType="numeric"
            onChangeText={(text) => setGasolinePrice(parseFloat(text) || 0)}
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
            defaultValue={alcoholPrice.toString()}
            keyboardType="numeric"
            onChangeText={(text) => setAlcoholPrice(parseFloat(text) || 0)}
          />
      </View>
    </View>

    <Text className='text-white text-center font-semibold text-2xl'>WILL BE BETTER TO USE{'\n'}
      <Text className='text-[#03C95D] text-3xl'>{bestFuel}</Text>
    </Text>

    <View className='flex items-center'>
        <But text="CALCULATE"  onPress={handleCalculate} />
    </View>

    <Menu activeScreen='calculator' navigation={navigation}/>
  </View>
  );
};

export default Calculator;


