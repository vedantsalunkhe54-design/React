import react from 'react';
import { useDispatch } from 'react-redux';
import AuthService from '../../Appwrite/Auth';

function LogoutBtn() {
    const dispatch = useDispatch();
    const handleLogout = () => {
    AuthService.logout().then((response) => {
        dispatch({ type: "LOGOUT" });
    })
}

    return (
        <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>
            Logout
        </button>
    );
}

export default LogoutBtn;