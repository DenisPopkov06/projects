import emptyLogo from "./empty-cart.png"
import { NavLink } from "react-router-dom";
const CartEmpty = () => {
  return (
    <div className="container--cart">
      <div className="cart cart--empty">
        <h2>
          Корзина пустая <icon>😕</icon>
        </h2>
        <p>
          Вероятней всего, вы не заказывали ещё пиццу.
          <br />
          Для того, чтобы заказать пиццу, перейди на главную страницу.
        </p>
        <img src={emptyLogo} alt="Empty cart" />
        <NavLink to="/" className="button button--black">
          <span>Вернуться назад</span>
        </NavLink>
      </div>
    </div>
  );
};

export default CartEmpty;
