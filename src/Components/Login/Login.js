import React, { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import toast from "react-hot-toast";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().min(4).max(10).required(),
  })
  .required();

function Login() {
  const [data, setData] = useState();

  const myPost = axios.create({
    baseURL: "https://auth-test-api-techinnover.herokuapp.com/api/v1/user",
    headers: { "Content-Type": "application/json" },
  });

  const getData = (data) => {
    myPost
      .post("/login", data)
      .then((response) => {
        if (response.data) {
          toast.success("Login was successful");
        }
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        toast.error("login failed");
        toast(error.message);
        console.log(error);
      });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = async (data) => {
    getData(data);
    console.log(data);
  };
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>Login</Title>

        <InputSection>
          <label htmlFor="Email">Email address</label>
          <input
            placeholder="enter your Email"
            name="email"
            autoComplete="off"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
        </InputSection>

        <InputSection>
          <label htmlFor="password">Password</label>
          <input
            placeholder="Enter your password"
            type="password"
            autoComplete="off"
            {...register("password", { required: true })}
          />
          <p>{errors.password?.message}</p>
        </InputSection>

        <button type="submit">Log in</button>
      </Form>
    </Wrapper>
  );
}

export default Login;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;

  p {
    font-size: 12px;
    color: red;
  }

  > button {
    margin-top: 30px;
    width: 50%;
    padding: 0.8rem;
    border: none;
    background: #7d5fff;
    border-radius: 6px;
    color: white;
    padding: 18px 20px;
    cursor: pointer;
    font-family: Inter;
  }

  > button:hover {
    box-shadow: 2px 3px 3px lightblue;
    transition: 1000 linear;
  }
`;

const Title = styled.h1`
  color: black;
  font-family: Inter;
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  > label {
    margin-bottom: 10px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #667085;
  }

  > input {
    padding: 17px 20px;
    font-family: "Inter";
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.02em;
    border: 1px solid #eaeced;
    border-radius: 6px;
  }
`;
