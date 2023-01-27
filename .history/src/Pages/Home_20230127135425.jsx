import { collection, getDoc, getDocs, limit, orderBy, query } from 'firebase/firestore';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Slider from '../components/Slider';
import Spinner from '../components/Spinner';
import { db } from '../firebase';

export default function Home() {
  
  return (
    <div>
      <Slider />
    </div>
  )
}
