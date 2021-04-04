import React from "react";
import Reveal from "react-reveal/Reveal";
import { BiTransfer, BiCloudUpload, BiBot, BiAnalyse } from "react-icons/bi";
import Card from "./sub-components/Card";

const MainContent = () => {
  return (
    <>
      <div className="main-container">
        <Reveal effect="fadeInDown">
          <h1 className="main-heading">Why use our software?</h1>
        </Reveal>
        <Reveal effect="fadeInUp">
          <div className="cards-container">
            <Card
              cardIcon=<BiTransfer className="card-icon" />
              cardTitle="Payments made easy"
              cardText="Our software takes care of your students payments, from all various methods and payment gateways possible."
              cardFooter="Basic £100 / month"
            />

            <Card
              cardIcon=<BiCloudUpload className="card-icon" />
              cardTitle="No more lost records"
              cardText="We will track, analyze and store your school's documents, records and data safely and allow you to access them anywhere in the world!"
              cardFooter="Pro £199.99 / month"
            />

            <Card
              cardIcon=<BiBot className="card-icon" />
              cardTitle="Reach parents by a click"
              cardText="Our solution comes with a backed in platform to allow you to organize virtual meetings with your students parents or mail or send them sms with a single click."
              cardFooter="Platinum £300 / year"
            />

            <Card
              cardIcon=<BiAnalyse className="card-icon" />
              cardTitle="Get useful insights"
              cardText="We will also help you understand your bussiness processes, and secrets more by analyzing your very data and give you personalized insights."
              cardFooter="Enterprise £599.99 / year"
            />
          </div>
        </Reveal>
      </div>
    </>
  );
};

export default MainContent;
