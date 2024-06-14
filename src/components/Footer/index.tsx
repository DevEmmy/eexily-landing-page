import Link from "next/link";
import React from "react";
import {
  RiAppStoreFill,
  RiAppStoreLine,
  RiFacebookBoxLine,
  RiFacebookCircleFill,
  RiGooglePlayFill,
  RiGooglePlayLine,
  RiInstagramFill,
  RiInstagramLine,
  RiTwitterXFill,
} from "react-icons/ri";

const Footer = () => {
  const items = [
    {
      title: "Company",
      sub: [
        {
          title: "About",
          link: "/",
        },
        {
          title: "Services",
          link: "/",
        },
        {
          title: "Blog",
          link: "/",
        },
      ],
      last: "Terms & Conditions",
    },
    {
      title: "Partner with us",
      sub: [
        {
          title: "Driver Partner",
          link: "/",
        },
        {
          title: "Rider Partner",
          link: "/",
        },
        {
          title: "Gas Station Partner",
          link: "/",
        },
      ],
      last: "Privacy notice",
    },
    {
      title: "Support",
      sub: [
        {
          title: "FAQ",
          link: "/",
        },
        {
          title: "Search Guide",
          link: "/",
        },
      ],
      last: "Cookie settings",
    },
    {
      title: "Get in Touch",
      sub: [
        {
          title: "Help Center",
          link: "/",
        },
        {
          title: "Contact",
          link: "/",
        },
      ],
      last: `© ${new Date().getFullYear()} Eexily.`
    },
  ];
  return (
    <div className="bg-primary relative mt-48 text-white grid grid-cols-5 gap-10 items-start justify-between px-[5.6%] pt-36 pb-10">
      <div className="absolute -top-20 w-2/3 bg-white shadow-custom rounded-3xl flex gap-5 text-black items-center py-3 left-[16.67%]">
        <img src="./mp.png" alt="" />
        <div className="flex flex-col gap-2">
          <p className="font-bold text-[30px] text-primary">Subscribe</p>
          <p className="text-lg">Subscribe to get timely updates and newsletter </p>
        </div>

        <input
          type="email"
          name=""
          placeholder="E-mail address"
          id=""
          className="bg-input p-3 text-lg rounded-xl focus:outline-none w-[38%]"
        />
      </div>

      {items.map((item, i) => {
        return (
          <div key={i} className="flex flex-col gap-4">
            <p className="text-white font-semibold text-md  ">{item.title}</p>
            <div className="flex flex-col gap-4">
              {item.sub.map((linkItem, i) => {
                return (
                  <Link key={i} href={linkItem.link} className="text-sm w-fit">
                    {linkItem.title}
                  </Link>
                );
              })}
            </div>
            <p className={`text-white text-sm ${i > 1 ? "mt-[76px]" : "mt-10"}`}>{item.last}</p>
          </div>
        );
      })}

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-md">Connect With Us</p>
          <div className="flex text-[32px] w-[160px] justify-between items-center">
            <RiFacebookCircleFill />
            <RiTwitterXFill />
            <RiInstagramFill />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-semibold text-md">Download the App</p>
          <div className="flex text-[32px] w-[96px] justify-between items-center">
            <RiGooglePlayFill />
            <RiAppStoreFill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
