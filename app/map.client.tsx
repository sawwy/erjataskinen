import { useQuery } from '@apollo/client';
import type { LatLngTuple } from 'leaflet';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { GET_ALL_TRAFFIC_ANNOUCNEMENTS } from './graphql/queries';

export function Map({ height }: { height: string }) {
  const position: LatLngTuple = [68.65971145976921, 27.538934662466406];

  const { loading, error, data } = useQuery(GET_ALL_TRAFFIC_ANNOUCNEMENTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  console.log('data', data);

  return (
    <div style={{ height }}>
      <MapContainer
        style={{
          height: '100%',
        }}
        center={position}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
