import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Join.css";
const Join = () => {
  const [isUsername, setIsUsername] = useState(false);
  const [isUseremailPhoneNum, setIsUseremailPhoneNum] = useState(false);
  const [isUserPwd, setIsUserPwd] = useState(false);
  const [isUserInfo, setIsUserInfo] = useState(true);

  const history = useHistory();
  const usernameValueCheck = (e) => {
    const value = e.target.value;
    if (!value || value.length > 20) {
      setIsUsername(false);
    } else {
      setIsUsername(true);
    }
  };
  const useremailPhoneNumValueCheck = (e) => {
    const value = e.target.value;
    var regPhone = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    var regEmail =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    if (regPhone.test(value) === true) {
      setIsUseremailPhoneNum(true);
    } else if (regEmail.test(value) === true) {
      setIsUseremailPhoneNum(true);
    } else {
      setIsUseremailPhoneNum(false);
    }
  };
  const userPwdValueCheck = (e) => {
    const value = e.target.value;
    var regPwd =
      /^[A-Za-z0-9`~!@#\$%\^&\*\(\)\{\}\[\]\-_=\+\\|;:'"<>,\./\?]{8,20}$/;
    if (regPwd.test(value) === true) {
      setIsUserPwd(true);
    } else {
      setIsUserPwd(false);
    }
  };
  const UserInfoValueCheck = (e) => {
    const value = e.target.value;
    console.log(value);
    console.log(value.length);
    if (value.length > 512) {
      setIsUserInfo(false);
    } else {
      setIsUserInfo(true);
    }
  };
  const userSubmit = () => {
    if (!isUsername) {
      alert("회원명을 다시 확인해주세요");
    } else if (!isUseremailPhoneNum) {
      alert("이메일 주소 또는 핸드폰 번호를 다시 확인해주세요");
    } else if (!isUserPwd) {
      alert("비밀번호를 다시 확인해주세요");
    } else if (!isUserInfo) {
      alert("자기소개를 다시 확인해주세요");
    } else {
      alert("회원가입이 완료되었습니다");
      history.push("/login");
    }
  };
  return (
    <div className="Join">
      <div className="Join-box">
        <form
          action="/"
          onSubmit={(e) => {
            e.preventDefault();
            userSubmit();
          }}
        >
          <div className="Join-userdata-box">
            <label htmlFor="joinUsername">회원명</label>
            <input
              type="text"
              id="joinUsername"
              onBlur={(e) => {
                usernameValueCheck(e);
              }}
            />
            <div className="Join-warning">
              {isUsername
                ? null
                : "회원명은 20이자 이내이며 필수로 입력해주셔야 합니다."}
            </div>
          </div>

          <div className="Join-userdata-box">
            <label htmlFor="joinUseremailPhoneNum">
              이메일 주소 또는 핸드폰 번호
            </label>
            <input
              type="text"
              id="joinUseremailPhoneNum"
              onBlur={(e) => {
                useremailPhoneNumValueCheck(e);
              }}
            />
            <div className="Join-warning">
              {isUseremailPhoneNum
                ? null
                : "올바른 핸드폰/이메일을 입력해주셔야 합니다."}
            </div>
          </div>
          <div className="Join-userdata-box">
            <label htmlFor="joinUserPwd">비밀번호</label>
            <input
              type="password"
              id="joinUserPwd"
              onBlur={(e) => {
                userPwdValueCheck(e);
              }}
            />
            <div className="Join-warning">
              {isUserPwd
                ? null
                : "비밀번호는 영소문자/대문자, 숫자, 특수문자가 포함되어 있어야 합니다."}
            </div>
          </div>
          <div className="Join-userdata-box Join-userdata-last-box">
            <label htmlFor="joinUserInfo">자기소개</label>
            <textarea
              id="joinUserInfo"
              wrap="keep-all"
              onKeyUp={(e) => {
                UserInfoValueCheck(e);
              }}
            />
            <div className="Join-warning">
              {isUserInfo
                ? null
                : "자기 소개 글은 512자 이하만 입력 가능합니다."}
            </div>
          </div>
          <div className="Join-btn-box">
            <button className="Join-sumbit-btn" type="submit">
              회원가입
            </button>
            <Link to="/">
              <button className="Join-cancel-btn">취소</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Join;
