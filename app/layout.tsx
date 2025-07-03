import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ['latin'],
  style: 'normal',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Mateja Stoev",
  description: "Mateja Stoev - Full-stack Web Developer portfolio",
  openGraph: {
    title: "Mateja Stoev",
    description: "Full-stack web developer from Serbia",
    url: "https://mateja.studiozid.rs",
    siteName: "Mateja Stoev Portfolio",
    images: [
      {
        url: "https://cdn.studiozid.rs/heroimg.png",
        width: 1200,
        height: 630,
        alt: "Mateja Stoev - Landing Page"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  robots: "index, follow",
  themeColor: "#000000",
  viewport: "width=device-width, initial-scale=1",
  keywords: [
    "Mateja Stoev",
    "Mateja Stoev portfolio",
    "Full-stack web developer",
    "Frontend developer",
    "Backend developer",
    "React developer",
    "Next.js developer",
    "JavaScript developer",
    "Web development services",
    "Contact Mateja Stoev",
    "Hire web developer",
    "Freelance web developer contact",
    "Remote web developer"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Mateja Stoev",
              "jobTitle": "Full Stack Web Developer",
              "url": "https://mateja.studiozid.rs",
              "sameAs": ["https://github.com/mateja404"],
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              }
            })
          }}
        />
        <meta name="msvalidate.01" content="1379BF81FDA8D6FEB64C97335E6D0827" />
        <meta name="google-site-verification" content="YCWd8QcCHEaMo1806_a8ozetx43ck9ywzkE3i76BDrk" />
      </head>
      <body className={`${poppins.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}