import React, { Component } from 'react'
import {Card, Col, Row } from 'react-bootstrap'
import HorizontalBar from './HorizontalBar'

class Results extends Component {
    render() {
        const { optionOneCount, optionTwoCount, optionOne, optionTwo, answer } = this.props
        const totalCount = optionOneCount + optionTwoCount
        const optionOneRatio = 100 * optionOneCount / (optionOneCount + optionTwoCount)
        const optionTwoRatio = 100 - optionOneRatio

        return (
            <div>
                <Card.Title>Results:</Card.Title>
                <Card>
                    <Row>
                        <Col md={8}>
                            {`Would you rather ${optionOne}`}
                        </Col>
                        {answer === 'optionOne' &&
                        <Col md={{ span:2, offset:2 }}>  
                            <div className='circle-shape'/>
                        </Col>
                        }
                    </Row>
                    <div>
                        <HorizontalBar percentage={optionOneRatio}/>
                    </div>
                    <div>
                       {`${optionOneCount} out of ${totalCount} votes`}
                    </div>                  
                </Card>
                <Card>
                    <Row>
                        <Col md={8}>
                            {`Would you rather ${optionTwo}`}
                        </Col>
                        {answer === 'optionTwo' &&
                        <Col md={{ span:2, offset:2 }}>  
                            <div className='circle-shape'/>
                        </Col>
                        }
                    </Row>
                    <div>
                    <HorizontalBar percentage={optionTwoRatio}/>
                    </div>
                    <div>
                       {`${optionTwoCount} out of ${totalCount} votes`}
                    </div>                  
                </Card>
                
            </div>
        )
    }
}

export default Results