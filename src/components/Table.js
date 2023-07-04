import Image from "next/image";
import React from "react";
import searchIcon from "../assets/icons/search.png";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import DownloadForOfflineRoundedIcon from '@mui/icons-material/DownloadForOfflineRounded';


export default function FormTable({ title }) {
  const formdata = [
    {
      num: 1,
      name: "Notice of Objection Form_Printable",
      category: "Income Tax",
      size: "383.31 KB",
      description:
        "Editable Version. Download and save form before completing.",
    },
    {
      num: 2,
      name: "TIN Registration Form_Company",
      category: "Income Tax",
      size: "2.21 MB",
      description: "",
    },
    {
      num: 3,
      name: "VAT Refunds for Diplomats, Diplomatic and Consular Missions & International Organizations_Printable",
      category: "VAT",
      size: "196.48 KB",
      description: "",
    },
    {
      num: 4,
      name: "Taxpayer Profile Maintenance Form_Individuals",
      category: "Income Tax",
      size: "212.16 KB",
      description:
        "Editable Version. Download and save form before completing.",
    },
    {
      num: 5,
      name: "CE 73 Application For Special Attendance",
      category: "Customs and Excise",
      size: "101.77 KB",
      description: "",
    },
    {
      num: 6,
      name: "VAT Deregistration Form",
      category: "VAT",
      size: "215.66 KB",
      description: "",
    },
    {
      num: 7,
      name: "CE 101 Declaration on transfer of residence",
      category: "Customs and Excise",
      size: "227.25 KB",
      description:
        "This form is for use to declare non-involvement in any business operation.",
    },
    {
      num: 8,
      name: "Taxpayer Profile Maintenance Form_Company",
      category: "Income Tax",
      size: "248.49 KB",
      description: "",
    },
    {
      num: 9,
      name: "VAT Return_Printable",
      category: "VAT",
      size: "173.43 KB",
      description: "",
    },
    {
      num: 10,
      name: "CE66 Application For Refund",
      category: "Customs and Excise",
      size: "218.15 KB",
      description:
        "For use by employers to reconcile annual PAYE for the tax year ending June 2022",
    },
  ];

  return (
    <>
      <section className="px-6 py-16 bg-[#F7F7FA]">
        <div className="pb-10 flex justify-between items-center" style={{width:'90%',margin:'0 auto'}}>
          <div>
            <h1 className=" text-[#2F3192] text-4xl font-semibold ">{title}</h1>
            <div className="border mr-12 border-yellowish mt-1"></div>
          </div>

          <div className="flex gap-10 text-black">
            <div className="text-base border border-[#DAD8CC] rounded-md">
              <select
                name="category"
                className="bg-transparent focus:outline-none px-4 py-[6px]"
              >
                <option>Category</option>
                <option>VAT Forms</option>
                <option>Income Tax Forms</option>
                <option>Customs & Excise Forms</option>
              </select>
            </div>

            <div className="px-3 py-[6px] border border-[#DAD8CC] rounded-md">
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

        <Paper elevation={20} sx={{borderRadius:'10px',width:'90%',margin:'0 auto'}}>
          <TableContainer sx={{borderRadius:'10px'}}>
            <Table className={''} aria-label="Form Table">
              <TableHead>
                <TableRow sx={{ backgroundColor: '#2f2483', '& > *': { color: 'white !important', fontWeight: 'bold !important',fontSize:'1rem !important' } }}>
                  <TableCell >#</TableCell>
                  <TableCell align="left" > Form Name</TableCell>
                  <TableCell align="left" >Category</TableCell>
                  <TableCell align="center" sx={{width:{md:'15%',lg:'12%'}}}>Size</TableCell>
                  <TableCell align="left" >Description</TableCell>
                  <TableCell align="left" >Download</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {formdata.map((form,index) => (
                  <TableRow key={index} sx={{
                    '& > *':{},
                    '&:hover': {
                      background: '#F2F2F2'
                    }
                  }}>
                    <TableCell component="th" scope="row" align="right" >
                      {form.num}
                    </TableCell>
                    <TableCell align="left" >{form.name}</TableCell>
                    <TableCell align="left" >{form.category}</TableCell>
                    <TableCell align="right" sx={{width:{md:'15%',lg:'12%'}}} >{form.size}</TableCell>
                    <TableCell align="left" >{form.description}</TableCell>
                    <TableCell align="center" ><DownloadForOfflineRoundedIcon sx={{ fontSize: '2rem' }} /></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </section>
    </>
  );
}
