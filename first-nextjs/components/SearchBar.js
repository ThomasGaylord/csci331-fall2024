import React, { useState, useEffect } from 'react';

export default function SearchBar(props){
    const [searchValue, setSearchValue] = useState("");

    const handleInputChange = (event) =>{
        setSearchValue(event.target.value);
    }
    
    const filteredProducts = props.products.filter((product) =>{return product.title.toLowerCase().includes(searchValue);});
    
    return(
        <div>
            <input type="text" value={searchValue} onChange={handleInputChange} />
            <div className="gridContainer">
                {filteredProducts.map((product) => {
                    return <div key={product.title} className="gridItem"> <h2>{product.title}</h2> <img src={product.image}/> <p>${product.price}</p></div>
                })}
            </div>
        </div>
    );
}