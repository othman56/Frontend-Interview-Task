import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Wrapper>
      <Title>SignUp</Title>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="Email">Email address</label>
        <input
          type="email"
          placeholder="Enter your email address"
          name="email"
          {...register("email")}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          name="password"
          {...register("password", { required: true, minLength: 6 })}
        />
        {errors.password && <p>password should be 6 or more characters</p>}

        <label htmlFor="Full name">Full name</label>
        <input
          type="text"
          placeholder="enter your full name"
          name="name"
          {...register("name")}
        />

        <label htmlFor="role">What is your role</label>
        <select name="role">
          <option value="frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Fullstack">Fullstack</option>
        </select>
        <button type="submit">Log in</button>
      </Form>
    </Wrapper>
  );
}

export default SignUp;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
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
  }

  p {
    font-size: 12px;
    color: red;
  }

  > button {
    margin-top: 30px;
    width: 47%;
    border: none;
    background: #7d5fff;
    border-radius: 6px;
    color: white;
    padding: 18px 20px;
  }

  > select {
    width: 47%;
    padding: 0.8rem;
    border: 1px solid #eaeced;
  }
`;
