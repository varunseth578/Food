const Header = () => {
    return (
        <div className="flex justify-between border-b-2 border-black ">
            <div className="item-center flex">

            <img src="https://img.freepik.com/premium-vector/chef-food-restaurant-logo_7085-179.jpg"
            className="w-30 w-20"
                
            />

            </div>
            <div>
                <ul className="flex p-4 m-4 justify-between">
                    <li className="m-4 cursor-pointer">Home</li>
                    <li className="m-4 cursor-pointer">About Us</li>
                    <li className="m-4 cursor-pointer">Contact Us</li>
                    <li className="m-4 cursor-pointer">Cart</li>
                    
                </ul>
            </div>
        </div>

    )
}

export default Header;