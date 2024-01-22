import axios from "axios";
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { API } from "../helpers/consts";

export const flowerContext = createContext();
export const useFlower = () => useContext(flowerContext);

const initState = {
  flowers: [],
  flowerDetails: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "getFlower":
      return { ...state, flowers: action.payload };
    case "getFlowerDetails":
      return { ...state, flowerDetails: action.payload };
    default:
      return state;
  }
};

const FlowerContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const navigate = useNavigate();
  const location = useLocation();

  //!function for ADDING
  const addFlower = async (newFlower) => {
    try {
      await axios.post(API, newFlower);
      navigate("/flowers");
    } catch (error) {
      console.log(error);
    }
  };

  //!function for GET FLOWERS
  const getFlower = async () => {
    try {
      let res = await axios.get(`${API}${window.location.search}`);
      dispatch({
        type: "getFlower",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  //!function for GET ONE FLOWER FROM JSON
  const getFlowerDetails = async (id) => {
    try {
      let { data } = await axios.get(`${API}/${id}`);
      dispatch({
        type: "getFlowerDetails",
        payload: data,
      });
      navigate("/flowers");
    } catch (error) {
      console.log(error);
    }
  };

  //!function for DELETE ONE FLOWER
  const deleteFlower = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      getFlower();
    } catch (error) {
      console.log(error);
    }
  };

  //!function for SAVE CHANGED FLOWER
  const saveEditedFlower = async (id, editedFlower) => {
    try {
      await axios.patch(`${API}/${id}`, editedFlower);
      getFlower();
      navigate("/flowers");
    } catch (error) {
      console.log(error);
    }
  };

  const fetchByParams = async (query, value) => {
    const search = new URLSearchParams(location.search);
    if (value === "ALL") {
      search.delete(query);
    } else {
      search.set(query, value);
    }
    const url = `${location.pathname}?${search.toString()}`;
    navigate(url);
  };

  const [searchParams, setSearchParams] = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("q") || "");

  useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  useEffect(() => {
    getFlower();
  }, [searchParams]);

  let value = {
    flowers: state.flowers,
    flowerDetails: state.flowerDetails,
    searchParams,
    setSearchParams,
    search,
    setSearch,
    addFlower,
    getFlower,
    getFlowerDetails,
    deleteFlower,
    saveEditedFlower,
    fetchByParams,
  };
  return (
    <flowerContext.Provider value={value}>{children}</flowerContext.Provider>
  );
};

export default FlowerContextProvider;
