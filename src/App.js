import React, { useState, useEffect } from 'react';
 
function TodoDetails() {
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
 
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
 
        const data = await response.json();
        setTodo(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      }
    };
 
    fetchTodo();
  }, []);
 
  if (loading) {
    return <div>Loading...</div>;
  }
 
  if (error) {
    return <div>Error: {error.message}</div>;
  }
 
  if (!todo) {
    return <div>No data found</div>;
  }
 
  return (
    <div>
      <h1>Todo Details</h1>
      <p>Title: {todo.title}</p>
      <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
      <p>id : {todo.id}</p>
    </div>
  );
}
 
export default TodoDetails;
 