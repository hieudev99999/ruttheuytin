import { SEO } from "@/components/seo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  ArrowRight,
  Shield,
  Clock,
  CreditCard,
  Wallet,
  Phone,
  ChevronRight,
} from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    icon: CreditCard,
    title: "Rút Thẻ Tín Dụng",
    description:
      "Chuyển đổi hạn mức thẻ tín dụng của bạn thành tiền mặt ngay lập tức về tài khoản ngân hàng",
    features: [
      "Vikki Go",
      "HD Bank",
      "BV Bank",
      "Cake",
      "Muadee",
      "Các loại thẻ tín dụng khác",
    ],
    cta: "Order Dịch Vụ",
  },
  {
    icon: Wallet,
    title: "Rút Ví Trả Sau",
    description:
      "Chuyển đổi hạn mức ví trả sau của bạn thành tiền mặt ngay lập tức về tài khoản ngân hàng",
    features: [
      "Tnex",
      "Vnpay",
      "ZaloPay",
      "Momo",
      "Kredivo",
      "Spaylayter",
      "Các loại ví trả sau khác",
    ],
    cta: "Order Dịch Vụ",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <SEO
        title="Rút Thẻ Uy Tín - Rút Tiền Thẻ Tín Dụng & Ví Trả Sau Nhanh Chóng"
        description="Rút tiền từ thẻ tín dụng & ví trả sau nhanh chóng, an toàn. Hỗ trợ 24/7, phí thấp, nhận tiền ngay. Dịch vụ uy tín, tiện lợi tại RutTheUyTin.com."
        keywords="rút thẻ tín dụng, rút tiền thẻ tín dụng, rút tiền mặt thẻ tín dụng, rút thẻ uy tín, rút tiền thẻ tín dụng nhanh, rút tiền mặt từ thẻ tín dụng, rút tiền ví trả sau, rút tiền từ thẻ tín dụng, rút tiền nhanh chóng, đáo hạn thẻ tín dụng, dịch vụ rút tiền thẻ tín dụng, hỗ trợ rút tiền thẻ tín dụng, rút tiền từ ví trả sau, rút tiền online, rút tiền thẻ tín dụng lãi suất thấp"
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 via-background to-background dark:from-primary/10 dark:via-background dark:to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Dịch Vụ Hỗ Trợ
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent dark:from-primary dark:to-primary/80">
                {" "}
                Rút Thẻ Tín Dụng & Ví Trả Sau
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Phí rút thấp & hợp lý. An toàn, Nhanh Chóng, Bảo Mật.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {/* <Link href="/services">
                <Button size="lg" className="inline-flex items-center">
                  Xem Tất Cả Dịch Vụ <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link> */}
              <Link href="/contact">
                <Button size="lg" className="inline-flex items-center">
                  Liên Hệ <Phone className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background dark:bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Dịch Vụ Của Chúng Tôi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-shadow dark:bg-background/5 dark:hover:bg-background/10 flex flex-col justify-between"
              >
                <div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <service.icon className="h-6 w-6 text-primary" />
                      <CardTitle>{service.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
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
                </div>
                <CardFooter>
                  <Link href="/contact">
                    <Button className="w-full">{service.cta}</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50 dark:bg-muted/10">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Tại Sao Chọn Dịch Vụ Chúng Tôi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-background dark:bg-background/5">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Shield className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-bold mb-2">Giao Dịch An Toàn</h3>
                <p className="text-muted-foreground">
                  Chữ Tín còn quý hơn vàng
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background dark:bg-background/5">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Clock className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-bold mb-2">Xử Lý Tức Thời</h3>
                <p className="text-muted-foreground">
                  Rút tiền về tài khoản nhanh chóng
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background dark:bg-background/5">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Phone className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-bold mb-2">Hỗ Trợ 24/7</h3>
                <p className="text-muted-foreground">
                  Chúng tôi luôn hỗ trợ mọi người 24/7
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
