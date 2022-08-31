import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (e) => {
    console.log(e.value);
  };
  return (
    <Wrapper>
      <Title>Login</Title>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="Email">Email address</label>
        <input defaultValue="Enter your email address" {...register("Email")} />

        <label htmlFor="password">Password</label>
        <input defaultValue="Enter your password" />

        <button type="submit">Log in</button>
      </Form>
    </Wrapper>
  );
}

export default Login;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  > label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    margin-top: 20px;
    margin-bottom: 10px;

    color: #667085;
  }

  > input {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.02em;
    color: #8d94a4;
    width: 44%;
    padding: 0.8rem;
    border: 1px solid #eaeced;
    border-radius: 6px;
    background: #f5f5f5;
  }

  > button {
    margin-top: 30px;
    width: 47%;
    padding: 0.8rem;
    border: none;
    background: #7d5fff;
    border-radius: 6px;
    color: white;
    padding: 18px 20px;
    cursor: pointer;
  }

  > button:hover {
    box-shadow: 2px 3px 3px lightblue;
    transition: 1000 linear;
  }
`;

const Title = styled.h1`
  margin-left: 10px;
`;
