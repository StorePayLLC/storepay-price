import Script from 'next/script';

export const GoogleAnalyticsScript = ({ gtag }: { gtag: string }) => (
  <>
    <Script src={`https://www.googletagmanager.com/gtag/js?id=${gtag}`} strategy="afterInteractive" />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', "${gtag}");
        `}
    </Script>
  </>
);
