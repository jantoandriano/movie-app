import React from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const LoaderAnimation = keyframes`
  0% {
    background-position: -400px 0
  }
  100% {
    background-position: 400px 0
  }
`;

const Loader = styled.div`
  border: 1px solid grey;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: grey;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${LoaderAnimation};
  animation-timing-function: linear;
  background-color: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #bbbbbb 18%, #eeeeee 33%);
`;

function LoaderDetailMovie() {
  return (
    <>
      <Loader width="400px" height="400px" />
      <div
        style={{
          marginTop: "3rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Loader width="128px" height="24px" />
        <Loader width="179px" height="24px" />
        <Loader width="300px" height="48px" />
        <div style={{ marginTop: "16px" }}>
          <Loader width="300px" height="96px" />
        </div>
      </div>
    </>
  );
}

export default LoaderDetailMovie;
