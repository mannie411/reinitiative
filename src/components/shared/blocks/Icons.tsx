import svgPaths from "@/assets/svg";

export const VideoPlaceholder = () => (
  <svg
    className="block size-full"
    fill="none"
    preserveAspectRatio="none"
    viewBox="0 0 80 80"
  >
    <g id="film">
      <path
        d={svgPaths.p171d8280}
        id="Vector"
        stroke="var(--stroke-0, white)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="6.66667"
      />
      <path
        d="M23.3333 6.66667V73.3333"
        id="Vector_2"
        stroke="var(--stroke-0, white)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="6.66667"
      />
      <path
        d="M56.6667 6.66667V73.3333"
        id="Vector_3"
        stroke="var(--stroke-0, white)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="6.66667"
      />
      <path
        d="M6.66667 40H73.3333"
        id="Vector_4"
        stroke="var(--stroke-0, white)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="6.66667"
      />
      <path
        d="M6.66667 23.3333H23.3333"
        id="Vector_5"
        stroke="var(--stroke-0, white)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="6.66667"
      />
      <path
        d="M6.66667 56.6667H23.3333"
        id="Vector_6"
        stroke="var(--stroke-0, white)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="6.66667"
      />
      <path
        d="M56.6667 56.6667H73.3333"
        id="Vector_7"
        stroke="var(--stroke-0, white)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="6.66667"
      />
      <path
        d="M56.6667 23.3333H73.3333"
        id="Vector_8"
        stroke="var(--stroke-0, white)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="6.66667"
      />
    </g>
  </svg>
);

export const ImagePlaceholder = () => (
  <svg
    className="block size-full"
    fill="none"
    preserveAspectRatio="none"
    viewBox="0 0 80 80"
  >
    <g id="image-01">
      <path
        d={svgPaths.p1eb7e900}
        id="Vector"
        stroke="var(--stroke-0, white)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
      />
      <path
        d={svgPaths.p2c4b0480}
        id="Vector_2"
        stroke="var(--stroke-0, white)"
        strokeWidth="5"
      />
      <path
        d={svgPaths.p374a8480}
        id="Vector_3"
        stroke="var(--stroke-0, white)"
        strokeWidth="5"
      />
    </g>
  </svg>
);

export const Globe = ({ color = "#000000" }) => (
  <svg
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ "--svg-color": color }}
  >
    <path
      d="M9.375 14.25V16.5"
      stroke="#2D3648"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.875 16.5H10.875"
      stroke="#2D3648"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.125 12C7.2255 12 4.875 9.6495 4.875 6.75C4.875 3.85051 7.2255 1.5 10.125 1.5C13.0245 1.5 15.375 3.85051 15.375 6.75C15.375 9.6495 13.0245 12 10.125 12Z"
      stroke="#2D3648"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
    <path
      d="M6.375 3C6.86573 3.02888 7.11927 3.26924 7.55512 3.72976C8.34232 4.56155 9.12953 4.63095 9.6543 4.35369C10.4415 3.9378 9.78 3.26416 10.7039 2.89807C11.3061 2.65946 11.3901 2.0102 11.0549 1.5"
      stroke="#2D3648"
      strokeWidth="1.25"
      strokeLinejoin="round"
    />
    <path
      d="M15 7.5C13.875 7.5 13.6753 8.4351 12.75 8.25C10.875 7.875 10.3437 8.29417 10.3437 9.18832C10.3437 10.0824 10.3437 10.0824 9.95377 10.753C9.70012 11.1892 9.61147 11.6253 10.117 12"
      stroke="#2D3648"
      strokeWidth="1.25"
      strokeLinejoin="round"
    />
    <path
      d="M4.875 1.5C3.48648 2.84996 2.625 4.73115 2.625 6.81188C2.625 10.9199 5.98286 14.25 10.125 14.25C12.1691 14.25 14.0222 13.439 15.375 12.1238"
      stroke="#2D3648"
      strokeWidth="1.25"
      strokeLinecap="round"
    />
  </svg>
);
