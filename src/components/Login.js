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
            
            <div className='justify-content-md-center'>
                <Card className='justify-content-md-center wrap-content' >
               
                        <div className='gray-background'>
                            <Card.Title>Welcome to the Would You Rather App!</Card.Title>
                            <Card.Text className='text-center'>
                                Please sign in to continue.
                            </Card.Text>
                        </div>
                        <div style={{ margin: '20px'}} >
                            <h3 className='text-center green-color'> Sign in </h3>
                            <LoginDropdown  className='full-width' onUserSelect={this.onUserSelect} selectedUser={this.state.selectedUserId}/>
                            <Button className='full-width'  variant="success" onClick={this.onSubmit}>Sign in</Button>
                        </div>
 
                </Card>
            </div>
        )

    }

}

export default connect()(Login)