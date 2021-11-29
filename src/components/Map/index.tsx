import maplibregl from 'maplibre-gl';
import { useEffect, useRef } from 'react';

let map: maplibregl.Map;

const Map = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!map) {
      if (!mapContainer.current) return;

      map = new maplibregl.Map({
        container: mapContainer.current,
        style: {
          version: 8,
          sources: {
            photo: {
              type: 'raster',
              tiles: ['https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg'],
              tileSize: 256,
              attribution:
                "<a href='http://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院地図</a>",
            },
          },
          layers: [
            {
              id: 'base',
              type: 'raster',
              source: 'photo',
              minzoom: 0,
              maxzoom: 22,
            },
          ],
        },
        center: [139.77, 35.67],
        zoom: 11,
        bearing: 0,
        pitch: 60,
      });
    }

    map.addControl(new maplibregl.NavigationControl());
  }, []);

  return (
    <>
      <div className="h-full" ref={mapContainer} />
    </>
  );
};

export default Map;
