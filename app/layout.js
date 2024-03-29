import "./globals.css";
import 'remixicon/fonts/remixicon.css'
import Header from '@/components/Header/page'

export const metadata = {
  title: "News Blog App",
  description: "News",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
