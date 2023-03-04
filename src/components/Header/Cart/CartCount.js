import './CartCount.css';

const CartCount = props => {
    return <span className='cart-count'>{props.count}</span>
};

export default CartCount;