import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, CreditCard, Wallet } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen py-20">
      <div className="container px-4 md:px-6">
        <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="relative">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-6 w-6 text-primary" />
                Credit Card Withdrawal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {[
                  "Instant cash withdrawals",
                  "Competitive processing fees",
                  "High approval rates",
                  "24/7 withdrawal service",
                  "Secure transaction processing"
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button className="w-full">Learn More</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="relative">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wallet className="h-6 w-6 text-primary" />
                Postpaid Wallet
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {[
                  "Flexible credit limits",
                  "Pay later convenience",
                  "Zero annual fees",
                  "Easy repayment options",
                  "Real-time balance updates"
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button className="w-full">Learn More</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
