import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";

import Sidebar from "../components/Sidebar";
import LineGraph from "../components/LineGraph";
import BarGraph from "../components/BarGraph";

const index = ({ data: { fromGitHub, user } }) => {
  return (
    <div>
      <div className='main-section'>
        <div>
          <h2>All {user}'s commits by week</h2>
          <LineGraph
            data={fromGitHub.map(({ total }) => total)}
            xLabels={fromGitHub.map(({ week }) => week)}
          />
        </div>
      </div>
      <div>
        <h2>Comparing Repositories</h2>
        <SubSection>
          <li className='sub__graph'>
            <div>
              <h3>longest streak of commits</h3>
              <BarGraph
                dataset={fromGitHub.map(({ total }) => total)}
                yLabels={fromGitHub.map(({ total }) => total)}
              />
            </div>
          </li>
          <li className='sub__graph'>
            <div>
              <h3>most lines of code commited at once</h3>
              <BarGraph dataset={fromGitHub.map(({ total }) => total)} />
            </div>
          </li>
          <li className='sub__graph'>
            <div>
              <h3>Repositories total commits</h3>
              <BarGraph dataset={fromGitHub.map(({ total }) => total)} />
            </div>
          </li>
        </SubSection>
      </div>
      <div>
        <h2>Repository Commits by Week</h2>
        <SubSection>
          <li>
            <div>
              <h3>Repository Name</h3>
              <LineGraph
                data={fromGitHub.map(({ total }) => total)}
                xLabels={fromGitHub.map(({ week }) => week)}
              />
            </div>
          </li>
        </SubSection>
      </div>
    </div>
  );
};

const SubSection = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  margin: 0;
  padding: 0;
  li {
    list-style: none;
    width: 100%;
  }
`;

export default index;
