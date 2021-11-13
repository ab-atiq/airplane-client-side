import React, { useRef } from 'react';

const AddAProduct = () => {
    const nameRef = useRef();
    const imageRef = useRef();
    const descriptionRef = useRef();
    const numberRef = useRef();



    const handleReviewSubmit = e => {
        const name = nameRef.current.value;
        const image = imageRef.current.value;
        const description = descriptionRef.current.value;
        const productPrice = numberRef.current.value;
        const newProduct = { name: name, image: image, description: description, price: productPrice };

        // send to the server
        fetch('https://stormy-everglades-33424.herokuapp.com/products', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Product successfully submitted!!');
                    e.target.reset();
                }
            })

        e.preventDefault();
    }
    return (
        <div>
            <h1>Add A Product</h1>
            <form onSubmit={handleReviewSubmit} >
                <label>Name:</label>
                <input type="text" ref={nameRef}  placeholder='Name' required />
                <label>Product Price:</label>
                <input type="number" ref={numberRef} placeholder='Product Price' required />
                <label>Image URL:</label>
                <input type="text" ref={imageRef} placeholder='Image URL' required />
                <label>Description Product:</label>
                <textarea type="text" ref={descriptionRef} name='description' rows='10' placeholder='Description' required />
                <input style={{ width: '130px' }} className='btn btn-primary' type="submit" value="Add A Product" />
            </form>
        </div>
    );
};

export default AddAProduct;