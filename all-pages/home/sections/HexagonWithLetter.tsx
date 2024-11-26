import React from "react";

const HexagonWithLetter = ({ letter }: { letter: string }) => {
  // Predefined points for a regular hexagon
  const points = [
    "51.9615,-30",
    "51.9615,30",
    "0,60",
    "-51.9615,30",
    "-51.9615,-30",
    "0,-60",
  ];

  return (
    <div className="w-fit block">
      <svg
        viewBox="-60 -60 120 120"
        className="w-[60px] h-16 lg:w-[105px] lg:h-[120px]"
      >
        <defs>
          <style type="text/css">
            {`
              .hexagon {
                fill: #A40182;
                stroke: #A40182;
                stroke-width: 2;
                transition: fill 0.3s ease;
              }
              .hexagon:hover {
                fill: transparent;
              }
              .letter {
                fill: white;
                font-weight: bold;
                transition: fill 0.3s ease;
              }
              .hexagon:hover + .letter {
                fill: #A40182;
              }
            `}
          </style>
        </defs>

        {/* Hexagon */}
        <polygon points={points.join(" ")} className="hexagon cursor-pointer" />

        {/* Letter */}
        <text
          x="0"
          y="10"
          textAnchor="middle"
          dominantBaseline="middle"
          className="letter text-[40px] lg:text-[64px]"
          style={{ pointerEvents: "none" }}
        >
          {letter}
        </text>
      </svg>
    </div>
  );
};

export default HexagonWithLetter;
