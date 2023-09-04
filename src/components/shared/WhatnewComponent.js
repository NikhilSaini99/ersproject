import Link from 'next/link'
import React from 'react'

const WhatnewComponent = ({whatNewsData}) => {

    const handlePdfDownload = (url)=>{
        const link = document.createElement("a");
        link.href=url;
        link.setAttribute("download", "What's New pdf")
        link.target="_blank"
        link.click();
    }

  return (
    <div className=" bg-subColor flex flex-col lg:w-[30%] 2xl:w-[20%] pt-5 sub_items_text_color">
    <h1 className="text-xl font-bold text-yellowish leading-8 px-8 mb-3">
      What{"'"}s New
    </h1>
    {/* first News */}
    {whatNewsData && whatNewsData?.data?.map((item,index)=>(
        <div className="flex flex-col" key={index}>
      <h3 className="px-8 text-sm leading-6 font-bold cursor-pointer" onClick={()=>handlePdfDownload(item?.documentUrl)}>
        {item?.name}:
      </h3>
      <p className="px-8 text-sm leading-6 font-normal mb-3 ">
        {item?.description}
      </p>
      <hr className="border-white/30 my-5" />
    </div>
    ))}
  </div>
  )
}

export default WhatnewComponent