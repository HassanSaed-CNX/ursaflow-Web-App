import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Hydraulics Production Control",
  description: "Role based production tracking for hydraulics lines."
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
