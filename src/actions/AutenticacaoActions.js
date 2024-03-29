import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import b64 from 'base-64';
import {
    MODIFICA_EMAIL,
    MODIFICA_SENHA,
    MODIFICA_NOME,
    CADASTRO_USUARIO_SUCESSO,
    CADASTRO_USUARIO_ERRO,
    LOGIN_USUARIO_SUCESSO,
    LOGIN_USUARIO_ERRO,
    LOGIN_EM_ANDAMENTO,
    CADASTRO_EM_ANDAMENTO
} from '../actions/types';


export const modificaEmail = (texto) => {
    console.log(texto);
    return {
        type: MODIFICA_EMAIL,
        payload: texto
    }
}

export const modificaSenha = (texto) => {
    console.log(texto);
    return {
        type: MODIFICA_SENHA,
        payload: texto
    }
}

export const modificaNome = (texto) => {
    console.log(texto);
    return {
        type: MODIFICA_NOME,
        payload: texto
    }
}

export const cadastraUsuario = ({ nome, email, senha }) => {

    return dispatch => {

        dispatch({ type: CADASTRO_EM_ANDAMENTO });

        firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(user => {
                let emailB64 = b64.encode(email);

                firebase.database().ref(`/contatos/${emailB64}`)
                    .push({ nome })
                    .then(value => cadastraUsuarioSucesso(dispatch))

            })
            .catch(erro => cadastraUsuarioErro(erro, dispatch));

    }

}

const cadastraUsuarioSucesso = (dispatch) => {
    dispatch(
        { type: CADASTRO_USUARIO_SUCESSO }

    );
    Actions.boasVindas();
}

const cadastraUsuarioErro = (erro, dispatch) => {
    dispatch(
        { type: CADASTRO_USUARIO_ERRO, payload: erro.message }
    );
}

export const autenticarUsuario = ({ email, senha }) => {
    //console.log(email);
    //console.log(senha);

    //função de autenticação de usuario assíncrona com reduxThunk que acessa o banco de dados firebase e me retorna uma função em caso de sucesso ou erro
    return dispatch => {

        dispatch({ type: LOGIN_EM_ANDAMENTO });

        firebase.auth().signInWithEmailAndPassword(email, senha)
            .then(value => loginUsuarioSucesso(dispatch))
            .catch(erro => loginUsuarioErro(erro, dispatch));
    }
}

const loginUsuarioSucesso = (dispatch) => {
    dispatch(
        {
            type: LOGIN_USUARIO_SUCESSO
        }
    );

    Actions.principal();
}

const loginUsuarioErro = (erro, dispatch) => {
    dispatch(
        {
            type: LOGIN_USUARIO_ERRO,
            payload: erro.message
        }
    );
}