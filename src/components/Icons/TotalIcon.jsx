import { h } from "preact";

function TotalIcon({ width = 14, height = 14, fill = "#f1f3f5" }) {
  return (
    <svg
      viewBox="0 0 48 40"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g data-name="Layer 2">
        <g fill={fill} stroke="none">
          <path d="m13 28.97a10.938 10.938 0 0 1 4.13-8.46 7.5651 7.5651 0 0 0-4.5-1.51 7.6898 7.6898 0 0 0-7.63 7.58v3.42h8z" />
          <path d="m35 28.97v1.03h8v-3.42a7.6898 7.6898 0 0 0-7.63-7.58 7.5651 7.5651 0 0 0-4.5 1.51 10.938 10.938 0 0 1 4.13 8.46z" />
          <path d="m15 30v3h18v-4.03a9.0005 9.0005 0 0 0-18 0z" />
          <circle cx="24" cy="13" r="5" />
          <circle cx="13" cy="13" r="4" />
          <circle cx="35" cy="13" r="4" />
          <path d="M47.56067.43933A1.49524,1.49524,0,0,0,46.5,0H1.5A1.49942,1.49942,0,0,0,0,1.5V34a1.50552,1.50552,0,0,0,.02515.25A1.50552,1.50552,0,0,0,0,34.5v4A1.5,1.5,0,0,0,1.5,40h45A1.5,1.5,0,0,0,48,38.5V1.5A1.49569,1.49569,0,0,0,47.56067.43933ZM2.97485,34.25A1.50552,1.50552,0,0,0,3,34V3H45V37H3V34.5A1.50552,1.50552,0,0,0,2.97485,34.25Z" />
        </g>
      </g>
    </svg>
  );
}

export default TotalIcon;
