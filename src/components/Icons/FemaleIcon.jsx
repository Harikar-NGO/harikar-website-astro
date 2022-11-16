import { h } from "preact";

function FemaleIcon({ width = 14, height = 14, fill = "#f1f3f5" }) {
  return (
    <svg
      viewBox="0 0 25.99 48"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={fill} stroke="none" data-name="Layer 2">
        <path d="M13 10C5.46 10 0 15.05 0 22a2 2 0 0 0 4 0 7.4 7.4 0 0 1 5-7L5 34a.92.92 0 0 0 1 1h2v11a2 2 0 0 0 4 0V35h2v11a2 2 0 1 0 4 0V35h2a.92.92 0 0 0 1-1l-4-19a7.53 7.53 0 0 1 5 7 2 2 0 0 0 4 0c0-6.95-5.47-12-13-12z" />
        <circle cx="12.99" cy="4" r="4" />
      </g>
    </svg>
  );
}

export default FemaleIcon;
