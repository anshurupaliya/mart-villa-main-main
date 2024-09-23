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

const PropertySix = () => {
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

  const [layout, setLayout] = useState("list");

  return (
    <div className="pt-20 px-[3%] md:px-[6%]">
      <HeadeFilters layout={layout} setLayout={setLayout} />
      <div className="grid mt-5 md:grid-cols-4 gap-x-14">
        <div className="top-0 mt-5 md:col-span-3 md:mt-0 h-fit md:sticky">
          {layout === "grid" ? <PropertyList /> : <PropertyFullWidth />}
          <Pagination itemsPerPage={6} pageData={property} />
        </div>
        <div className="top-0 row-start-3  md:col-span-1 md:row-start-auto h-fit md:sticky">
          <div
            className={`filter-modal ${isFilterMenuOpen && "open"}`}
            onClick={handleCloseFiltermenu}
          >
            <div className={`filter-dialog ${isFilterMenuOpen && "open"}`}>
              <div className="border-b flex-center-between dark:border-dark md:hidden">
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

export default PropertySix;
