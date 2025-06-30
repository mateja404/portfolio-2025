import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Mateja Stoev | Contact",
  description: "Mateja Stoev - Full-stack Web Developer portfolio",
  openGraph: {
    title: "Mateja Stoev | Contact",
    description: "Get in touch with Mateja Stoev",
    url: "https://mateja.studiozid.rs/contact",
    siteName: "Mateja Stoev Portfolio",
    images: [
      {
        url: "../../public/heroimg.png",
        width: 1200,
        height: 630,
        alt: "Mateja Stoev - Contact Page"
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

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  );
}