import React, { FC } from "react";
import { H1, H2, TextBody } from "../typography";
import data from "./faq.json";
import { Accordion } from "./faq.styles";

interface Question {
  id: string;
  question: string;
  answer: string;
}

interface FaqProps {
  className?: string;
}

interface AccordionItemProps {
  question: Question;
}

export const Faq: FC<FaqProps> = ({ className }) => {
  const { faq } = data;

  return (
    <div id="faq" className={`row ${className}`}>
      <div className="col-12">
        <H1>Preguntas frecuentes</H1>
      </div>

      <div className="col">
        <Accordion className="accordion accordion-flush" id="faq-accordion">
          {faq.map((question) => (
            <AccordionItem key={question.question} question={question} />
          ))}
        </Accordion>
      </div>
    </div>
  );
};

const AccordionItem: FC<AccordionItemProps> = ({ question }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading-${question.id}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${question.id}`}
          aria-expanded="true"
          aria-controls={`collapse-${question.id}`}
        >
          <TextBody darker>{question.question}</TextBody>
        </button>
      </h2>
      <div
        id={`collapse-${question.id}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading-${question.id}`}
        data-bs-parent="#faq-accordion"
      >
        <div className="accordion-body">
          <TextBody darker>{question.answer}</TextBody>
        </div>
      </div>
    </div>
  );
};
