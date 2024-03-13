import React from 'react';


const AddProduct =()=>{
    const [name,setName]=React.useState('');
    const [price,setPrice]=React.useState('');
    const [category,setCaterory]=React.useState('');
    const [company,setCompany]=React.useState('');
    const addProduct= async()=>{
        console.warn(name,price,category,company);
        const userId=JSON.parse(localStorage.getItem('user'))._id;
        let result = fetch("http://localhost:5000/add-product",{
            method:'post',
            body:JSON.stringify({name,price,category,company,userId}),
            headers:{
                "Content-Type":"application/json"
            }
        });
        result = (await result).json;
        console.warn(result);
    }
    return (
        <div className='prouct'>
            <h2>Add Product</h2>
            <input type="text" placeholder='Enter Product Name' className='inputbox'
              value={name}  onChange={(e)=>{setName(e.target.value)}}
            />
            <input type="text" placeholder='Enter Product Price' className='inputbox'
               value={price} onChange={(e)=>{setPrice(e.target.value)}}
            />
            <input type="text" placeholder='Enter Product Category' className='inputbox'
                value={category} onChange={(e)=>{setCaterory(e.target.value)}}
            />
            <input type="text" placeholder='Enter Product Company' className='inputbox'
               value={company} onChange={(e)=>{setCompany(e.target.value)}}
            />
            <button onClick={addProduct} className='appbutton'>Add Product</button>
        </div>
    )
}

export default AddProduct;