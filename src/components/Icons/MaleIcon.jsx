import { h } from "preact";

function MaleIcon({ width = 14, height = 14, fill = "#f1f3f5" }) {
  return (
    <svg
      viewBox="0 0 25.987 48"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill={fill} stroke="none" data-name="Layer 2">
        <path d="M12.991 10C5.464 10 0 15.047 0 22a2 2 0 0 0 4 0 7.848 7.848 0 0 1 3.991-7v31a2 2 0 0 0 4 0V31h2v15a2 2 0 1 0 4 0V14.999A7.847 7.847 0 0 1 21.987 22a2 2 0 0 0 4 0c0-6.953-5.466-12-12.996-12z" />
        <circle cx="12.991" cy="4" r="4" />
      </g>
    </svg>
  );
}

export default MaleIcon;
