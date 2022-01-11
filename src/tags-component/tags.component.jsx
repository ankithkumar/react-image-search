import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import './tags.component.scss';

export default class TagsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete(tag) {
       this.props.deleteTag(tag.id);
    }

    handleClick(name) {
       this.props.searchForTag(name)
    }

    render() {
        return (
            <div>
                {
                    this.props.tags.map(tag => {
                        return (
                            <Chip
                                key={tag.id}
                                label={tag.name}
                                onDelete={() => this.handleDelete(tag)}
                                onClick={() => this.handleClick(tag.name)}
                                className="tag"
                            />)
                    })
                }
            </div>
        )
    }
}