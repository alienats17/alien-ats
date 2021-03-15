import React, { Component } from 'react'
import { Navbar, Nav } from "react-bootstrap";





export default class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dash: {
                hovering: false,
                clicked: false
            },
            jobs: {
                hovering: false,
                clicked: false
            },
            search: {
                hovering: false,
                clicked: false
            },
            interviews: {
                hovering: false,
                clicked: false
            },
            assessment: {
                hovering: false,
                clicked: false
            },
            reports: {
                hovering: false,
                clicked: false
            }
        }
    }
    render() {
        return (
            <>

                <Navbar expand="lg" className="navigation"
                    style={{
                        backgroundColor: "green",
                        fontFamily: '"Droid Sans",sans-serif',
                        height: 70,
                        fontSize: 15,
                        fontWeight: 'normal'
                    }}
                >

                    <Navbar.Brand href="#home" style={{
                        color: "white",
                    }}>Alien-aits</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto classic">
                            <Nav.Link className="classic" href="#home"
                                style={{
                                    color: `${this.state.dash.clicked ? "red" : "white"}`,
                                    borderBottom: `${this.state.dash.hovering ? '1px solid white' : 'transparent'}`,
                                    height: 30,
                                    borderBottomLeftRadius: 1,
                                    borderBottomRightRadius: 1,
                                    marginLeft: 30,

                                }}
                                onMouseEnter={() => this.setState({
                                    dash: {
                                        hovering: true
                                    }
                                })}
                                onMouseLeave={() => this.setState({
                                    dash: {
                                        hovering: false
                                    }

                                })}
                                onClick={() => this.setState({
                                    dash: {
                                        clicked: true
                                    }

                                })}
                            >Dashboard</Nav.Link>

                            <Nav.Link className="classic" href="#home"
                                style={{
                                    color: `${this.state.jobs.clicked ? "red" : "white"}`,
                                    borderBottom: `${this.state.jobs.hovering ? '1px solid white' : 'transparent'}`,
                                    height: 30,
                                    borderBottomLeftRadius: 1,
                                    borderBottomRightRadius: 1,
                                    marginLeft: 30,

                                }}
                                onMouseEnter={() => this.setState({
                                    jobs: {
                                        hovering: true
                                    }
                                })}
                                onMouseLeave={() => this.setState({
                                    jobs: {
                                        hovering: false
                                    }

                                })}
                                onClick={() => this.setState({
                                    jobs: {
                                        clicked: true
                                    }

                                })}
                            >Jobs</Nav.Link>


                            <Nav.Link className="classic" href="#home"
                                style={{
                                    color: `${this.state.search.clicked ? "red" : "white"}`,
                                    borderBottom: `${this.state.search.hovering ? '1px solid white' : 'transparent'}`,
                                    height: 30,
                                    borderBottomLeftRadius: 1,
                                    borderBottomRightRadius: 1,
                                    marginLeft: 30,

                                }}
                                onMouseEnter={() => this.setState({
                                    search: {
                                        hovering: true
                                    }
                                })}
                                onMouseLeave={() => this.setState({
                                    search: {
                                        hovering: false
                                    }

                                })}
                                onClick={() => this.setState({
                                    search: {
                                        clicked: true
                                    }

                                })}
                            >Search Resume</Nav.Link>

                            <Nav.Link className="classic" href="#home"
                                style={{
                                    color: `${this.state.interviews.clicked ? "red" : "white"}`,
                                    borderBottom: `${this.state.interviews.hovering ? '1px solid white' : 'transparent'}`,
                                    height: 30,
                                    borderBottomLeftRadius: 1,
                                    borderBottomRightRadius: 1,
                                    marginLeft: 30,

                                }}
                                onMouseEnter={() => this.setState({
                                    interviews: {
                                        hovering: true
                                    }
                                })}
                                onMouseLeave={() => this.setState({
                                    interviews: {
                                        hovering: false
                                    }

                                })}
                                onClick={() => this.setState({
                                    interviews: {
                                        clicked: true
                                    }

                                })}
                            >Interviews</Nav.Link>

                            <Nav.Link className="classic" href="#home"
                                style={{
                                    color: `${this.state.assessment.clicked ? "red" : "white"}`,
                                    borderBottom: `${this.state.assessment.hovering ? '1px solid white' : 'transparent'}`,
                                    height: 30,
                                    borderBottomLeftRadius: 1,
                                    borderBottomRightRadius: 1,
                                    marginLeft: 30,

                                }}
                                onMouseEnter={() => this.setState({
                                    assessment: {
                                        hovering: true
                                    }
                                })}
                                onMouseLeave={() => this.setState({
                                    assessment: {
                                        hovering: false
                                    }

                                })}
                                onClick={() => this.setState({
                                    assessment: {
                                        clicked: true
                                    }

                                })}
                            >Assessments</Nav.Link>

                        <Nav.Link className="classic" href="#home"
                                style={{
                                    color: `${this.state.reports.clicked ? "red" : "white"}`,
                                    borderBottom: `${this.state.reports.hovering ? '1px solid white' : 'transparent'}`,
                                    height: 30,
                                    borderBottomLeftRadius: 1,
                                    borderBottomRightRadius: 1,
                                    marginLeft: 30,

                                }}
                                onMouseEnter={() => this.setState({
                                    reports: {
                                        hovering: true
                                    }
                                })}
                                onMouseLeave={() => this.setState({
                                    reports: {
                                        hovering: false
                                    }

                                })}
                                onClick={() => this.setState({
                                    reports: {
                                        clicked: !this.state.reports.clicked
                                    }

                                })}
                            >Reports</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </>

        )
    }
}
