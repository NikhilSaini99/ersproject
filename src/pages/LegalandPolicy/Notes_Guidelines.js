import { Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';

import Banner from "../../assets/images/Practice_Notes_and_Guidelines.jpg";
import { ContentDiv } from '@/styles/globalStyle';
import Downloading from './Downloading';
import Loader from '@/components/Loader';
import PageLayout from '../PagesLayout/Layout';
import bgimg from '../../assets/images/pagebackground1.jpg'
import { firstLetterCapital } from '../utils/helperFunction';
import { useFetch } from '../api/api';

const Notes_Guidelines = () => {
    const [isDownloading, setIsDownloading] = useState(false);
    const { data, fetchAPI, isLoading } = useFetch("get", "/api/practiceNote");
    const dataarr = data?.data

    useEffect(() => {
        fetchAPI();
    }, [fetchAPI]);

    const initialValue = ["DOMESTIC TAXES", "PRACTICE NOTES", "CUSTOMS & EXCISE"];
    let filterData = []

    if (data?.data) {
        filterData = initialValue.map(value => {
            const uniqueItems = dataarr.filter(item => item.type === value);
            return {
                name: value,
                notesName: uniqueItems.map(item => item.name),
                documentUrl: uniqueItems.map(item => item.documentUrl),
                documentName: uniqueItems.map(item => item.documentName),
                rest: uniqueItems
            };
        });
    }
    const downloadFile = async (url) => {
        setIsDownloading(true);
        try {
            const response = await fetch(url);
            const blob = await response.blob();
            const downloadUrl = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = 'file.pdf'; // or any other filename you want
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error("Error during file download: ", error);
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <>
            <PageLayout title={"ERS"} bannerImg={Banner} contentBackground={bgimg}>
                <ContentDiv sx={{ width: { xs: "90%" }, margin: { xs: "0 auto", lg: "0  auto" },  px: { md: "5rem", lg: "5rem,", xl: "10rem" }, py: "2rem" }}>
                   
                <Box sx={{ padding: "2rem 0", position:"relative" }}>
                        <Typography variant="h1" sx={{ position: "relative !important" }}>Practice Notes and Guidelines
                            <span className="absolute bottom-0 left-0 w-1/3 border-b-2 border-yellowish"></span>
                            </Typography>
                    </Box>

                    <Typography variant="body1" sx={{ mb: '1rem' }} className='Pointsformatting'>
                        Practice notes are developed using the applicable legislations and are meant to assist with simplifying the application of the law. They do not replace the legislation but purely provide means for better understanding the principles of the law.
                    </Typography>

                        {isLoading ? <Loader /> :
                        dataarr?.length > 0 &&
                        <Paper elevation={20}>
                            <TableContainer sx={{ '& th, & td': { border: '0.1rem solid rgba(0,0,0,0.4)' } }}>
                                <Table>
                                    <TableHead>
                                        <TableRow sx={{ backgroundColor: '#2f2483', '& th': { fontWeight: 'bold !important', color: 'white !important', textAlign: 'center !important' } }}>

                                            <TableCell sx={{ minWidth: "25%", width: "26%" }}>Type</TableCell>
                                            <TableCell sx= {{textAlign: 'center !important'}}>Name</TableCell>

                                            {/* <TableCell>Download</TableCell> */}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {filterData && filterData?.map((item, index) => (
                                            <TableRow key={index}>
                                                <TableCell sx={{ fontWeight: '', maxWidth: "20%" , textTransform:"capitalize"}}>{firstLetterCapital(item.name)}</TableCell>
                                                <TableCell sx={{ px: '0', py:"0"}}>
                                                    {item.notesName.map((subpoints, index) => (
                                                        <TableRow component='div' key={index} sx={{
                                                            py: 'none !important',
                                                            '& div': { border: 'none', '&:hover': { background: '#F2F2F2' } },
                                                            display: 'flex', justifyContent: 'space-between', width: '100%',
                                                            borderBottom: index !== item.notesName.length - 1 ? '0.1rem solid rgba(0,0,0,0.4)' : 'none',
                                                        }}>
                                                            <TableCell component='div' sx={{ width: "80%",  }}>{subpoints}</TableCell>
                                                            <TableCell component='div' sx={{ padding: "0px" }}>
                                                                <Downloading key={index} item={item} index={index} />
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Paper>
                    }
                </ContentDiv>
            </PageLayout>
        </>
    )
}

export default Notes_Guidelines
