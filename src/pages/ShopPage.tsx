import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useAppDispatch } from '../app/hooks'
import ProductCard from '../components/ProductCard'
import { setProducts } from '../features/cart-slice'
import { item } from '../features/cart-slice'
import { v4 as uuid } from 'uuid';

interface Entry {
  id: number,
  title: string,
  price: number,
  image: string,
  category?: string,
}

const ShopPage = () =>  {
  const dispatch = useAppDispatch();
  const [inventory, setInventory] = useState<item[]>([]);

  const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products?limit=20');
    let data = await response.json();
    let items: item[] = data.map((entry: Entry) => (
      {
        id: entry.id,
        name: entry.title,
        price: entry.price,
        quantity: 1,
        img: entry.image,
      }
    ))

    return items;
  }

  const loadProducts = async () => {
    let products = await fetchProducts();
    setInventory(products);
    dispatch(setProducts(products))
  }


  useEffect(() => {
    loadProducts();
  }, [])

  const productCards = inventory.map((item: item) => (
    <ProductCard
      key={uuid()}
      {...item}
    />
  ))

  return <ShopWrapper>{productCards}</ShopWrapper>
}

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

export default ShopPage;