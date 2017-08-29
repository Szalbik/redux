
export const getTodos = () => {
  return fetch('http://localhost:8080/todos')
    .then(res => res.json())
}


export const createTodo = (name) => {
  return fetch('http://localhost:8080/todos', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name: name, completed: false})
  })
    .then(res => res.json())
}


export const updateTodo = (todo) => {
  return fetch(`http://localhost:8080/todos/${todo.id}`, {
    method: 'put',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  })
    .then(res => res.json())
}

export const destroyTodo = (id) => {
  return fetch(`http://localhost:8080/todos/${id}`, {
    method: 'delete',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
}
