import React, { Component } from 'react'
import {Card, Button} from 'react-bootstrap'
import LoginDropdown from './LoginDropdown'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser';


class Login extends Component {
    state = {
        selectedUserId : null,
    }

    onUserSelect = (userId) => {
        this.setState({
            selectedUserId : userId,
        })    
    }

    onSubmit = () => {
        const { dispatch } = this.props
        const { selectedUserId } = this.state 
        if (selectedUserId !== null) {
            dispatch(setAuthedUser(selectedUserId))
        }
    }

    render() {
        return (
            <div className='center'> 
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Welcome to the Would You Rather App!</Card.Title>
                        <Card.Text>
                            Please sign in to continue.
                        </Card.Text>
                        <LoginDropdown onUserSelect={this.onUserSelect} selectedUser={this.state.selectedUserId}/>
                        <Button variant="primary" onClick={this.onSubmit}>Sign in</Button>
                    </Card.Body>
                </Card>
            </div>
        )

    }

}

export default connect()(Login)