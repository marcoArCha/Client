import React from "react";
import { Link, useRouteError } from "react-router-dom";
import notFoundImg from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={notFoundImg} alt="not found" />
          <h3>Ohh! page not found</h3>
          <p>we can't seem to find the page you are looking for</p>
          <Link to="/dashboard">back home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <div>
      <h3>Something went wrong</h3>
      <Link to="/">Back home</Link>
    </div>
  );
};

export default Error;
