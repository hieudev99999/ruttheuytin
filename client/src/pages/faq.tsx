import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the credit card withdrawal service work?",
    answer: "Our credit card withdrawal service allows you to convert your credit card limit into cash. Simply submit your request through our secure platform, and once approved, the funds will be transferred to your designated bank account within 24 hours."
  },
  {
    question: "What are the fees for credit card withdrawal?",
    answer: "Our fees are transparent and competitive, typically ranging from 2-4% of the withdrawal amount. The exact fee will be clearly displayed before you confirm your transaction."
  },
  {
    question: "How does the postpaid wallet work?",
    answer: "The postpaid wallet is a digital credit line that allows you to make purchases now and pay later. You'll receive a credit limit based on your profile, and you can repay the used amount in flexible installments."
  },
  {
    question: "What is the maximum credit limit available?",
    answer: "Credit limits vary based on individual profiles and are determined after a quick assessment. Limits typically range from $500 to $10,000, but higher limits are available for qualified customers."
  },
  {
    question: "How secure are your services?",
    answer: "We employ bank-grade security protocols, including 256-bit encryption for all transactions. Your financial and personal information is protected by multiple layers of security."
  }
];

export default function FAQ() {
  return (
    <div className="min-h-screen py-20">
      <div className="container px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h1>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
