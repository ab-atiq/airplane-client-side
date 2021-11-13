import React, { useRef, useState } from 'react';

const AddAProduct = () => {
    const [product, setProduct] = useState({});
    const nameRef = useRef();
    const imageRef = useRef();
    const descriptionRef = useRef();



    const handleReviewSubmit = e => {
        const name = nameRef.current.value;
        const image = nameRef.current.value;
        const description = nameRef.current.value;
        const newProduct = { name: name, image: image, description: description };

        // send to the server
        fetch('http://localhost:5000/products', {
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
                <input type="text" ref={nameRef} placeholder='Name' required />
                <input type="text" ref={imageRef} placeholder='Image URL' required />
                <textarea type="text" ref={descriptionRef} name='description' rows='10' placeholder='Description' required />
                <input style={{ width: '130px' }} className='btn btn-primary' type="submit" value="Add A Product" />
            </form>
        </div>
    );
};

export default AddAProduct;