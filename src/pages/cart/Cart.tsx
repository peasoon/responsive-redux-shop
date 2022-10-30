import * as React from 'react';

interface ICartProps {
}

const Cart: React.FunctionComponent<ICartProps> = (props) => {
	return <div className="cart">
		<h1 className='text-center'>This is a cart page</h1>
	</div>;
};

export default Cart;
