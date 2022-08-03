import React from "react";
import "./LoadMore.scss";

interface Props {
    loadMore: ()=>void
}

class States {

}

class LoadMore extends React.Component<Props, States> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        return (
            <div className="wrap-button" onClick={this.props.loadMore}>더 많은 사진 불러오기</div>
        )
    }
}

export default LoadMore;
