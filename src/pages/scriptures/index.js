import React from "react";
import Layout from '../../components/Layout'
import scriptures from '../../helper/scriptures';
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  span {
    width: 50%;
    padding: 5px 10px;
    background-color: #fdfdfd;
    margin: 5px;
    &:first-child {
      text-align: right;
    }
  }
`;

export default class Index extends React.Component {

  render() {
    return <Layout>
        <div className="container">
          <b>Theory A</b>
          <p>
            Theory A is a computer science inspired set of <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators">
               logical expressions
            </a> that deal with the journey from Truth to Untruth and back again. Many of the concepts here originate in Buddhism and Daoism.
            Theory A starts with a claim that initially makes no sense in the world of pure logic
            but attemps to create a bridge between rationality and faith.
          </p>
        </div>
        <div className="container">
          <div className="content">
            {scriptures.map(each => {
              return <Row>
                  <span>{each.yawn}</span>
                  <span>{each.reference}</span>
                </Row>;
            })}
          </div>
        </div>
      </Layout>;
  }
}