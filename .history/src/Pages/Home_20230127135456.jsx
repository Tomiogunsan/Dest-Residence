import { collection, getDoc, getDocs, limit, orderBy, query } from 'firebase/firestore';
import React from 'react';


export default function Home() {
  
  return (
    <div>
      <Slider />
    </div>
  )
}
