import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Dịch vụ rút tiền bằng thẻ tín dụng hoạt động như thế nào?",
    answer: "Dịch vụ hỗ trợ rút tiền thẻ tín dụng của chúng tôi cho phép bạn chuyển đổi hạn mức thẻ tín dụng của mình thành tiền mặt. Chỉ cần liên hệ với chúng tôi thông qua nền tảng và sau khi được tư vấn và giao dịch, tiền sẽ được chuyển vào tài khoản ngân hàng được chỉ định của bạn trong vòng 5-10 phút."
  },
  {
    question: "Phí rút tiền là bao nhiêu?",
    answer: "Phí của chúng tôi thấp và hợp lý, thường dao động từ 3-5% số tiền rút, có những dịch vụ phí sẽ cao hơn tùy thuộc vào bạn rút thẻ hoặc ví gì. Phí chính xác sẽ được tư vấn rõ ràng trước khi bạn xác nhận giao dịch.."
  },
  {
    question: "Ví trả sau hoạt động như thế nào?",
    answer: "Ví trả sau là một hạn mức tín dụng kỹ thuật số cho phép bạn mua hàng ngay và thanh toán sau. Bạn sẽ nhận được hạn mức tín dụng dựa trên thông tin của mình đăng ký và bạn có thể trả lại số tiền đã sử dụng theo các đợt trả góp linh hoạt."
  },
  {
    question: "Hạn mức tín dụng tối đa được cấp là bao nhiêu?",
    answer: "Hạn mức tín dụng khác nhau tùy theo hồ sơ cá nhân và được xác định sau khi đánh giá từ bên phát hành thẻ. Hạn mức thường dao động từ 10-50 triệu, nhưng hạn mức cao hơn chỉ có sẵn cho khách hàng đủ điều kiện với bên phát hành thẻ."
  }
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0
  }
};

export default function FAQ() {
  return (
    <div className="min-h-screen py-20">
      <div className="container px-4 md:px-6 max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Những Câu Hỏi Thường Gặp
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
            Tìm câu trả lời cho những câu hỏi thường gặp về dịch vụ hỗ trợ rút tiền từ hạn mức thẻ tín dụng và ví trả sau của chúng tôi
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="overflow-hidden"
              >
                <AccordionItem value={`item-${index}`} className="border rounded-lg px-4 mb-4 data-[state=open]:bg-primary/5">
                  <AccordionTrigger className="text-left py-4 hover:no-underline">
                    <span className="font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
}