import { useRef } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Login.css";

const Login = () => {
  const loginIdRef = useRef();
  const loginPwdRef = useRef();
  const history = useHistory();

  const loginFnc = () => {
    fetch("http://localhost:3000/data/UserData.json")
      .then((res) => res.json())
      .then((res) => {
        for (let data of res) {
          if (
            data.emailAddr === loginIdRef.current.value &&
            data.passCode === loginPwdRef.current.value
          ) {
            console.log(data.token);
            localStorage.setItem("accessToken", JSON.stringify(data.token));
          }
        }
      })
      .then((res) => {
        const getValue = localStorage.getItem("accessToken");
        if (getValue) {
          alert("로그인이 성공하였습니다");
          history.push("/");
        } else {
          alert("로그인이 실패하였습니다 다시 한번 확인해주세요");
        }
      });
  };

  const Login = () => {
    fetch("http://localhost:3000/data/UserData.json", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: " application/json",
        "Content-Length": "87",
        "Allow-Control-Access-Origin": "*",
      },
      body: JSON.stringify({
        userType: "U",
        emailAddr: loginIdRef.current.value,
        passCode: loginPwdRef.current.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.isLogin) {
          localStorage.setItem("accessToken", JSON.stringify(res.token));
          alert("로그인이 성공하였습니다");
          history.push("/");
        } else {
          alert("로그인이 실패하였습니다 다시 한번 확인해주세요");
        }
      });
  };
  return (
    <div className="Login">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          loginFnc();
        }}
      >
        <div className="Login-box">
          <div className="Login-userData-box">
            <label htmlFor="LoginId">아이디</label>
            <input type="text" id="LoginId" ref={loginIdRef} />
          </div>
          <div className="Login-userData-box">
            <label htmlFor="LoginPwd">비밀번호</label>
            <input type="password" id="LoginPwd" ref={loginPwdRef} />
          </div>
          <div className="Login-btn-box">
            <button type="sumbit" className="Login-sumbit-btn">
              로그인
            </button>
            <Link to="/">
              <button className="Login-cancel-btn">취소</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
