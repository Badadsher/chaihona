import React from "react";
import "./css/mapbar.css";
import rest from "../assets/restarauntimg/logos/restall.png";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

const mapState = { center: [55.76, 37.64], zoom: 10 };
const MapBar: React.FC = () => {
  return (
    <div className="mapbar" id="map">
      <div className="mapbar-content">
        <img src={rest}></img>
      </div>

      <div className="mapbar-content_view">
        <a>НАШЕ РАСПОЛОЖЕНИЕ</a>
        <YMaps>
          <Map state={mapState} className="mapstate">
            <Placemark
              geometry={[55.609338, 37.722655]}
              properties={{
                iconContent: "ул. Генерала Белова, 18Б",
              }}
              options={{
                preset: "islands#blackStretchyIcon",
              }}
            />
            <Placemark
              geometry={[55.678943, 37.643866]}
              properties={{
                iconContent: "Нагатинская ул., 16",
              }}
              options={{
                preset: "islands#blackStretchyIcon",
              }}
            />
          </Map>
        </YMaps>
      </div>
    </div>
  );
};

export default MapBar;
