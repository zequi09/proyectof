import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Chart from "react-google-charts";
import GaugeChart from 'react-gauge-chart'
import {NotificationManager} from 'react-notifications';
import YoutubeEmbed from './YoutubeEmbed';
import Accordion from 'react-bootstrap/Accordion'

const Home = () => {
    
    const [data,setData] = useState(null)
    const [humo1,setHumo1] = useState("")
    const [humo2,setHumo2] = useState("")
    const [humo3,setHumo3] = useState("")
    const [humo4,setHumo4] = useState("")

    const [llama1,setLlama1] = useState("")
    const [llama2,setLlama2] = useState("")
    const [llama3,setLlama3] = useState("")
    const [llama4,setLlama4] = useState("")

    const [temp1,setTemp1] = useState("")
    const [temp2,setTemp2] = useState("")
    const [temp3,setTemp3] = useState("")
    const [temp4,setTemp4] = useState("")

    const [tanque,setTanque] = useState("")
    const [post, setPost] = useState([])

    
    
    useEffect(() => {

        const refresh = setInterval( () => {
            axios.get('http://54.160.193.245:3002/data')
            .then( response => {
                console.log(response.data.data)
                setData(response.data.data)
                setHumo1(response.data.data[0])
                setHumo2(response.data.data[1])
                setHumo3(response.data.data[2])
                setHumo4(response.data.data[3])
    
                setLlama1(response.data.data[4])
                setLlama2(response.data.data[5])
                setLlama3(response.data.data[6])
                setLlama4(response.data.data[7])
    
                setTemp1(response.data.data[8])
                setTemp2(response.data.data[9])
                setTemp3(response.data.data[10])
                setTemp4(response.data.data[11])
    
                setTanque(response.data.data[12])
    
                if (response.data.data[12] < 1.2) {
                    NotificationManager.warning('Alarma de tanque', 'Su nivel de agua está bajo', 1500)
                }
                if (response.data.data[0] < 16) {
                    NotificationManager.error('Alarma de humo', 'Su nivel de humo está muy alto', 1500)
                }
                if (response.data.data[1] < 31) {
                    NotificationManager.info('Alarma de humo', 'Su nivel de humo está muy alto', 1500)
                }
            })
            .catch( error => {
                console.log(error);
            })
        }, 5000)
        return () => clearInterval(refresh)
    },[post])


    return (
        <div>
            <h1 >Aquí es el home</h1>
                <hr />
                {/* {data && data.map( data => 
                    <li>{data}</li>
                )
                } */}
                <hr />
                <div className="container" style={{backgroundColor: "#ff9e00",
                    borderRadius:"20px",
                    boxShadow: "5px 5px 5px 5px #adb5bd"
                }}>
                    <div className="row">
                        <div className="col">
                            <h1>Humo</h1>
                            <Chart
                                /* width={'500px'}
                                height={'300px'} */
                                chartType="BarChart"
                                loader={<div>Loading Chart</div>}
                                data={[
                                    ['Humo', 'Zona 1', 'Zona 2', 'Zona 3', 'Zona 4'],
                                    ['Humo', humo1, humo2, humo3, humo4],
                                ]}
                                options={{
                                    title: 'Cantidad de humo en zonas en zonas',
                                    chartArea: { width: '50%' },
                                    colors: ['#0d47a1', '#1976d2', '#2196f3', '#64b5f6'],
                                    hAxis: {
                                    title: 'Valores en ppm',
                                    minValue: 0,
                                    },
                                    vAxis: {
                                    title: 'Zonas',
                                    },
                                }}
                                // For tests
                                rootProps={{ 'data-testid': '1' }}
                            />
                        </div>

                        <div className="col">
                            <h1>Llamas</h1>
                            <Chart
                                /* width={'500px'}
                                height={'300px'} */
                                chartType="BarChart"
                                loader={<div>Loading Chart</div>}
                                data={[
                                    ['Llama', 'Zona 1', 'Zona 2', 'Zona 3', 'Zona 4'],
                                    ['Llama', llama1, llama2, llama3, llama4],
                                ]}
                                options={{
                                    title: 'Intensidad de llama en las zonas',
                                    chartArea: { width: '50%' },
                                    colors: ['#0d47a1', '#1976d2', '#2196f3', '#64b5f6'],
                                    hAxis: {
                                    title: 'Valores en XXXX',
                                    minValue: 0,
                                    },
                                    vAxis: {
                                    title: 'Zonas',
                                    },
                                }}
                                // For tests
                                rootProps={{ 'data-testid': '1' }}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                                <h1>Temperatura</h1>
                                <Chart
                                    /* width={'500px'}
                                    height={'300px'} */
                                    chartType="BarChart"
                                    loader={<div>Loading Chart</div>}
                                    data={[
                                        ['Temperatura', 'Zona 1', 'Zona 2', 'Zona 3', 'Zona 4'],
                                        ['Temperatura', temp1, temp2, temp3, temp4],
                                    ]}
                                    options={{
                                        title: 'Grados centígrados',
                                        chartArea: { width: '50%' },
                                        colors: ['#0d47a1', '#1976d2', '#2196f3', '#64b5f6'],
                                        hAxis: {
                                        title: 'Valores en °C',
                                        minValue: 0,
                                        },
                                        vAxis: {
                                        title: 'Zonas',
                                        },
                                    }}
                                    // For tests
                                    rootProps={{ 'data-testid': '1' }}
                                />
                            </div>

                            <div className="col">
                                <h1>Nivel tanque de agua en Lts</h1>
                                <GaugeChart id="gauge-chart5"
                                    animate={false}
                                    nrOfLevels={3}
                                    arcsLength={[0.1, 0.5, 0.4]}
                                    colors={['#EA4228', '#F5CD19', '#5BE12C']}
                                    percent={tanque/3}
                                    arcPadding={0.03}
                                    />
                            </div>
                    </div>  
                </div>
                <br />
                <br />
                <Accordion
                style={{
                    borderRadius: "1rem",
                    boxShadow: "1rem 1rem 1rem 1rem #adb5bd",
                    width: "90%",
                    alignContent: "center",
                    margin:"auto"
                }}>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Accordion Item #1</Accordion.Header>
                        <Accordion.Body>
                        <YoutubeEmbed embedId="rokGy0huYEA"/>
                        </Accordion.Body>
                    </Accordion.Item>
                    <hr/>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                <br/>
                
        </div>
    )
}

export default Home


