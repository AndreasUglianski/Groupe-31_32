import React from 'react';
import s from './index.module.css';

export default function AddTeamForm() {
	const submit_form = (event) => {
		event.preventDefault();
		const { team_title } = event.target;
		console.log(team_title.value);
		team_title.value = '';
	};

	return (
		<form className={s.add_team_form} onSubmit={submit_form}>
			<p>Add Team</p>
			<input type='text' name='team_title' placeholder="Team's_title" />
			<button>Add Team</button>
		</form>
	);
}
// Научить форму при отправке собирать данные,
// введенные в инпут, и выводить их в консоль
