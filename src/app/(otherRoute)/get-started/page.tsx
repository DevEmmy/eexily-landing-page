import Banner2 from "@/components/Banner/Banner2";
import React, { FC } from "react";
import { RiAppStoreFill, RiGooglePlayFill } from "react-icons/ri";

interface iTestimony {
  image: string;
  testimony: string;
  author: string;
  color: string;
}

const page = () => {
  const items = [
    {
      text: "Easy Ordering",
      icon: "ic1.png",
    },
    {
      text: "Usage Tracking",
      icon: "ic2.png",
    },
    {
      text: "Reminders",
      icon: "ic3.png",
    },
    {
      text: "AI Cooking assistant",
      icon: "ic4.png",
    },
  ];

  const testimonies: iTestimony[] = [
    {
      author: "Esther",
      testimony:
        "I really enjoy using the Eexily app. It is relatively easy to navigate. No bugs, no ads and accurate prediction. Kudos to Eexily",
      image: "./Avatar 1.png",
      color: "bg-tst1",
    },
    {
      author: "Emmy",
      testimony:
        "I really enjoy using the Eexily app. It is relatively easy to navigate. No bugs, no ads and accurate prediction. Kudos to Eexily",
      image: "./Avatar 2.png",
      color: "bg-tst2",
    },
    {
      author: "Elisa",
      testimony:
        "I really enjoy using the Eexily app. It is relatively easy to navigate. No bugs, no ads and accurate prediction. Kudos to Eexily",
      image: "./Avatar 3.png",
      color: "bg-tst3",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-32">
      <div className="flex flex-col gap-3 items-center justify-center text-center w-[820px]">
        <h2 className="text-primary font-bold text-[26px] leading-10">
          Ready to Make Cooking and Power Generation Easier?
        </h2>
        <p className="leading-7 text-[18px] text-center">
          Download the Eexily app and enjoy hassle-free gas refills delivered
          right to your door. <br />
          Track your usage, get reminders, and never run out again!
        </p>

        <div className="grid grid-cols-2 gap-10 items-center justify-center text-white download mt-10">
          <div className="bg-primary w-[180px] cursor-pointer justify-center">
            <img src="./Playstore Icon.png" alt="" className="size-[32px]" />
            <div>
              <p>Download on</p>
              <p className="font-bold">Google Play</p>
            </div>
          </div>

          <div className="bg-primary w-[180px] cursor-pointer justify-center">
            <img src="./Appstore Icon.png" alt="" className="size-[36px]" />
            <div>
              <p>Get it on</p>
              <p className="font-bold">App store</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_1.5fr] gap-10 px-[10%] items-start">
        <ul className="!list-disc flex flex-col gap-12 justify-center">
          {items.map((item, i) => {
            return (
              <li
                key={i}
                className="flex gap-2 list-disc items-center font-semibold text-2xl "
              >
                {`\u2022 ${item.text}`}
                <img
                  src={item.icon}
                  alt=""
                  className="size-[36px] object-cover"
                />
              </li>
            );
          })}
        </ul>

        <img src="./s6.png" className="rounded-[20px]" alt="" />
      </div>

      <div className="grid grid-cols-[1fr_1fr_1fr] gap-14 px-[10%] mt-20">
        {testimonies.map((item, i) => {
          return (
            <Testimony
              key={i}
              image={item.image}
              color={item.color}
              author={item.author}
              testimony={item.testimony}
            />
          );
        })}
      </div>
    </div>
  );
};

const Testimony: FC<iTestimony> = ({ image, color, author, testimony }) => {
  return (
    <div
      className={`flex flex-col shadow-lg gap-4 relative rounded-[20px] pt-8 pb-6 px-7 ${color}`}
    >
      <img
        src={image}
        alt="testimony author image"
        className="w-[100px] h-[100px] rounded-full object-cover absolute -top-[50px] left-[calc(50%-50px)]"
      />

      <p className="text-lg pt-10">{testimony}</p>

      <p className="text-lg">~ {author}</p>
    </div>
  );
};

export default page;
