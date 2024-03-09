import React from "react"
import Image from "next/image"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import Footer from "../../components/ui/Footer"
import MainNav from "../../components/ui/nav/MainNav"
import { blog0 } from "../../assets/blogImg"
import Link from "next/link"
import { blogData } from "../../data/blogData"

function Blog() {
  return (
    <main>
      <MainNav />
      <section className="max-w-[80%] mx-auto">
        <div className="my-[5rem]">
          <div className="laptop:max-w-[50%] mx-auto text-center mb-[3rem]">
            <h2 className="font-[600] text-2xl md:text-3xl mb-6 ">
              A UX Case Study on Creating a Studious Environment for Students
            </h2>
            <p className="flex items-center flex-col md:flex-row md:gap-3">
              <span className="text-[18px]">Andrew Jonson</span>
              <span className="opacity-95">Posted on 27th January 2021</span>
            </p>
          </div>
          <div>
            <Image src={blog0} alt="" />
          </div>
          <div className="mt-3 md:max-w-[80%] laptop:max-w-[60%] mx-auto md:text-center">
            <p className="mb-2">
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle. By
              the same illusion which lifts the horizon of the sea to the level
              of the spectator on a hillside.
            </p>
            <Link href={"/"} className="outline-none ">
              Read more
            </Link>
          </div>
        </div>
        <div className="mb-[4rem]">
          <h2 className="text-2xl md:text-4xl text-center mb-[3rem] font-[600]">
            Our Blogs
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 laptop:grid-cols-3 gap-6">
            {blogData.map((item, ind) => (
              <li key={ind}>
                <Image src={item.img} alt="" />
                <p className="my-4 opacity-90">{item.date}</p>
                <h3 className="font-[600] text-lg mb-4">{item.heading}</h3>
                <p>{item.body}</p>
                <div className="flex items-center gap-2">
                  <Link href={"/blogs/1"}>
                    <b className="py-3 cursor-pointer">{item.btnText}</b>
                  </Link>
                  <HiOutlineArrowNarrowRight className="text-xl" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default Blog
