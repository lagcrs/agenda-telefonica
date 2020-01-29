import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import api from '../services/api';

import './Main.css';

export default function Main() {
	const [contato, setContato] = useState('');
	const [contatos, setContatos] = useState([]);
	console.log(contatos)

	useEffect(() => {
		async function loadContatos(){
			const response = await api.get('/contatos');
			setContatos(response.data)
		}
		loadContatos();
	}, []);

	return (
		<>
		<div className="main-container">
			<header>
				<img src={Logo} alt="Logo"/> <br/>
				<h1>Agenda Telefônica</h1>

				<form>
					<input placeholder="Pesquisar contato" value={contato} onChange = { e => setContato(e.target.value)} />
					<button>Pesquisar</button>
				</form>
			</header>

			<div className="listagem">
				<ul>
					{
						contatos.map(con => (
							<li key={con._id}>
								<div>
									<strong>{con.nome}</strong> <br/>
									<small>{con.email}</small> <br/>
									<span>{con.telefone}</span>
								</div>
							</li>
						))
					}
				</ul>
			</div>

		</div>
		<div className="new-contato">
			<Link to="/new">
				+
			</Link>
		</div>
		</>			
	);
}
 