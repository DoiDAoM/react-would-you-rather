import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, Row, Col } from 'react-bootstrap'

class LeaderBoardItem extends Component {

    render() {
        const { userId, users } = this.props
        const user = users[userId]

        const answerCount = Object.keys(user.answers).length
        const questionCount = user.questions.length
        const totalCount = answerCount + questionCount

        return (
            <div> 
                <Card className='tweet'>
                    <Row>
                        <Col md={2}>
                            <img
                                src={user.avatarURL}
                                alt={`Avatar of ${user.name}`}
                                className='avatarr'
                            />
                        </Col>
                        <Col md={8}>
                            <Row>
                                <Col>
                                    <h3> {user.name}</h3>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    Answered Questions
                                </Col>
                                <Col md={{ offset: 2 }}>
                                    {answerCount}
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    Created Questions
                                </Col>
                                <Col md={{ offset: 2 }}>
                                    {questionCount}
                                </Col>
                            </Row>
                        </Col>

                        <Col md={2}>
                     
                            <h4 className='text-center'> Score </h4> 
                        
                            <div className="center"> {totalCount} </div>
                           
                        </Col>
                    </Row>
                </Card>
            </div>
        )
    }
}

function mapStateToProps ({ users }) {
    return ({
        users,
    })
}
  
export default connect(mapStateToProps)(LeaderBoardItem)