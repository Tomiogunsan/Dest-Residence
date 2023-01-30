import React from 'react'


export default function Slider() {
    const [listings, setListings] = useState(null)
  const[loading, setLoading] = useState(true)
  useEffect(() => {
    async function  fetchListings (){
      const listingsRef = collection(db, 'listings')
      const q = query(listingsRef, orderBy('timestamp', 'desc'), 
      limit(4))
      const querySnap = await getDocs(q)
      let listings = [];
      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        })
      });
      setListings(listings);
     setLoading(false)
    }
    fetchListings();
  }, []);
  if(loading){
    return <Spinner/>;
  }
  if(listings.length === 0){
    return <></>
  }
  return (
    <div>slider</div>
  )
}