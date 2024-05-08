import { useState } from "react";
import RestaurantCard from "./RestaurantCard";







const Body = () => {
  const [obj, setObj] = useState([{"info": {
    "id": "263733",
    "name": "Pure Veg Meals by LunchBox",
    "cloudinaryImageId": "qv2jbeieltor1lgurvg0",
    "locality": "Chetak Bridge",
    "areaName": "Maharana Pratap Nagar",
    "costForTwo": "₹200 for two",
    "avgrate": "3",

    "cuisines": [
      "Biryani",
      "North Indian",
      "Desserts",
      "Beverages"
    ]}},{
        "info": {
          "id": "697116",
          "name": "Ghamandi lassi",
          "cloudinaryImageId": "b978026e2f78aa777bf93ffa95fed662",
          "locality": "Jyoti Talkies Shopping Complex",
          "areaName": "MP Nagar",
          "avgrate": "5",
          "costForTwo": "₹140 for two",
          "cuisines": [
            "Cakes and Pastries",
            "Beverages",
            "Juices",
            "Bakery",
            "Sweets"
          ]}}]);

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
      
      <div className="flex">{
       obj.map((Restaurant) => (  <RestaurantCard resData = {Restaurant} />))
       
        }</div>
      </div>
  );
};
export default Body;
