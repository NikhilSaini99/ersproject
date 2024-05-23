import React from 'react'
import ECustomContainer from './ECustomContainer/ECustomContainer'
import Footer from '@/components/Footer'

const browseDescription = "The World Customs Organisation (WCO) issued the general rules of interpretation that are used as a guide in the correct classification of goods. It is crucial for an importer to have sufficient knowledge of these rules to ensure the correct classification of imported goods. It is important to ensure that an importer has a proper description of goods before the goods are imported into Eswatini as the tariff code identified has to be inserted on the customs declaration. The customs duties and VAT payable will be calculated based on the rate of duty dictated by the specific tariff code. Failure to correctly classify goods within the tariff book could result in either under or over payment of Customs Duties and Value-Added Tax (VAT) on importation."

const TarrifBrowse = () => {
  return (
    <>
    <ECustomContainer title="Tariff Browse" description={browseDescription} frame_url={"https://www.esupplychainportal.com/SRA/browse.html"}/>
    <Footer/>
    </>
  )
}

export default TarrifBrowse