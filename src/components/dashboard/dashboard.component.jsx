import { Icon } from "@iconify/react";
import { Outlet, Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function dashboard() {
  const sideBarAnimate = {
    hidden: { x: -200 },
    show: { x: 0 },
  };
  return (
    <>
      <nav className="w-full base shadow-md py-3 ">
        <div className="container w-full mx-auto flex justify-between px-2">
          <div className=" font-bold self-center">Adminin.</div>
          <div className="flex">
            <div className="cursor-pointer hover:opacity-90 hover:bg-black/20 hover:rounded-full transition-all p-2">
              <Icon
                icon="material-symbols:account-balance-wallet-outline"
                width={24}
              />
            </div>
            <div className="cursor-pointer hover:opacity-90 hover:bg-black/20 hover:rounded-full transition-all p-2">
              <Icon icon="clarity:notification-solid" width={24} />
            </div>
            <div className="cursor-pointer hover:opacity-90 hover:bg-black/20 hover:rounded-full transition-all p-2">
              <Icon icon="akar-icons:settings-horizontal" width={24} />
            </div>
          </div>
        </div>
      </nav>
      <motion.section
        initial="hidden"
        animate="show"
        variants={sideBarAnimate}
        transition={{ type: "spring", stiffness: 100 }}
        className="flex w-auto h-screen"
      >
        <div className="base border-t border-black/10 px-4 w-[230px] shadow-md ">
          <Link to="overview">
            <div className="my-2  flex text-xs cursor-pointer hover:opacity-90 text-center py-2  border-gray-600/10 border-b">
              <Icon icon="ic:baseline-dashboard" width={24} />
              <span className="self-center ml-2">Dashboard</span>
            </div>
          </Link>
          <Link to="presence">
            <div className="my-2 flex text-xs cursor-pointer hover:opacity-90 text-center py-2 border-gray-600/10 border-b">
              <Icon icon="akar-icons:shipping-box-02" width={24} />
              <span className="self-center ml-2">Presence</span>
            </div>
          </Link>

          <Link to="contact">
            <div className="my-2 flex text-xs cursor-pointer hover:opacity-90 text-center py-2 border-gray-600/10 border-b">
              <Icon icon="icon-park-solid:transaction-order" width={24} />
              <span className="self-center ml-2">Contact</span>
            </div>
          </Link>

          <Link to="learning">
            <div className="my-2 flex text-xs cursor-pointer hover:opacity-90 text-center py-2 border-gray-600/10 border-b">
              <Icon icon="fluent:learning-app-24-filled" width="24" />
              <span className="self-center ml-2">Learning</span>
            </div>
          </Link>
        </div>
        <main className="m-2 w-full">
          <div className="text-xs py-2 px-2  rounded shadow w-auto">
            dashboard
          </div>
          <div className="w-full min-w-full ">
            <Outlet />
          </div>
        </main>
      </motion.section>
      <footer className="fixed bottom-0 py-2 px-2 w-full bg-[#1d1d28] border-t border-gray-500/20 shadow-2xl text-xs">
        <div className="container mx-auto">
          DesignBy &copy; admin@cepiherd.com || 2022 v.0.0.1
        </div>
      </footer>
    </>
  );
}
