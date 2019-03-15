import React, { Component } from 'react';
import { View, Text, TextInput, Button, ImageBackground, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { modificaNome, modificaEmail, modificaSenha, cadastraUsuario } from '../actions/AutenticacaoActions'

class formCadastro extends Component {

    _cadastraUsuario() {

        const { nome, email, senha } = this.props;

        this.props.cadastraUsuario({ nome, email, senha });
    }

    renderBtnCadastro() {
        if (this.props.loading_cadastro) {
            return (
                <ActivityIndicator size="large" />
            )
        }
        return (
            <Button title="Cadastrar"
                color='#115E54'
                onPress={() => this._cadastraUsuario()} />
        )
    }

    render() {
        return (
            <ImageBackground style={{ flex: 1, width: null }} source={require('../img/background.jpg')}>
                <View style={{ flex: 1, padding: 10 }}>

                    <View style={{ flex: 4, justifyContent: 'center' }}>
                        <TextInput onChangeText={texto => this.props.modificaNome(texto)}
                            value={this.props.nome}
                            style={{ fontSize: 20, height: 45, borderBottomWidth: 1, borderBottomColor: '#115E54' }}
                            placeholder='Nome' />

                        <TextInput onChangeText={texto => this.props.modificaEmail(texto)}
                            value={this.props.email}
                            style={{ fontSize: 20, height: 45, borderBottomWidth: 1, borderBottomColor: '#115E54' }}
                            placeholder='E-mail' />

                        <TextInput secureTextEntry onChangeText={texto => this.props.modificaSenha(texto)}
                            value={this.props.senha}
                            style={{ fontSize: 20, height: 45, borderBottomWidth: 1, borderBottomColor: '#115E54' }}
                            placeholder='Senha' />

                        <Text style={{ color: '#ff0000', fontSize: 20 }}>{this.props.erroCadastro}</Text>

                    </View>
                        
                    <View style={{ flex: 1 }}>
                         {this.renderBtnCadastro()}
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

const mapStateToProps = state => (
    {
        nome: state.AutenticacaoReducer.nome,
        email: state.AutenticacaoReducer.email,
        senha: state.AutenticacaoReducer.senha,
        erroCadastro: state.AutenticacaoReducer.erroCadastro,
        loading_cadastro: state.AutenticacaoReducer.loading_cadastro
    }
)

export default connect(mapStateToProps, { modificaNome, modificaEmail, modificaSenha, cadastraUsuario })(formCadastro);