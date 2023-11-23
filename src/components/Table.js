import Image from "next/image";
import React from "react";
import searchIcon from "../assets/icons/search.png";
import { useFetch } from "@/pages/api/api";
import { useEffect } from "react";
import Loader from "./Loader";
import { useState } from "react";
import TableComponent from "./TableComponent/TableComponent";

export default function FormTable({ title, defaultValue }) {
  const { data, fetchAPI, isLoading } = useFetch("get", "/api/form");
  const [selectedCategory, setSelectedCategory] = useState(data?.data);

  useEffect(() => {
    fetchAPI();
  }, [fetchAPI]);

  useEffect(()=>{
    const categoryData = data?.data?.filter( (item) => item.category === defaultValue);
    setSelectedCategory(categoryData);
  },[defaultValue,data?.data]);

  const handlePDFDownload = (url) => {
    window.open(url, "_blank");
  };

  const handleCategorySelect = (e) => {
    if(e.target.value==="All Forms"){
      setSelectedCategory(data?.data || [])
    }
    else {
      const categoryData = data?.data?.filter( (item) => item.category === e.target.value);
      setSelectedCategory(categoryData);
    }
    
  };
  const tableHeaders = ["#","Form Name","Category", "Size", "Description","Download",]
  const includeProperties =["id","formName","category","fileSize","description","fileUrl"]

  const excluseProperties = ["updatedAt","deletedAt","createdAt","fileType"];
  

  return (
    <>
      <section className="px-6 py-16 bg-[#F7F7FA]">
        <div
          className="pb-10 flex justify-between items-center"
          style={{ width: "90%", margin: "0 auto" }}
        >
          <div>
            <h1 className=" text-[#2F3192] text-4xl font-semibold ">{title}</h1>
            <div className="border mr-12 border-yellowish mt-1"></div>
          </div>

          <div className="flex gap-10 text-black">
            <div className="text-base border border-[#DAD8CC] rounded-md">
              <select
                name="category"
                className="bg-transparent focus:outline-none px-4 py-[6px]"
                onChange={handleCategorySelect}
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
        {data?.data ? <TableComponent
                        tableData={selectedCategory}
                        tableHeaders={tableHeaders}
                        excluseProperties={excluseProperties}
                        includeProperties={includeProperties}
          /> : <Loader />}
      </section>
    </>
  );
}
