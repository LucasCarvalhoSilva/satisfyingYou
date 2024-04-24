import { Card, Title } from "react-native-paper";
import { StyleSheet, Text } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';


export function ContentCard(props) {
    return (
        <Card style={estilo.card} onPress={props.action}>
            <Card.Content style={estilo.cardContent}>
                <Icon name={props.iconName} size={100} color={props.color} />
                <Title style={estilo.cardTitle}>{props.title}</Title>
                <Text style={estilo.cardText}>{props.text}</Text>
            </Card.Content>
        </Card>
    )
}

const estilo = StyleSheet.create({
    card: {
        display: 'flex',
        height: 200,
        width: 200,
        marginHorizontal: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardContent: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    cardTitle: {
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 24,
        marginBottom: 5,
        color: '#3F92C5',
    },
    cardText: {
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 14,
        color: '#8B8B8B',
    },
})