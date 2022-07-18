import React,{Component} from "react";
import Delete from "../../delete/delete";
import ModalPage from "../../modal/modal";
import NoteRaw from "../../note-raw/note-raw";
import './note.scss';

class Note extends Component {
    static defaultProps = {
        title: '',
        text: '',
        date: new Date()
    };

    state = {
        showEditModal: false,
        showDeleteModal: false
    };

    changeEditToggle = () => {
        this.setState({
            showChangeModal: !this.state.showChangeModal
        });
    };

    changeDeleteToggle = () => {
        this.setState({
            showDeleteModal: !this.state.showDeleteModal
        });
    };

    render = () => {
        return <div id="note">
            <div id="note-menu">
                <span>{this.props.title}</span>
                <span>
                    <span id="showChangeModal" onClick={this.changeEditToggle}>
                        편집
                    </span>
                    <span id="showDeleteModal" onClick={this.changeDeleteToggle}>
                        삭제
                    </span>
                </span>
            </div>
            <div id="date">
                <span>
                    {this.props.date.toISOString()}
                    {this.props.edited && ' (edited)'}
                </span>
            </div>
            <div>{this.props.text}</div>

            {this.state.showChangeModal && (
                <ModalPage>
                    <NoteRaw noteNumber={this.props.noteNumber}
                        action={this.props.changeNote}
                        close={this.changeEditToggle}
                        subject={'노트 수정'}
                        title={this.props.title}
                        text={this.props.text}
                        />
                </ModalPage>
            )}

            {this.state.showDeleteModal && (
                <ModalPage close={()=>{
                    this.changeEditToggle({target: {id: 'showDeleteModal'}});
                }}
                >
                    <Delete number={this.props.noteNumber}
                        action={this.props.deleteNote}
                        title={this.props.title}
                        close={this.changeDeleteToggle} />
                </ModalPage>
            )}
        </div>
    }
};

export default Note;
