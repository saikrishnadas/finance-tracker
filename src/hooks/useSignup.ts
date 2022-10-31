import { useState } from 'react';
import { ApiService } from '../utils/ApiServices';
import { useDispatch } from 'react-redux';
import { authenticate } from '../features/auth/authSlice';
// import { useNavigate } from 'react-router-dom';

export const useSignup = () => {
    const [loading,setLoading] = useState<any>(null);
    const [errorMessage,setErrorMessage] =useState<any>(null);
    const [error,setError] = useState<any>(null)
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const signup = async (email:any,password:any,confirmPassword:any) => {
        setLoading(true)
        setError(null)
        
        ApiService("/register", "POST", {
			email: email,
			password: password,
			confirmPassword: confirmPassword,
		})
			.then((data) => {
                localStorage.setItem("user", JSON.stringify(data));
                dispatch(authenticate(data));
                setLoading(false)
			})
			.catch((err) => {
				setError(true);
				setErrorMessage(err);
			});
    }

    return {signup,loading,error,errorMessage};
} 