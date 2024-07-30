import { useState } from 'react'
import './App.css'
import { useForm } from "react-hook-form";
import axios from 'axios';

function App() {
  const { register, handleSubmit, setError, formState: { errors, isSubmitting } } = useForm();

  // Delay Simulation
  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  }

  const onSubmit = async (data) => {
    // await delay(2);
    let res = await fetch('http://localhost:3000/', { method: 'POST', headers: { "Content-Type": "application/json" }, body: JSON.stringify(data)});
    let finalRes = await res.text();
    console.log(finalRes, data);


    /* Server side errors */ 
    // if (data.Username !== "Sandeep") {
    //   setError("myForm", { message: "User credentials are invalid" });
    // }
    // if (data.Username === "Stan") {
    //   setError("blocked", { message: "This user is blocked" });
    // }
  };

  return (
    <>
      {isSubmitting && <div>Loading...</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder="username" {...register("Username", { required: { value: true, message: "This field is required" }, minLength: { value: 3, message: "Length must be more than 3" }, maxLength: { value: 8, message: "Length must be less than 8" } })} type="text" />
          {errors.Username && <div className='margin red'>{errors.Username.message}</div>}
          <br />
          <input placeholder="password" {...register("Password", {minLength: {value: 7, message: "Minimum Length of password is 7"}})} type="password" />
          {errors.Password && <div className='red'>{errors.Password.message}</div>}
          <br />
          <input disabled={isSubmitting} type="submit" value="Submit" />
          {errors.myForm && <div className='red'>{errors.myForm.message}</div>}
          {errors.blocked && <div className='red'>{errors.blocked.message}</div>}
        </form>
      </div>
    </>
  )
}

export default App
