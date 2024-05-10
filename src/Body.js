import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";


const Body = () => {
  const [obj, setObj] = useState([]);

  
          useEffect(()=>{
            fetchData();
          },[]);

          const fetchData = async()=> {
            const data = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=23.2522328&lng=77.4014255&carousel=true&third_party_vendor=1");
            const json = await data.json();
            
            
            setObj(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            

          }
          const [searchText, setSearchText] = useState("");

  return (
    <div>
      <div className="m-4 flex justify-between">
        <div>
          <input
            className="boder-black border-2 py-1 px-4 mx-4"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>

          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg">
            Search
          </button>
        </div>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-5 rounded-lg"
        onClick={() => {
          const fil=obj.filter(
            (res)=>res.info.avgrate>4);
            setObj(fil);
            }}>
           Top Rated Restaurant
        
          </button>
          
      </div>
      <div><h1>What's on your mind?</h1>
   
      </div>
      
      <div className="flex">{
       obj.map((Restaurant) => (  <RestaurantCard resData = {Restaurant} />))
       
        }</div>
      </div>
  );
};
export default Body;
