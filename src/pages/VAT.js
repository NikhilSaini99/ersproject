import React from "react";
import Head from "next/head";
import Image from "next/image";
import Banner from "../assets/images/vat.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function VAT() {
  return (
    <>
      <Head>
        <title>Services</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      {/*-----------------------Header---------------------*/}

      <Header />

      {/*-----------------------Banner---------------------*/}

      <section>
        <Image src={Banner} alt="..." className="h-96 w-full" />
      </section>

      <section className="mx-40 my-10 p-10">
        <div>
          <h1 className=" text-[#2F3192]  text-4xl font-semibold">
            Guide on the Appointment of a Public Officer
          </h1>
          <div className="border border-bottom border-yellowish mt-1  w-[66%] "></div>
        </div>

        <div className="mt-10 space-y-8">
          <div>
            <h2 className="text-3xl text-subColor mb-1">Introduction</h2>
            <p>
              {" "}
              The Income Tax Order of 1975 as amended requires that a company
              carrying on business in Swaziland appoints a Public Officer to
              represent the company in all their tax obligations.
            </p>
            <h3 className=" text-lg">
              In terms of Section 51(2) of the Order, a public officer shall be
              appointed by
            </h3>
            <ul className="list-disc">
              <div className="pl-8 text-black/80">
                <li>the company through the board of directors or;</li>
                <li>by an agent; or</li>
                <li>by an attorne; or</li>
                <li>any other body authorized to make such appointment</li>
              </div>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl text-subColor mb-1">
              Who qualifies to be appointed as Public Officer?
            </h2>
            <p>
              A natural person, holding a position of authority within the
              company who resides in Swaziland qualifies to be appointed as a
              Public Officer.
            </p>
          </div>

          <div>
            <h2 className="text-3xl text-subColor mb-1">
              What is the purpose of appointing a Public Officer?
            </h2>
            <p>
              To have a natural person managing the tax affairs of the company
              as a company is an artificial person and therefore cannot manage
              its own tax affairs.
            </p>
          </div>

          <div>
            <h2 className="text-3xl text-subColor mb-1">
              Does an artificial person qualify to be appointed as Public
              Officer?
            </h2>
            <p className=" text-lg">
              An artificial person cannot be appointed as public officer for the
              reasons stated below:
            </p>
            <ul className="list-disc">
              <div className="pl-8 text-black/80">
                <li>
                  Cannot be held personally liable for actions of another
                  artificial person, company.
                </li>
                <li>
                  Their appointment presents a challenge when it comes to
                  accepting the liability of the actions of the company that
                  they may be representing.
                </li>
              </div>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl text-subColor mb-1">Exclusions</h2>
            <p className=" text-lg">
              The following entities DO NOT qualify to be appointed as Public
              Officers hence the ERS will not approve such appointments:
            </p>
            <ul className="list-disc">
              <div className="pl-8 text-black/80 grid grid-cols-2">
                <li>Auditing Firms</li>
                <li>Accounting firms</li>
                <li>Tax advisory firms</li>
                <li>Law firms</li>
                <li>Unauthorized persons</li>
              </div>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl text-subColor mb-1">
              How to apply to be a Public officer?
            </h2>
            <p className=" text-lg">
              An application for approva l must be made in writing to the
              Commissioner General, accompanied by the following documents:
            </p>
            <ul className="list-disc">
              <div className="pl-8 text-black/80">
                <li>
                  A resolution by the company board of directors wherein the
                  appointment was made.
                </li>
                <li>An acceptance letter signed by the appointed person.</li>
                <li>
                  A certified copy of an ID document of the person appointed as
                  public officer.
                </li>
                <li>
                  A valid certified copy of the working permit where the person
                  appointed is not a Swazi National.
                </li>
                <li>
                  A completed form titled Application to be Public Officer ERS-
                  ITPO 01.
                </li>
              </div>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl text-subColor mb-1">
              Liabilities of a Public Officer
            </h2>
            <p className=" text-lg">
              In terms of Sections 44, 45 , 46, 47 and 51(11) of the Income Tax
              Order, a public Officer shall upon approval of his appointment by
              the Commissioner General:
            </p>
            <ul className="list-disc">
              <div className="pl-8 text-black/80">
                <li>
                  Be answerable for all acts or matters as required to be
                  performed by the company under the Income Tax Order.
                </li>
                <li>
                  Represent the taxpayer in respect of the income of the
                  company.
                </li>
                <li>Be personally liable to penalties in cases of default.</li>
              </div>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl text-subColor mb-1">
              What are the duties of the Public Officer?
            </h2>

            <p className=" text-lg">
              The public officer shall amongst other things ensure:
            </p>
            <ul className="list-disc">
              <div className="pl-8 text-black/80">
                <li>
                  All communication of the company to the Commissioner General
                  is signed by him or her.
                </li>
                <li>Company tax returns are submitted on time as required.</li>
                <li>Timeous payment of all taxes</li>
                <li>
                  Proper business records are kept in the premises of the
                  business.
                </li>
                <li>
                  Such records are made available as and when required by the
                  Commissioner General.
                </li>
                <li>
                  All information requested by the Commissioner General is
                  submitted timeously.
                </li>
                <li>
                  Withholding and remittance of taxes is complied with where
                  applicable.
                </li>
                <li>
                  All obligations of the company as an employer are carried out.
                </li>
                <li>
                  The company complies with any other provisions under the
                  Income Tax Order.
                </li>
              </div>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl mb-1 text-mainColor">
              What are the duties of a company?
            </h2>
            <ul className="list-disc">
              <div className="pl-8 text-black/80">
                <li>
                  That the office of the public officer is filled at all times.
                </li>
                <li>
                  The Commissioner General is notified where there is a change
                  of public officer.
                </li>
              </div>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl mb-1 text-mainColor">
              Failure to appoint a Public Officer Failure to appoint a public
              officer by a company shall:
            </h2>
            <ul className="list-disc">
              <div className="pl-8 text-black/80">
                <li>
                  Result in the imposition of a penalty not exceeding sixty
                  Emalangeni (E60) for every day that the default continues
                  (Subject to the Commissioner General s review of the penalty).
                </li>
                <li>
                  Not exonerate any company from the obligation of complying
                  with the Income Tax Order.
                </li>
                <li>
                  The Commissioner General shall designate a managing director
                  or other officer of the company as its public officer.
                </li>
              </div>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
