import React from 'react'
import { Link } from 'react-router-dom'
import {FiPlus} from 'react-icons/fi'
import {Map, TileLayer} from 'react-leaflet' 

import mapMarkerImg from '../images/map-marker.svg'

import '../styles/pages/orphanages-map.css'

import 'leaflet/dist/leaflet.css'

function OrphanagesMap() { 
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>muitas criancas estao esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>
                        Padre Marcos
                    </strong>
                    <span>Piaui</span>
                </footer>
            </aside>

            <Map
                center={[-7.3531767,-40.9081821]}
                zoom={16}
                style={{
                    width: '100%',
                    height: '100%'
                }}
            >
                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/navigation-guidance-day-v4/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/>
            </Map> 

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#fff"/>
            </Link>
        </div>
    )
}

export default OrphanagesMap