import React, {useState, useEffect} from 'react'
import axios from 'axios'




type ValueType ={
  target:{
    name: string;
    value: string;
  }
}

const Login = () => {

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })


  const onHandleChange = (e: ValueType)=>{
    setLoginData({...loginData, [e.target.name] : e.target.value})
  }

  const sendLoginData =()=>{
    axios.post(`http://localhost:9000/login-data`, loginData)
    .then(res=>console.log(res))
  }


  const [showPassword, setShowPassword] = useState(false)



    return(
        <div className='container'>
            <div className="w-full bg-slate-300 h-screen flex items-center justify-center">
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">
    <div className="mb-4">
      <h1 className='text-xl font-bold pb-3'>Panelə daxil olun</h1>
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Username
      </label>
      <input onChange={(e)=>onHandleChange(e)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Parol
      </label>
      <input onChange={(e)=>onHandleChange(e)}  className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type={showPassword? 'text':'password'} />
      <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
  <input
    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-black checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-black checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
    type="checkbox"
    onChange = {()=>setShowPassword(!showPassword)}
    value=""
    id="checkboxDefault" 
    
    />
  <label
    className="inline-block pl-[0.15rem] hover:cursor-pointer text-xs font-bold"
    htmlFor="checkboxDefault">
Parolu göstər </label>
</div>
    </div>
    <div className="flex items-center justify-between">
      <button onClick={sendLoginData} className="bg-blue-600 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Daxil ol
      </button>
      
    </div>
  </form>

</div>
        </div>
    )
}

export default Login