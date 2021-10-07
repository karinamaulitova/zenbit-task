import React from "react";
import GreenSmile from "../GreenSmile/GreenSmile";
import PinkSmileCircle from "../PinkSmileCircle/PinkSmileCircle";
import YellowSmallSmileCircle from "../YellowSmallSmileCircle/YellowSmallSmileCircle";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links-smile-wrapper">
        <PinkSmileCircle className="pink-smile_type_footer" />
        <ul className="footer__links-list">
          <li className="footer__link-item">
            <a
              className="footer__link"
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="footer__link-svg"
                width="13"
                height="14"
                viewBox="0 0 13 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.88053 13.2364H0.212521V4.59092H2.88053V13.2364ZM1.54509 3.41159C0.692131 3.41159 0 2.70053 0 1.84205C0 0.983569 0.692131 0.286957 1.54509 0.286957C2.39805 0.286957 3.09018 0.983569 3.09018 1.84205C3.09018 2.70053 2.39805 3.41159 1.54509 3.41159ZM12.8662 13.2364H10.2039V9.02785C10.2039 8.02484 10.1838 6.73857 8.81677 6.73857C7.42964 6.73857 7.21711 7.82829 7.21711 8.95558V13.2364H4.55198V4.59092H7.11085V5.77025H7.14819C7.5043 5.09098 8.37449 4.37413 9.6726 4.37413C12.3722 4.37413 12.869 6.16336 12.869 8.48732V13.2364H12.8662Z"
                  fill="#696969"
                />
              </svg>
            </a>
          </li>
          <li className="footer__link-item">
            <a
              className="footer__link"
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="footer__link-svg"
                width="17"
                height="14"
                viewBox="0 0 17 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.0399 3.49415C15.0501 3.6349 15.0501 3.77568 15.0501 3.91643C15.0501 8.20944 11.7328 13.156 5.66983 13.156C3.80192 13.156 2.06673 12.6231 0.607117 11.6982C0.87251 11.7283 1.12766 11.7384 1.40327 11.7384C2.94451 11.7384 4.36331 11.2257 5.4963 10.351C4.0469 10.3208 2.83225 9.38577 2.41375 8.09886C2.61791 8.129 2.82204 8.14912 3.03641 8.14912C3.3324 8.14912 3.62843 8.10889 3.904 8.03855C2.39336 7.7369 1.26034 6.4299 1.26034 4.85144V4.81124C1.69923 5.05253 2.20963 5.20334 2.75056 5.22342C1.86254 4.64028 1.28076 3.64496 1.28076 2.51891C1.28076 1.91568 1.44405 1.36272 1.72986 0.880124C3.35279 2.85069 5.7923 4.13758 8.52776 4.27835C8.47674 4.03706 8.44611 3.78574 8.44611 3.53438C8.44611 1.74476 9.91593 0.286957 11.743 0.286957C12.6922 0.286957 13.5496 0.679059 14.1519 1.31246C14.897 1.17171 15.6114 0.90024 16.2443 0.528253C15.9993 1.28232 15.4788 1.91571 14.7949 2.31784C15.4584 2.2475 16.1014 2.06649 16.6934 1.81517C16.2444 2.45859 15.683 3.03164 15.0399 3.49415Z"
                  fill="#696969"
                />
              </svg>
            </a>
          </li>
          <li className="footer__link-item">
            <a
              className="footer__link"
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="footer__link-svg"
                width="9"
                height="17"
                viewBox="0 0 9 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.86171 16.0863V8.89145H0.431458V6.03236H2.86171V3.77965C2.86171 1.33215 4.36992 0 6.57203 0C7.62715 0 8.53334 0.0785464 8.79633 0.113107V2.67058H7.26911C6.07141 2.67058 5.84011 3.23611 5.84011 4.06242V6.03236H8.54285L8.17213 8.89145H5.84011V16.0863"
                  fill="#696969"
                />
              </svg>
            </a>
          </li>
          <li className="footer__link-item">
            <a
              className="footer__link"
              href="https://pinterest.com"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                className="footer__link-svg"
                width="13"
                height="16"
                viewBox="0 0 13 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.02927 0.286957C3.76274 0.286957 0.534424 2.31513 0.534424 5.59758C0.534424 7.68506 1.79519 8.87112 2.55929 8.87112C2.87448 8.87112 3.05595 8.05274 3.05595 7.82145C3.05595 7.54569 2.3014 6.95859 2.3014 5.81107C2.3014 3.42707 4.24986 1.73692 6.77138 1.73692C8.93951 1.73692 10.5441 2.88445 10.5441 4.99268C10.5441 6.56719 9.86598 9.52049 7.6692 9.52049C6.87645 9.52049 6.19831 8.98676 6.19831 8.22175C6.19831 7.10092 7.03882 6.01566 7.03882 4.85925C7.03882 2.89631 4.04928 3.25213 4.04928 5.62426C4.04928 6.12241 4.11614 6.67393 4.35492 7.1276C3.91556 8.88891 3.01775 11.5131 3.01775 13.3278C3.01775 13.8882 3.10371 14.4397 3.16101 15.0001C3.26926 15.1128 3.21514 15.1009 3.38069 15.0446C4.9853 12.9986 4.92799 12.5983 5.65389 9.92079C6.04549 10.6146 7.05792 10.9883 7.86022 10.9883C11.2414 10.9883 12.76 7.9193 12.76 5.1528C12.76 2.20839 10.0284 0.286957 7.02927 0.286957Z"
                  fill="#696969"
                />
              </svg>
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__smiles-wrapper">
        <GreenSmile className="green-smile_type_footer" />
        <YellowSmallSmileCircle className="yellow-smile-small_type_footer" />
      </div>
    </footer>
  );
}

export default Footer;