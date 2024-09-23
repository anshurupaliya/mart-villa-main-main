import BlogPostList from "../components/blog/blog-2/BlogPostList";
import React, { useState,useEffect } from 'react';
import axios from "axios";


import {
  CTA,
  Pagination,
  PopularTags,
  SocialIcons,
  TopRated,
  Type,
} from "../components/common/page-componets";




const BlogTwo = () => {
  const [feeds,setFeeds]=useState([])
  
  useEffect(()=>{
    axios
    .get('http://127.0.0.1:8000/api/feeds/?format=json')
    .then((response)=>{
        setFeeds(response.data)
        console.log(response.data)
    })
    .catch((error)=>{
        console.log(error)
    })
  
  },[])
  
  return (
    <div className="pt-20 px-[3%] md:px-[6%]">
      <div className="grid grid-cols-1 mt-5 md:grid-cols-3 gap-x-14">
        <div className="top-0 mt-5 md:col-span-2 md:mt-0 h-fit md:sticky">
          <BlogPostList />
          <Pagination itemsPerPage={6} pageData={feeds} />
        </div>
        <div className="top-0 row-start-3 md:col-span-1 md:row-start-auto h-fit md:sticky">
          <input
            type="text"
            className="border outline-none bg-transparent dark:border-dark px-3 py-[0.35rem] w-full"
            placeholder="Enter Keywords.."
          />
          <Type />
          <TopRated />
          <PopularTags />
          <SocialIcons />
          <CTA />
        </div>
      </div>
    </div>
  );
};

export default BlogTwo;
