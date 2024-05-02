import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
import { FaArrowRight } from "react-icons/fa";


const PriceCard = ({ priceObj }) => {
    const { price, name, features } = priceObj;
    return (
        <div className=' bg-indigo-400 rounded-lg mt-4 p-5 relative'>
            <h4 className='text-center py-2'>
                <span className='text-3xl font-extrabold'>${price}</span>
                <span className='text-xl font-bold text-white'>/month</span>
            </h4>
            <h2 className='text-3xl font-bold py-2'>{name}</h2>
            <h2 className='text-xl font-bold underline text-white'>Features:</h2>
            <div className='mb-3'>
                {
                    features.map((feature, idx) => <Feature
                        key={idx}
                        feature={feature}
                    ></Feature>)
                }
            </div>
                <button className='text-lg bg-blue-700 w-full py-3 rounded-lg absolute bottom-0 left-0 text-white flex items-center gap-2 justify-center'>
                    <span>Buy Now</span>
                    <FaArrowRight />
                </button>
        </div>
    );
};

PriceCard.propTypes = {
    priceObj: PropTypes.object.isRequired
}

export default PriceCard;