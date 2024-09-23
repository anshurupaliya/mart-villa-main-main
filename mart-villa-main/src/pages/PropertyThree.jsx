import React, { useState,useEffect } from 'react';
import axios from "axios";

import {
  Pagination,
  PropertyFullWidth,
} from "../components/common/page-componets";;

const PropertyThree = () => {
  const [property,setProperty]=useState([])
  
  useEffect(()=>{
    axios
    .get('http://127.0.0.1:8000/api/properties/?format=json')
    .then((response)=>{
        const updatedProperties = response.data.map((prop) => {
          return {
            ...prop, // Keep other property fields as is
            image: `http://127.0.0.1:8000${prop.image}`, // Prepend the base URL to the image path
          };
        });
        setProperty(updatedProperties)
        console.log(property)
    })
    .catch((error)=>{
        console.log(error)
    })
  
  },[])
  
  return (
    <div className="pt-20 px-[3%] md:px-[6%]">
      <PropertyFullWidth />
      <Pagination itemsPerPage={6} pageData={property} />
    </div>
  );
};

export default PropertyThree;
