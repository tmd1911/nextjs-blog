import React, {Component} from "react";
import './note-list.scss'
import Note from './note/note'

class NoteList extends Component {
    static defaultProps = {
        notes: []
    };

    render() {
        const noteListReturn = notes => {
            return this.props.notes.map((note,idx)=>{
                return {...note,idx};
            }).filter(note=>{
                return note.text.indexOf(this.props.search) !== -1;
            }).map((note, k) => {
                return <Note key={k}
                 noteNumber={k} 
                 title={note.title} 
                 text={note.text} 
                 date={note.date} 
                 edited={note.edited}
                 changeNote={this.props.changeNote}
                 deleteNote={this.props.deleteNote}
                 />
            })
        }
        // const noteListReturn = notes => {
        //     return notes.map((note,k)=>{
        //         return (
        //             <div key={k}>
        //                 <div>{note.title}</div>
        //                 <div>{note.text}</div>
        //             </div>
        //         )
        //     })
        // }

        return (
            <div id="note-list-container">
                <div id="note-list">{noteListReturn(this.props.notes)}</div>
            </div>
        )
    }
};

export default NoteList;
