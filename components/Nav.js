import React from "react";
import Link from "next/link";
import styled from "styled-components";

const Nav = ({ user, className }) => {
  return (
    <div className={className}>
      <div className='logo'>
        <Link href='/'>
          <a>
            <h1>Git Visualizer</h1>
          </a>
        </Link>
      </div>
      <div className='navigation'>
        <Link href='/settings'>
          <a>Settings</a>
        </Link>
        |
        <Link href=''>
          <a>{user}</a>
        </Link>
      </div>
    </div>
  );
};

export default styled(Nav)`
  width: 100%;
  margin: auto;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  .navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      padding: 10px 15px;
      font-size: 18px;
    }
  }
`;
