import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Spinner from '../components/Spinner';
import { db } from '../firebase';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {EffectFade, Autoplay, Navigation, Pagination} from 'swiper'
import 'swiper/css/bundle';
import {FaShare} from 'react-icons/fa';
import {MdLocationOn} from 'react-icons/md';

export default function Listings() {
  const params = useParams();
  const [listing, setListing] = useState(null)
  const[loading, setLoading] = useState(true);
  const[shareLinkCopied, setShareLinkCopied] = useState(false)
  SwiperCore.use([Autoplay, Navigation, Pagination])
  useEffect(()=>{
    async function fetchListing(){
      const docRef = doc(db, 'listings', params.listingId);
      const docSnap = await getDoc(docRef)
      if(docSnap.exists()){
        setListing(docSnap.data())
        setLoading(false)
      }
    }
    fetchListing();
   
  }, [params.listingId])
  if(loading){
    return <Spinner /> 
  }else
  return (
    <main>
      <Swiper slidesPerView={1} navigation pagination={{type:'progressbar'}}
      effect='fade' modules={[EffectFade]} autoplay={{delay:3000}}>
        {listing.imgUrls.map((url, index) => (
          <SwiperSlide key={index}>
            <div className=' relative w-full overflow-hidden h-[300px]'
            style={{background:`url(${listing.imgUrls[index]}) center no-repeat`,
            backgroundSize: 'cover'}}>

            </div>
          </SwiperSlide>
        )
        )}
      </Swiper>
      <div className='fixed top-[13%] right-[3%] z-10 bg-white 
      cursor-pointer border-2 border-gray-400 rounded-full w-12 h-12
      flex justify-center items-center ' onClick={() => {
        navigator.clipboard.writeText(window.location.href)
        setShareLinkCopied(true)
        setTimeout(()=>{
          setShareLinkCopied(false)
        }, 2000)
      }}>
          <FaShare className='text-lg text-slate-500 '/>
      </div>
      {shareLinkCopied && (<p className='fixed top-[19%] right-[5%]
      font-semibold border-2 border-gray-400 rounded-md
       bg-white z-10 p-1'>Linked copied</p>)}

       <div className='flex flex-col md:flex-row max-w-[1270px] lg:mx-auto m-4 p-4 rounded-lg  shadow-lg bg-white lg:space-x-5' >
        <div className=' w-full h-[200px] lg-[400px]'>
          <p className='text-2xl font-bold mb-3 text-blue-900 '>
            {listing.name} - $ {listing.offer ? listing.discountedPrice.toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",") : 
                  listing.regularPrice.toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  {listing.type === 'rent' ? " / month" : ''}
          </p>
          <p>
            {lis}
          </p>
        </div>
        <div className='bg-blue-300 w-full h-[200px] lg-[400px] z-10 overflow-x-hidden '></div>
       </div>
    </main>
  )
}
