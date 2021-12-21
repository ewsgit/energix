import React from "react";
import styled from "styled-components";

const Page = styled.div`
background-color: #454545;
  > .nav {
    width: 100%;
    height: 4rem;
    margin-top: 0;
    background-color: #353535;
    color: white;
    display: flex;
    align-items: center;
    position: fixed;
    top: 0;
    > h1 {
      position: absolute;
      left: 0.5rem;
    }
    > h2 {
      position: absolute;
      right: 0.5rem;
    }
  }
  > .game {
    display: grid;
    grid-template-columns: repeat(16, 1fr);
    grid-template-rows: repeat(16, 1fr);
    aspact-ratio: 1;
    margin: 0 auto;
    height: calc(100vh - 5rem);
    grid-gap: 0.5rem;
    padding: 0.5rem;
    margin-top: 4rem;
    color: white;
    > * {
      background-color: #754565;
      border-radius: .5rem;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      error: false,
      username: "Ewsgit"
    };
  }
  render() {
    return (
      <Page>
        <div className="nav">
          <h1>Energix</h1>
          <h2>{this.state.username}</h2>
        </div>
        <div className="game">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </Page>
    );
  }
}

export default App;
