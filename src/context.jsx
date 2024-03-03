import { createContext, useEffect, useState } from "react";
export const MyGlobalContext = createContext();
export const MyGlobalProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [favoritesList, setFavoritesList] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [basket, setBasket] = useState([]);
  const getProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      if (!response.ok) {
        throw new Error(
          `Operation has failed with a status code: ${response.status}`
        );
      }
      const { products } = await response.json();
      setProductList(products);
    } catch (err) {
      console.error(err);
      setIsError(true);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    getProducts();
  }, []);
  if (isError) {
    return <h1>There is an error...</h1>;
  }
  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };
  const toggleFavorites = (productId, productData) => {
    const isInFavorites = favoritesList.find((item) => item.id === productId);
    if (isInFavorites) {
      setFavoritesList((prevState) =>
        prevState.filter((item) => item.id !== productId)
      );
    } else {
      setFavoritesList((prevState) => [...prevState, productData]);
    }
  };
  const handleSearchValue = (event) => {
    setSearchValue(event.target.value);
  };
  const filteredProductList = productList.filter((item) =>
    item.title.toLowerCase().includes(searchValue.trim().toLowerCase())
  );
  const addToBasket = (info) => {
    setBasket((prevState) => [...prevState, info]);
  };
  const deleteBasketItem = (productId) => {
    setBasket(function (prevState) {
      return prevState.filter((item) => item.id != productId);
    });
  };
  const value = {
    isExpanded,
    toggleNavbar,
    productList,
    isLoading,
    favoritesList,
    toggleFavorites,
    searchValue,
    handleSearchValue,
    filteredProductList,
    basket,
    addToBasket,
    deleteBasketItem,
  };
  return (
    <MyGlobalContext.Provider value={value}>
      {children}
    </MyGlobalContext.Provider>
  );
};
