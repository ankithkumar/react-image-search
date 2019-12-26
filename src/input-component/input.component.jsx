import React from 'react';
import TextField from '@material-ui/core/TextField';

export default class InputComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    handleKeyDown(event) {
        if (!this.state.value) {
            return;
        }
        let val = this.state.value;
        if (event.keyCode === 13) {
            this.props.handleSubmit(val);
        }
        this.setState({value: ''});
    }

    render() {
        return (
            <div>
                <TextField
                    id="standard-full-width"
                    label="Category"
                    style={{ margin: 10 }}
                    placeholder="Enter image category"
                    helperText="You can search any image by its category"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={(e) => this.handleChange(e)}
                    onKeyDown={(e) => this.handleKeyDown(e)}
                />
            </div>
        );
    }
}