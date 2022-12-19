import React from 'react';
import {
	addCard,
	changeCard,
	deleteCard,
} from '../../store/reducers/languageCardsReducer';
import { useDispatch, useSelector } from 'react-redux';
import LanguageCard from '../LanguageCard';

export default function LanguageCards() {
	const dispatch = useDispatch(); // создаем диспетчер

	const state = useSelector((state) => state.languageCards);
	console.log(state);

	const submit = (event) => {
		event.preventDefault();
		const { rus, eng } = event.target;
		dispatch(
			addCard({
				rus: rus.value,
				eng: eng.value,
			})
		);
		rus.value = '';
		eng.value = '';
	};

	const change_card = (id) => dispatch(changeCard(id));

	const delete_card = (id) => dispatch(deleteCard(id));

	return (
		<div>
			<form onSubmit={submit}>
				<input type='text' name='rus' placeholder='Russian' />
				<input type='text' name='eng' placeholder='English' />
				<button>Add</button>
			</form>

			<div>
				{state.map((el) => (
					<LanguageCard
						key={el.id}
						{...el}
						change_card={change_card}
						delete_card={delete_card}
					/>
				))}
			</div>
		</div>
	);
}
