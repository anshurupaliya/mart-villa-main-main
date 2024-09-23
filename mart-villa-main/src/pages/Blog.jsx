import { BlogPostsList, Pagination } from "../components/common/page-componets";
import React, { useState,useEffect } from 'react';
import axios from "axios";

const Blog = () => {
  const [feeds,setFeeds]=useState([])
  
  useEffect(()=>{
    axios
    .get('http://127.0.0.1:8000/api/feeds/?format=json')
    .then((response)=>{
      const updatedFeeds = response.data.map((prop) => {
        return {
          ...prop, // Keep other property fields as is
          image: `http://127.0.0.1:8000${prop.image}`, // Prepend the base URL to the image path
        };
      });
        setFeeds(updatedFeeds)
        console.log(response.data)
    })
    .catch((error)=>{
        console.log(error)
    })
  
  },[])
  return (
    <div className="pt-20 px-[3%] md:px-[6%]">
      <BlogPostsList />
      <Pagination itemsPerPage={6} pageData={feeds} />
    </div>
  );
};

export default Blog;
