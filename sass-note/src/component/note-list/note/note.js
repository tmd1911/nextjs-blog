import React,{Component} from "react";
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
        </div>
    }
};

export default Note;
