import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import useSwr from 'swr';

const fetcher = (...args) => { fetch(...args).then(response => response.json()) };

export default () => {

    const url = "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10";
    const { data, error } = useSwr(url, { fetcher });
    const crimes = data && !error ? data.slice(0, 100) : [];

    console.log(data);

    return (
        <Map center={[52.6376, -1.135171]} zoom={12}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />

            {crimes.map(crime => (
                <Marker
                    key={crime.id}
                    position={[crime.location.latitude, crime.location.longitude]}
                />
            ))}
        </Map>
    );

}