import React from 'react'
import Item from '../Item/Item'

const ItemList = ({items}) => {

  if( !items.length)
    return <div className="text-center">
            <div className="spinner-border m-5" role="status">
              <span className="sr-only"></span>
            </div>
          </div>

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