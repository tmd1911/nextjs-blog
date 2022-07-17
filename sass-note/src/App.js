import React from "react";
import styled from 'styled-components';
import NoteList from "./component/note-list/note-list";

const Container = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

const AppDiv = styled.div`
width: 50vw;
height: 50vh;
border-radius: 0.25rem;
padding: 1rem;
box-shadow: 0 10px 6px -6px #777;
background-color: #28bbf7
`

class App extends React.Component {
  state = {
    search: '',
    notes: [
      {date:new Date(), text: '첫 번째 메모 텍스트', title: '첫 번째 메모입니다.', edited: false},
      {date: new Date(), text: '두 번째 메모', title:'second', edited:false}
    ]
  }
  render() {
    return (
      <Container>
        <AppDiv id="app">
          <div id="search-bar">Search-Bar</div>
          <NoteList notes={this.state.notes}/>
        </AppDiv>
      </Container>
    );
  }
};

export default App;
