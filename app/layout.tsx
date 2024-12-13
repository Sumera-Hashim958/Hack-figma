import "./globals.css";
import { Roboto, Poppins, Inter } from "next/font/google";

const myfont = Roboto ({
  subsets : ['latin'],
  weight: ["400", "700"],
})
const myfontfamily = Poppins ({
  subsets : ['latin'],
  weight: ["100","300", "700"],
})
const mythirdfont = Inter ({
  subsets : ['latin'],
  weight: ["400", "700"],
})
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${myfont.className} ${myfontfamily.className} ${mythirdfont.className}`}>
      
        {children}
      </body>
    </html>
  );
}
