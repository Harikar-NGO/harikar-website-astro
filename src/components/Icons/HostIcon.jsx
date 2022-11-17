import { h } from "preact";

function HostIcon({ width = 14, height = 14, fill = "#f1f3f5" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 4c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4zm24.5 23.8l5.7 5.6c.7.7 1.9.7 2.6 0l5.6-5.5c.6-.6.7-1.6.3-2.3-.5-.7-1.6-.9-2.3-.3-.1 0-.1.1-.2.2L42 28.3V15.7c.1-.8-.5-1.6-1.3-1.7-.8-.1-1.6.5-1.7 1.3v12.9l-3.2-2.8c-.6-.7-1.7-.7-2.4 0-.6.7-.6 1.8.1 2.4zm14.4 19.3c-.2.5-.7.9-1.2.9H1.3c-.5-.1-1-.4-1.2-.9-.1-.2-.1-.4-.1-.6.1-.6.5-1.1 1-1.2.2-.1 1.6-.5 3.9-1 .9-.3 1.9-.5 3.1-.7V15.3c-2.5 1.3-4.1 3.9-4 6.7 0 1.1-.9 2-2 2s-2-.9-2-2c0-6.8 5.6-12 13-12s13 5.2 13 12c0 1.1-.9 2-2 2s-2-.9-2-2c.1-2.8-1.5-5.4-4-6.7v27c8.5-.7 17.1 0 25.4 2 1.2.3 2.4.6 3.6 1h.1c.7.3 1.1 1.1.8 1.8zM14 31h-2v11.9c.3 0 1-.1 2-.2V31z"
        fill={fill}
        stroke="none"
      />
    </svg>
  );
}

export default HostIcon;