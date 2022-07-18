import React from "react";
import styled from 'styled-components';
import ModalPage from "./component/modal/modal";
import NoteList from "./component/note-list/note-list";
import NoteRaw from "./component/note-raw/note-raw";
import SearchBar from "./component/search-bar/search-bar";

const Container = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

// em, rem 은 font-size 속성값에 비례해 크기가 결정되는 단위
// font-size: 16px => 1em: 16px
// em 은 현재 엘리먼트의 font-size, rem: 루트 엘리먼트의 font-size


// Container에는 display, flex-flow, justify-content 등의 속성을 사용할 수 있음
// Items에는 order, flex, align-self 속성을 사용할 수 있음


const AppDiv = styled.div`
width: 50vw;
height: 50vh;
border-radius: 0.25rem;
padding: 1rem;
box-shadow: 0 10px 6px -6px #777;
background-color: #28bbf7
`

const SearchBarDiv = styled.div`
display:flex;
justify-content:space-between;
padding:0.5rem;
div > span {
  font-size: 2rem;
  font-weight: bold;
}
> button {
  font-size: 1.2rem;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  outline: none;
  padding: 0.5rem;
  transition: 0.25s;
  color: #28bbf7;
  background-color: white;
  cursor: pointer;
  &:hover {
    background-color: #28bbf7;
    color: white;
  }
}
`;

class App extends React.Component {
  state = {
    search: '',
    notes: [
      {date:new Date(), text: '첫 번째 메모 텍스트', title: '첫 번째 메모입니다.', edited: false},
      {date:new Date(), text: '두 번째 메모', title:'second', edited:false},
      {date:new Date(), text: '3 번째 메모', title:'second', edited:false},
      {date:new Date(), text: '4 번째 메모', title:'second', edited:false},
      {date:new Date(), text: '5 번째 메모', title:'second', edited:false},
      {date:new Date(), text: '6 번째 메모', title:'second', edited:false},
    ],
    modalToggle: false
  };

  toggleModal = () => {
    this.setState({
      modalToggle: !this.state.modalToggle
    });
  };

  onChangeSearchText = e => {
    console.log(e.target.value);
    this.setState({
      search: e.target.value
    });
  };

  createNote = (title,text) => {
    this.setState({
      notes: [...this.state.notes, {title, text, date: new Date(), edited: false}]
    });
  };

  changeNote = (title,text,number) => {
    this.setState({
      notes: this.state.notes.map((note,k)=>(k===number?{...note,title,text,edited:true}:note))
    });
  }

  deleteNote = number => {
    this.setState({
      notes: this.state.notes.filter((note,k)=>(k===number ? false : true))
    });
  }

  render() {
    return (
      <Container>
        {this.state.modalToggle && <ModalPage>
            <NoteRaw action={this.createNote} close={this.toggleModal}/>
          </ModalPage>}
        <AppDiv id="app">
          <SearchBarDiv>
            <div>
              <span>노트 만들기</span>
            </div>
            <div>
              <SearchBar search={this.state.search} onChangeSearchText={this.onChangeSearchText}/>
            </div>
            <button onClick={this.toggleModal}>노트 작성</button>
          </SearchBarDiv>
          <NoteList search={this.state.search} notes={this.state.notes} changeNote={this.changeNote} deleteNote={this.deleteNote}/>
        </AppDiv>
      </Container>
    );
  }
};

export default App;
