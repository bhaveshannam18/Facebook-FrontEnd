import axios from "axios";

export const loginCall = async (userCredentials,dispatch)=>{
    //console.log(userCredentials,'logincall');
    dispatch({type:"LOGIN_START"});
    try {
        const res = await axios.post(`https://bhavesh-annam-facebook-clone.herokuapp.com/auth/login`,userCredentials);
        dispatch({type:"LOGIN_SUCCESS",payload:res.data});  
    } catch (err) {
        dispatch({type:"LOGIN_FAILURE",payload:err});
    }
}

export const logoutCall = async (dispatch)=>{
    dispatch({type:"LOGOUT"});
}