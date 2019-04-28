import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";

import Sidebar from "../components/Sidebar";
import LineGraph from "../components/LineGraph";
import BarGraph from "../components/BarGraph";

const index = ({
  data: {
    allRepoCommits,
    EachTotalCommits,
    eachBiggestCommitWeek,
    EachAverageCommitCount,
    user,
  },
}) => {
  return (
    <div>
      <div className='main-section'>
        <div>
          <h2>All {user}'s commits by week</h2>
          <LineGraph
            data={allRepoCommits.map(({ total }) => total)}
            xLabels={allRepoCommits.map(({ week }) => week)}
          />
        </div>
      </div>
      <div>
        <h2>Comparing Repositories</h2>
        <SubSection>
          <li className='sub__graph'>
            <div>
              <h3>Average Commits in a Week</h3>
              <BarGraph
                dataset={EachAverageCommitCount.map(
                  ({ averageCommit }) => averageCommit
                )}
                repoName={EachAverageCommitCount.map(
                  ({ repoName }) => repoName
                )}
              />
            </div>
          </li>
          <li className='sub__graph'>
            <div>
              <h3>most lines of code commited at once</h3>
              <BarGraph
                dataset={eachBiggestCommitWeek.map(
                  ({ biggestCommit: { total } }) => total
                )}
                repoName={eachBiggestCommitWeek.map(({ repoName }) => repoName)}
              />
            </div>
          </li>
          <li className='sub__graph'>
            <div>
              <h3>Repositories total commits</h3>
              <BarGraph
                dataset={EachTotalCommits.map(
                  ({ totalCommits }) => totalCommits
                )}
                repoName={EachTotalCommits.map(({ repoName }) => repoName)}
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
