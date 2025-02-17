import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CreditCard, Wallet, Phone, HelpCircle } from "lucide-react";

export function Navigation() {
  return (
    <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <a className="flex items-center gap-2 text-primary font-bold text-xl">
                <CreditCard className="h-6 w-6" />
                FinanceFlow
              </a>
            </Link>
          </div>
          
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <Link href="/services">
              <Button variant="ghost" className="flex items-center gap-2">
                <Wallet className="h-4 w-4" />
                Services
              </Button>
            </Link>
            <Link href="/faq">
              <Button variant="ghost" className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                FAQ
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="default" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
