import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ItemDetail } from '../components';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase-config';

export const ItemDetailContainer = () => {
  const {itemId} = useParams();
  const navigate = useNavigate();

  const [ item, setItem ] = useState({});
  const itemsCollectionRef = collection(db, "items");

  useEffect(() => {
      const getItem = async () => {
          const data = await getDocs(itemsCollectionRef);
          data.docs.filter( i => {
            if(i.id === itemId){
              setItem({id: i.id, ...i.data()});
            }
          });
      };
      getItem();
  }, []);

  const onNavigateBack = () => {
    navigate(-1);
  }
  
  return (
    <ItemDetail id={item.id} name={item.name} description={item.description} price={item.price} category={item.category} navigateBack={onNavigateBack} key={item.id} />
  )
}
