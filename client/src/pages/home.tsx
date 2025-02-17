import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, Clock, CreditCard, Wallet } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen">
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
            <div className="space-x-4">
              <Link href="/services">
                <Button size="lg" className="inline-flex items-center">
                  Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-bold mb-2">Secure Transactions</h3>
                <p className="text-muted-foreground">
                  Bank-grade security protocols protecting your every transaction
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Clock className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-bold mb-2">Instant Processing</h3>
                <p className="text-muted-foreground">
                  Quick withdrawals and real-time wallet updates
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Wallet className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-bold mb-2">Flexible Solutions</h3>
                <p className="text-muted-foreground">
                  Customizable credit limits and payment terms
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
