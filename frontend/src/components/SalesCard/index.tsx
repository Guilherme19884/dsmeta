import axios from "axios"
import { useEffect, useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

import icon from '../../assets/img/notification-icon.svg'
import NotificationButton from '../NotificationButton'

import './style.css'

function SalesCard() {

    const min = new Date(new Date().setDate(new Date().getDate() - 365))
    const max = new Date()

    const [minDate, setMinDate] = useState(min)
    const [maxDate, setMaxDate] = useState(max)

    useEffect(() => {
        axios.get("https://localhost:8080/sales")
            .then(response => {
                console.log(response.data)
            })
    }, [])

    return (
        <div className="dsmeta-card">
            <h2 className="sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={minDate}
                        onChange={(date: Date) => setMinDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={maxDate}
                        onChange={(date: Date) => setMaxDate(date)}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>
            <table className="dsmeta-sales-table">
                <thead>
                    <tr>
                        <td className="s992">ID</td>
                        <td className="s576">Data</td>
                        <td>Vendedor</td>
                        <td className="s992">Visitas</td>
                        <td className="s992">Vendas</td>
                        <td>Total</td>
                        <td>Notificar</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="s992">#341</td>
                        <td className="s576">08/07/2022</td>
                        <td>Anakin</td>
                        <td className="s992">15</td>
                        <td className="s992">11</td>
                        <td>R$ 55300.00</td>
                        <tr>
                            <div className="dsmeta-red-btn-container">
                                <NotificationButton />
                            </div>
                        </tr>
                    </tr>
                    <tr>
                        <td className="s992">#341</td>
                        <td className="s576">08/07/2022</td>
                        <td>Anakin</td>

                        <td className="s992">15</td>
                        <td className="s992">11</td>
                        <td>R$ 55300.00</td>

                        <tr>
                            <div className="dsmeta-red-btn-container">
                                <NotificationButton />
                            </div>
                        </tr>
                    </tr>
                    <tr>
                        <td className="s992">#341</td>
                        <td className="s576">08/07/2022</td>
                        <td>Anakin</td>
                        <td className="s992">15</td>
                        <td className="s992">11</td>
                        <td>R$ 55300.00</td>

                        <tr>
                            <div className="dsmeta-red-btn-container">
                                <NotificationButton />
                            </div>
                        </tr>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default SalesCard
