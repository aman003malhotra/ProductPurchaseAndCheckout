import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from '@mui/material';
import { useNavigate  } from 'react-router';
const CheckoutForm = () => {

    const dispatch = useDispatch();
    const cartTotal = useSelector(state => state.cartTotal);
    const navigate = useNavigate();
    const [userInfo, setUserInfor] = useState({
        firstName:"",
        lastName:"",
        email:"",
        phoneNumber:""
    })

    const [err, setErr] = useState(false);
    const [errMessage, setErrMessage] = useState("");
    
    const handleInputChange = (e) => {
        //const name = e.target.name 
        //const value = e.target.value 
        const { name, value } = e.target;
    
        setUserInfor({
          ...userInfo,
          [name]: value,
        });
        dispatch({type:"ADD_USER_INFO", payload:userInfo});

    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(cartTotal <= 0){
            setErr(true);
            setErrMessage("Please Add Something into the Cart Before proceeding");
        }else if(userInfo.phoneNumber === ''){
            setErr(true);
            setErrMessage("Please Fill In all the Details");
        }else{
            navigate('/review');
        }

    }
  return (
    <div className="bg-white py-12 md:py-24">
      <div className="mx-auto max-w-lg px-4 lg:px-8">
      {err && <Alert severity="error" onClose={() => {setErr(false)}}>{errMessage}</Alert>}
        <form className="grid grid-cols-6 gap-4"  onSubmit={(e) => handleSubmit(e)}>
          <div className="col-span-3">
            <label
            //   for="FirstName"
              className="block text-xs font-medium text-gray-700"
            >
              First Name
            </label>

            <input
              type="text"
              id="FirstName"
              className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              name="firstName"
              onChange={handleInputChange}
              required
              autoComplete='hello'

            />
          </div>

          <div className="col-span-3">
            <label
            //   for="LastName"
              className="block text-xs font-medium text-gray-700"
            >
              Last Name
            </label>

            <input
              type="text"
              id="LastName"
              className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              name="lastName"
              onChange={handleInputChange}
              required
              autoComplete='hello'
            />
          </div>

          <div className="col-span-6">
            <label 
                // for="Email" 
                className="block text-xs font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              id="Email"
              className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              name="email"
              onChange={handleInputChange}
              required
              autoComplete='hello'
            />
          </div>

          <div className="col-span-6">
            <label 
                // for="Phone"
                className="block text-xs font-medium text-gray-700">
              Phone
            </label>

            <input
              type="tel"
              id="phoneNumber"
              className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
              onChange={handleInputChange}
              name="phoneNumber"
              required
              autoComplete='hello'
            />
          </div>
          <div className="col-span-6">
            <input 
                type = "submit"
              className="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg"
                value="Pay Now"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default CheckoutForm