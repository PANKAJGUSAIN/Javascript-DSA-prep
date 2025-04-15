
import { useEffect } from 'react';
import {useDispatch , useSelector} from 'react-redux';
import { fetchNewUsers } from './redux/todoSlice';

export default function Todo(){

    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts);
    const users = useSelector(state => state.users);
    const status = useSelector((state) => state.status);
    useEffect(() => {
        dispatch(fetchNewUsers());
      }, [dispatch]);
    return (
        <div>
            {status}-{JSON.stringify(users)}
        </div>
    )
}