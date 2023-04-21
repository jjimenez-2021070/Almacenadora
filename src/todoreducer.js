/* 
    todo: {
        id: 212310301231,
        description: "Aprender Php"
        done: 
    }

*/

export const todoReducer = (initialState, action) => {
	switch (action.type) {
		case 'Add Todo':
			return [...initialState, action.payload];

		case 'Delete Todo':
			return initialState.filter(todo => todo.id !== action.payload);

		case 'Complete Todo':
			return initialState.map(todo => {
				if (todo.id === action.payload) {
					return {
						...todo,
						done: !todo.done,
					};
				}

				return todo;
			});

		case 'Update Todo':
			return initialState.map(todo => {
				if (todo.id === action.payload.id) {
					return {
						...todo,
						description: action.payload.description,
						name: action.payload.name,
						startDate: action.payload.startDate,
						finishDate: action.payload.finishDate,
						descri: action.payload.descri
					};
				}

				return todo;
			});

		default:
			return initialState;
	}
};
