import { FunctionComponent, ReactElement, useState } from 'react'

type CardProps = {
  title: string,
  paragraph?: string
}

const ShopPage: FunctionComponent<CardProps> = ({ title }) =>  {
  return <div>{title}</div>
}

export default ShopPage;