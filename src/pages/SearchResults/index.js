/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import PageLayout from '../PagesLayout/Layout';
import { ContentDiv } from '@/styles/globalStyle';
import { Box, Typography } from '@mui/material';
import { useFetch } from '../api/api';
import Banner from "../../assets/images/search.jpg";
import bgimg from "../../assets/images/bg-1.png";
import { useRouter } from 'next/router';
import searchStyle from "./search.module.css"
import { Card as MuiCard, CardContent, CardActions, Button } from '@mui/material';
import Loader from '@/components/Loader';
const SearchResults = () => {
  const router = useRouter();
  const searchParam = router.query.q;
 
  const searchAPI = `/api/pagesDataMobile/search?key=${searchParam}`;
  const { data, fetchAPI, isLoading: isSearchLoading } = useFetch("get", searchAPI);

  useEffect(() => {
    if (searchParam) {
      fetchAPI();
    }
  }, [searchParam]);



  return (
    <PageLayout title={"Eswatini VAT"} bannerImg={Banner} contentBackground={bgimg}>
      <ContentDiv sx={{ width: "60%" }}>
        <Box sx={{ padding: "2rem 0", position:"relative" }}>
          <Typography variant="h1" sx={{ position: "relative !important" }}>Search Results
            <span className="absolute bottom-0 left-0 w-1/4 border-b-2 border-yellowish"></span>
          </Typography>
        </Box>
        {isSearchLoading ? <Loader /> : data && 
          data?.data?.length> 0 ?
         data?.data?.map((result, index) => (
          <Card key={index} title={result.pageName} description={result.search_result} url={result.url} />
        )) :
        <Typography variant='h2'>No Result found</Typography>}
      </ContentDiv>
    </PageLayout>
  )
}

export default SearchResults

const Card = ({ title, description, url }) => {
  const router = useRouter();
return (
  <>
     <MuiCard sx={{ minWidth: 275, marginBottom: 2, cursor: "pointer" }} component="div" onClick={()=>router.push(url)} >
    <CardContent >
      <Typography variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description.substring(0,300)+"...."}
      </Typography>
    </CardContent>
    {/* <CardActions>
      <Button size="small" href={url}>View More</Button>
    </CardActions> */}
  </MuiCard>
  </>
)
} 
 

