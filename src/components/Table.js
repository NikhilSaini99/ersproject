import Image from "next/image";
import React from "react";
import searchIcon from "../assets/icons/search.png";
import { useFetch } from "@/pages/api/api";
import { useEffect } from "react";
import Loader from "./Loader";
import { useState } from "react";
import TableComponent from "./TableComponent/TableComponent";
import { Box, Typography } from "@mui/material";

export default function FormTable({ title, defaultValue }) {
  const { data, fetchAPI, isLoading } = useFetch("get", "/api/form");

  const withCustomIdMapping = (allForms) => {
    if (allForms?.length > 0) {
      if (defaultValue === "VAT") {
        return allForms?.filter((item) => item.category === defaultValue)?.map((item, index) => item = { ...item, customId: index + 1 });
      } else {
        return allForms?.filter((item) => item.category === e.target.value)?.map((item, index) => item = { ...item, customId: index + 1 });
      }
    }
    return [];
  }

  const withCustomId = data?.data?.map((item, index) => item = { ...item, customId: index + 1 })
  const [selectedCategory, setSelectedCategory] = useState(withCustomId);
  const [categoryName, setCategoryName] = useState('');
  useEffect(() => {
    fetchAPI();
  }, [fetchAPI]);

  useEffect(() => {
    const categoryData = data?.data?.filter((item) => item.category === defaultValue)?.map((item, index) => item = { ...item, customId: index + 1 });
    setCategoryName(categoryData?.[0]?.category || "All Forms");
    setSelectedCategory(categoryData);
  }, [defaultValue, data?.data]);


  const handleCategorySelect = (e) => {
    setCategoryName(e.target.value);
    if (e.target.value === "All Forms") {
      setSelectedCategory(withCustomId || [])
    }
    else {
      const categoryData = data?.data?.filter((item) => item.category === e.target.value)?.map((item, index) => item = { ...item, customId: index + 1 });
      setSelectedCategory(categoryData);
    }
  };

  const tableHeaders = ["#", "Form Name", "Category", "Size", "Description", "Download",]
  const includeProperties = ["customId", "formName", "category", "fileSize", "description", "fileUrl"]
  const excluseProperties = ["updatedAt", "deletedAt", "createdAt", "fileType"];

  console.log(isLoading)
  if (isLoading) {
    return <Loader />;
  }
  
  return (
    <>
     {selectedCategory?.length>0 ? <section className="px-6 py-16 bg-[#F7F7FA]">
        <div
          className="pb-10 flex justify-between items-center"
          style={{ width: "90%", margin: "0 auto" }}
        >
          <div>
            <h1 className=" text-[#2F3192] text-4xl font-semibold ">{categoryName}</h1>
            <div className="border mr-12 border-yellowish mt-1"></div>
          </div>

          <div className="flex gap-10 text-black">
            <div className="text-base border border-[#DAD8CC] rounded-md">
             <select
                name="category"
                className="bg-transparent focus:outline-none px-4 py-[6px]"
                onChange={handleCategorySelect}
                defaultValue={selectedCategory?.[0]?.category}
              >
                <option value={"All Forms"}>All Forms</option>
                <option value={"VAT"}>VAT Forms</option>
                <option value={"Income Tax"}>Income Tax Forms</option>
                <option value={"Customs & Excise"}>
                  Customs & Excise Forms
                </option>
              </select>
            </div>

            <div className="px-3 py-[6px] border border-[#DAD8CC] rounded-md hidden">
              <button className="mr-3">
                <Image
                  src={searchIcon}
                  alt="search"
                  height={17}
                  width={17}
                  className="inline-block"
                />
              </button>
              <input
                type="text"
                placeholder="Search"
                className="w-52 focus:outline-none text-base font-normal bg-transparent"
              ></input>
            </div>
          </div>
        </div>
         <TableComponent
          tableData={selectedCategory}
          tableHeaders={tableHeaders}
          excluseProperties={excluseProperties}
          includeProperties={includeProperties}
        /> 
      </section> : <Box sx={{ padding:"2rem", display:"flex", justifyContent:"center"}}><Typography variant="h4">No Form Data</Typography></Box>}
    </>
  );
}
