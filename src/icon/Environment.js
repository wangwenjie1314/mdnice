import React from "react";
import "./index.css";

export default ({
  fill = "#1890ff",
  style = {},
  className = "icon",
  viewBox = "0 0 1024 1024"
}) => (
  <svg
    style={style}
    viewBox={viewBox}
    className={className}
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path d="M903.542857 257.257143a414.274286 414.274286 0 0 0-91.314286-132.228572 423.805714 423.805714 0 0 0-135.085714-88.914285C624.8 14.4 569.257143 3.428571 512 3.428571c-57.257143 0-112.8 10.971429-165.142857 32.571429-50.628571 20.914286-96 50.857143-135.085714 88.914286A415.542857 415.542857 0 0 0 120.457143 257.142857c-22.285714 51.428571-33.6 106.057143-33.6 162.285714 0 80.685714 19.314286 161.028571 57.257143 238.514286 30.514286 62.285714 73.142857 122.971429 126.857143 180.685714 91.771429 98.514286 188 158.742857 215.314285 174.857143a50.171429 50.171429 0 0 0 25.6 6.971429c8.914286 0 17.714286-2.285714 25.6-6.971429 27.314286-16.114286 123.542857-76.342857 215.314286-174.857143 53.714286-57.6 96.342857-118.4 126.857143-180.685714C917.828571 580.571429 937.142857 500.342857 937.142857 419.542857c0-56.228571-11.314286-110.857143-33.6-162.285714zM512 932.8c-75.314286-47.885714-342.857143-237.485714-342.857143-513.257143 0-89.028571 35.542857-172.685714 100.114286-235.771428C334.057143 120.571429 420.228571 85.714286 512 85.714286s177.942857 34.857143 242.742857 98.171428C819.314286 246.857143 854.857143 330.514286 854.857143 419.542857c0 275.771429-267.542857 465.371429-342.857143 513.257143z m0-705.371429c-111.085714 0-201.142857 90.057143-201.142857 201.142858s90.057143 201.142857 201.142857 201.142857 201.142857-90.057143 201.142857-201.142857-90.057143-201.142857-201.142857-201.142858z m90.514286 291.657143A127.542857 127.542857 0 0 1 512 556.571429c-34.171429 0-66.285714-13.371429-90.514286-37.485715A127.542857 127.542857 0 0 1 384 428.571429c0-34.171429 13.371429-66.285714 37.485714-90.514286C445.714286 313.828571 477.828571 300.571429 512 300.571429c34.171429 0 66.285714 13.257143 90.514286 37.485714C626.742857 362.285714 640 394.4 640 428.571429c0 34.171429-13.257143 66.285714-37.485714 90.514285z" />
  </svg>
);