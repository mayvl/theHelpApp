import React from 'react';
import { Link } from 'react-router-native';
import { Button, CardItem, Container, Card, Form, Item, Label, Input } from 'native-base';
import { Text, StyleSheet, TextInput, } from 'react-native';


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            signIn: true,
            name: '',
            lastname: '',
            gender: ''
        }
    }

    handleSubmit() {
        alert(this.state.username + this.state.password)
    }


    render() {


        return (
            <Container style={styles.viewContent}>

                {this.state.signIn ?
                    <Card style={styles.cardContent}>
                        <CardItem header style={styles.cardHeaderContent}>
                            <Text style={styles.cardHeaderText}> Bienvenido a Fix It</Text>
                            <Button transparent onPress={()=> {this.setState({ signIn: false})}}>
                                <Text> Sign in </Text>
                            </Button>
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
                                <Text> Log In </Text>
                            </Button>

                        </CardItem>
                    </Card>

                    :
                    <Card style={styles.cardContent}>
                        <CardItem header style={styles.cardHeaderContent}>
                            <Text style={styles.cardHeaderText}> Bienvenido a Fix It</Text>
                            <Button transparent>
                                <Text> Sign in </Text>
                            </Button>
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
                                    placeholder='Lastname'
                                    name='lastname'
                                    value={this.state.lastname}
                                    onChangeText={e => this.setState({ lastname: e })} />
                            </Item>

                        </CardItem>
                        <CardItem>
                            <Item rounded style={styles.cardHeaderContent}>
                                <Input
                                    placeholder='Gender'
                                    name='gender'
                                    value={this.state.gender}
                                    onChangeText={e => this.setState({ gender: e })} />
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
                                <Text> Log In </Text>
                            </Button>

                        </CardItem>
                    </Card>

                }



            </Container>
        )
    }

}


const styles = StyleSheet.create({
    viewContent: {
        backgroundColor: '#A7BFE8',
        justifyContent: 'flex-start',
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

