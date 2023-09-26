import React from 'react'
import ECustomContainer from "./ECustomContainer/ECustomContainer"
import Footer from '@/components/Footer';

const searchDescription = "Tariff classification of goods is one of the more complex issues under the Customs and Excise Act. Tariff classification relates to the proper classification of goods within the Harmonized Commodity Description and Coding System (tariff book). The Tariff Book indicates the normal customs duties (Schedule No 1, Part 1), excise duties (Schedule No 1, Part 2A), ad valorem duties (Schedule No 1, Part 2B), anti-dumping duties (Schedule No 2, Part 1) and countervailing duties (Schedule No 2, Part 2) that would be payable on importing goods into Eswatini. Tariff classification of goods also determines the necessity for import control permits, the rules of origin obligations, and the applicability of any customs rebate provisions."

const TarrifSearch = () => {
  return (
    <>
    <ECustomContainer title="Tariff Search" description={searchDescription}/>
    <Footer/>
    </>
  )
}

export default TarrifSearch