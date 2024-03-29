import React, { Component } from 'react';
import { View, Text, TextInput, Button, TouchableHighlight, ImageBackground, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { modificaEmail, modificaSenha, autenticarUsuario } from '../actions/AutenticacaoActions'

class formLogin extends Component {
    //console.log(modificaEmail());

    //função autentica usuario pega as props email e senha e enviar para a função autenticarUsuario
    _autenticarUsuario() {
        const { email, senha } = this.props;

        this.props.autenticarUsuario({ email, senha })
    }

    renderBtnAcessar() {
        if (this.props.loading_login) {
            return (
                <ActivityIndicator size="large" />
            )
        }
        return (
            <Button title="Acessar"
                color='#115E54'
                onPress={() => this._autenticarUsuario()} />
        )
    }

    render() {
        return (
            <ImageBackground style={{ flex: 1, width: null }} source={require('../img/background.jpg')}>
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 25, color: '#fff' }}>WhatsApp Clone</Text>
                    </View>

                    <View style={{ flex: 2 }}>
                        <TextInput onChangeText={texto => this.props.modificaEmail(texto)}
                            value={this.props.email}
                            style={{ fontSize: 20, height: 45, borderBottomWidth: 1, borderBottomColor: '#115E54' }}
                            placeholderTextColor="#fff"
                            placeholder='E-mail' />

                        <TextInput secureTextEntry onChangeText={texto => this.props.modificaSenha(texto)}
                            value={this.props.senha}
                            style={{ fontSize: 20, height: 45, borderBottomWidth: 1, borderBottomColor: '#115E54' }}
                            placeholderTextColor="#fff"
                            placeholder='Senha' />

                        <Text style={{ color: '#ff0000', fontSize: 18 }}>{this.props.erroLogin}</Text>

                        <TouchableHighlight onPress={() => Actions.formCadastro()}><Text style={{ fontSize: 20, color: '#3b99fc' }}>Ainda não tem cadastro? Cadastre-se</Text>
                        </TouchableHighlight>
                    </View>

                    <View style={{ flex: 2 }}>
                        {this.renderBtnAcessar()}
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const mapStateToProps = state => (
    {
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroLogin: state.AutenticacaoReducer.erroLogin,
        loading_login: state.AutenticacaoReducer.loading_login
    }
)

export default connect(mapStateToProps, { modificaEmail, modificaSenha, autenticarUsuario })(formLogin);