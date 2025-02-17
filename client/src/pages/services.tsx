import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, CreditCard, Wallet, Phone } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

const creditCards = [
  {
    type: "Visa/Mastercard",
    features: [
      "Up to $10,000 withdrawal limit",
      "2.5% processing fee",
      "Same-day processing",
      "All major banks supported"
    ],
    processingTime: "1-24 hours",
    fee: "2.5%",
    phone: "+1 (555) 123-4567",
    email: "visa@financeflow.com"
  },
  {
    type: "American Express",
    features: [
      "Up to $15,000 withdrawal limit",
      "3% processing fee",
      "Premium card support",
      "Extended credit period"
    ],
    processingTime: "1-24 hours",
    fee: "3%",
    phone: "+1 (555) 123-4567",
    email: "amex@financeflow.com"
  }
];

const walletPlans = [
  {
    name: "Standard Wallet",
    creditLimit: "Up to $5,000",
    features: [
      "0% interest for first 30 days",
      "Flexible repayment options",
      "No annual fee",
      "Mobile app access"
    ],
    monthlyFee: "$0",
    phone: "+1 (555) 123-4567",
    email: "standard@financeflow.com"
  },
  {
    name: "Premium Wallet",
    creditLimit: "Up to $20,000",
    features: [
      "0% interest for first 60 days",
      "Priority processing",
      "Exclusive rewards",
      "24/7 premium support"
    ],
    monthlyFee: "$9.99",
    phone: "+1 (555) 123-4567",
    email: "premium@financeflow.com"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Services() {
  return (
    <div className="min-h-screen py-20">
      <motion.div
        className="container px-4 md:px-6 max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of financial services designed to meet your needs
          </p>
        </div>

        {/* Credit Card Withdrawal Section */}
        <section className="mb-20">
          <div className="flex items-center gap-2 mb-8 justify-center">
            <CreditCard className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Credit Card Withdrawal</h2>
          </div>

          <motion.div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto" variants={containerVariants}>
            {creditCards.map((card, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card className="relative overflow-hidden hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl">{card.type}</CardTitle>
                    <p className="text-muted-foreground">
                      Processing Time: {card.processingTime}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {card.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 p-4 bg-primary/5 rounded-lg space-y-2">
                      <p className="font-semibold">Processing Fee: {card.fee}</p>
                      <p>Contact: {card.phone}</p>
                      <p>Email: {card.email}</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <a href={`tel:${card.phone}`}>Contact Now</a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Postpaid Wallet Section */}
        <section>
          <div className="flex items-center gap-2 mb-8 justify-center">
            <Wallet className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Postpaid Wallet</h2>
          </div>

          <motion.div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto" variants={containerVariants}>
            {walletPlans.map((plan, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card className="relative overflow-hidden hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <p className="text-muted-foreground">
                      Credit Limit: {plan.creditLimit}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 p-4 bg-primary/5 rounded-lg space-y-2">
                      <p className="font-semibold">Monthly Fee: {plan.monthlyFee}</p>
                      <p>Contact: {plan.phone}</p>
                      <p>Email: {plan.email}</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" asChild>
                      <a href={`tel:${plan.phone}`}>Contact Now</a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-2 p-4 bg-primary/5 rounded-lg">
              <Phone className="h-5 w-5 text-primary" />
              <p>Need help choosing? Call us at <a href="tel:+15551234567" className="text-primary font-medium">+1 (555) 123-4567</a></p>
            </div>
          </motion.div>
        </section>
      </motion.div>
    </div>
  );
}