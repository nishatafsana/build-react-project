import React from 'react';
import { CalendarDaysIcon,ArrowRightIcon } from '@heroicons/react/24/solid'

const SingleData = (props) => {
    const{id,image,features,name,published_in}=props.loadedData
    // console.log(props);
    return (
        <div className=' p-3  '>
           <div className="card w-full h-full bg-base-100 shadow-2xl">
  <figure><img className='w-80 rounded-lg' src={image} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title">Features</h2>
    {
        features.map((feature,index)=> <p> {index+1}.{feature}</p>)
    }
   <hr />

   <h2 className='font-bold'>{name}</h2>
   <div className='flex'>
     <CalendarDaysIcon className="h-6 w-6" />  <p>{published_in}</p>
       
        <label onClick={()=>props.setUnique(id)} htmlFor="my_modal_6" > <ArrowRightIcon className="h-6 w-6 cursor-pointer"></ArrowRightIcon></label>
   </div>
   
  </div>
</div> 

        </div>
    );
};

export default SingleData;