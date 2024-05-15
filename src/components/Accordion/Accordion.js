import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const advanceRuilingdata = [
    {
        ques: 'What is Advance Ruling?',
        answer:{
            text:"An Advance Ruling is an official, written and legally binding decision relating to Tariff Classification, Origin Determination and Valuation which is issued by ERS."
        },
    },
    {
        ques: 'What types of Advance Rulings can I apply for?',
        answer:{
            text:"Applicants may apply for Advance Rulings on the following areas",
            list:[
                "• Tariff Classification",
                "• Determination of the Origin of Goods",
                "• Determination of the appropriate Valuation methodology to be used for determining Customs Value"
            ]
        },
    },
    {
        ques: 'Who may apply for an Advance Ruling?',
        answer:{
            text:"Importers, Exporters, Producers, Manufacturers, Authorized Agents, their representatives or any person with a justifiable cause.",
        },
    },
    {
        ques: 'What are the benefits of an Advance Ruling?',
        answer:{
            text:"An Advance Ruling has the following benefits",
            list:[
                "• Reduced declaration processing time, as decisions regarding Tariff Classification / Origin Determination / Valuation have already been made",
                "• Certainty and predictability in clearance of goods",
                "• Applicants can make informed business decisions as Advance Rulings are legally binding"
            ]
        },
    }
    ,
    {
        ques: 'Is an Advance Ruling binding?',
        answer:{
            text:"An Advance Ruling is binding on ERS and on the applicant with respect to the goods and conditions under which it has been issued.",
        },
    }
    ,
    {
        ques: 'How do I apply for an Advance Ruling?',
        answer:{
            text:"First complete the online Registration form.",
            lastText:"Once your registration has been verified and approved by ERS, you will receive a notification to confirm your email address. Thereafter you can log into the Advance Ruling Platform where an online Advance Ruling application can be completed."
        },
    }
    ,
    {
        ques: 'Why do I need to register in order to apply for an Advance Ruling? ',
        answer:{
            text:"Applicants are required to register to make use of the Advance Ruling Tool so that ERS can verify the information provided and ensure that access is not given to unauthorised users. The company only needs to register once and thereafter will be able to add authorised users on its company profile.",
        },
    }
    ,
    {
        ques: 'What information must I provide when applying for an Advance Ruling?',
        answer:{
            text:"The online application process will guide you in the specific information to be provided depending on the type of application (ie Tariff, Origin or Valuation). In general, the following information would be needed when completing an application for an Advance Ruling",
            list:[
                "• Detailed product information (for instance: brand, name, function, use, composition, catalogue, specifications, manufacturer name, etc)",
                "• Supporting documentation",
                "• Suggested tariff classification / country of origin / valuation methodology",
                "• Whether a relevant ruling has already been issued for identical or similar goods",
                "• Disclosure of any pending matters relating to the goods before any appellate tribunal, court or government agency",
                "• Indicate which information (from which has been submitted) should remain confidential when the Ruling is issued"
            ] 
        },
    }
    ,
    {
        ques: 'When should I apply for an Advance Ruling?',
        answer:{
            text:"An Advance Ruling application should be made before importation or exportation of goods. Note that Advance Ruling decisions cannot be made retrospectively.",
        },
    }
    ,
    {
        ques: 'Are there any costs involved in applying for an Advance Ruling?',
        answer:{
            text:"Currently no costs are involved in applying for an Advance Ruling with ERS."
        },
    }
    ,
    {
        ques: 'How long does it take for an Advance Ruling to be issued once I have applied?',
        answer:{
            text:" ERS will provide you with an Advance Ruling decision within 30 days upon receipt of all the required information."
        },
    }
    ,
    {
        ques: 'My application includes sensitive and proprietary information. How can I ensure that this information is not exposed when an Advance Ruling is issued by ERS? View Answer',
        answer:{
            text:" When applying, you can indicate which information is sensitive or protected. ERS will ensure that this information remains confidential and is not made publicly available when issuing the Advance Ruling."
        },
    }
    ,
    {
        ques: ' What happens if ERS requires further information from me in order to assess my Advance Ruling application? ',
        answer:{
            text:"ERS will put the Advance Ruling application into an \"Awaiting Documents\" status, and an email will be sent to the applicant indicating that there is additional information required on the application. The applicant can log into the Advanced Ruling Tool and add or upload the requested information, and submit the updated application to ERS."
        },
    }
    ,
    {
        ques: 'How will I be notified when an Advance Ruling is issued for an application that I have made?',
        answer:{
            text:" You will be notified by email of the outcome of an Advance Ruling decision. In addition to this, you will be able to track the status of your Advance Ruling application on your dashboard on the Advance Ruling Tool on the ERS website."
        },
    }
    ,
    {
        ques: 'For how long will an Advance Ruling be valid?',
        answer:{
            text:"By default, an Advance Ruling will be valid for a minimum period of one year. Rulings relating to Origin are valid for three years. At the discretion of ERS, an Advance Ruling may be issued with a longer period of validity."
        },
    }
    ,
    {
        ques: ' When does an Advance Ruling that has been issued take effect?',
        answer:{
            text:"An Advance Ruling takes effect on the date of issue as specified in the Ruling."
        },
    }
    ,
    {
        ques: ' I require an Advance Ruling on both Tariff and Origin for my product. How do I proceed?',
        answer:{
            text:"In this situation, you would first apply for an Advance Ruling on Tariff Classification. Once this has been issued, you can proceed with the application for an Advance Ruling on Origin Determination."
        },
    }
    ,
    {
        ques: 'Can I request an Advance Ruling for multiple goods?',
        answer:{
            text:"An Advance Ruling application is only applicable to one product or type of goods. Should Advance Rulings be required for multiple goods, multiple Advance Ruling applications will need to be completed."
        },
    }
    ,
    {
        ques: 'What happens if there is a change to legislation that affects an Advance Ruling that has been issued?',
        answer:{
            text:"ERS will either modify the Advance Ruling, or revoke/annul the Advance Ruling. In these situations, you will be notified of any change to an Advance Ruling that has been issued."
        },
    }
    ,
    {
        ques: 'How do I present my Advance Ruling to Customs when completing a Declaration?',
        answer:{
            text:"Advance ruling will be presented as one of the attached documents on ASYCUDA."
        },
    }
    ,
    {
        ques: 'Can my application for an Advance Ruling be denied?',
        answer:{
            text:"Yes, under certain circumstances ERS may decline to issue an Advance Ruling",
            list:[
                "• Where there is insufficient information provided to make a ruling, and/or the applicant is unable to provide all the necessary information.",
                "• Where there is no intention of importing or exporting the goods.",
                "• Where goods have already been cleared through the import / export procedure",
                "• Where an application has already been made on behalf of the applicant for the same goods / circumstances.",
                "• Where the matter is under arbitration or before the courts."
            ]
        },
    }
    ,
    {
        ques: 'Can an Advance Ruling be revoked or annulled?',
        answer:{
            text:"Yes, under certain circumstances ERS may revoke or annul an issued Advance Ruling",
            list:[
                    "• If amendments have been made to the Customs Act affecting the goods that are the subject of the Advance Ruling.",
                    "• If any conditions relating to the Ruling have not been satisfied.",
                    "• If the applicant does not fulfil an obligation imposed by the Ruling.",
                    "• If the Ruling was issued based on incomplete, incorrect, false or misleading information."
            ]
        },
    },
    {
        ques: 'How will I know if my Advance Ruling has been modified, revoked or annulled?',
        answer:{
            text:"You will receive an email indicating the change in status of an issued Advance Ruling. In addition, the Advance Ruling status on the applicant dashboard will be updated to reflect the new status."
        },
    },
    {
        ques: 'What happens if I do not agree with the outcome of an Advance Ruling?',
        answer:{
            text:"You have the right to appeal the outcome of any Advance Ruling decision by following the appropriate process",
            list:[
                "• If the applicant does not agree with the ruling that has been issued by the Commissioner General, the ruling may be challenged in writing.",
                "• The Commissioner General will make a decision, either affirming the earlier decision or setting aside the ruling in part or in its entirety.",
                "• Where the applicant is still not in agreement with the Commissioner General’s decision, an appeal may be filed with the Revenue Appeals Tribunal within thirty (30) days of the Commissioner General’s decision.",
                "• Subject to the decision of the Revenue Appeals Tribunal, any aggrieved party may approach the High Court for review."
            ]
        },
        lastText:"The same appeal route is applicable for any public rulings initiated by the Commissioner General."
    }
]

export default function CustomAccordion() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div >
    {advanceRuilingdata && advanceRuilingdata.map((item, index) => {
        return (
            <Accordion key={item.ques} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
            <Typography sx={ { color: 'black', fontWeight: "light"}}>{item?.ques}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography sx={{ color: 'black' }}>
                {item?.answer.text}
                </Typography>
                {item.answer.list && item.answer.list.map((list, i) => (
                    <Typography key={i} sx={{ color: 'black', ml:"1rem" }}>
                        {list}
                    </Typography>
                ))}
                {item.answer.lastText && <Typography sx={{ color: 'black' }}>{item.answer.lastText}</Typography>}
            </AccordionDetails>
            </Accordion>
        )
    })}
    </div>
  );
}