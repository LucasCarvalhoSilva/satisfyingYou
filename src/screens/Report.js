import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { Legend } from "../components/Legend"; 

export function Report(props) {
    return (
        <View style={estilo.container}>
            <View style={estilo.chartContainer}>
                <PieChart
                    data={data}
                    width={200}
                    height={200}
                    chartConfig={{
                        backgroundColor: "#372775",
                        backgroundGradientFrom: "#372775",
                        backgroundGradientTo: "#372775",
                        decimalPlaces: 0,
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    }}
                    accessor={"percent"}
                    backgroundColor={"transparent"}
                    paddingLeft={""}
                    center={[50, 0]}
                    absolute
                    hasLegend={false}
                />
            </View>
            <View style={estilo.legendContainer}>
                {data.map(({ name, color }) => {
                    return <Legend key={name} name={name} color={color} />;
                })}
            </View>
        </View>
    );
}

const data = [
    { name: "Excelente", percent: 20, color: "#F1CE7E" },
    { name: "Bom", percent: 32, color: "#6994FE" },
    { name: "Neutro", percent: 28, color: "#5FCDA4" },
    { name: "Ruim", percent: 20, color: "#EA7288" },
    { name: "Pessimo", percent: 30, color: "#53D8D8" }
];

const estilo = StyleSheet.create({
    container: {
        backgroundColor: '#372775',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        height: '100%',
        flexDirection: 'row', // Alinhar os itens horizontalmente
    },
    chartContainer: {
        marginTop: 20
    },
    chart: {
        borderRadius: 16
    },
    legendContainer: {
        flex: 1,
        marginTop: 20,
    },
});
