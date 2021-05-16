import axios from "axios";
import React, { useState } from "react";
import "./style.scss";

const Registration = () => {
   var [details, setDetails] = useState({
      email: "",
      password: "",
      message: "",
      resgister: "",
   });

   const onchangeHandler = (e) => {
      var { name, value } = e.target;
      setDetails((prevState) => ({
         ...prevState,
         [name]: value,
      }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (details.email.length && details.password.length) {
         return sendToServer();
      }
      setDetails((prevState) => ({
         ...prevState,
         message: "enter email and password",
      }));
   };

   const sendToServer = () => {
      console.log("in server");
      var myobj = { name: "aaru", address: "novi" };

      axios("http://localhost:8086/register", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(myobj),
      })
         .then((response) => {
            console.log("response", response.data);
            if (response.status === 200) {
               setDetails((prevState) => ({
                  ...prevState,
                  resgister: "registerd successfully",
               }));
            }
            setDetails((prevState) => ({
               ...prevState,
               resgister: "registerd not successfully",
            }));
         })
         .catch((err) => {
            console.log(err);
         });
   };

   return (
      <>
         <div className='form-group'>
            <label htmlFor='email'>Email address</label>
            <input
               type='email'
               className='form-control'
               name='email'
               aria-describedby='emailHelp'
               placeholder='Enter email'
               value={details.email}
               onChange={onchangeHandler}
            />
         </div>
         <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input
               type='password'
               className='form-control'
               name='password'
               placeholder='Password'
               value={details.password}
               onChange={onchangeHandler}
            />
         </div>
         <button type='submit' onClick={handleSubmit}>
            Register
         </button>

         {details.message ? <div>{details.message}</div> : ""}
      </>
   );
};

export default Registration;
