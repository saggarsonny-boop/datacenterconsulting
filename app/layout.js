import "./globals.css";

export const metadata = {
  title: "Datacenter Consulting",
  description: "Independent think tank publishing open frameworks, research, and partner tools for transparent data center siting and power stewardship.",
  icons: {
    icon: "/favicon.svg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
