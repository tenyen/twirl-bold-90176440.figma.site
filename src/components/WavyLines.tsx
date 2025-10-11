export const WavyLines = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.17 }}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <defs>
        <style>
          {`
            @keyframes drawLine {
              to {
                stroke-dashoffset: 0;
              }
            }
            .wavy-line {
              stroke-dasharray: 3000;
              stroke-dashoffset: 3000;
              animation: drawLine 8s ease-in-out forwards;
            }
            .wavy-line-1 { animation-delay: 0s; }
            .wavy-line-2 { animation-delay: 0.5s; }
            .wavy-line-3 { animation-delay: 1s; }
            .wavy-line-4 { animation-delay: 1.5s; }
            .wavy-line-5 { animation-delay: 2s; }
            .wavy-line-6 { animation-delay: 2.5s; }
            .wavy-line-7 { animation-delay: 3s; }
            .wavy-line-8 { animation-delay: 3.5s; }
          `}
        </style>
        
        {/* Crayon texture filter */}
        <filter id="crayon-texture">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" xChannelSelector="R" yChannelSelector="G" />
        </filter>

        {/* Pencil texture filter */}
        <filter id="pencil-texture">
          <feTurbulence type="fractalNoise" baseFrequency="1.5" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>

      {/* Squiggly line 1 - positioned below hero text */}
      <path
        className="wavy-line wavy-line-1"
        d="M -50 380 Q 80 350, 150 375 Q 180 390, 220 370 Q 280 340, 350 365 Q 420 390, 480 360 Q 560 330, 640 370 Q 720 410, 800 375 Q 880 340, 960 380 Q 1040 420, 1120 385 Q 1200 350, 1280 390 Q 1360 430, 1440 395 Q 1520 360, 1600 400 Q 1680 440, 1760 405 Q 1840 370, 1920 410 Q 2000 450, 2080 415"
        stroke="#5CE1E6"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#crayon-texture)"
      />
      
      {/* Zigzag line 2 - positioned below hero text */}
      <path
        className="wavy-line wavy-line-2"
        d="M -50 30 L 100 10 L 200 40 L 300 15 L 400 45 L 500 20 L 600 50 L 700 25 L 800 55 L 900 30 L 1000 60 L 1100 35 L 1200 65 L 1300 40 L 1400 70 L 1500 45 L 1600 75 L 1700 50 L 1800 80 L 1900 55 L 2000 85"
        stroke="#FF6B6B"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#pencil-texture)"
      />
      
      {/* Curvy spiral-like line 3 - positioned below hero text */}
      <path
        className="wavy-line wavy-line-3"
        d="M -50 520 Q 100 470, 180 520 Q 260 570, 340 520 Q 420 470, 500 520 Q 580 570, 660 520 Q 740 470, 820 520 Q 900 570, 980 520 Q 1060 470, 1140 520 Q 1220 570, 1300 520 Q 1380 470, 1460 520 Q 1540 570, 1620 520 Q 1700 470, 1780 520 Q 1860 570, 1940 520 Q 2020 470, 2100 520"
        stroke="#FFC94D"
        strokeWidth="3.5"
        fill="none"
        strokeLinecap="round"
        filter="url(#crayon-texture)"
      />
      
      {/* Bouncy wave line 4 */}
      <path
        className="wavy-line wavy-line-4"
        d="M -50 480 Q 50 430, 150 480 T 350 480 T 550 480 T 750 480 T 950 480 T 1150 480 T 1350 480 T 1550 480 T 1750 480 T 1950 480 T 2150 480"
        stroke="#5CE1E6"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        filter="url(#pencil-texture)"
      />
      
      {/* Scribble-like line 5 */}
      <path
        className="wavy-line wavy-line-5"
        d="M -50 610 Q 70 580, 120 615 Q 170 650, 220 610 Q 270 570, 320 615 Q 370 660, 420 610 Q 470 560, 520 615 Q 570 670, 620 610 Q 670 550, 720 615 Q 770 680, 820 610 Q 870 540, 920 615 Q 970 690, 1020 610 Q 1070 530, 1120 615 Q 1170 700, 1220 610 Q 1270 520, 1320 615 Q 1370 710, 1420 610 Q 1470 510, 1520 615 Q 1570 720, 1620 610 Q 1670 500, 1720 615 Q 1770 730, 1820 610 Q 1870 490, 1920 615 Q 1970 740, 2020 610"
        stroke="#FF6B6B"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#crayon-texture)"
      />
      
      {/* Loopy doodle line 6 */}
      <path
        className="wavy-line wavy-line-6"
        d="M -50 750 C 50 720, 100 780, 200 750 C 300 720, 350 780, 450 750 C 550 720, 600 780, 700 750 C 800 720, 850 780, 950 750 C 1050 720, 1100 780, 1200 750 C 1300 720, 1350 780, 1450 750 C 1550 720, 1600 780, 1700 750 C 1800 720, 1850 780, 1950 750 C 2050 720, 2100 780, 2200 750"
        stroke="#FFC94D"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        filter="url(#pencil-texture)"
      />
      
      {/* Wavy mountain line 7 */}
      <path
        className="wavy-line wavy-line-7"
        d="M -50 890 L 100 850 Q 200 810, 300 870 L 400 830 Q 500 790, 600 850 L 700 810 Q 800 770, 900 830 L 1000 790 Q 1100 750, 1200 810 L 1300 770 Q 1400 730, 1500 790 L 1600 750 Q 1700 710, 1800 770 L 1900 730 Q 2000 690, 2100 750"
        stroke="#5CE1E6"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#crayon-texture)"
      />

      {/* Extra playful squiggle line 8 */}
      <path
        className="wavy-line wavy-line-8"
        d="M -50 1020 Q 90 980, 140 1030 Q 190 1080, 240 1020 Q 290 960, 340 1030 Q 390 1100, 440 1020 Q 490 940, 540 1030 Q 590 1120, 640 1020 Q 690 920, 740 1030 Q 790 1140, 840 1020 Q 890 900, 940 1030 Q 990 1160, 1040 1020 Q 1090 880, 1140 1030 Q 1190 1180, 1240 1020 Q 1290 860, 1340 1030 Q 1390 1200, 1440 1020 Q 1490 840, 1540 1030 Q 1590 1220, 1640 1020 Q 1690 820, 1740 1030 Q 1790 1240, 1840 1020 Q 1890 800, 1940 1030 Q 1990 1260, 2040 1020"
        stroke="#FF6B6B"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        filter="url(#pencil-texture)"
      />
    </svg>
  );
};
