import {LOGO_URL} from "./utils/constant"
const Header = () => {
    return (
        <div className="flex justify-between boder-black border-2 m-3">
            <div className="item-center flex">

            <img src={LOGO_URL}
            className="w-30 w-20 m-4"
                
            />

            </div>
            <div>
                <ul className="flex m-3 p-4 justify-between">
                    <li className="m-4 cursor-pointer">Home</li>
                    <li className="m-4 cursor-pointer">About Us</li>
                    <li className="m-4 cursor-pointer">Contact Us</li>
                    <li className="m-4 cursor-pointer">Cart</li>
                    <li className="m-4 cursor-pointer">Login</li>
                    
                </ul>
            </div>
        </div>

    )
}

export default Header;