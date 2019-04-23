import React, { Component } from 'react'
import { Form, Card, Button } from 'react-bootstrap'

class Selection extends Component {
    state = {
        selectedOption : '',
    }

    onOptionSelect = (event) => {
        this.setState({
            selectedOption: event.target.id
        })
    }

    render() {
        const { optionOne, optionTwo } = this.props

        return (
            <div>
                <Card.Title>Would You Rather...</Card.Title>
                <Form.Group onChange={this.onOptionSelect}>
                    <Form.Check
                    type="radio"
                    label={optionOne}
                    name="options"
                    id="optionOne"
                    />
                    <Form.Check
                    type="radio"
                    label={optionTwo}
                    name="options"
                    id="optionTwo"
                    />
                </Form.Group>
                <Button onClick={() => this.props.onSubmit( this.state.selectedOption )}> Submit </Button>
            </div>
        )
    }
}

export default Selection