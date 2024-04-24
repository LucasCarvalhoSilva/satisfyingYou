import { Card, Title } from "react-native-paper";
import { StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

export function SearchActionCard(props) {
    return (
        <Card style={estilo.card} onPress={props.action}>
            <Card.Content style={estilo.cardContent}>
                <Icon name={props.iconName} size={100} color="#FFFFFF" />
                <Title style={estilo.cardTitle}>{props.title}</Title>
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
        backgroundColor: '#312464',
        borderRadius:10
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
        color: '#FFFFFF',
    },
})