import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { Legend } from "../components/Legend"; 

import { useSelector } from 'react-redux'
import { initializeFirestore, collection, query, onSnapshot } from "firebase/firestore"
import { app } from "../firebase/config"
import { useDispatch } from "react-redux"
import { reducerSetSearch } from '../../redux/searchSlice';

export function Report(props) {
    
    const searchId = useSelector((state) => state.search.id)
    
    const db = initializeFirestore(app, {experimentalForceLongPolling: true})
    const answerCollection = collection(db, "answer")
    const [answerList, setAnserList] = useState()
    const [excelent, setExcelent] = useState(0)
    const [good, setGood] = useState(0)
    const [acceptable, setAcceptable] = useState(0)
    const [bad, setBad] = useState(0)
    const [terrible, setTerrible] =useState(0)

    useEffect(() => {
        const q = query(answerCollection)
        const unsubscribe = onSnapshot(q,(snapShot) => {
            const answer = []
            snapShot.forEach((doc) => {
                if(doc.data().searchID == searchId) {
                    answer.push({
                        id: doc.id,
                        ...doc.data()
                    })
                    switch(doc.data().answer){
                        case 1:
                            setTerrible(terrible + 1)
                            break;
                        case 2:
                            setBad(bad + 1)
                            break;
                        case 3:
                            setAcceptable(acceptable + 1)
                            break;
                        case 4:
                            setGood(good + 1)
                            break;
                        case 5:
                            setExcelent(excelent + 1)
                            break;
                        default:
                            console.warn("Existe alguma resposta com valor errado")
                    }
                }
            })
            setAnserList(answer)
        })

    },[])
    

    console.log(answerList)


    const data = [
        { name: "Excelente", percent: excelent, color: "#F1CE7E" },
        { name: "Bom", percent: good, color: "#6994FE" },
        { name: "Neutro", percent: acceptable, color: "#5FCDA4" },
        { name: "Ruim", percent: bad, color: "#EA7288" },
        { name: "Pessimo", percent: terrible, color: "#53D8D8" }
    ];
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
