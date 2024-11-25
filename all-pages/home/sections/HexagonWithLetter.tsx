import React from "react";

const HexagonWithLetter = ({ letter }: { letter: string }) => {
  // Calculate hexagon points for a regular hexagon
  const size = 60;
  const points = [];
  for (let i = 0; i < 6; i++) {
    const angle = ((60 * i - 30) * Math.PI) / 180;
    const x = size * Math.cos(angle);
    const y = size * Math.sin(angle);
    points.push(`${x},${y}`);
  }

  return (
    <div className='w-fit block'>
      <svg viewBox="-70 -70 125 125" className="w-[60px] h-16 lg:w-[110px] lg:h-36">
        <defs>
          <style type="text/css">
            {`
              .hexagon {
                fill: #A40182;
                stroke: #A40182;
                stroke-width: 2;
                transition: fill 0.3s ease;
                width:100%;
              }
              .hexagon:hover {
                fill: transparent;
              }
              .letter {
                fill: white;
                font-size: 48px;
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
        <polygon points={points.join(" ")} className="hexagon w-[100%] cursor-pointer" />

        <text
          x="0"
          y="8"
          textAnchor="middle"
          dominantBaseline="middle"
          className="letter"
          style={{ pointerEvents: "none" }}
        >
          {letter}
        </text>
      </svg>
    </div>
  );
};

export default HexagonWithLetter;
