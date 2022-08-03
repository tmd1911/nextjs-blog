import React from "react";

interface Props {
    url: string
}
class States {

}
class Picture extends React.Component<Props,States> {
    constructor(props:Props) {
        super(props);
    }
    render() {
        return (
            <div className="card">
                <img src={this.props.url} />
            </div>
        )
    }
}

export default Picture;
