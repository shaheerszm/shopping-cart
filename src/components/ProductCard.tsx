import styled from 'styled-components'
import { item } from '../features/cart-slice'
import { useAppDispatch } from '../app/hooks'
import { addItem, removeItem } from '../features/cart-slice'

const ProductCard = (product: item) => {
  const dispatch = useAppDispatch();

  return (
    <ProductCardWrapper>
      <ImageContainer>
        <Image src={product.img} alt={product.name} />
      </ImageContainer>
      <Details>
        <Info>
          <Title>{product.name}</Title>
          <div>${product.price.toFixed(2)}</div>
        </Info>
        <button onClick={() => dispatch(addItem(product))}>
          Add to cart
        </button>
      </Details>
    </ProductCardWrapper>
  )
}

const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.grey.main};
  border-radius: 10px;
  background-color: #fff;
  font-size: 2rem;
`

const Image = styled.img`
  height: 100%;
`

const ImageContainer = styled.div`
  height: 25rem;
  padding: 3rem;
  margin: 0 auto;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  height: 100%;
  padding: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.grey.main};
  color: ${({ theme }) => theme.colors.dark}
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  height: 100%;
`

const Title = styled.div`
  font-weight: bold;
`

export default ProductCard
