import React from 'react'
import Item from '../Item/Item'
import Spinner from '../Spinner/Spinner'


const ItemList = ({items}) => {

  if( !items.length)
    return <Spinner />
   return (
    <>
      {
        items.map((item) => (
            <Item key={item.id} item={item} />
        ))
      }
    </>
  )
}

export default ItemList