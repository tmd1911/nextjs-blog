import React from "react";
import {parseISO, format} from 'date-fns'

interface Props {
    dateString: string
}

class State {

}

class Date extends React.Component<Props,State> {
    constructor(props: Props) {
        super(props)
    }
    render() {
        const dateString = this.props.dateString
        const date = parseISO(dateString)
        return (
            <time dateTime={dateString}>{format(date,'LLLL d, yyyy')}</time>
        )
    }
}

export default Date;