import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, CreditCard, Wallet, Phone } from "lucide-react";
import { Link } from "wouter";

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
    fee: "2.5%"
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
    fee: "3%"
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
    monthlyFee: "$0"
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
    monthlyFee: "$9.99"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of financial services designed to meet your needs
          </p>
        </div>

        {/* Credit Card Withdrawal Section */}
        <section className="mb-20">
          <div className="flex items-center gap-2 mb-8">
            <CreditCard className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Credit Card Withdrawal</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {creditCards.map((card, index) => (
              <Card key={index} className="relative overflow-hidden">
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
                  <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                    <p className="font-semibold">Processing Fee: {card.fee}</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/contact">
                    <Button className="w-full">Apply Now</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Postpaid Wallet Section */}
        <section>
          <div className="flex items-center gap-2 mb-8">
            <Wallet className="h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold">Postpaid Wallet</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {walletPlans.map((plan, index) => (
              <Card key={index} className="relative overflow-hidden">
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
                  <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                    <p className="font-semibold">Monthly Fee: {plan.monthlyFee}</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/contact">
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 p-4 bg-primary/5 rounded-lg">
              <Phone className="h-5 w-5 text-primary" />
              <p>Need help choosing? <Link href="/contact"><a className="text-primary font-medium">Contact our team</a></Link></p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}