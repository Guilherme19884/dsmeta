import icon from '../../assets/img/notification-icon.svg'
import NotificationButton from '../NotificationButton'

import  './style.css'

function SalesCard() {
    return (
        <div className="dsmeta-card">
            <h2 className="sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control" type="text" />
                </div>
                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control" type="text" />
                </div>
            </div>
            <table className="dsmeta-sales-table">
                <thead>
                    <tr>
                        <th className="s992">ID</th>
                        <th className="s576">Data</th>
                        <th>Vendedor</th>
                        <th className="s992">Visitas</th>
                        <th className="s992">Vendas</th>
                        <th>Total</th>
                        <th>Notificar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="s992">#341</th>
                        <th className="s576">08/07/2022</th>
                        <th>Anakin</th>
                        <th className="s992">15</th>
                        <th className="s992">11</th>
                        <th>R$ 55300.00</th>
                        <th>
                            <div className="dsmeta-red-btn-container">
                                <NotificationButton/>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th className="s992">#341</th>
                        <th className="s576">08/07/2022</th>
                        <th>Anakin</th>
                        <th className="s992">15</th>
                        <th className="s992">11</th>
                        <th>R$ 55300.00</th>
                        
                            <div className="dsmeta-red-btn-container">
                                <NotificationButton/>
                            </div>
                    </tr>
                    <tr>
                        <th className="s992">#341</th>
                        <th className="s576">08/07/2022</th>
                        <th>Anakin</th>
                        <th className="s992">15</th>
                        <th className="s992">11</th>
                        <th>R$ 55300.00</th>
                        
                            <div className="dsmeta-red-btn-container">
                                <NotificationButton/>
                            </div>
                    </tr>
                </tbody>
            </table>
           
        </div>
    )
}

export default SalesCard
