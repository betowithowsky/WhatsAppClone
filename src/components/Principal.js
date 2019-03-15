import React, { Component } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import Conversas from './Conversas';
import Contatos from './Contatos';
import TabBarMenu from './TabBarMenu';

/* const ConversasTab = () => (
    <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
);
const ContatosTab = () => (
    <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
); */

export default class Principal extends Component {
    state = {
        index: 0,
        routes: [
            { key: 'first', title: 'Conversas' },
            { key: 'second', title: 'Contatos' },
        ],
    };

    _renderHeader = props => <TabBarMenu {...props} />;

    render() {
        return (
            <TabView
                renderTabBar={this._renderHeader}
                navigationState={this.state}
                renderScene={SceneMap({
                    first: Conversas,
                    second: Contatos,
                })}
                onIndexChange={index => this.setState({ index })}
                initialLayout={{ width: Dimensions.get('window').width }}
            />
        );
    }
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});