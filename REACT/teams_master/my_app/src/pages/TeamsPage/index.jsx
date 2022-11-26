import React, { useContext } from 'react';
import User from '../../components/User';
import { Context } from '../../context';

// На странице TeamsPage из состояния users достать
//информацию и сформировать из объектов компоненты
//User.Если массив пустой, вывести сообщение 'No users'

export default function TeamsPage() {
	const { users } = useContext(Context);

	return (
		<div>
			{users.length
				? users.map((el) => <User key={el.id} {...el} />)
				: 'No users'}
		</div>
	);
}
