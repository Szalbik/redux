import reducer from './todo';

describe('Todo Reducer', () => {
  test('Return a state object', () => {
      const result = reducer(undefined, {type: 'ANYTHING'});
      expect(result).toBeDefined();
  });

  test('Add Todo', () => {
      const before = {
        todos: [
        {id: 1, name: "Render Sttic UI", completed: true},
        {id: 2, name: "Create Initial State", completed: false},
        {id: 3, name: "Render Based on Initial State", completed: false},
      ],
      currentInputTodoText: '',
    };
      const after = {
        todos: [
        {id: 1, name: "Render Sttic UI", completed: true},
        {id: 2, name: "Create Initial State", completed: false},
        {id: 3, name: "Render Based on Initial State", completed: false},
        {id: 4, name: "Add Todo", completed: false},
      ],
      currentInputTodoText: '',
    };
      const action = {type: "ADD_TODO", payload: {id: 4, name: "Add Todo", completed: false}}
      const result = reducer(before, action);
      expect(result).toEqual(after);
  });
});
