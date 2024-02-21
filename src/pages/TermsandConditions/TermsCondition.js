import React from 'react'
import PageLayout from '../PagesLayout/Layout'
import { ContentDiv } from '@/styles/globalStyle'
import { Box, Typography } from '@mui/material'
import Banner from "../../assets/images/tax.jpg";
import bgimg from "../../assets/images/bg-2.png";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import Link from 'next/link';
const TermsCondition = () => {
    const arrowStyling = {
        color: '#2f2483',
        fontSize: '1rem',
        marginRight: '0.5rem',
    }

    const personalInformation = [
        'Personal Identification Number (PIN)',
        'Name, age, gender, race, religion',
        'Physical and email addresses and contact numbers.',
        'Online identifiers and your online behaviour such as cookies and IP addresses.',
        'Engagements with us including use of products or services, transactions, requests, queries, applications, and complaints.',
        'Financial information (Where you bank and Bank account numbers).',
        'Internal reports and other derivative data based on the personal information we collect.',
        'Other personal information including biometric details, criminal history, birth, and death certificates.'
    ]
    const thirdParties = [
        'Service providers (including payment processors, card network providers, debt collection and tracing agencies, credit agencies and bureaus, electronic communication service providers, public and private data and data verification providers including data registries, aggregators).)',
        'Employers, advisers, agents, associates, assignees, cessionary, successors in title, trustees, executors, curators and appointed third parties (including lawyers and contractors).',
        'Government departments, regulatory authorities, courts of law and law enforcement agencies, ombudsmen.',
    ]

    const lawful = [
        "To complete integrity and business conduct checks required for compliance purposes including due diligence and onboarding processes, monitoring and assurance reviews and conduct sanctions screening against any sanctions lists.",
        "To comply with other risk management, regulatory and legislative requirements.",
        "To comply with voluntary and mandatory codes of conduct.",
        "To detect, prevent and report any illegal activity, or activity that could lead to tax loss.",
        "To process and settle transactions and payments.",
        "To conduct research and analysis for the national government"
      ];

      const legitimate = [
        "Maintain, monitor, improve and develop our business policies, systems, and controls.",
        "Maintain and improve data quality.",
        "Design, develop and test services and solutions for taxpayers, which may include combining sources and types of your personal information across multiple legal entities.",
        "Personalise and customise services and solutions, messaging, and advertising.",
        "Respond to client enquiries and communications and to record these interactions for the purpose of analysis and improvement.",
        "Manage business emergencies and stress events.",
        "Process and settle payments.",
        "Meet record-keeping obligations.",
        "Conduct research and analysis"
      ];

      const reasonForCookies = [
        "Providing you with a better online experience and tracking website performance",
        "Helping us make our website more relevant to you"
      ];

  return (
    <PageLayout title={"Privacy Policy"} bannerImg={Banner} contentBackground={bgimg}>
                 <ContentDiv>
                 <Box sx={{ padding: "2rem 0", position:"relative" }}>
                        <Typography variant="h1" sx={{ position: "relative !important" }}>DATA PRIVACY STATEMENT 
                            <span className="absolute bottom-0 left-0 w-1/3 border-b-2 border-yellowish"></span>
                            </Typography>
                    </Box>

                    <div>
            <Typography variant="h2" gutterBottom>
                The Eswatini Revenue Service (ERS)
            </Typography>
            <Typography variant="body1" paragraph>
                The Eswatini Revenue Service (ERS) is a semi-autonomous revenue administration agency, established through the Revenue Authority Act No. 1 of 2008 (as amended). The ERS has a mandate of assessment and collection of all revenue on behalf of the Eswatini Government. By administering and giving effect to the laws or the specified provisions of the laws set out in the Schedule and account for all revenue to which those laws apply; Promoting compliance with the revenue laws. Taking such measures as may be required to counteract tax or revenue fraud and other forms of tax or revenue evasion; Ensuring that all revenue collected is, as soon as reasonably practicable, credited to the Eswatini Government General Account. Subject to the provisions of the Act, take such other measures as considered necessary or desirable for the achievement of the purposes or provisions of the revenue laws.<br/> It operates within the broad framework of Government but outside of the civil service. The ERS is a member of various international organisations, such as the World Customs Organization (WCO); the Commonwealth Association of Tax Administrators (CATA) and the African Tax Administration Forum (ATAF). The ERS has alliances with established revenue agencies such as the South African Revenue Service (SARS), the Lesotho Revenue Authority (LRA) and the Zambia Revenue Authority (ZRA).
            </Typography>

            <Typography variant="h2" gutterBottom>
                Regulation of data privacy and protection
            </Typography>
            <Typography variant="body1" paragraph>
                As we operate within the kingdom of Eswatini to ensure revenue collection for our local government, we comply with the Data Protection Act No. 5 of 2022. This Act provides for the collection, processing, disclosure, and protection of personal data.
            </Typography>

            <Typography variant="h2" gutterBottom>
                What is the purpose and scope of this statement?
            </Typography>
            <Typography variant="body1" paragraph>
                The purpose of this statement is to notify taxpayers and other relevant stakeholders on how the organization will collect, use, store, make available, disclose, update, safeguard, destroy or process your personal information. Protecting the privacy, confidentiality and security of your personal information is very important to us as it is critical for us to maintain your trust and act in the right way to meet your needs.
            </Typography>

            <Typography variant="h2" gutterBottom>
                What is personal information and what types of personal information do we collect?
            </Typography>
            <Typography variant="body1" paragraph>
                Personal information is any information from which you can be identified. The personal information we may collect about you includes:
            </Typography>

            {personalInformation.map((item, index) => (
                    <>
                        <div className='flex gap-1 items-start'>
                            <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} /></span>
                            <Typography variant='body1' key={index} sx={{ mb: '1rem' }}
                                className='Pointsformatting' dangerouslySetInnerHTML={{__html: item}}>
                                </Typography>
                        </div>
                    </>
                ))}

              

            <Typography variant="h2" gutterBottom>
                How do we collect your personal information?
            </Typography>
            <Typography variant="body1" paragraph>
            We will collect personal information directly from you or by telephone or through online channels such as our website, email, and applications. 
            </Typography>
            <Typography variant="body1" paragraph>
            We also collect personal information about you from other sources where lawful and reasonable, such as reputable third parties that you deal with or deal with the organization. 
            </Typography>
            <Typography variant="body1" paragraph>
            These third parties may include:
            </Typography>

            {thirdParties.map((item, index) => (
                    <>
                        <div className='flex gap-1 items-start'>
                            <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} /></span>
                            <Typography variant='body1' key={index} sx={{ mb: '1rem' }}
                                className='Pointsformatting' dangerouslySetInnerHTML={{__html: item}}>
                                </Typography>
                        </div>
                    </>
                ))}
            
                <Typography variant="body1" paragraph>
                If you are a third-party service provider, we may collect personal information about you as a data subject to ensure that the business relationship and matters relating to the agreement between you and us can be fulfilled. You warrant that, if you provide us with any personal information about other persons, such as employees, shareholders or your directors, you are authorised to share their personal information with us for purposes set out in this statement.
            </Typography>
                <Typography variant="body1" paragraph>
                Providing your personal information to us is usually voluntary. However, it may be mandatory under certain circumstances, i.e., tax evasion. If you fail to provide us with your personal information when requested, we may be forced to seek the courts to enforce you to provide the relevant information we seek.
            </Typography>

            <Typography variant="h2" gutterBottom>
                Why do we process your personal information?
            </Typography>
            <Typography variant="body1" paragraph>
                Our responsibilities to you are very important to us and we aim to provide you with personalized services to ensure voluntary tax compliance.
            </Typography>
            <Typography variant="h2" gutterBottom>
                Contract requirements
            </Typography>
            <Typography variant="body1" paragraph>
                We may need to process your personal information if we require it to conclude or perform under a contract or agreement with you for a service that you have applied with us. Providing a service to you by communicating with you regarding the service you have with us, opening and maintaining your account, collecting payments due to us by you, managing our risks and maintaining our overall relationship with you.
            </Typography>
            <Typography variant="h2" gutterBottom>
                Lawful obligations
            </Typography>
             <Typography variant="body1" paragraph>
            We may need to process your personal information for the following purposes:
            </Typography>

            {lawful.map((item, index) => (
                    <>
                        <div className='flex gap-1 items-start'>
                            <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} /></span>
                            <Typography variant='body1' key={index} sx={{ mb: '1rem' }}
                                className='Pointsformatting' dangerouslySetInnerHTML={{__html: item}}>
                                </Typography>
                        </div>
                    </>
                ))}

           
            <Typography variant="h2" gutterBottom>
                Legitimate Interest
            </Typography>


            <Typography variant="body1" paragraph>
            The Organization may process your personal information to:
            </Typography>

            {legitimate.map((item, index) => (
                    <>
                        <div className='flex gap-1 items-start'>
                            <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} /></span>
                            <Typography variant='body1' key={index} sx={{ mb: '1rem' }}
                                className='Pointsformatting' dangerouslySetInnerHTML={{__html: item}}>
                                </Typography>
                        </div>
                    </>
                ))}

            <Typography variant="h2" gutterBottom>
                Consent
            </Typography>
            <Typography variant="body1" paragraph>
                In addition to the reasons given above, we may process your personal information where we have your specific consent for a defined purpose. We will also seek your consent where applicable laws require it. We will store your personal information according to our defined retention schedules.
            </Typography>

            <Typography variant="h2" gutterBottom>
                How long do we retain your personal information?
            </Typography>
            <Typography variant="body1" paragraph>
                We retain your personal information in line with our legal and regulatory obligations and for our business and operational purposes as highlighted above. This will generally be for at least five years from your last transaction with us.
            </Typography>

            <Typography variant="h2" gutterBottom>
                How will we communicate with you?
            </Typography>
            <Typography variant="body1" paragraph>
            Besides in-person communication, we use a wide array of channels to engage with you regarding your existing services and to keep you updated. These include SMS’s, email, phone calls, automated calls, notifications sent to your mobile device and in-app notifications. We need to keep you up to date on an ongoing operational basis about your existing services and their new features especially where we are making them more secure and as we make tax compliance more convenient for you. We may contact you through these means for research purposes or to communicate with you for marketing of new services as explained in greater detail below.
            </Typography>

            <Typography variant="h2" gutterBottom>
                How do we use your personal information for marketing?
            </Typography>
            <Typography variant="body1" paragraph>
            Whether you are an existing taxpayer or a future taxpayer with whom we have had previous interactions in respect to your taxes, you are important to us and therefore we would like to share information about our services.
            </Typography>
            <Typography variant="body1" paragraph>
            If you are a future taxpayer, and we have had no previous interaction or have no relationship with you, we will seek your express consent in compliance with local laws to market to you electronically.
            </Typography>
            <Typography variant="body1" paragraph>
            If you no longer wish to be contacted for marketing purposes, you may opt out at any time as per the instructions contained in any marketing communication you receive. You can also opt out by contacting us through any of the channels available on our website at <Link href="www.ers.org.sz" style={{color:"blue"}}>www.ers.org.sz</Link>.
            </Typography>

            <Typography variant="h2" gutterBottom>
                When, how and with whom will we share your personal information?
            </Typography>
            <Typography variant="body1" paragraph>
                We share information with third parties, auditors, and advisers supporting our services to you. We take extra care when we transfer or share information and will enter into suitable contracts with the trusted parties with whom we share your information, thus ensuring your rights under relevant data protection legislation are upheld.
            </Typography>

            <Typography variant="h2" gutterBottom>
                How is your personal information protected?
            </Typography>
            <Typography variant="body1" paragraph>
            The security of your personal information is important to us and we take reasonable steps to keep your personal information safe and to prevent loss, destruction of and damage or unlawful access to your personal information by unauthorised parties. We require the same level of security to be implemented by our service providers and other third parties. However, you must not share or send us any personal information through unauthorised channels, as these are not a secure way of communication and carry a risk of interception and unauthorised access. You should only share personal information through our authorised channels.
            </Typography>

            <Typography variant="h2" gutterBottom>
                What are your rights?
            </Typography>
            <Typography variant="body1" paragraph>
            We value your trust and want you to be familiar with your rights under the legislation and to know how you can exercise them in your interactions with the Eswatini Revenue Service. You have the right to:
            </Typography>

            <Typography variant="h2" gutterBottom>
                Use of cookies on our website
            </Typography>
            <Typography variant="body1" paragraph>
                A “cookie” is a small text file that is stored on your computer, smartphone, tablet, or other device when you visit a website or use an application. It helps to distinguish you from other users and contains specific information related to your use of our website or application, such as your login details and your preference settings, and helps the website or the application to recognize your device.
            </Typography>

            <Typography variant="body1" paragraph>
                Cookies help to make a website or app function better and make it easier for us to give you a better user experience on our online channels. To use or store cookie types that are not required for the functioning of the website or app and are optional, we will obtain your consent first.
            </Typography>

            <Typography variant="body1" paragraph>
            For this reason, we limit our use of cookies to:
            </Typography>


            
            {reasonForCookies.map((item, index) => (
                    <>
                        <div className='flex gap-1 items-start'>
                            <span className='Pointsformatting'><ArrowForwardIosIcon sx={arrowStyling} /></span>
                            <Typography variant='body1' key={index} sx={{ mb: '1rem' }}
                                className='Pointsformatting' dangerouslySetInnerHTML={{__html: item}}>
                                </Typography>
                        </div>
                    </>
                ))}


            <Typography variant="body1" paragraph>
            We use the following types of cookies on our online channels, such as our website.
            </Typography>

            <Typography variant="h2" gutterBottom>
                Strictly necessary cookies
            </Typography>
            <Typography variant="body1" paragraph>
                These cookies are mandatory and are required for the effective operation and functioning of our website on your device. They enable you to use the website and the features on the website and cannot be switched off.
            </Typography>

            <Typography variant="h2" gutterBottom>
                Performance cookies
            </Typography>
            <Typography variant="body1" paragraph>
                These are optional cookies that collect information about how you use the website but not any personal information. Performance information is anonymous and mostly statistical and is used to improve the performance of our website.
            </Typography>

            <Typography variant="h2" gutterBottom>
                Marketing cookies or advertising cookies
            </Typography>
            <Typography variant="body1" paragraph>
                These cookies are also optional and are used to deliver and display advertisements that are relevant and engaging for you as the user. They help us measure how effective our advertising campaigns are by your interaction with the advertisement.
            </Typography>

            <Typography variant="h2" gutterBottom>
                Session cookies
            </Typography>
            <Typography variant="body1" paragraph>
                These cookies are temporary and optional and only exist while you browse our website to remember your activities on the website. As soon as you close the website or move to a different website, the cookies are deleted.
            </Typography>

            <Typography variant="h2" gutterBottom>
                Persistent cookies
            </Typography>
            <Typography variant="body1" paragraph>
                These are permanent, optional cookies that are stored on your device until they reach a set expiry date or until you delete them. They remember your preferences or actions on our website.
            </Typography>

            <Typography variant="h2" gutterBottom>
                First-party cookies
            </Typography>
            <Typography variant="body1" paragraph>
                These are cookies that we create and store when you use our website and relate to information obtained directly from you.
            </Typography>

            <Typography variant="h2" gutterBottom>
                Third-party cookies
            </Typography>
            <Typography variant="body1" paragraph>
                These cookies are owned and created by a third party that provides a service to us such as social media sharing, website analytics or content marketing. These cookies are intended to collect information directly from you by us and we share the personal information with the third party through the cookies that the third-party stores on our website.
            </Typography>

            <Typography variant="h2" gutterBottom>
                Social Media
            </Typography>
            <Typography variant="body1" paragraph>
                When you engage with us through our social media accounts, your personal information may be processed by the social media platform owner. This process is outside our control and the processing activities may be in a country outside of your home country that may have different data protection laws. For more information about the privacy practices of a social media platform, please refer to and read the terms and conditions of that social media platform before you use it or share any personal information on it.<br/> Our social media accounts are not appropriate forums to discuss our taxpayers. We will never ask you to share personal, account or security information on social media platforms. We may, however, ask you to message us in private through one of our official social media accounts.
            </Typography>

            <Typography variant="h2" gutterBottom>
                General
            </Typography>
            <Typography variant="body1" paragraph>
                We may change this statement from time to time in accordance with changes in our services or regulatory requirements. We will make reasonable efforts to notify you through suitable communication channels.
            </Typography>
        </div>
            </ContentDiv>
            </PageLayout>
  )
}

export default TermsCondition