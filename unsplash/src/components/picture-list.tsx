import React from "react";
import Picture from './picture';
import './picture-list.scss'

interface Props {
    images:Array<any>
}

class States {

}

class PictureList extends React.Component<Props,States> {
    constructor(props: Props) {
        super(props);
    }
    render() {
        const renderImage = (images:Array<any>)=>{
            return images.map((x:string,i:number)=><Picture key={i} url={x} />)
        };
        return (
            <div className="content">{renderImage(this.props.images)}</div>
        )
    }
}

export default PictureList;
