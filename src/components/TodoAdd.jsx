import React from 'react';
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ handleNewTodo }) => {
	const { description, name, startDate, finishDate, descri, onInputChange, onResetForm,
	} = useForm({
		description: '',
		name: '',
		startDate: '',
		finishDate: '',
		descri: ''
	});

	const onFormSubmit = (e) => {
		e.preventDefault();

		if (description.length <= 1) return;

		const newTodo = {
			id: new Date().getTime(),
			description,
			name,
			startDate,
			finishDate,
			descri,
			done: false,
		};

		handleNewTodo(newTodo);
		onResetForm();
	};

	return (
		<>

		<link rel="stylesheet" href="./styles/style.css"></link>
			<form onSubmit={onFormSubmit}>

				<ul>
					<li>
						<h4>Tarea:</h4>
						<input
							type="text"
							className="input-add"
							name="description"
							value={description}
							onChange={onInputChange}
							placeholder="¿Qué hay que hacer?"
						/>
					</li>
					<li>
						<h4>Nombre y apellido:</h4>
						<input
							type="text"
							className="input-add"
							name="name"
							value={name}
							onChange={onInputChange}
							placeholder="Nombre"
						/>
					</li>
					<li>
						<h4>Fecha de inicio y cierre:</h4>
						<input
							type="date"
							className="input-add"
							name="startDate"
							value={startDate}
							onChange={onInputChange}
							placeholder="Fecha de inicio"
						/>

						<input
							type="date"
							className="input-add"
							name="finishDate"
							value={finishDate}
							onChange={onInputChange}
							placeholder="Fecha de cierre"
						/>

					</li>

					<li>
						<h4>Descripcion:</h4>
						<input
							type="text"
							className="input-add"
							name="descri"
							value={descri}
							onChange={onInputChange}
							placeholder="Describe tu tarea"
						/>
					</li>

					<li>
						<button className="btn-add" type="submit">
							Agregar
						</button>
					</li>

					


				</ul>


			</form>
		</>
	);
};
