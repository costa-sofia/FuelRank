import React, { useState, createContext, ReactNode, useContext, useEffect } from "react";

interface FuelContextProps {
  fuelinfo: {
    gasolinePrice: number;
    alcoholPrice: number;
  };
  fuelPrices: (gasolinePrice: number, alcoholPrice: number) => void;
}

export const FuelContext = createContext<FuelContextProps>({
  fuelinfo: {
      gasolinePrice: 0,
      alcoholPrice: 0,
    },
    fuelPrices: () => {},
  });
  

function FuelProvider({ children }: { children: ReactNode }) {
  const [fuelinfo, setFuel] = useState({
    gasolinePrice: 0,
    alcoholPrice: 0,
  });

  function fuelPrices(gasolinePrice: number, alcoholPrice: number) {
    if (gasolinePrice !== 0 && alcoholPrice !== 0) {
      setFuel({
        gasolinePrice: gasolinePrice,
        alcoholPrice: alcoholPrice,
      });
    }
    else
    {
        if (gasolinePrice === 0 && alcoholPrice === 0) {
          alert("Please inform the price to continue");
        } else if (alcoholPrice === 0) {
          alert("Please inform the alcohol price to continue");
        } else if (gasolinePrice === 0) {
          alert("Please inform the gasoline price to continue");
        }
    }
    
  }
  
  
  return (
    <FuelContext.Provider value={{ fuelinfo, fuelPrices }}>
      {children}
    </FuelContext.Provider>
  );
}

export default FuelProvider;
