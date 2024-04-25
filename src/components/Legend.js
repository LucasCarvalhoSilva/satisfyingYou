import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function Legend({ name, color }) {
    return (
        <View style={styles.legendItem}>
            <View style={[styles.colorSquare, { backgroundColor: color }]} />
            <Text style={styles.legendText}>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    colorSquare: {
        width: 15,
        height: 15,
        marginRight: 5,
    },
    legendText: {
        color: '#FFFFFF',
        fontSize: 15,
    },
});
