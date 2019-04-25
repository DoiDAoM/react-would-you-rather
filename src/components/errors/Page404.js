import React, { Component } from 'react'
import {Card, Col, Row } from 'react-bootstrap'

class Results extends Component {
    render() {
        return (
            <div>
                <div className='center error-text'> 404 Error </div>
                <h1 className='center'> Page Not Found </h1>               
            </div>
        )
    }
}

export default Results