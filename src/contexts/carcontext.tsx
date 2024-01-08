import React, { useState, createContext, ReactNode, useContext, useEffect } from "react";

interface CarContextProps {
  carinfo: {
    gasolineAutonomy: number;
    alcoholAutonomy: number;
  };
  carAutonomy: (gasolineAutonomy: number, alcoholAutonomy: number) => void;
}

export const CarContext = createContext<CarContextProps>({
    carinfo: {
      gasolineAutonomy: 0,
      alcoholAutonomy: 0,
    },
    carAutonomy: () => {},
  });
  

function CarProvider({ children }: { children: ReactNode }) {
  const [carinfo, setCar] = useState({
    gasolineAutonomy: 0,
    alcoholAutonomy: 0,
  });

  function carAutonomy(gasolineAutonomy: number, alcoholAutonomy: number) {
    if (gasolineAutonomy !== 0 && alcoholAutonomy !== 0) {
      setCar({
        gasolineAutonomy: gasolineAutonomy,
        alcoholAutonomy: alcoholAutonomy,
      });
    }
    else
    {
        if (gasolineAutonomy === 0 && alcoholAutonomy === 0) {
          alert("Please provide the autonomy to continue");
        } else if (alcoholAutonomy === 0) {
          alert("Please provide the alcohol autonomy to continue");
        } else if (gasolineAutonomy === 0) {
          alert("Please provide the gasoline autonomy to continue");
        }
    }
  }
  
  
  return (
    <CarContext.Provider value={{ carinfo, carAutonomy }}>
      {children}
    </CarContext.Provider>
  );
}

export default CarProvider;
