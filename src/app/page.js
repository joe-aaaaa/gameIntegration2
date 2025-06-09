"use client";

import { useState } from "react";
import BlackboardImg from "@/photo/blackboard.png";
import ButtonImg from "@/photo/button.png";
import ClassroomImg from "@/photo/classroom.jpg";
import DialogImg from "@/photo/dialog-box.png";
import Classmate1Img from "@/photo/classmate-01.png";
import Classmate2Img from "@/photo/classmate-02.png";
import Classmate3Img from "@/photo/classmate-03.png";
import Classmate4Img from "@/photo/classmate-04.png";
import Classmate5Img from "@/photo/classmate-05.png";
import Classmate6Img from "@/photo/classmate-06.png";
import Classmate7Img from "@/photo/classmate-07.png";
import Classmate8Img from "@/photo/classmate-08.png";
import Classmate9Img from "@/photo/classmate-09.png";
import Classmate10Img from "@/photo/classmate-10.png";

export default function HomePage() {
  const [showNotice, setShowNotice] = useState(true);

  const students = [
    { img: Classmate1Img, name: "白苡詰", url: "https://joea-game0.vercel.app" },
    { img: Classmate2Img, name: "何慕昀", url: "https://joea-game0.vercel.app" },
    { img: Classmate3Img, name: "許雅喬", url: "https://joea-game0.vercel.app" },
    { img: Classmate4Img, name: "洪安旭", url: "https://joea-game0.vercel.app" },
    { img: Classmate5Img, name: "毛怡蓁", url: "https://joea-game0.vercel.app" },
    { img: Classmate6Img, name: "王巧薰", url: "https://final-game-phi.vercel.app/" },
    { img: Classmate7Img, name: "何羽凡", url: "https://joea-game0.vercel.app" },
    { img: Classmate8Img, name: "黃梓育", url: "https://joea-game0.vercel.app" },
    { img: Classmate9Img, name: "張育涵", url: "https://zombie-game-blush.vercel.app" },
    { img: Classmate10Img, name: "謝雨彤", url: "https://put-the-shot.vercel.app/game/RulesPanel" },
  ];

  return (
    <main
      className="relative w-screen h-screen mx-auto flex flex-col justify-between"
      style={{
        backgroundImage: `url(${ClassroomImg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* home-notice */}
      {showNotice && (
        <div className="absolute inset-0 bg-black/60 z-50 flex flex-col justify-center items-center">
          <div className="w-[600px] h-[400px] flex items-center justify-center">
            <img
              src={BlackboardImg.src}
              alt="blackboard"
              className="w-full h-full object-cover"
            />
          </div>
          <button
            onClick={() => setShowNotice(false)}
            className="relative w-50 h-50 transition-transform hover:scale-105"
          >
            <img
              src={ButtonImg.src}
              alt="ENTER"
              className="w-full h-full object-contain"
            />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-black">
              ENTER
            </span>
          </button>
        </div>
      )}

      {/* 下半區塊：學生 */}
      <div className="w-full h-[1200px] flex justify-center items-end pb-15">
        <div className="grid grid-cols-5 gap-x-8 gap-y-12 -ml-2 ">
          {students.map((student, index) => (
            <div
              key={index}
              className="relative w-[120px] h-[180px] flex flex-col items-center justify-center group"
            >
              <div className="relative">
                <img
                  src={student.img.src}
                  alt={student.name}
                  className="w-[120px] h-[180px] object-contain"
                />
                <button
                  onClick={() => window.location.href = student.url}  // 點擊後跳轉到 url
                  className="absolute -top-[40px] right-[-40px] w-[90px] h-[70px] hover:scale-110 transition-transform duration-300"
                >
                  <img
                    src={DialogImg.src}
                    alt="dialog"
                    className="w-full h-full object-contain"
                  />
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] text-sm font-extrabold text-[#366960]">
                    {student.name}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
