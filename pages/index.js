import Model from "@/components/Model";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [color, setColor] = useState("#fff");

  const btn1 = useRef(null);
  const btn2 = useRef(null);
  const btn3 = useRef(null);
  const btn4 = useRef(null);

  useEffect(() => {
    if (btn1.current) {
      gsap.to(btn1.current, { x: 0, duration: 1.5, delay: 0.4 });
    }
    if (btn2.current) {
      gsap.to(btn2.current, { x: 0, duration: 1.5, delay: 0.8 });
    }
    if (btn3.current) {
      gsap.to(btn3.current, { x: 0, duration: 1.5, delay: 1.2 });
    }
    if (btn4.current) {
      gsap.to(btn4.current, { x: 0, duration: 1.5, delay: 1.6 });
    }
  }, []);

  return (
    <main className="w-[100vw] h-[100vh]">
      <section className="grid grid-cols-12">
        <div className="col-span-10 xl:col-span-11 h-[100vh]">
          <Canvas>
            <Model color={color} />
          </Canvas>
        </div>
        <div className="col-span-2 xl:col-span-1 h-[100vh] flex justify-center xl:items-center flex-col gap-y-9">
          <button
            className="w-[50px] h-[50px] rounded-[50%] cursor-pointer bg-[#C81D11] translate-x-[100px]"
            ref={btn1}
            onClick={() => setColor("#C81D11")}
          ></button>
          <button
            className="w-[50px] h-[50px] rounded-[50%] cursor-pointer bg-[#2D5FA7] translate-x-[100px]"
            ref={btn2}
            onClick={() => setColor("#2D5FA7")}
          ></button>
          <button
            className="w-[50px] h-[50px] rounded-[50%] cursor-pointer bg-[#5abc3a] translate-x-[100px]"
            ref={btn3}
            onClick={() => setColor("#5abc3a")}
          ></button>
          <button
            className="w-[50px] h-[50px] rounded-[50%] cursor-pointer bg-[#800080] translate-x-[100px]"
            ref={btn4}
            onClick={() => setColor("#800080")}
          ></button>
        </div>
      </section>
    </main>
  );
}
