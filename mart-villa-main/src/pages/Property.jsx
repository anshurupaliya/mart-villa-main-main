import React, { useState,useEffect } from 'react';
import axios from "axios";

import { Pagination } from "../components/common/page-componets";
import { PropertyList } from "../components/property";

const Property = () => {
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
    <div className="pt-16 px-[3%] md:px-[6%]">
      <PropertyList basis="basis-[25rem]" />
      <Pagination itemsPerPage={6} pageData={property} />
    </div>
  );
};

export default Property;
