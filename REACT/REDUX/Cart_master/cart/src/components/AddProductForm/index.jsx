import React from 'react';
import { addProduct } from '../../store/reducers/productReducer';
import { useDispatch } from 'react-redux';


export default function AddProductForm() {

    const dispatch =useDispatch()

    const submit = event => {
        event.preventDefault()
        const { title, price } = event.target;
        dispatch(addProduct({
            id: Date.now(),
            title: title.value,
            price: price.value
        }))
        title.value = ''
        price.value = ''
    }

	return (
		<form onSubmit={submit}>
			<input type='text' name='title' placeholder='Title' />
			<input type='number' name='price' placeholder='Price' />
			<button>Add product</button>
		</form>
	);
}
