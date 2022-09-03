import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const schema = yup
  .object({
    email: yup.string().email().required(),
    fullName: yup.string().required(),
    password: yup.string().min(4).max(10).required(),
    userType: yup.string().required(),
  })
  .required();

function SignUp() {
  const [data, setData] = useState([]);
  const setUserValue = [];
  const navigate = useNavigate();

  const myPost = axios.create({
    baseURL: "https://auth-test-api-techinnover.herokuapp.com/api/v1/user",
    headers: { "Content-Type": "application/json" },
  });

  const getData = (data) => {
    myPost
      .post("/create", data)
      .then((response) => {
        if (response.data) {
          toast.success("Sign up was successful");
          navigate("/login");
        }
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        toast.error("User already exists");
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
  };

  const RoleType = {
    Teacher: "teacher",
    Student: "student",
  };

  const handleChange = (e) => {
    setUserValue(RoleType);
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Title>SignUp</Title>

        <InputSection>
          <label htmlFor="Email">Email address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            autoComplete="off"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
        </InputSection>

        <InputSection>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            autoComplete="off"
            {...register("password", { required: true })}
          />
          <p>{errors.password?.message}</p>
        </InputSection>

        <InputSection>
          <label htmlFor="Full name">Full name</label>
          <input
            type="text"
            name="fullName"
            placeholder="enter your full name"
            {...register("fullName")}
          />
          <p>{errors.fullName?.message}</p>
        </InputSection>

        <InputSection>
          <label htmlFor="role">What is your role</label>
          <select
            name="userType"
            onChange={handleChange}
            {...register("userType")}
          >
            <option value={RoleType.Teacher}>{RoleType.Teacher}</option>
            <option value={RoleType.Student}>{RoleType.Student}</option>
          </select>
        </InputSection>
        <button type="submit">Log in</button>
      </Form>
    </Wrapper>
  );
}

export default SignUp;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  padding: 2rem;
  background-color: whitesmoke;
  overflow: hidden;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;

  p {
    font-size: 12px;
    color: red;
  }

  > button {
    margin-top: 20px;
    width: 50%;
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
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 53px;
  letter-spacing: -0.05em;
  color: #101828;
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  > label {
    margin-bottom: 10px;
    font-family: "Inter";
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #667085;
  }

  > input {
    padding: 17px 20px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.02em;
    border: 1px solid #eaeced;
    border-radius: 6px;
  }

  > select {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 17px 20px;
    border: 1px solid #eaeced;
    border-radius: 6px;
  }
`;
