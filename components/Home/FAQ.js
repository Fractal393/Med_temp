import React, { Component } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel
} from "react-accessible-accordion";

class FAQ extends Component {
  render() {
    return (
      <section className="faq-area ptb-100" style={{ background: "#225195" }}>
        <div className="container">
          <div className="section-title">
            <h2 style={{ color: "white" }}>FAQ</h2>
            <div className="bar" style={{ background: "white" }} />
            <p style={{ color: "white" }}>
              Some of the frequently asked questions by our customers.
            </p>
          </div>
          <div className="faq-accordion">
            <Accordion allowZeroExpanded={true}>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Do you provide Home Delivery, and how long would the
                    delivery of medicines take?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="accordion-content">
                    Yes, we provide home delivery and your medicines would be
                    delivered within 48 hours.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    How much discount fo you offer?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="accordion-content">
                    We offer wholesale prices to the consumer which is
                    applicable to retailers which works out to 20% on an
                    average.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Is there a minimum order cost for delivery?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="accordion-content">
                    No, but for orders under $1000 delivery charges are
                    applicable.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Can we order medicines online?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="accordion-content">
                    Yes, you can send us a prescription on our whatsapp number
                    and place your order.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    );
  }
}

export default FAQ;
