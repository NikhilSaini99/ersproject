import { IconButton, TableCell, Typography } from '@mui/material'
import React, { useState } from 'react'

import CircularProgressWithLabel from './CircularProgress';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import useDownload from '@/hooks/useDownload';

const Downloading = (props) => {
    const { downloadFile, isDownloading, progress } = useDownload();
    const {item , index} = props
    const fileType = item?.documentUrl[index]?.split(".").pop();

  return (
    <TableCell component='div' sx={{ padding: "5px" }}>
    {isDownloading ? (
        <CircularProgressWithLabel value={progress} />
    ) : (
        <IconButton onClick={() => downloadFile(item?.documentUrl[index], item?.documentName[index], fileType)}>
            <DownloadForOfflineIcon sx={{ color: 'black' }} />
        </IconButton>
    )}
</TableCell>
  )
}

export default Downloading