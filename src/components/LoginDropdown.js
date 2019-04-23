import React, { Component } from 'react'
import {Dropdown} from 'react-bootstrap'
import { connect } from 'react-redux'


class LoginDropDown extends Component {

    render() {
        const { users, selectedUser, onUserSelect } = this.props

        let dropdown_items = []
        if (users.length !== undefined) {
            dropdown_items = users.map((user) => {
                return (
                    <Dropdown.Item key={user} onClick={() => onUserSelect(user)}> 
                        {user} 
                    </Dropdown.Item>
                )
            })
        }

        return (
            <div> 
               <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                        {selectedUser === null ? 'Select User' : selectedUser}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {dropdown_items}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }

}

function mapStateToProps ({ users }) {
    return {
      users : Object.keys(users),
    }
}
export default connect(mapStateToProps)(LoginDropDown)