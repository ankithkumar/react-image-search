import React from 'react';
import InputComponent from '../input-component/input.component.jsx';
import ListComponent from '../list-component/list.component.jsx';
import TagsComponent from '../tags-component/tags.component.jsx';

export default class AppComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageArr: [],
            tags: [],
            value: '',
            loading: true
        };
        this.setCategory = this.setCategory.bind(this);
        this.setLoading = this.setLoading.bind(this);
        this.handleTagDelete = this.handleTagDelete.bind(this);
        this.searchTag = this.searchTag.bind(this);
    }

    setLoading(flag) {
        this.setState({loading: flag});
    }

    getImages() {
        fetch(`https://pixabay.com/api/?key=14735745-1fa3f6c1c5c8cedfa3de0cad5&q=${this.state.value}`)
            .then((response) => response.json())
            .then(images => {
                console.log(images);
                images && images.hits && this.setState({imageArr: images.hits}, () => this.setLoading(false));
            })
    }

    setTag(value) {
        const tags = [...this.state.tags];
        const newTags = tags.filter(tag => {
            return tag.name === value;
        })
        if (newTags.length) {
            return;
        }
        let tagObject = {
            id: tags.length ? tags[tags.length - 1].id + 1 : 1,
            name: value
        }
        tags.push(tagObject);
        this.setState({tags});
    }

    setCategory(value) {
        if (this.state.loading && this.state.imageArr.length) {
            return;
        }
        this.setLoading(true);
        this.setState({value});
        this.getImages();
        this.setTag(value);
    }

    handleTagDelete(id) {
        const tags = [...this.state.tags];
        const newTag = tags.filter(tag => {
            return tag.id !== id;
        })
        this.setState({tags: newTag});
    }

    searchTag(name) {
        if (this.state.loading && this.state.imageArr.length) {
            return;
        }
        this.setLoading(true);
        this.setState({value: name});
        this.getImages();
    }

    render() {
        return (
            <div>
                <InputComponent handleSubmit={this.setCategory} />
                {
                  this.state.tags.length ? <hr/> : ''
                }
                <TagsComponent
                    tags={this.state.tags}
                    deleteTag={this.handleTagDelete}
                    searchForTag={this.searchTag}
                />
                {
                    !this.state.loading && this.state.imageArr.length ? <hr/> : ''
                }
                {
                    !this.state.loading && this.state.imageArr.length ? <ListComponent images={this.state.imageArr}/> : ''
                }
            </div>
        );
    }
}