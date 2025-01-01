import { useEffect } from "react";
import "../styles/css/custom-cursor.css";
export default function CustomCursor() {
  useEffect(() => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circleCursor");

    const colors = [
      "#20cdeb",
      "#21b3eb",
      "#229ae9",
      "#2391e6",
      "#2387e2",
      "#247dde",
      "#2574da",
      "#266ad6",
      "#2661d2",
      "#2758ce",
      "#2850ca",
      "#2947c6",
      "#293fc2",
      "#2a37be",
      "#2b30ba",
      "#2c29b5",
      "#2c21b1",
      "#2d1aad",
      "#2e13a9",
      "#2f0da5",
      "#3007a1",
      "#2563eb",
    ];

    circles.forEach(function (circle, index) {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index % colors.length];
    });

    window.addEventListener("mousemove", function (e) {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });

    document.querySelectorAll('[data="clickable"]').forEach((el) => {
      el.addEventListener("mouseover", () => {
        circles.forEach((circle) => circle.classList.add("scaled"));
      });
      el.addEventListener("mouseout", () => {
        circles.forEach((circle) => circle.classList.remove("scaled"));
      });
    });

    const animateCircles = () => {
      let x = coords.x;
      let y = coords.y;

      circles.forEach(function (circle, index) {
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    };

    animateCircles();
  }, []);

  return (
    <>
      <div className="circleCursor sm:block hidden"></div>
      <div className="circleCursor sm:block hidden"></div>
      <div className="circleCursor sm:block hidden"></div>
      <div className="circleCursor sm:block hidden"></div>
      <div className="circleCursor sm:block hidden"></div>
      <div className="circleCursor sm:block hidden"></div>
      <div className="circleCursor sm:block hidden"></div>
      <div className="circleCursor sm:block hidden"></div>
      <div className="circleCursor sm:block hidden"></div>
      <div className="circleCursor sm:block hidden"></div>
      <div className="circleCursor sm:block hidden"></div>
      <div className="circleCursor sm:block hidden"></div>
      <div className="circleCursor sm:block hidden"></div>
      <div className="circleCursor sm:block hidden"></div>
      <div className="circleCursor sm:block hidden"></div>
      <div className="circleCursor sm:block hidden"></div>
      <div className="circleCursor sm:block hidden"></div>
      <div className="circleCursor sm:block hidden"></div>
      <div className="circleCursor sm:block hidden"></div>
      <div className="circleCursor sm:block hidden"></div>
      <div className="circleCursor sm:block hidden"></div>
      <div className="circleCursor sm:block hidden"></div>
    </>
  );
}
