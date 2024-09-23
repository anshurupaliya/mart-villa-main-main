import { useState,useEffect } from "react";
import axios from "axios";

import { FiDelete } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  AdvancedSearch,
  CTA,
  HeadeFilters,
  Pagination,
  PriceRange,
  PropertyFullWidth,
  SocialIcons,
  Type,
} from "../components/common/page-componets";
import { PropertyList } from "../components/property";
import { closeFilterMenu, uiStore } from "../features/uiSlice";

const PropertyFive = () => {
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
  
  
  const { isFilterMenuOpen } = useSelector(uiStore);
  const dispatch = useDispatch();
  const handleCloseFiltermenu = (e) => {
    if (e.target.classList.contains("filter-modal"))
      dispatch(closeFilterMenu());
  };

  const [layout, setLayout] = useState("grid");

  return (
    <div className="pt-20 px-[3%] md:px-[6%]">
      <HeadeFilters layout={layout} setLayout={setLayout} />
      <div className="grid md:grid-cols-4 gap-x-14 mt-5">
        <div className="md:col-span-3 mt-5 md:mt-0 h-fit md:sticky top-0 ">
          {layout === "grid" ? <PropertyList /> : <PropertyFullWidth />}
          <Pagination itemsPerPage={8} pageData={property} />
        </div>
        <div className=" md:col-span-1 row-start-3 md:row-start-auto h-fit md:sticky top-0">
          <div
            className={`filter-modal ${isFilterMenuOpen && "open"}`}
            onClick={handleCloseFiltermenu}
          >
            <div className={`filter-dialog ${isFilterMenuOpen && "open"}`}>
              <div className="flex-center-between border-b dark:border-dark md:hidden">
                <div
                  className="icon-box md:hidden"
                  onClick={() => dispatch(closeFilterMenu())}
                >
                  <FiDelete />
                </div>
                <p className="uppercase">Filters</p>
              </div>
              <AdvancedSearch />
              <Type />
              <PriceRange />
              <SocialIcons />
              <CTA />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyFive;
