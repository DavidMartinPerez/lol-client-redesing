import * as React from "react";

export default function ShopIcon(props) {
  return (
    <svg
      height={48}
      viewBox="0 0 21 21"
      width={48}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke={props.fill}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6.426 4.503L14.52 4.5a1 1 0 01.997.92l.894 10.999a1 1 0 01-.916 1.078l-.08.003H5.58a1 1 0 01-1-1l.003-.077.846-10.997a1 1 0 01.997-.923z" />
        <path d="M13.5 8.5v.645c0 1.105-1.895 1.355-3 1.355s-3-.395-3-1.5v-.5" />
      </g>
    </svg>
  );
}
