import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Chart from "react-google-charts";
import GaugeChart from 'react-gauge-chart'
import {NotificationManager} from 'react-notifications';
import YoutubeEmbed from './YoutubeEmbed';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { borderRadius } from '@mui/system';


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
    const [historicalData,setHistoricalData] = useState([])
    const [incendio, setIncendio] = useState(false)

    const  historical = async () => {
        await axios.get('http://54.158.248.204:3002/historical')
        .then( response => {
            setHistoricalData(response.data.historicos)
            console.log(response.data.historicos)
        })
        .catch( (err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        

        const refresh = setInterval( () => {
            axios.get('http://54.158.248.204:3002/data')
            .then( response => {
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
                //--------------------------------------------ALARMAS DE HUMO----------------------------------------
                if(response.data.data[0]>=30){
                    NotificationManager.warning('Su nivel de humo en la zona 1 está elevado, POSIBLE INCENDIO', 'NOTIFICACION DE HUMO', 1200)
                }

                if(response.data.data[1]>=30){
                    NotificationManager.warning('Su nivel de humo en la zona 2 está elevado, POSIBLE INCENDIO', 'NOTIFICACION DE HUMO', 1200)
                }

                if(response.data.data[2]>=30){
                    NotificationManager.warning('Su nivel de humo en la zona 3 está elevado, POSIBLE INCENDIO', 'NOTIFICACION DE HUMO', 1200)
                }

                if(response.data.data[3]>=30){
                    NotificationManager.warning('Su nivel de humo en la zona 4 está elevado, POSIBLE INCENDIO', 'NOTIFICACION DE HUMO', 1200)
                }

                //--------------------------------------------ALARMAS DE INCENDIO----------------------------------------

                if(response.data.data[4]>=300 && response.data.data[8]>=40){
                    NotificationManager.warning('Incendio en ZONA 1', 'NOTIFICACION DE INCENDIO', 1200)
                }

                if(response.data.data[5]>=300 && response.data.data[9]>=40){
                    NotificationManager.warning('Incendio en ZONA 2', 'NOTIFICACION DE INCENDIO', 1200)
                }

                if(response.data.data[6]>=300 && response.data.data[10]>=40){
                    NotificationManager.warning('Incendio en ZONA 3', 'NOTIFICACION DE INCENDIO', 1200)
                }

                if(response.data.data[7]>=300 && response.data.data[11]>=40){
                    NotificationManager.warning('Incendio en ZONA 4', 'NOTIFICACION DE INCENDIO', 1200)
                }
                //--------------------------------------------ALARMAS DE TANQUE----------------------------------------

                if (response.data.data[4] >= 300 && response.data.data[8] >= 40){
                    setIncendio(true)
                } else if (response.data.data[5] >= 300 && response.data.data[9] >= 40){
                    setIncendio(true)
                } else if (response.data.data[6] >= 300 && response.data.data[10] >= 40){
                    setIncendio(true)
                } else if (response.data.data[7] >= 300 && response.data.data[11] >= 40){
                    setIncendio(true)
                }else{
                    setIncendio(false)
                }
                
               
            })
            .catch( error => {
                console.log(error);
            })
        }, 8000)
        return () => clearInterval(refresh)
    },[post])


    return (
        <div>
            <h1 >Bienvenido </h1>
                <hr />
                {/* {data && data.map( data => 
                    <li>{data}</li>
                )
                } */}
                
                <div style={{
                    justifyContent:"center",
                    borderRadius:"1rem 1rem 1rem 1rem",
                    boxShadow: "5px 5px 5px 5px #adb5bd", 
                    textAlign:"center",
                    width:"90%",
                    margin:"auto"
                    
                }}>
                <h1>Sistemas auxiliares</h1>
                <h2>Sistema eléctrico:</h2>
                {incendio ? 
                <h3 style={{color:"red"}}>OFF</h3>
                :
                <h3 style={{color:"green"}}>ON</h3>
                 }

                <h2>Sistema ventilación:</h2>
                {incendio ? 
                <h3 style={{color:"red"}}>OFF</h3>
                :
                <h3 style={{color:"green"}}>ON</h3>
                 }

                <h2>Electrovalvula:</h2>
                {incendio ? 
                <h3 style={{color:"green"}}>ON</h3>
                :
                <h3 style={{color:"red"}}>OFF</h3>
                 }

                <h2>Sirenas:</h2>
                {incendio ? 
                <h3 style={{color:"green"}}>ON</h3>
                :
                <h3 style={{color:"red"}}>OFF</h3>
                 }
                 </div>

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
                                    title: 'Valores analógicos',
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
                                    {tanque < 1.2 ? <h2 style={{color:"red"}}>Tanque con baja reserva de agua</h2> : <h2 style={{color:"rgb(63 139 36)"}}>Tanque con buena reserva de agua</h2>}
                            </div>
                    </div>  
                </div>
                <br />
                <br />

                    <Accordion allowMultipleExpanded style={{
                            borderRadius: "1rem",
                            boxShadow: "1rem 1rem 1rem 1rem #adb5bd",
                            width: "90%",
                            alignContent: "center",
                            margin:"auto",
                            fontSize:"1.6rem"
                        }}>
                        { incendio   && <AccordionItem>
                            <AccordionItemHeading style={{
                            display:"flex",
                            justifyContent:"center",
                            width:"100%"
                        }}>
                                <AccordionItemButton style={{
                                    display:"flex",
                                    justifyContent:"center",
                                    width:"100%",
                                    fontWeight:"bold"
                                }}>
                                    Transmisión en vivo
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <YoutubeEmbed embedId="rokGy0huYEA"/>
                            </AccordionItemPanel>
                        </AccordionItem> }
                        <hr/>
                        <AccordionItem>
                            <AccordionItemHeading style={{
                            display:"flex",
                            justifyContent:"center",
                            width:"100%"
                        }}>
                                <AccordionItemButton style={{
                                    display:"flex",
                                    justifyContent:"center",
                                    width:"100%",
                                    fontWeight:"bold"
                                }}>
                                    Históricos
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                            <button onClick={historical} className="btn btn-primary btn-lg btn-block">Históricos</button>
                            {/* {historicalData.map(({ID, Humo1, Humo2, Humo3, Humo4, Llama1, Llama2, Llama3, Llama4, Temp1, Temp2, Temp3, Temp4, Level}) => 
                                ({ 
                                    Humo1: Humo1, 
                                    Humo2: Humo2,
                                    Humo3: Humo3,
                                    Humo4: Humo4,
                                    Llama1: Llama1,
                                    Llama2: Llama2,
                                    Llama3: Llama3,
                                    Llama4: Llama4,
                                    Temp1: Temp1,
                                    Temp2: Temp2,
                                    Temp3: Temp3,
                                    Temp4: Temp4,
                                    Level: Level

                                })
                            )} */}
                            </AccordionItemPanel>
                        </AccordionItem>
                    </Accordion>
                <br/>
                
        </div>
    )
}

export default Home


