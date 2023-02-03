import React, { createContext, useContext, useReducer } from "react";

export const MyPlantsContext = createContext();
export const useMyPlants = () => useContext(MyPlantsContext);

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
    let myplants = JSON.parse(localStorage.getItem("myplants"));

    if (!myplants) {
      localStorage.setItem(
        "myplants",
        JSON.stringify({ flowers: [], totalPrice: 0 })
      );
      myplants = {
        flowers: [],
        totalPrice: 0,
      };
    }
    dispatch({
      type: "getMyplants",
      payload: myplants,
    });
  };

  //! FUNCT FOR ADDIN TO CART

  const addToMyPlants = (flower) => {
    let myplants = JSON.parse(localStorage.getItem("myplants"));
    if (!myplants) {
      myplants = {
        flowers: [],
        totalPrice: 0,
      };
    }

    let newFlower = {
      item: flower,
      count: 1,
      subPrice: +flower.price,
    };

    let hasFlowerInMyPlants = myplants.flowers.filter(
      (elem) => elem.item.id === flower.id
    );
    if (hasFlowerInMyPlants.length === 0) {
      myplants.flowers.push(newFlower);
    } else {
      myplants.flowers = myplants.flowers.filter(
        (elem) => elem.item.id !== flower.id
      );
    }

    myplants.flowers.push(newFlower);
    myplants.totalPrice = calcTotalPrice(myplants.flowers);
    localStorage.setItem("myplants", JSON.stringify(myplants));
    dispatch({
      type: "getMyPlants",
      payload: myplants,
    });
  };

  //! FUNC FOR CHANGE COUNT
  const incrementCount = (id) => {
    let myplants = JSON.parse(localStorage.getItem("myplants"));
    myplants.flowers = myplants.flowers.map((flower) => {
      if (flower.item.id === id) {
        flower.count = flower.count + 1;
        flower.subPrice = calcSubPrice(flower);
      }
      return flower;
    });
    myplants.totalPrice = calcTotalPrice(myplants.flowers);
    localStorage.setItem("myplants", JSON.stringify(myplants));
    dispatch({
      type: "getMyPlants",
      payload: myplants,
    });
  };

  const decrementCount = (id) => {
    let myplants = JSON.parse(localStorage.getItem("myplants"));
    myplants.flowers = myplants.flowers.map((flower) => {
      if (flower.item.id === id && flower.count !== 1) {
        flower.count = flower.count - 1;
        flower.subPrice = calcSubPrice(flower);
      }
      return flower;
    });
    myplants.totalPrice = calcTotalPrice(myplants.flowers);
    localStorage.setItem("myplants", JSON.stringify(myplants));
    dispatch({
      type: "getMyPlants",
      payload: myplants,
    });
  };

  //! FUNC FOR DELETE FLOWER FROM BASKET

  const deleteFromMyplants = (id) => {
    let myplants = JSON.parse(localStorage.getItem("myplants"));
    myplants.flowers = myplants.flowers.filter(
      (flower) => flower.item.id !== id
    );
    myplants.totalPrice = calcTotalPrice(myplants.flowers);
    localStorage.setItem("myplants", JSON.stringify(myplants));
    dispatch({
      type: "getMyPlants",
      payload: myplants,
    });
  };

  function hasInMyplants(id) {
    let myplants = JSON.parse(localStorage.getItem("myplants"));

    if (myplants) {
      let newMyplants = myplants.flowers.filter((elem) => elem.item.id === id);
      return newMyplants.length > 0 ? true : false;
    } else {
      myplants = {
        flower: [],
        totalPrice: 0,
      };
    }
  }

  function calcTotalPrice(flowers) {
    return flowers.reduce((acc, cur) => {
      return (acc += cur.subPrice);
    }, 0);
  }

  function calcSubPrice(flower) {
    return +flower.count * flower.item.price;
  }

  let value = {
    myplants: state.myplants,
    getMyPlants,
    addToMyPlants,
    incrementCount,
    decrementCount,
    deleteFromMyplants,
    hasInMyplants,
  };
  return (
    <MyPlantsContext.Provider value={value}>
      {children}
    </MyPlantsContext.Provider>
  );
};

export default MyPlantsContextProvider;
