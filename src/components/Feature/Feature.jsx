import PropTypes from 'prop-types';
import { FaCheckDouble } from "react-icons/fa6";

const Feature = ({feature}) => {
    return (
        <div className='flex items-center gap-2 mt-3 text-start'>
            <FaCheckDouble  className='text-blue-700'/>
            <span className='font-semibold'>{feature}</span>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;