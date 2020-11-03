
import React, { forwardRef } from 'react';

import { Button, CardItem, Container, Card, Form, Item, Label, Input, Grid, Row, Col } from 'native-base';
import { Text, StyleSheet, TextInput, Alert, } from 'react-native';


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            signIn: true,
            name: '',
            lastname: '',
            gender: '',
            showError: true,
        }
    }

    handleSubmit() {
        alert(this.state.username + this.state.password)
    }

    Homepage(){
        alert('you are good to go! ')
    }

    fetchUser() {
        fetch('http://192.168.0.109:8000/api/token/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(this.state),
        })
            .then(
                (response) => {
                    if (!response.ok) {

                        throw Error(response)
                    }
                    return response
                }
            )
            .then(
                (response) => {

                    this.Homepage()
                },
                (error) => {
                    this.setState({ showError: false })
                    console.log(Error);
                }
            )
    }


    render() {


        return (
            <Container style={styles.viewContent}>

                {this.state.signIn ?
                    <Card style={styles.cardContent}>

                        <CardItem header style={styles.cardHeaderContent}>
                            <Text style={styles.cardHeaderText}> Bienvenido a Fix It</Text>
                        </CardItem>

                        <CardItem>
                            <Item rounded style={styles.cardHeaderContent}>
                                <Input
                                    placeholder='Username'
                                    name='username'
                                    value={this.state.username}
                                    onChangeText={e => this.setState({ username: e })} />
                            </Item>

                        </CardItem>
                        <CardItem >
                            <Item rounded style={styles.cardHeaderContent}>
                                <Input
                                    placeholder='Password'
                                    secureTextEntry={true}
                                    name='password'
                                    value={this.state.password}
                                    onChangeText={e => this.setState({ password: e })} />
                            </Item>
                        </CardItem>
                        <CardItem style={styles.CardItem}>
                            <Button bordered light style={styles.submitButton}
                                onPress={() => this.fetchUser()}>
                                <Text> Sign In </Text>
                            </Button>
                        </CardItem>
                        <CardItem style={styles.CardItem}>
                            <Grid style={styles.grid}>
                                <Row style={styles.row}>
                                    <Col>

                                        <Button transparent onPress={() => { this.setState({ signIn: false }) }}>
                                            <Text> Sign up  </Text>
                                        </Button>
                                    </Col>
                                    <Col>
                                        <Button transparent onPress={() => { }}>
                                            <Text style={styles.custom}> Forgot password? </Text>
                                        </Button>
                                    </Col>
                                </Row>
                            </Grid>


                        </CardItem>

                    </Card>

                    :
                    <Card style={styles.cardContent}>
                        <CardItem header style={styles.cardHeaderContent}>
                            <Text style={styles.cardHeaderText}> Bienvenido a Fix It</Text>
                        </CardItem>
                        <CardItem>
                            <Item rounded style={styles.cardHeaderContent}>
                                <Input
                                    placeholder='Name'
                                    name='name'
                                    value={this.state.name}
                                    onChangeText={e => this.setState({ name: e })} />
                            </Item>

                        </CardItem>
                        <CardItem>
                            <Item rounded style={styles.cardHeaderContent}>
                                <Input
                                    placeholder='Last name'
                                    name='lastname'
                                    value={this.state.lastname}
                                    onChangeText={e => this.setState({ lastname: e })} />
                            </Item>

                        </CardItem>

                        <CardItem>
                            <Item rounded style={styles.cardHeaderContent}>
                                <Input
                                    placeholder='Username'
                                    name='username'
                                    value={this.state.username}
                                    onChangeText={e => this.setState({ username: e })} />
                            </Item>

                        </CardItem>
                        <CardItem >
                            <Item rounded style={styles.cardHeaderContent}>
                                <Input
                                    placeholder='Password'
                                    secureTextEntry={true}
                                    name='password'
                                    value={this.state.password}
                                    onChangeText={e => this.setState({ password: e })} />
                            </Item>
                        </CardItem>
                        <CardItem style={styles.CardItem}>
                            <Button bordered light style={styles.submitButton}
                                onPress={() => this.handleSubmit()}>
                                <Text> Sign In </Text>
                            </Button>

                        </CardItem>
                        <CardItem style={styles.CardItem}>


                            <Button transparent onPress={() => { this.setState({ signIn: true }) }}>
                                <Text style={styles.custom}> Already User </Text>
                            </Button>
                        </CardItem>

                    </Card>

                }



            </Container>
        )
    }

}


const styles = StyleSheet.create({
    custom: {
        fontFamily: 'AntDesign'
    },
    viewContent: {
        backgroundColor: '#A7BFE8',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardContent: {
        width: '75%',
        marginTop: 15,
        padding: 15,
        borderRadius: 5,
    },
    cardHeaderContent: {
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',

    },
    cardHeaderText: {
        fontSize: 24,
    },
    grid: {
        width: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        height: '10%',
    },
    row: {
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    col: {
        width: '100%'
    },
    formContent: {
        width: '60%',
    },
    CardItem: {
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
    },
    submitButton: {
        width: '50%',
        borderRadius: 20,
        borderColor: '#654889',
        justifyContent: 'center',
        alignItems: 'center'
    },
})

