import React, { useState } from 'react'

const useDownload = () => {
    const [isDownloading, setIsDownloading] = useState(false);
    const [progress, setProgress] = useState(0);

    const downloadFile = (url, fileName, fileType) => {
        setIsDownloading(true);
        try {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.responseType = 'blob';
      
          xhr.onprogress = function(event) {
            if (event.lengthComputable) {
              var percentComplete = event.loaded / event.total * 100;
              setProgress(percentComplete);
            }
          };
      
          xhr.onload = function() {
            if (this.status === 200) {
              var mimeType = fileType === 'pdf' ? 'application/pdf' : 'application/vnd.ms-excel';
              var fileExtension = fileType === 'pdf' ? '.pdf' : '.xlsx';
              var blob = new Blob([this.response], { type: mimeType });
              var downloadUrl = URL.createObjectURL(blob);
              var a = document.createElement('a');
              a.href = downloadUrl;
              a.download = `${fileName}${fileExtension}`;
              document.body.appendChild(a);
              a.click();
            } 
          };
      
          xhr.onerror = function() {
            console.error("Error during file download: ", error);
          };
      
          xhr.onloadend = function() {
            setIsDownloading(false);
          };
      
          xhr.send();
        } catch (error) {
          console.error("Error during file download: ", error);
          setIsDownloading(false);
        }
      };
    return {downloadFile, isDownloading, progress}
}

export default useDownload