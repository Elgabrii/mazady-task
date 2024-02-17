import Navbar from "@/components/navigation/Navbar";
import Profile from "@/components/profile/Profile";
import QRCode from "@/components/QRCode/QRCode";
import Listing from "@/components/Listing/Listing";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <div className="lg:flex p-3 md:p-10 md:gap-6">
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
