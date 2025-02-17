import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ArrowRight, Shield, Clock, CreditCard, Wallet, Phone, ChevronRight } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    icon: CreditCard,
    title: "Credit Card Withdrawal",
    description: "Convert your credit card limit to cash instantly",
    features: ["Multiple card support", "Competitive rates", "24/7 service"],
    cta: "Withdraw Now"
  },
  {
    icon: Wallet,
    title: "Postpaid Wallet",
    description: "Flexible digital credit line for your needs",
    features: ["Instant credit", "Easy repayment", "No hidden fees"],
    cta: "Get Started"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Smart Financial Solutions for
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"> Modern Life</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Access instant credit card withdrawals and flexible postpaid wallet services. 
              Secure, fast, and tailored to your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/services">
                <Button size="lg" className="inline-flex items-center">
                  View All Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="inline-flex items-center">
                  Contact Us <Phone className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <service.icon className="h-6 w-6 text-primary" />
                    <CardTitle>{service.title}</CardTitle>
                  </div>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <ChevronRight className="h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/services">
                    <Button className="w-full">{service.cta}</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-bold mb-2">Secure Transactions</h3>
                <p className="text-muted-foreground">
                  Bank-grade security protocols protecting your every transaction
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Clock className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-bold mb-2">Instant Processing</h3>
                <p className="text-muted-foreground">
                  Quick withdrawals and real-time wallet updates
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Phone className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-bold mb-2">24/7 Support</h3>
                <p className="text-muted-foreground">
                  Our team is always here to help you
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}