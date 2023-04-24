import React, {useReducer, createContext, useEffect} from "react";
import "./globalStyle.css";

// components=============
import Navbar from "./Components/Navbar/Navbar";
import MainContainer from "./Components/MainContainer/MainContainer";

// Context API 
export const SearchContext = createContext();

// Initial state
const initialState = {
  searchItem: "Poor Coders"
}

// reducer 
const reducer = (state, action) => {
  switch(action.type) {
    case "search":
      console.log(action.searchItem)
      return {
        searchItem: action.searchItem
      }
      default:
        return state
  }
}

function App() {

  const [searchValue, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log(searchValue.searchItem);
  }, [searchValue])

  return (
    <div className="bg-primary">
      <SearchContext.Provider value={{searchItem : searchValue.searchItem, searchDispatch : dispatch}}>
        <Navbar />
        <MainContainer />
      </SearchContext.Provider>
    </div>
  );
}

export default App;
