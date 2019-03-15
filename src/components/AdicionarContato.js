import React from 'react';
import { View, TextInput, Button } from 'react-native';

export default props => (
    <View style={{ flex: 1, padding: 10, justifyContent: 'center' }} >

        <View style={{ flex: 3, padding: 10, justifyContent: 'center' }} >
            <TextInput style={{ fontSize: 20, height: 45, borderBottomWidth: 1, borderBottomColor: '#115E54' }}
                placeholder='E-mail' />
        </View>
        <View style={{ flex: 1, padding: 10 }} >
            <Button title="Adicionar" color='#115E54' />
        </View>
    </View >
);