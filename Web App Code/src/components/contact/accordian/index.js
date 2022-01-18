import Accordion from "./accordion";
import "./accordion.scss";
import "../../../css/style.css";

export default function AccordianMain() {
  return (
    <div className="gx-sm-0 gx-md-4">
      <div className="container accordion_container mb-5 pb-5 ">
        <span className="text-color">FAQ'S</span>
        <h3 className="text-md mb-4">Read it Out</h3>
        <Accordion
          title="How recommendations are provided ?"
          content="First of all, the latitude and longitude given by the user after tagging, are searched
          in our database. If data is available in the database, places will be shown to the user
          and if it is not available, reviews will be fetched from yelp's API and generate the
          system intelligent recommendations by passing it to our model and modifying by using
          formula. And data with system-generated ratings will be shown to use."
          type={"active"}
          height={"120px"}
        />
        <Accordion
          title="What is BERT ?"
          content="Bidirectional Encoder Representations from Transformers (BERT) is a transformer-based
          machine learning technique for natural language processing (NLP) pre-training developed"
        />
        <Accordion
          title="Our Technology Stack?"
          content="React JS |
            React Native |
            Flask
"
        />
        <Accordion
          title="Why use State of the Art Model ?"
          content="So that it covers most of the generic modules and remain persistent with respect to flexibility"
        />
      </div>
    </div>
  );
}
