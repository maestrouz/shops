import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

export default function login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      window.location.href = "http://localhost:5173/add";

       localStorage.setItem("username", username);
       localStorage.setItem("password", password);
    } else {
      alert("Login yoki parol noto'g'ri");
    }
  };

  return (
    <>
      <div class="bod">
        <div class="section">
          <div class="container">
            <div class="row full-height justify-content-center">
              <div class="col-12 text-center align-self-center py-5">
                <div class="section pb-5 pt-5 pt-sm-2 text-center">
                  <h6 class="mb-0 pb-3">
                    <span>
                      <a href="http://localhost:5173/">Главная</a>
                      <i class="fa-solid fa-chevron-right"></i>
                      вход
                    </span>
                  </h6>
                  <input
                    class="checkbox"
                    type="checkbox"
                    id="reg-log"
                    name="reg-log"
                  />

                  <div class="card-3d-wrap mx-auto">
                    <div class="card-3d-wrapper">
                      <div class="card-front">
                        <div class="center-wrap">
                          <div class="section text-center">
                            <h4 class="mb-4 pb-3">Вход</h4>
                            <div class="form-group">
                              <input
                                type="name"
                                name="name"
                                class="form-style"
                                placeholder="Ваше имя"
                                id="logemail"
                                autocomplete="off"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                              />
                              <i class="fa-solid fa-user-large"></i>{" "}
                            </div>
                            <div class="form-group mt-2">
                              <input
                                type="password"
                                name="pass"
                                class="form-style"
                                placeholder="Пароль"
                                id="logpass"
                                autocomplete="off"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                              />
                              <i class="fa-solid fa-lock"></i>
                            </div>
                            <a href="#" class="btn mt-4" onClick={handleLogin}>
                              Вход{" "}
                            </a>
                            <p class="mb-0 mt-4 text-center">
                              <a href="#0" class="link">
                                Забыли пароль?
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
