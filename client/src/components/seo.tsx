import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}

export function SEO({ 
  title = "Rút Thẻ Uy Tín - Rút Tiền Thẻ Tín Dụng & Ví Trả Sau Nhanh Chóng",
  description = "Rút tiền từ thẻ tín dụng & ví trả sau nhanh chóng, an toàn. Hỗ trợ 24/7, phí thấp, nhận tiền ngay. Dịch vụ uy tín, tiện lợi tại RutTheUyTin.com.",
  keywords = "rút thẻ tín dụng, rút tiền thẻ tín dụng, rút tiền mặt thẻ tín dụng, rút thẻ uy tín, rút tiền thẻ tín dụng nhanh, rút tiền mặt từ thẻ tín dụng, rút tiền ví trả sau, rút tiền từ thẻ tín dụng, rút tiền nhanh chóng, đáo hạn thẻ tín dụng, dịch vụ rút tiền thẻ tín dụng, hỗ trợ rút tiền thẻ tín dụng, rút tiền từ ví trả sau, rút tiền online, rút tiền thẻ tín dụng lãi suất thấp",
  ogImage = "https://ruttheuytin.com/og-image.jpg",
  ogUrl = "https://ruttheuytin.com",
}: SEOProps) {
  const siteTitle = title ? `${title} | FinanceFlow` : "FinanceFlow";
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <link rel="canonical" href={ogUrl} />
    </Helmet>
  );
}