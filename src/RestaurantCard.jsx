import {CDN_URL} from "./utils/constant"
const RestaurantCard = (props) => {
    const {resData}= props;
    const {name , cuisines , costForTwo ,cloudinaryImageId

    } = resData?.info; 
   
  return (
    <div className="p-4 m-4" >
    <div className="p-4 m-4 w-40  bg-slate-200 hover:bg-slate-300">
    <h2 className="font-bold">{name}</h2>
      <img
        src={CDN_URL+cloudinaryImageId}
        className="w-20 h-10"/>

        <h3>{cuisines.join(",")}</h3>
       <h4>{costForTwo}</h4>
       
    </div>
    
    </div>
  );
};

export default RestaurantCard;
