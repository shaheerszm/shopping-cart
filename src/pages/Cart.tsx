import styled from "styled-components";
import { v4 as uuid } from 'uuid';
import { item } from '../features/cart-slice'
import { useAppDispatch, useAppSelector } from "../app/hooks";
import CartCard from "../components/CartCard";

const Cart = () =>  {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(state => state.cart);
  console.log(cartItems);
  let total = cartItems.reduce(
    (currentTotal, item) => item.price*item.quantity + currentTotal, 0
  );
  const productCards = cartItems.map((item: item) => (
    <CartCard
      key={uuid()}
      {...item}
    />
  ))

  return (
    <CartWrapper>
      <ShopWrapper>{productCards}</ShopWrapper>
      <Total>
        Your total is: ${total}
        <button>
          Checkout
        </button>
      </Total>
    </CartWrapper>
    )
}

const CartWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 4rem;
  margin-top: 4rem;
  margin-left: 4rem;

`

const Total = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  font-size: 3rem;
  gap: 20px;
  margin-top: 4rem;

`

const ShopWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(28rem, 36rem));
    justify-content: center;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 36rem);
  }

  animation: fadeIn ease 2s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export default Cart;