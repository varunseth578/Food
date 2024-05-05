import { useState } from "react";
const obj = [{"info": {
    "id": "263733",
    "name": "Pure Veg Meals by LunchBox",
    "cloudinaryImageId": "qv2jbeieltor1lgurvg0",
    "locality": "Chetak Bridge",
    "areaName": "Maharana Pratap Nagar",
    "costForTwo": "₹200 for two",
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
          "costForTwo": "₹140 for two",
          "cuisines": [
            "Cakes and Pastries",
            "Beverages",
            "Juices",
            "Bakery",
            "Sweets"
          ]}}]



const RestaurantCard = (props) => {
    const {resData}= props;
    const {name , cuisines , costForTwo ,cloudinaryImageId

    } = resData?.info; 
   
  return (
    <div >
    <div className="w-40  bg-slate-200 hover:bg-slate-300">
    <h3 className="font-bold">{name}</h3>
      <img
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
        className="w-20 h-10"/>

        <h4>{cuisines.join(",")}</h4>
       <h4>{costForTwo}</h4>
       
    </div>
    
    </div>
  );
};

const Body = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <div className="m-4 filter flex">
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
      </div>
      
      <div className="flex">{
       obj.map((Restaurant) => (  <RestaurantCard resData = {Restaurant} />))
       
        }</div>
      
      
     
    </div>
  );
};
export default Body;
