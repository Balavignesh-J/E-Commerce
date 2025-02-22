import React,{useState, useEffect} from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import {search_data} from '../API/API_Handle'

const Search_result = () => {
  const [Productsdata, setProductsdata] = useState([]);
  
  const [searchvalue] = useSearchParams()
  const query = searchvalue.get("q")

  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(()=>{
    if(!query) return;

    const search_products = async () => {
      try{
        const api_data = await search_data(query);
        setProductsdata(api_data.products || []);
      }
      catch(err){
        seterror(err.message)
      }
      finally{
        setloading(false)
      }
    };
    search_products();
  },[query])
  

  return (
    <div>
      {loading && 
      <div className="spinner w-40 h-40 rounded-full mx-auto mt-20"></div>
      }

      {
        (Productsdata.length === 0) ? (
          <div className="text-center text-2xl mt-10">No products Found</div>
        )
        : (
        <div className="flex flex-wrap justify-start gap-2 mx-8 my-6">
          {Productsdata.map((product) => (
            <div
              className="flex flex-col justify-center mb-6 items-center w-50 h-auto border border-blue-800 relative"
              key={product.id}
            >
              <Link to={`/${product.id}`}>
                <img src={product.thumbnail} alt="img" className="w-40 h-40" />
              </Link>
              <div>
                <h3 className="font-bold">{product.title}</h3>
                <p>
                  ${product.price}
                  <span className="bg-red-600 text-white w-20 rounded-3xl ml-3 absolute top-8 right-0 rotate-45 text-center">         
                    <s>${product.discountPercentage}</s>
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
        )
      }
    </div>
  )
}

export default Search_result