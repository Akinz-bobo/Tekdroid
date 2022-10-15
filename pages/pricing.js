import React from "react";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import Footer from "../components/ui/Footer";
import MainNav from "../components/ui/nav/MainNav";
import Accordion from "../components/ui/Accordion";

function Pricing() {
  return (
    <main>
      <MainNav />
      <div className="my-[5rem] max-w-[80%] mx-auto">
        <div className="md:max-w-[70%]  laptop:max-w-[50%] mx-auto">
          <h2 className="font-[600] text-3xl">Our Pricing Plans</h2>
          <p className="my-3">
            When you’re ready to go beyond prototyping in Figma, Webflow is
            ready to help you bring your designs to life — without coding them.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 laptop:grid-cols-3 md:gap-x-8 gap-y-8 laptop:gap-y-0 my-[4rem]">
          <div className="bg-[#F4F6FC] rounded-md px-8 py-10">
            <div className="flex items-center gap-4">
              <strong className="text-3xl">$299.99</strong>{" "}
              <span className="text-[#2405F2]">Per Design</span>
            </div>
            <div className="max-w-[70%]">
              <h3 className="text-2xl font-[500] my-6">Landing Page</h3>
              <p>When you’re ready to go beyond prototyping in Figma, </p>
            </div>
            <div className="flex flex-col gap-y-6 my-[3rem]">
              <div className="flex items-center gap-4">
                <FaPlay className=" text-[#97DAAD] text-[25px]" />
                <p>All limited links</p>
              </div>
              <div className="flex items-center gap-4">
                <FaPlay className=" text-[#97DAAD] text-[25px]" />
                <p>Own analytics platform</p>
              </div>
              <div className="flex items-center gap-4">
                <FaPlay className=" text-[#97DAAD] text-[25px]" />
                <p>Chat support</p>
              </div>
              <div className="flex items-center gap-4">
                <FaPlay className="text-slate-400 text-[25px]" />
                <p>Optimize hashtags</p>
              </div>
              <div className="flex items-center gap-4">
                <FaPlay className="text-slate-400 text-[25px]" />
                <p>Unlimited users</p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Link href={"/contact"}>
                <button className="bg-[#282938] rounded-full px-12 py-3 text-white">
                  Get Started
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-[#23256e] rounded-md px-8 py-10 text-white">
            <div className="flex items-center gap-4">
              <strong className="text-3xl">$399.99</strong>{" "}
              <span className="text-[#FCD980]">Per Design</span>
            </div>
            <div className="max-w-[70%]">
              <h3 className="text-2xl font-[500] my-6">Landing Page</h3>
              <p>When you’re ready to go beyond prototyping in Figma, </p>
            </div>
            <div className="flex flex-col gap-y-6 my-[3rem]">
              <div className="flex items-center gap-4">
                <FaPlay className=" text-[#97DAAD] text-[25px]" />
                <p>All limited links</p>
              </div>
              <div className="flex items-center gap-4">
                <FaPlay className=" text-[#97DAAD] text-[25px]" />
                <p>Own analytics platform</p>
              </div>
              <div className="flex items-center gap-4">
                <FaPlay className=" text-[#97DAAD] text-[25px]" />
                <p>Chat support</p>
              </div>
              <div className="flex items-center gap-4">
                <FaPlay className="text-[#97DAAD] text-[25px]" />
                <p>Optimize hashtags</p>
              </div>
              <div className="flex items-center gap-4">
                <FaPlay className="text-[#97DAAD] text-[25px]" />
                <p>Unlimited users</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Link href={"/contact"}>
                <button className="bg-[#FCD980] rounded-full px-12 py-3 text-[#282938]">
                  Get Started
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-[#F4F6FC] rounded-md px-8 py-10">
            <div className="flex items-center gap-4">
              <strong className="text-3xl">$499 +</strong>{" "}
              <span className="text-[#2405F2]">Per Design</span>
            </div>
            <div className="max-w-[70%]">
              <h3 className="text-2xl font-[500] my-6">Landing Page</h3>
              <p>When you’re ready to go beyond prototyping in Figma, </p>
            </div>
            <div className="flex flex-col gap-y-6 my-[3rem]">
              <div className="flex items-center gap-4">
                <FaPlay className=" text-[#97DAAD] text-[25px]" />
                <p>All limited links</p>
              </div>
              <div className="flex items-center gap-4">
                <FaPlay className=" text-[#97DAAD] text-[25px]" />
                <p>Own analytics platform</p>
              </div>
              <div className="flex items-center gap-4">
                <FaPlay className=" text-[#97DAAD] text-[25px]" />
                <p>Chat support</p>
              </div>
              <div className="flex items-center gap-4">
                <FaPlay className="text-[#97DAAD] text-[25px]" />
                <p>Optimize hashtags</p>
              </div>
              <div className="flex items-center gap-4">
                <FaPlay className="text-[#97DAAD] text-[25px]" />
                <p>Unlimited users</p>
              </div>
              <div className="flex items-center gap-4">
                <FaPlay className="text-[#97DAAD] text-[25px]" />
                <p>Assits and Help</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Link href={"/contact"}>
                <button className="bg-[#282938] rounded-full px-12 py-3 text-white">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Accordion />
      <Footer />
    </main>
  );
}

export default Pricing;
