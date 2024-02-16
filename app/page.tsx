import Navbar from "@/components/navigation/Navbar";
import Profile from "@/components/profile/Profile";
import QRCode from "@/components/QRCode/QRCode";
import Listing from "@/components/Listing/Listing";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:grid-flow-row lg:grid-flow-col gap-x-6 p-16">
        <Profile />
        <QRCode />
        <div className='md:row-span-2 md:col-span-2 lg:row-span-2 lg:col-span-2 rounded-lg min-h-9'>
          <Listing />
        </div>
      </div> */}
      <div className="lg:flex p-10 gap-6">
        <div className=" grid grid-cols-1 md:grid-cols-2 md:grid-flow-row md:gap-5 lg:flex lg:flex-col lg:basis-1/3 mb-5">
          <Profile />
          <QRCode />
        </div>
        <div className=" md:row-span-2 md:col-span-2 lg:flex-grow rounded-lg">
          <Listing />
        </div>
      </div>
    </main>
  );
}
