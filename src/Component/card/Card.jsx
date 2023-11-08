import React, { useEffect, useState } from 'react';
import SingleData from '../SingleData/SingleData';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

const Card = () => {
    const[data,setData]=useState([])
    const[showAllData,setShowAllData]=useState(false)
    const[unique,setUnique]=useState(null)
    const[singleModal,setSingleModal]=useState({})


    useEffect(()=>{
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${unique}`)
        .then(res=>res.json())
        .then(data=>setSingleModal(data.data))
    },[unique])

    useEffect(()=>{
        fetch(`https://openapi.programming-hero.com/api/ai/tools`)
        .then(res=>res.json())
        .then(data=>setData(data.data.tools))
    },[])
    const handleShowAll=()=>{
        setShowAllData(true)
    }
    return (
       <div>
         <div className='grid grid-cols-1 md:grid-cols-3 g-4 '>
           {
            data.slice(0,showAllData ? 12: 6).map(loadedData=><SingleData loadedData={loadedData} key={loadedData.id} setUnique={setUnique}></SingleData>)
           } 
        </div>
       {
       (!showAllData && <span onClick={handleShowAll}>
        <Button>See More</Button>
        </span>)
       }
       <Modal singleModal={singleModal}></Modal>
       </div>
    );
};

export default Card;