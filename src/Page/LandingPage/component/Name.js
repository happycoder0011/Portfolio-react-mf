import React from "react";
import styles from './../landingPage.module.scss';

function Name() {
  return (
    <div>
      {/* <!-- Name Section --> */}
      <div className="name">
        <h1 className="name--font">Sheetal Singh</h1>
        <div className="name--svg">
          {/* <!-- github --> */}
          <a href="https://github.com/happycoder0011">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="96"
              height="96"
              viewBox="0 0 172 172"
            >
              <g
                fill="none"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g className={styles.shareIcons}>
                  <path d="M78.11667,15.05c-32.96667,3.58333 -59.48333,30.1 -63.06667,62.35c-3.58333,33.68333 15.76667,63.78333 45.15,75.25c2.15,0.71667 4.3,-0.71667 4.3,-3.58333v-11.46667c0,0 -2.86667,0.71667 -6.45,0.71667c-10.03333,0 -14.33333,-8.6 -15.05,-13.61667c-0.71667,-2.86667 -2.15,-5.01667 -4.3,-7.16667c-2.15,-0.71667 -2.86667,-0.71667 -2.86667,-1.43333c0,-1.43333 2.15,-1.43333 2.86667,-1.43333c4.3,0 7.88333,5.01667 9.31667,7.16667c3.58333,5.73333 7.88333,7.16667 10.03333,7.16667c2.86667,0 5.01667,-0.71667 6.45,-1.43333c0.71667,-5.01667 2.86667,-10.03333 7.16667,-12.9c-16.48333,-3.58333 -28.66667,-12.9 -28.66667,-28.66667c0,-7.88333 3.58333,-15.76667 8.6,-21.5c-0.71667,-1.43333 -1.43333,-5.01667 -1.43333,-10.03333c0,-2.86667 0,-7.16667 2.15,-11.46667c0,0 10.03333,0 20.06667,9.31667c3.58333,-1.43333 8.6,-2.15 13.61667,-2.15c5.01667,0 10.03333,0.71667 14.33333,2.15c9.31667,-9.31667 20.06667,-9.31667 20.06667,-9.31667c1.43333,4.3 1.43333,8.6 1.43333,11.46667c0,5.73333 -0.71667,8.6 -1.43333,10.03333c5.01667,5.73333 8.6,12.9 8.6,21.5c0,15.76667 -12.18333,25.08333 -28.66667,28.66667c4.3,3.58333 7.16667,10.03333 7.16667,16.48333v18.63333c0,2.15 2.15,4.3 5.01667,3.58333c26.51667,-10.75 45.15,-36.55 45.15,-66.65c0,-43 -36.55,-76.68333 -79.55,-71.66667z"></path>
                </g>
              </g>
            </svg>
          </a>
          {/* <!-- linkedin --> */}
          <a href="https://www.linkedin.com/in/sheetal-singh-218855176/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="96"
              height="96"
              viewBox="0 0 172 172"
              style={{ fill: "#000000" }}
            >
              <g
                fill="none"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style={{ mixBlendMode: "normal" }}
              >
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g className={styles.shareIcons}>
                  <path d="M141.04,13.76h-110.08c-9.4944,0 -17.2,7.7056 -17.2,17.2v110.08c0,9.4944 7.7056,17.2 17.2,17.2h110.08c9.4944,0 17.2,-7.7056 17.2,-17.2v-110.08c0,-9.4944 -7.7056,-17.2 -17.2,-17.2zM58.48,68.8v65.36h-20.64v-65.36zM37.84,49.7768c0,-4.816 4.128,-8.4968 10.32,-8.4968c6.192,0 10.0792,3.6808 10.32,8.4968c0,4.816 -3.8528,8.7032 -10.32,8.7032c-6.192,0 -10.32,-3.8872 -10.32,-8.7032zM134.16,134.16h-20.64c0,0 0,-31.8544 0,-34.4c0,-6.88 -3.44,-13.76 -12.04,-13.8976h-0.2752c-8.3248,0 -11.7648,7.0864 -11.7648,13.8976c0,3.1304 0,34.4 0,34.4h-20.64v-65.36h20.64v8.8064c0,0 6.6392,-8.8064 19.9864,-8.8064c13.6568,0 24.7336,9.3912 24.7336,28.4144z"></path>
                </g>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Name;
