import React from 'react'
import ECustomContainer from './ECustomContainer/ECustomContainer'
import Footer from '@/components/Footer'

const dutyDescription ='The Duty Estimator allows a quick Customs and Excise duty estimation that can also be downloaded and saved. Enter the relevant tariff code, select the country of origin (manufacture) and the system will generate the estimated duties based on the date you select. This function removes the need for any manual calculations and allows for more accurate costing and planning. Please contact the ERS contact centre if you require additional information on customs duty calculations. The ERS contact centre details can be found <a href="http://102.36.181.16/Contact" style="color:blue">here.</a>'


const DutyCalculator = () => {
  return (
    <>
    <ECustomContainer title="Duty Calculator" description={dutyDescription} frame_url={"https://www.esupplychainportal.com/SRA/duty.html"}/>
    <Footer/>
    </>
  )
}

export default DutyCalculator