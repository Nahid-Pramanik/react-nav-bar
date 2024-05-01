import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";

const Header = () => {

    const [open, setOpen] = useState(false);

    const hendleAddToNav = () => {
        setOpen(!open);
    }

    return (
        <div>
            <div className="text-xl bg-blue-950">

                <button onClick={hendleAddToNav} className="md:hidden ml-3 mt-2">
                    <span>{open === true ?
                        <IoCloseCircleOutline className="text-3xl text-white" />
                        : <IoMdMenu className="text-3xl text-white" />}
                    </span>
                </button>

                <nav>
                    <ul className={`md:flex duration-500 absolute z-50 md:static bg-blue-950 text-white w-full ${ open ? 'left-0' : '-left-full'}`}>
                        <li className="px-5 py-3"><a href="/home">Home</a></li>
                        <li className="px-5 py-3"><a href="/about">About</a></li>
                        <li className="px-5 py-3"><a href="/contact">Contact</a></li>
                        <li className="px-5 py-3"><a href="/products">Products</a></li>
                        <li className="px-5 py-3"><a href="/service">Service</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;