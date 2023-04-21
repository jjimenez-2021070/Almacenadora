import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({
	todos,
	handleUpdateTodo,
	handleDeleteTodo,
	handleCompleteTodo,
}) => {
	return (
		<ul>
			<table class="table">
						<thead>
							<tr>
								<th scope="col-8">Tarea</th>
								<th scope="col">Nombre y apellido</th>
								<th scope="col">Fecha de inicion y cierre</th>
								<th scope="col">descripcion</th>
							</tr>
						</thead>
					</table>
			{todos.map(todo => (
				<TodoItem
					key={todo.id}
					todo={todo}
					handleUpdateTodo={handleUpdateTodo}
					handleDeleteTodo={handleDeleteTodo}
					handleCompleteTodo={handleCompleteTodo}
				/>
			))}
		</ul>
	);
};
