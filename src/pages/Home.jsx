import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';
import axios from "axios";

function Home() {
  const API_URL = "/api/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try {
      const result = await axios.get(API_URL);
      console.log("Fetched data:", result.data); 
      setPosts(result.data);
    }
    catch (error) {
      console.log("Got an Error", error);
      setPosts([]);
    } finally {
      // ✅ Always turn off loading, even on error
    setLoading(false);
    }
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      {
        loading ? 
        <div className="flex justify-center items-center h-screen">
          <Spinner />
        </div> :
          posts.length > 0 ?
            (
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-80vh' >
                {
                  posts.map((post) => (
                    <Product key={post.id} post={post} />
                  ))
                }
              </div>
            ) :
            <div className='flex justify-center items-center'>
              <p>No Data Found</p>
            </div>
      }
    </div>
  )
}

export default Home
