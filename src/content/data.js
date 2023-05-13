import Banner from "../assets/images/news.jpg";
import Gallaryimg1 from "../assets/images/gallery2.jpg";
import Gallaryimg2 from "../assets/images/asys.jpg";
import Gallaryimg3 from "../assets/images/vat.jpg";
import Gallaryimg4 from "../assets/images/gallery.jpg";
import Gallaryimg5 from "../assets/images/customs.jpg";
import Gallaryimg6 from "../assets/images/customs-img.jpg";
import Gallaryimg7 from "../assets/images/news-banner.jpg";
import Newses from "../assets/images/news.jpg"
import quoteIcon from '../assets/icons/quoteicon.png'
export { IncomeTaxData, NewsData, customData, GalleryData };

const customData = [
  {
    id: 1,
    title: "General Import & Export Rules",
    title1: "IMPORTATION",
    title2:
      "Goods imported into Eswatini may be cleared under one of the following customs procedures within seven (7) days of the date on which they are deemed to have been imported:",
    description: [
      "Home consumption",
      "Warehousing (later cleared for home consumption or re-export)",
      "Transit/in bond",
      "Temporary admission",
    ],
  },
  {
    id: 2,
    title:
      "For customs clearance purposes, the importer should submit the following:",
    description: [
      "Customs declaration document - 'Form E' for personal declarations worth less than E15 000 and SAD500 for all other declarations.",
      "Supporting documents - invoice, transport document, certificate of origin, permits and any other document that may be required for verification purposes).",
    ],
  },
  {
    id: 3,
    title:
    "PERSONAL IMPORTS",
    title1:"There are Customs and Excise duty free allowances applicable",
     description: 
        "There are Customs and Excise duty free allowances applicable to bona fide travellers at importation. These allowances only apply to persons arriving from outside SACU (i.e. from other than Botswana, Lesotho, Namibia or South Africa) and are restricted to goods imported for their own personal use or consumption (i.e. not for resale). The duty free allowances as follows:"
  },

  {
    id: 4,
    title1:
    "New or used goods, of a total value not exceeding E5000 per person",
    title2:"For VAT, all travelers (whether arriving from SACU or elsewhere) are entitled to a relief for new or used goods imported for their own personal use or consumption (i.e. not for resale) of up to E1 000 per person.",
    title3:"For imports of cars see Importation of used motor vehicles by individuals.",
    title4:"For VAT, all travelers (whether arriving from SACU or elsewhere)",
    title5:"For imports of cars ",
    description: [
     "2 litres of wine",
     "1 litre of spirituous and other alcoholic beverages",
     "200 cigarettes and 20 cigars",
     "250g of cigarette or pipe tobacco",
     "50ml of perfumery and 250ml of toilet water"
    ]
  },

  {
    id: 5,
    title1:
    "EXPORTATION",
    title2:"Goods exported from Eswatini may be exported under one of the following customs procedures:",
    title3:"declaration document, supporting documents (invoice, F178, permits and any other document that may be required for verification purposes).",
    title4:" \through the ASYCUDA System; These pages will help you with the Customs Tariff ; Exchange rates; codes required on the import/export documents and a guide of how to complete the SAD500 form.",
    title5:"For customs clearance purposes, the exporter should submit a customs",
    title6:"Customs declarations are made",
     description: [
        "Permanent export",
        "Temporary export", 
        "Re-export"
    ]
  },

  {
    id: 6,
    title1:
    "CROSS BORDER CASH DECLARATION",
    title2:"In accordance with Section 41 of the Money Laundering and Financing of Terrorism (Prevention) Act, 2011, ALL persons entering or leaving Eswatini with cash or negotiable bearer instruments* valued at more than E15 000 (fifteen thousand Emalangeni) or equivalent are required to declare this amount to the Police or Customs officials at the point of entry/exit to/from the country.",
    title3:"The E15 000 value applies to the total amount of cash or negotiable bearer instruments. The requirement to declare cannot be avoided by the fact that a person is carrying several different currencies or classes of negotiable instruments which separately amount to less than the equivalent of E15 000.",
    title4:"In accordance with Section 41 of the Money Laundering",
    title5:"The E15 000 value applies to the total amount of cash "
  },

  {
    id: 7,
    title1:
    "OFFENCE AND CONFISCATION",
    title2:"the penalty for failing to declare or for under declaring is a fine of up to E30 000 (thirty thousand Emalangeni) or imprisonment for a period of up to 5 (five) years.",
    title3:"declaration may also render the cash or negotiable bearer instruments subject to confiscation.",
    title4:"It is an offence to not declare or to under declare and",
    title5:"Failure to declare or under"
  },

  {
    id: 8,
    title1:
    "SEARCH",
    title2:"or board any vehicle to conduct a search for the purposes of enforcing this requirement.",
    title3:"ownership of debts or obligations, including cheques, bills of exchange, promissory notes or certificates of deposit whether made payable to the bearer or not.",
    title4:"A Customs or Police officer may search any luggage",
    title5:"* Negotiable bearer instruments means a document representing"
  }
];

const IncomeTaxData = [
    {
    heading:'Withholding Taxes',
    heading1:'Non-Resident Withholding Taxes',
    title:'Withholding Tax on Interest:',
    
    description:' This should be deducted from the payment of interest to any person other than a company not ordinarily resident; a company not registered in Swaziland; or the estate of a deceased person, who at the date of his death was ordinarily resident in Swaziland.',
    description1:'The debtor in respect of such amount; and who is ordinarily resident or carries on business in Swaziland shall withhold and remit to SRA tax equal to ten per cent of the interest that accrues to or in favour of the non-resident.',
},

{
    title:'Non Resident Shareholders Tax: ',
    
    description:'This is imposed on dividends paid to shareholders who are not residents of the Kingdom of Swaziland. The categories are as follows :',
    point:'1. Where the shareholder is a natural person, he must not only be a non-resident but should not be carrying on a business in Swaziland.',
    point1:'2. In the case of a company, it should not be registered and controlled in Swaziland.',
    point2:'3. In the case of an estate of any deceased person, at the date of death, he should not have been a resident or carrying on business in Swaziland',
    point3:'4. In the case of a holder of bearer scrip, (irrespective of whether he is resident or not), is liable to shareholders tax and normal tax on the same dividend.',
    line:'The non-resident should have been a shareholder at the date of declaration of the dividend or any other specified date of entitlement to the dividend. ',
},
{
    title:'Sportsmen and Entertainers: ',
    
    description:'This is imposed on any remuneration paid to, or the gross receipts of, public entertainers, sportsman, theatrical, and musical, group of public entertainers from outside Swaziland or not ordinarily resident in Swaziland.',
    description1:"A local agent, promoter or any other person making payment to a non-resident entertainer or sportsperson should deduct non-residents' entertainers tax at the rate of fifteen percent of the gross amount and shall issue a statement to that person showing the gross amount of payment due and the rate and amount of tax deducted.",
   
},
{
    title:'Withholding Tax on Payments to Non-Resident Contractors: ',
    
    description:'This applies to any person who makes payment (as a result of an agreement relating to construction operations), to a person whose principal place of business is outside Swaziland.',
    description1:"A withholding tax of fifteen percent must be withheld from payments made by resident persons to the foreign entity in relation to construction contracts, excluding the amount relating directly to the cost of materials.",
    description2:"This withholding tax is on account of the tax liability of the non-resident. The withholder should furnish the non-resident person with a certificate showing amount of the payment under the agreement and tax deducted.",
   
},
{
    title:'Non Resident Withholding Tax on Royalties and Management Fees: ',
    
    description:'Every person who makes any payment of royalty or management fee or both to a person not ordinarily resident in Swaziland is required to withhold tax. The rate of tax is fifteen percent of the gross amount of any management charge. The tax is final and a certificate should be furnished to the non-resident person.',
   
   
},

{
    title:'Withholding Tax on Repatriated Income: ',
    
    description:'The tax is levied in addition to any normal tax, on deemed repatriated income of the branch of a non-resident company carrying on business in Swaziland for any year of assessment. The calculation formula is A minus Bwhere:',
    point:'1. A is taxable income of the branch for the year of assessment',
    point1:'2. B is the Swaziland tax payable on that taxable income of the branch for the year of assessment.',
  
},

{
    title:'Withholding Tax on Payments to Non Resident Persons: ',
    
    description:'A person who makes payment to any non-resident person is required to withhold tax on the gross amount resulting from a contract which has a Swazi source of income excluding an employment contract. The main purpose of the contract should be the performance of a service. Goods supplied in the performance of the service are included in the calculation of the tax as they are only incidental i.e. a non-resident mechanic who comes with tools and service parts is liable to tax on the labour fees and the service parts. The non-resident person is liable to withholding tax at the rate offifteen percenton the gross amount of any payment derived by the non-resident under a Swaziland source services contract.',
   
   
},

{
    heading2:'Withholding Taxes for Residents',
    title:'On Interest: ',
    
    description:'Every financial institution, unit trust company, building society, mutual loan association or co-operative society, which makes a payment of interest or dividend on society shares to any person, other than a company, a person or institution, ordinarily resident in Swaziland should withhold tax at the rate of ten percent of the gross amount of the payment.  The tax withheld is on account of the tax liability to tax of the person ordinarily resident in Swaziland.  ',
},
{
    title:'On Rental Payments: ',
    
    description:'A person, other than a natural person, who makes a payment to a lessor (other than  a company) for the use or occupation or the right of use or occupation of land or buildings; OR collects such rent for or on behalf of the lessor, should withhold tax at the rate of ten per cent of the gross amount. Tax withheld is on account of the tax liability and a certificate should be issued by the withholder.  ',
},
{
    title:'On Beneficiaries of Trusts : ',
    
    description:'Every trustee who makes any payment from trust income to a beneficiary who has vested rights to such income should withhold tax at a rate of thirty-three percent of the gross amount. The tax withheld is on account of the tax liability of such beneficiary on the income derived from the trust.  ',
},
{
    title:'Dividends Paid to Residents: ',
    
    description:'Tax should be charged, levied and paid in respect of the amount of any dividend if the shareholder to whom the dividend has been paid or is payable is a person (other than a company), who is ordinarily resident or carrying on business in Swaziland. A resident company, which makes any payment of dividend to a person ordinarily resident or carrying on business in Swaziland, should withhold tax at the rate of ten percent of the gross amount of the dividend.  ',
},
];

const NewsData = [
  {
    quote:'The Eswatini Revenue Service (ERS) is a semi-autonomous revenue administration agency, established through the Revenue Authority Act No. 1 of 2008.',
    quoteicon:quoteIcon,
    title: "Family Safari Vacations",
    head: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias voluptate ad velit perspiciatis ipsa! Nostrum voluptate ex at laborum esse culpa modi, molestiae eveniet numquam tenetur expedita quis aspernatur doloribus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias voluptate ad velit perspiciatis ipsa! Nostrum voluptate ex.",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias voluptate ad velit perspiciatis ipsa! Nostrum voluptate ex at laborum esse culpa modi, molestiae eveniet numquam tenetur expedita quis aspernatur doloribus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias voluptate ad velit perspiciatis ipsa! Nostrum voluptate ex at laborum esse culpa modi, molestiae eveniet numquam tenetur expedita quis aspernatur doloribus.",
    img: Banner,
    para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias voluptate ad velit perspiciatis ipsa! Nostrum voluptate ex at laborum esse culpa modi, molestiae eveniet numquam tenetur expedita quis aspernatur doloribus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias voluptate ad velit perspiciatis ipsa! Nostrum voluptate ex.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias voluptate ad velit perspiciatis ipsa! Nostrum voluptate ex at laborum esse culpa modi, molestiae eveniet numquam tenetur expedita quis aspernatur doloribus.",
  },
];

const GalleryData = {
  group1: [
    {
      img: Gallaryimg7,
      group: "Eswatini Revenue Service",
      date: "April 21, 2023",
      description:
        "Outgoing Eswatini Electricity Company Board prioritise ensuring that Eswatini has sufficient power supply.",
    },
    {
      img: Gallaryimg2,
      group: "Eswatini Revenue Service",
      date: "April 22, 2023",
      description:
        "Outgoing Eswatini Electricity Company Board prioritise ensuring that Eswatini has sufficient power supply.",
    },
    {
      img: Gallaryimg3,
      group: "Eswatini Revenue Service",
      date: "April 23, 2023",
      description:
        "Outgoing Eswatini Electricity Company Board prioritise ensuring that Eswatini has sufficient power supply.",
    },
    {
      img: Gallaryimg4,
      group: "Eswatini Revenue Service",
      date: "April 24, 2023",
      description:
        "Outgoing Eswatini Electricity Company Board prioritise ensuring that Eswatini has sufficient power supply.",
    },
    {
      img: Gallaryimg6,
      group: "Eswatini Revenue Service",
      date: "April 25, 2023",
      description:
        "Outgoing Eswatini Electricity Company Board prioritise ensuring that Eswatini has sufficient power supply.",
    },
  ],
  group2: [
    {
      img: Gallaryimg2,
      group: "Eswatini Revenue Service",
      date: "April 26, 2023",
      description:
        "Outgoing Eswatini Electricity Company Board prioritise ensuring that Eswatini has sufficient power supply.",
    },
    {
      img: Gallaryimg4,
      group: "Eswatini Revenue Service",
      date: "April 27, 2023",
      description:
        "Outgoing Eswatini Electricity Company Board prioritise ensuring that Eswatini has sufficient power supply.",
    },
    {
      img: Gallaryimg5,
      group: "Eswatini Revenue Service",
      date: "April 28, 2023",
      description:
        "Outgoing Eswatini Electricity Company Board prioritise ensuring that Eswatini has sufficient power supply.",
    },
    {
      img: Gallaryimg3,
      group: "Eswatini Revenue Service",
      date: "April 29, 2023",
      description:
        "Outgoing Eswatini Electricity Company Board prioritise ensuring that Eswatini has sufficient power supply.",
    },
  ],
  group3: [
    {
      img: Gallaryimg6,
      group: "Eswatini Revenue Service",
      date: "April 21, 2023",
      description:
        "Outgoing Eswatini Electricity Company Board prioritise ensuring that Eswatini has sufficient power supply.",
    },
    {
      img: Gallaryimg5,
      group: "Eswatini Revenue Service",
      date: "April 22, 2023",
      description:
        "Outgoing Eswatini Electricity Company Board prioritise ensuring that Eswatini has sufficient power supply.",
    },
    {
      img: Gallaryimg1,
      group: "Eswatini Revenue Service",
      date: "April 23, 2023",
      description:
        "Outgoing Eswatini Electricity Company Board prioritise ensuring that Eswatini has sufficient power supply.",
    },
    {
      img: Gallaryimg2,
      group: "Eswatini Revenue Service",
      date: "April 24, 2023",
      description:
        "Outgoing Eswatini Electricity Company Board prioritise ensuring that Eswatini has sufficient power supply.",
    },
    {
      img: Gallaryimg4,
      group: "Eswatini Revenue Service",
      date: "April 26, 2023",
      description:
        "Outgoing Eswatini Electricity Company Board prioritise ensuring that Eswatini has sufficient power supply.",
    },
    {
      img: Gallaryimg3,
      group: "Eswatini Revenue Service",
      date: "April 26, 2023",
      description:
        "Outgoing Eswatini Electricity Company Board prioritise ensuring that Eswatini has sufficient power supply.",
    },
  ],
  group4: [
    {
      img: Gallaryimg1,
      group: "Eswatini Revenue Service",
      date: "April 21, 2023",
      description:
        "Outgoing Eswatini Electricity Company Board prioritise ensuring that Eswatini has sufficient power supply.",
    },
    {
      img: Gallaryimg4,
      group: "Eswatini Revenue Service",
      date: "April 22, 2023",
      description:
        "Outgoing Eswatini Electricity Company Board prioritise ensuring that Eswatini has sufficient power supply.",
    },,
    {
      img: Gallaryimg7,
      group: "Eswatini Revenue Service",
      date: "April 24, 2023",
      description:
        "Outgoing Eswatini Electricity Company Board prioritise ensuring that Eswatini has sufficient power supply.",
    },
    {
      img: Gallaryimg3,
      group: "Eswatini Revenue Service",
      date: "April 26, 2023",
      description:
        "Outgoing Eswatini Electricity Company Board prioritise ensuring that Eswatini has sufficient power supply.",
    },
    {
      img: Gallaryimg5,
      group: "Eswatini Revenue Service",
      date: "April 26, 2023",
      description:
        "Outgoing Eswatini Electricity Company Board prioritise ensuring that Eswatini has sufficient power supply.",
    },
  ],
  group5: [
    {
      img: Gallaryimg6,
      group: "Eswatini Revenue Service",
      date: "April 21, 2023",
      description:
        "Outgoing Eswatini Electricity Company Board prioritise ensuring that Eswatini has sufficient power supply.",
    },
    {
      img: Gallaryimg3,
      group: "Eswatini Revenue Service",
      date: "April 22, 2023",
      description:
        "Outgoing Eswatini Electricity Company Board prioritise ensuring that Eswatini has sufficient power supply.",
    },
    {
      img: Gallaryimg5,
      group: "Eswatini Revenue Service",
      date: "April 25, 2023",
      description:
        "Outgoing Eswatini Electricity Company Board prioritise ensuring that Eswatini has sufficient power supply.",
    },
    {
      img: Gallaryimg2,
      group: "Eswatini Revenue Service",
      date: "April 26, 2023",
      description:
        "Outgoing Eswatini Electricity Company Board prioritise ensuring that Eswatini has sufficient power supply.",
    },
  ],
};


export const newses = [
  {
    img: Newses,
    url: "/NewsDetails",
    title: "Family Safari Vacations",
    date: "April 21, 2023",
    description: "Outgoing Eswatini Electricity Company (EEC) Board Chairman Dr Phil Mnisi has urged his successor P to prioritise ensuring that Eswatini has sufficient power supply...",
  },
  {
    img: Newses,
    url: "/NewsDetails",
    title: "Travelagent India",
    date: "April 22, 2023",
    description: "Outgoing Eswatini Electricity Company (EEC) Board Chairman Dr Phil Mnisi has urged his successor P to prioritise ensuring that Eswatini has sufficient power supply...",
  },
  {
    img: Newses,
    url: "/NewsDetails",
    title: "Perfect Scrambled Eggs",
    date: "April 23, 2023",
    description: "Outgoing Eswatini Electricity Company (EEC) Board Chairman Dr Phil Mnisi has urged his successor P to prioritise ensuring that Eswatini has sufficient power supply...",
  },
  {
    img: Newses,
    url: "/NewsDetails",
    title: "Famous Names in Barbecue",
    date: "April 24, 2023",
    description: "Outgoing Eswatini Electricity Company (EEC) Board Chairman Dr Phil Mnisi has urged his successor P to prioritise ensuring that Eswatini has sufficient power supply...",
  }
]