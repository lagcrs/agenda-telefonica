import React from 'react';
import { Link } from 'react-router-dom'
import './NewContato.css';
import Header from '../components/Header';

export default function NewContato() {
	return (
		<div className="new-container main">
			<Header />
			<form>
				<input type="text" placeholder="Digite Nome"/>
				<input type="text" placeholder="Digite Email"/>
				<input type="text" placeholder="Digite Telefone"/>
				<button>Cadastrar</button>
			</form>
			<Link to="/">
				<button>Voltar</button>
			</Link>
		</div>
	);
}
