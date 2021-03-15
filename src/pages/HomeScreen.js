import React, { Component } from 'react'
import Navigation from "../components/Navigation";
import { Card, Button } from "react-bootstrap";
export default class HomeScreen extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <div style={{
                    marginLeft: 20,
                    height: "100%",
                    width: "100%"
                }}>

                    
                    <Card style={{
                        width: "75%",
                        marginTop: 30,
                    }}>
                        <Card.Body>
                            <div>
                                <Card.Title>
                                    <p style={{
                                        color: "green",
                                        display: 'inline-block'
                                    }}>
                                    Good Evening, Shankar!
                                    </p>
                                    <Button variant="primary" style={{
                                        backgroundColor: "green",
                                        float: "right"
                                    }}>
                                        Post Job
                                    </Button>
                                </Card.Title>
                            </div>
                                

                            <div style={{
                                marginLeft:"15px",
                                flexDirection:"row",
                                display:'flex',
                            }}>
                                <div style = {{
                                    flex:1,
                                    border:"1px solid white",
                                    borderRightColor:"black",
                                    textAlign:'center',
                                    alignItems:"center"
                                    }}>
                                    <p style={{color:"green" ,fontSize:30}}>
                                        1
                                    </p>
                                    <p>Active jobs</p>
                                </div>
                                <div style = {{
                                    flex:1,
                                    border:"1px solid white",
                                    borderRightColor:"black",
                                    textAlign:'center',
                                    alignItems:"center"
                                    }}>
                                    <p style={{color:"green" ,fontSize:30}}>
                                        1
                                    </p>
                                    <p>Active jobs</p>
                                </div>
                                <div style = {{
                                    flex:1,
                                    border:"1px solid white",
                                    borderRightColor:"black",
                                    textAlign:'center',
                                    alignItems:"center"
                                    }}>
                                    <p style={{color:"green" ,fontSize:30}}>
                                        1
                                    </p>
                                    <p>Active jobs</p>
                                </div>
                                <div style = {{
                                    flex:1,
                                    border:"1px solid white",
                                    borderRightColor:"black",
                                    textAlign:'center',
                                    alignItems:"center"
                                    }}>
                                    <p style={{color:"green" ,fontSize:30}}>
                                        1
                                    </p>
                                    <p>Active jobs</p>
                                </div>
                                <div style = {{
                                    flex:1,
                                    border:"1px solid white",

                                    textAlign:'center',
                                    alignItems:"center"
                                    }}>
                                    <p style={{color:"green" ,fontSize:30}}>
                                        1
                                    </p>
                                    <p>Active jobs</p>
                                </div>
                                {/* <Card border ="light" style ={{
                                    display:'inline-block',
                                    width:"20%",
                                    borderLeftWidth:3,
                                    borderLeftColor:"black",
                                    height:120
                                }}>
                                  
                                </Card>

                                <Card border ="light" style ={{
                                    display:'inline-block',
                                    width:"20%"
                                }}>

                                </Card>

                                <Card border="light"  style ={{
                                    display:'inline-block',
                                    width:"20%"
                                }}>


                                </Card>

                                <Card border ="light" style ={{
                                    display:'inline-block',
                                    width:"20%"
                                }}></Card>

                                <Card border ="light" style ={{
                                    display:'inline-block',
                                    width:"20%"
                                }}>

                                </Card> */}
                            </div>

                        </Card.Body>
                    </Card>
                    {/* </div> */}
                    <p style={{
                        marginTop: 40,
                        display: 'inline-block'
                    }}> Overview of Active Jobs</p>
                    <Card style={{
                        width: "40%",
                        marginTop: 5,
                    }}>
                        <Card.Body>
                            <div>
                                <Card.Title>
                                    <p style={{
                                        color: "green",
                                        display: 'inline-block'
                                    }}>Good Evening, Shankar!</p>
                                    <Button variant="primary" style={{
                                        backgroundColor: "green",
                                        float: "right"
                                    }}>
                                        Post Job
                                </Button>
                                </Card.Title>
                            </div>


                            <Card.Text>

                            </Card.Text>

                        </Card.Body>
                    </Card>
                </div>
            </div>

        )
    }
}
