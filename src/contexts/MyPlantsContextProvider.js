import React, { createContext, useContext, useReducer } from "react";

export const MyPlantsContext = createContext();
export const useMyPlants = () => useContext();

const initState = {
  myplants: JSON.parse(localStorage.getItem("myplants")),
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "getMyPlants":
      return { ...state, myplants: action.payload };
    default:
      return state;
  }
};

const MyPlantsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  //! FUNC FOR GETING FLOWERS FROM OUR CART IN LOCALSTORAGE
  const getMyPlants = () => {
    let myplants = JSON.parse(localStorage.getItem("myplants")); //!WE SAVE OUR RESULT OF OUR REQUEST WITH DATA IN VARIABLE myplants

    if (!myplants) {
      //! CHECK IS OUR VARIABLE EMPTY IF ITIS TRUE THAT HE IS EMPTY , SO WE SET BY KEY myplants OUR OBJECT
      localStorage.setItem(
        "myplants",
        JSON.stringify({ flowers: [], totalPrice: 0 })
      );
      myplants = {
        flowers: [],
        totalPrice: 0,
      };
    }
    //! HERE WE SAVE IN OUR STATE
    dispatch({
      type: "getMyplants",
      payload: myplants,
    });
  };
  let value = {};
  return (
    <MyPlantsContext.Provider value={value}>
      {children}
    </MyPlantsContext.Provider>
  );
};

export default MyPlantsContextProvider;
