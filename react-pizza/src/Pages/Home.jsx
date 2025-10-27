import { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Sort from "../components/Sort/Sort";
import Categories from "../components/Categories/Categories";
import Skeleton from "../components/PizzaBlock/Skeleton";
import { setCategoriesType, setSort } from "../redux/slices/filterSlice";
import { SearchContext } from "../App";
import axios from "axios";

const Home = () => {
  const { categoriesType, sort } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const { searchValue } = useContext(SearchContext);
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const order = `&order${sort.sortName.includes("-") ? "=desc" : "=asc"}`;
  const categories = categoriesType === 0 ? "?" : `?category=${categoriesType}`;
  const sortBy = `&sortBy=${sort.sortName.replace("-", "")}`;

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://68efdb57b06cc802829ef4c8.mockapi.io/items${
          categories + sortBy + order
        }`
      )
      .then((res) => {
        setPizzas(res.data);
        setIsLoading(false);
      });
  }, [categories, sortBy, order]);

  const skeleton = Array.from({ length: 6 }).map((_, index) => (
    <Skeleton key={index} />
  ));

  const pizzasBlocks = pizzas
    .filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    )
    .map((item) => <PizzaBlock key={item.id} {...item}/>);

  return (
    <>
      <div className="container__top">
        <Categories
          value={categoriesType}
          onClickCategorie={(i) => dispatch(setCategoriesType(i))}
        />
        <Sort value={sort} onClickSort={(obj) => dispatch(setSort(obj))} />
      </div>
      <h2 className="content__title">{!isLoading && (pizzasBlocks.length ? "Все пиццы" : "Извините, но таких пицц у нас нет :(")}</h2>
      <div className="content__items">
        {isLoading ? skeleton : pizzasBlocks}
      </div>
    </>
  );
};

export default Home;
