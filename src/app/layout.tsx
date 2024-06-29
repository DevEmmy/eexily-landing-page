import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import toast, { Toaster } from 'react-hot-toast';

const poppins = Poppins({ subsets: ["latin"], weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"] });

export const metadata: Metadata = {
  title: {
    default: "Eexily",
    template: "%s | Eexily",
  },
  description: "With Eexily, you can now stay at home, know how much gas you have left and order for a refill when you're running low without hassle or extra fees! Tell your neighbors!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <Footer />
        <Toaster />
        {/* <!-- Default Statcounter code for Eexily https://www.eexily.com/ --> */}
<script type="text/javascript">
var sc_project=13013387; 
var sc_invisible=1; 
var sc_security="89fa70de"; 
</script>
<script type="text/javascript"
src="https://www.statcounter.com/counter/counter.js" async></script>
<noscript><div className="statcounter"><a title="Web Analytics"
href="https://statcounter.com/" target="_blank"><img className="statcounter"
src="https://c.statcounter.com/13013387/0/89fa70de/1/" alt="Web Analytics"
referrerPolicy="no-referrer-when-downgrade"></img></a></div></noscript>
{/* <!-- End of Statcounter Code --> */}
      </body>
      
    </html>
  );
}