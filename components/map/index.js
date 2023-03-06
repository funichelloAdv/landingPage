import * as React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})

const Map = () => {
  return (
    <MapContainer
      center={[-21.224600064916675, -47.83506998713159]}
      zoom={16}
      scrollWheelZoom={false}
      style={{ height: 550, width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a  href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-21.224600064916675, -47.83506998713159]}>
        <Popup>Av. Luiz Eduardo Toledo Prado, 870. Vila do Golf.</Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
