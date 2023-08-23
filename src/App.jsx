import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BsCloudCheck } from 'react-icons/bs';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="grid justify-items-center max-w-2xl mx-auto">
      <div className="card w-full bg-base-100 shadow-xl mt-4 border-t-8 border-t-blue-900 rounded-lg">
  <div className="">
    <h2 className="text-3xl my-5 ml-5">Assignment Task</h2>
    <div className='mt-5'>
    <hr />
    </div>
    <div className='flex justify-between my-3 mx-5'>
    <div>
      <h1>shamira170201032@gmail.com Switch account</h1>
    </div>
    <div>
      <BsCloudCheck />
    </div>
    </div>
    <div className='mx-5 my-3'>
      <p>The name and photo associated with your Google account will be recorded when you upload files and submit this form. Your email is not part of your response.</p>
    </div>
    <div className=''>
    <hr />
    </div>
    <p className='my-3 mx-5 text-red-500'>* Indicates required quesrion</p>
  </div>
</div> 

<div className="card w-full bg-base-100 shadow-xl mt-4">
  <div className=" flex flex-col  ml-5">
    <h2 className="my-5">MCQ <span className="text-red-500">*</span></h2>
    <form>
  <label className="flex items-center mb-4">
    <input type="radio" name="radio-2" className="radio  radio-label checked:radio-primary" />
    <span className="ml-2">Option 1</span>
  </label>
  <label className="flex items-center mb-4">
    <input type="radio" name="radio-2" className="radio  radio-label checked:radio-primary" />
    <span className="ml-2">Option 2</span>
  </label>
  <label className="flex items-center mb-4 ">
    <input type="radio" name="radio-2" className="radio  radio-label checked:radio-primary" />
    <span className="ml-2">Option 3</span>
  </label>
</form>

  </div>
</div>

<div className="card w-full bg-base-100 shadow-xl mt-4">
  <div className=" flex flex-col  ml-5">
    <h2 className="my-5">Checkbox <span className="text-red-500">*</span></h2>
    <form>
  <label className="flex items-center mb-4">
  <input type="checkbox"  className="checkbox radio-label checked:checkbox-primary" />
    <span className="ml-2">Option 1</span>
  </label>
  <label className="flex items-center mb-4">
  <input type="checkbox"  className="checkbox radio-label checked:checkbox-primary" />
    <span className="ml-2">Option 2</span>
  </label>
  <label className="flex items-center mb-4 ">
  <input type="checkbox"  className="checkbox  radio-label checked:checkbox-primary" />
    <span className="ml-2">Option 3</span>
  </label>
</form>

  </div>
</div>

<div className="card w-full bg-base-100 shadow-xl mt-4">
  <div className=" flex flex-col  ml-5">
    <h2 className="my-5">Short Answer <span className="text-red-500">*</span></h2>
    <form>
  <label className="flex items-center mb-5">
  <input type="text" placeholder="Your Answer" className="border-b border-gray-300 input-sm w-full max-w-xs focus:outline-none" />
  </label>
</form>

  </div>
</div>

<div className="card w-full bg-base-100 shadow-xl mt-4">
  <div className=" flex flex-col  ml-5 mr-5">
    <h2 className="my-5">ParaGraph <span className="text-red-500">*</span></h2>
    <form>
  <label className="flex items-center mb-5">
  <input type="text" placeholder="Your Answer" className="border-b border-gray-300 input-sm w-full  focus:outline-none" />
  </label>
</form>

  </div>
</div>

<div className="card w-full bg-base-100 shadow-xl mt-4">
  <div className=" flex flex-col  ml-5 mr-5">
    <h2 className="my-5">Drop down <span className="text-red-500">*</span></h2>
    <form>
  <label class="flex items-center mb-5">
    <select class="select select-bordered w-full max-w-xs relative focus:outline-none">
      <option disabled selected value="">Choose</option>
      <option className="hover:base">Option 1</option>
      <option>Option 2</option>
      <option>Option 3</option>
    </select>
  </label>
</form>



  </div>
</div>

<div className="card w-full bg-base-100 shadow-xl mt-4">
  <div className=" flex flex-col  ml-5 mr-5">
    <h2 className="my-5">File Upload <span className="text-red-500">*</span></h2>
    <form>
  <label className="flex items-center mb-5">
  <select className="select select-bordered w-full max-w-xs">
  <option disabled selected>Choose</option>
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</select>
  </label>
</form>

  </div>
</div>
    </div>
  )
}

export default App
