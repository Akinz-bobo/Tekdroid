import Image from "next/image"
import React from "react"
import Footer from "../../components/ui/Footer"
import MainNav from "../../components/ui/nav/MainNav"
import { blog0, blog01 } from "../../assets/blogImg"

function Blog() {
  return (
    <main>
      <MainNav />
      <section className="my-[5rem]">
        <div className="max-w-[80%] mx-auto">
          <div className="max-w-[90%] md:max-w-[70%] laptop:max-w-[60%] mx-auto text-center">
            <h2 className="text-xl md:text-2xl laptop:text-3xl font-[600] mb-3 ">
              A UX Case Study on Creating a Studious Environment for Students
            </h2>
            <p className="flex flex-col items-center justify-center gap-0 md:flex-row md:gap-2 font-[500] ">
              <span>Andrew Jonson</span>
              <span>Posted on 27th January 2021</span>
            </p>
          </div>
          <div className="my-[2.5rem]">
            <Image src={blog0} alt="" />
          </div>
          <div className="md:max-w-[90%] laptop:max-w-[50%] mx-auto">
            <div>
              <h3 className="font-[600] text-xl md:text-2xl laptop:text-3xl mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
            </div>
            <div className="my-6 laptop:my-8">
              <Image src={blog01} alt="" />
            </div>
            <div>
              <h3 className="font-[600] text-xl md:text-2xl laptop:text-3xl mb-3">
                Ut enim ad minim veniam, quis nostrud.
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default Blog
