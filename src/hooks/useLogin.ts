import { useState } from 'react';
import { ApiService } from '../utils/ApiServices';
import { useDispatch } from 'react-redux';
import { authenticate } from '../features/auth/authSlice';
// import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
    const [loading,setLoading] = useState<any>(null);
    const [errorMessage,setErrorMessage] =useState<any>(null);
    const [error,setError] = useState<any>(null)
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const login = async (email:any,password:any) => {
        setLoading(true)
        setError(null)
        
        ApiService("/login", "POST", { email: email, password: password })
			.then((data: any) => {
				// let { token } = data;
				// console.log("DATAAA", data);
				localStorage.setItem("user", JSON.stringify(data));
				dispatch(authenticate(data));
				// Cookies.set("token", JSON.stringify(data));
				// navigate("/");
                setLoading(false)
			})
			.catch((err) => {
				setError(true);
				setErrorMessage(err);
			});
    }

    return {login,loading,error,errorMessage};
} 