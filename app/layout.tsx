import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oscar Muchiri | Computer Scientist",
  description:
    "Portfolio of Oscar Muchiri — Computer Scientist working across machine learning, software engineering, computer vision, data analytics and geospatial systems.",
  keywords: [
    "Oscar Muchiri",
    "Computer Scientist",
    "Machine Learning",
    "Software Engineering",
    "Geospatial Systems",
    "GIS",
    "Computer Vision",
    "Kenya"
  ],
  openGraph: {
    title: "Oscar Muchiri | Computer Scientist",
    description:
      "Machine Learning • Software Engineering • Geospatial Systems",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
