import React from 'react'
import { Navbar } from '../../ui'
import { Route, Routes } from 'react-router-dom'
import { ItemDetailContainer, ItemListContainer } from '../pages'

export const ItemsRoutes = () => {
  return (
    <>
        <Navbar />
        <div className="container">    
            <Routes>
                <Route path="item/:itemId" element={<ItemDetailContainer />}/> 

                <Route path="/categoria/:catName" element={<ItemListContainer />}/>
            </Routes>
        </div>
    </>
  )
}
