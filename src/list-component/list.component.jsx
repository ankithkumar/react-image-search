import React from 'react';
import './list.component.scss';
export default class ListComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='image-container'>
                {
                    this.props.images.map(image => {
                        return (
                            <img className='img' key={image.id} src={image.largeImageURL} />
                        )
                    })
                }
            </div>
        )
    }
}