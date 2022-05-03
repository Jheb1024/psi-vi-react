import React, { useState, useCallback, useRef } from 'react';
import { collection, getFirestore, query, doc, onSnapshot, getDocs, where, getDoc, firestore } from 'firebase/firestore';
import { app } from '../../auth/firebase-config';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from "date-fns/format";
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'moment/locale/es'
import { Container, Row, Col, Stack, Button } from 'react-bootstrap';

const locales = {
    "en-US": require("date-fns/locale/en-US"),

}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})

const events = [
    {
        title: "Reunion x",
        allDay: true,
        start: new Date(2022, 3, 12),
        end: new Date(2022, 3, 12)
    },
    {
        title: "Reunion y",
        allDay: true,
        start: new Date(2022, 4, 1),
        end: new Date(2022, 4, 1)
    },
    {
        title: "Reunion z",
        start: new Date(2022, 4, 0),
        end: new Date(2022, 4, 0)
    }
]

function Schedule({ ID }) {
    const [evento, setEvento] = useState(null);

    const onSelectEvent = useCallback((calEvent) => {
        if (calEvent) {
            console.log(calEvent.title)
            setEvento(calEvent);
        }


    }, [])


    const db = getFirestore(app);
    const [citas, setCitas] = useState([]);

    const [citarray, setCitarray] = useState([]);
    const array = [];
    async function getAppointments() {

        const subColRef = collection(db, "Citas", ID.uid, "citas");


        const qSnap = await getDocs(subColRef)

        console.log(qSnap.docs.map(d => (
            d.data().title
        )))

        if (citas.length === 0) {
            setCitas(qSnap.docs.map(d => (
                {
                    title: d.data().title,
                    //start: new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(d.data().start),
                    start: new Date(d.data().start),//moment(d.data().start).format('MMMM Do YYYY, h:mm:ss a'), //new Date(2022,3,12),
                    end: new Date(d.data().end),//moment(d.data().end).format('MMMM Do YYYY, h:mm:ss a'),


                    //id: d.id, ...d.data()
                }
            )))

        }


        console.log("Citas")
        citas?.map((cita) => {
            console.log(cita.title)
            console.log(cita.start)
            array.push({
                title: cita.title
            })
        })


        // console.log(citarray)
    }

    getAppointments();



    //console.log("Events:", ...events);
    return (
        <div>Agenda
            {/*citas?.map(cita=>{
            return(
            <div>
                {cita.title}
                {cita.start}
            </div>)
        })*/}
            <Container>
                <Row>
                    <Col xs={10}>
                        <Calendar localizer={localizer}
                            events={citas}
                            startAccessor='start'
                            endAccessor='end'
                            onSelectEvent={onSelectEvent}
                            style={{ height: 500, margin: '50px' }}
                        ></Calendar>
                    </Col>
                    <Col>
                        <h4 className='text-center'>Informacion de cita</h4>
                        <div className="div">
                            <Stack gap={3}>
                                <div className="bg-light border">Evento</div>
                                <div className="bg-light">{evento?.title}</div>
                                <div className="bg-light border">Hora</div>
                                <div className="bg-light">{moment(evento?.start).format('MMMM Do YYYY, h:mm:ss a')}</div>
                                <Button variant="secondary" onClick={() => {
                                    window.location.href = "https://us04web.zoom.us/j/9511441088?pwd=c0lpY1BVWWl5dXFZcUl1SzVHdEhLUT09";
                                }}>Iniciar Sesión</Button>

                            </Stack>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Schedule