import "./globals.css";
export const metadata = {
  title: "Harish Portfolio",
  description: "Portfolio of Harish - Software Developer",
  icons: {
    icon: "/myicon.ico",
    shortcut: "/myicon.ico",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
