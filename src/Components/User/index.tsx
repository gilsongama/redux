import axios from 'axios';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';


const Users = () => {
    const dispatch = useDispatch();
  
    const name = useSelector((state: any) => state.user.name);
    const username = useSelector((state: any) => state.user.username);
    const email = useSelector((state: any) => state.user.email);
  
  
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(resposta => dispatch({ type: 'GET_USERS', payload: resposta.data }))
    }, [])
  
    return (
      <>
        <h2>{name}</h2>
        <p>(username: {username} - email: {email})</p>
      </>
    );
  }
  
  export default Users;