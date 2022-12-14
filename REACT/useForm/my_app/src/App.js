import { useState } from 'react';
import Button from './components/Button';
import {Link} from 'react-router-dom'
import Modal from './components/Modal';

function App() {
	const [modal, setModal] = useState(false);

	return (
		<div>
			<Link to='/registration_form' style={{ textDecoration: 'none' }}>
				<Button color='yellow' onClick={() => setModal(true)}>
					Open modal window
				</Button>
			</Link>

			<Modal modal={modal} setModal={setModal} />
		</div>
	);
}

export default App;
