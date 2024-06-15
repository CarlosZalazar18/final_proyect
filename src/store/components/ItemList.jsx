import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase-config';
import { ItemCard } from './ItemCard';

export const ItemList = ({ category }) => {
  const [ items, setItems ] = useState([]);
  const itemsCollectionRef = collection(db, "items");

  useEffect(() => {
      const getItems = async () => {
          const data = await getDocs(itemsCollectionRef);
          if(category === 'todos'){
            setItems(data.docs.map( (doc) => ({...doc.data(), id: doc.id})));
          }else{
            const results = data.docs.map( (doc) => ({...doc.data(), id: doc.id}));
            setItems(results.filter(r => r.category === category));
          }
      };
      getItems();
  }, []);

  return (
    <div className='row rows-cols-1 row-cols-md-3 g-3'>
        { 
            items.map(i => {
                return <ItemCard key={i.id} { ...i } /> 
            })
        }
    </div>
  )
}
