import WelcomeLottie from "@/assets/dashboard/DashboardWelcome.json";
import InsinghtsChart from "@/components/charts/InsinghtsChart";
import Container from "@/components/ui/Container";
import Lottie from "lottie-react";
import { FaEnvelopeOpenText, FaRegNewspaper } from "react-icons/fa";
import { FaUsersViewfinder } from "react-icons/fa6";

const Dashboard = () => {
  return (
    <Container className="my-14">
      {/* lottie */}
      <div className="flex justify-center items-center my-20">
        <Lottie
          animationData={WelcomeLottie}
          loop={true}
          className="max-w-[500px]"
        />
      </div>

      {/* statistics */}
      <div className="">
        <h2 className="font-bold text-[20px]">Today Donations Summery</h2>
        <div className="md:flex justify-between gap-6">
          {/* Jobs summery start     */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 rounded-lg mt-5">
            <div className="rounded-lg border border-gray-200 p-2">
              <FaRegNewspaper className=" text-2xl" />
              <h2 className="font-bold mt-2">40</h2>
              <p className="text-sm font-bold">Total Donations</p>
              <p className="text-sm text-slate-500">8% from Yesterday</p>
            </div>
            <div className="rounded-lg border border-gray-200 p-2">
              <FaUsersViewfinder className=" text-2xl mb-2" />
              <h2 className="font-bold">5</h2>
              <p className="text-sm font-bold">Total Viewed</p>
              <p className="text-sm text-slate-500">5% from Yesterday</p>
            </div>

            <div className="rounded-lg border border-gray-200 p-2">
              <FaEnvelopeOpenText className=" text-2xl mb-2" />
              <h2 className="font-bold">100</h2>
              <p className="text-sm font-bold">Total Inspiration</p>
              <p className="text-sm text-slate-500">7% from Last Week</p>
            </div>

            <div className="rounded-lg border border-gray-200 p-2">
              <FaEnvelopeOpenText className=" text-2xl mb-2" />
              <h2 className="font-bold">100</h2>
              <p className="text-sm font-bold">Total Donations</p>
              <p className="text-sm text-slate-500">12% from Yesterday</p>
            </div>
          </div>
          {/* Jobs summery end*/}

          {/* Visitor Insinghts start  */}
          <div className="hidden md:block">
            <InsinghtsChart></InsinghtsChart>
          </div>
          {/* Visitor Insinghts end  */}
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
