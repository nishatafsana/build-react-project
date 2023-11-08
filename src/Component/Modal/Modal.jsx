import React from 'react';
import './Modal.css'

const Modal = (props) => {
    console.log(props);
    const{image_link,description,features,integrations}=props.singleModal;
    // console.log(Object.values(features ||{}));
    return (
        <div className=''>
 <input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal ">
  <div className="modal-box m ">
    <div className='flex gap-6'>
        <div className=' border-solid border-2 border-indigo-600 p'>
        <h2 className="font-bold w-40">{description}</h2>
        <div className='flex gap-12'>
        <div>
            <p className='font-bold'>features</p>
            {
                Object.values(features ||{}).map(feature=> <p>{feature.feature_name}</p>)
            }

        </div>
       <div>
       <p className='font-bold'>Integrations</p>
        {
                Object.values(integrations ||{}).map(int=> <p>{int}</p>)
            }
       </div>
    </div>
        </div>
        <div className=' border-solid rounded-lg border-2 border-indigo-600'>
            <div>
            <img className='img rounded-lg border-solid border-2 border-indigo-200' src={image_link&&image_link[0]} alt="" />
            </div>
            
        <h4 className='text-center font-bold'>Hi, how are you doing today?</h4>
        <p className='text-center'>I'm doing well, thank you for asking. How can I assist you today?</p>
        </div>
    </div>
  
    <div className="modal-action ">
      <label htmlFor="my_modal_6" className="btn">Close!</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default Modal;