import axios from 'axios';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

const Todos = () => {
    const dispatch = useDispatch();
  
    const ToDo = useSelector((state: any) => state.todos.listaTodo);
  
  
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(resposta => dispatch({ type: 'GET_TODOS', payload: resposta.data }))
    }, [])
  
    return (
      <>
        <h3>Lista Todo</h3>
        {ToDo !== undefined && ToDo.map((item: any) => (
          <li key={item.id}>{item.title} (id: {item.id})</li>
        ))}
  
      </>
    );
  }
  
  export default Todos;