import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-box">
        <h1 className="Footer-title">
          <Link to="/">CAREMIND (주)케어마인드</Link>
        </h1>
        <span className="Footer-address">
          6 Jong-ro, Jongno-gu, Seoul, Republic of Korea SERVICE 서울시 종로구
          종로6 광화문우체국빌딩 6층 스타트업빌리지(서린동 154-1)
        </span>
        <br />
        <span className="Footer-info">
          개인정보처리방침 사업자등록번호: 417-81-51555
        </span>
        <br />
        <span className="Footer-tel">T: 02-6673-5853</span>
        <span className="Footer-fax">F: 050-4314-5853</span>
        <span className="Footer-email">​E: support@afoter.com</span>

        <span className="Footer-copy">
          &copy; 2022 Caremind. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
