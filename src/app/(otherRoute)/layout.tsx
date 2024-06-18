import Banner2 from "@/components/Banner/Banner2";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div  className='flex flex-col gap-32 md:gap-10'>
        <Banner2 />
        {children}
    </div>
  );
}
