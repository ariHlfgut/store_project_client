import { Fill, Icon, Style } from "ol/style";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { Link, defaults as interactionDefaults } from "ol/interaction";
import MousePosition from "ol/control/MousePosition";
import { createStringXY } from "ol/coordinate";
import { ScaleLine, defaults as defaultControls } from "ol/control";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { fromLonLat } from "ol/proj";
import Stroke from "ol/style/Stroke";
import Control from "ol/control/Control";
import { circular } from "ol/geom/Polygon";

const osmBaseLayer = new TileLayer({
  visible: true,
  source: new OSM(),
});

const mousePositionControl = new MousePosition({
  coordinateFormat: createStringXY(4),
  projection: "EPSG:4326",
  className: "custom-mouse-position",
});

const vectorSource = new VectorSource({
  features: [],
});

export function addIcon(name: string, coordinate: number[], src: string) {
  const iconFeature = new Feature({
    geometry: new Point(coordinate),
    name,
    population: 4000,
    rainfall: 500,
  });
  const iconStyle = new Style({
    image: new Icon({
      anchor: [0.5, 46],
      anchorXUnits: "fraction",
      anchorYUnits: "pixels",
      width: 40,
      src,
    }),
  });
  iconFeature.setStyle(iconStyle);
  vectorSource.addFeature(iconFeature);
}

const vectorLayer = new VectorLayer({
  source: vectorSource,
});

const scale = new ScaleLine({
  minWidth: 50,
});
export const map = new Map({
  target: "map",
  layers: [osmBaseLayer, vectorLayer],
  view: new View({
    center: [0, 0],
    zoom: 2,
  }),
  controls: defaultControls().extend([mousePositionControl, scale]),
  interactions: interactionDefaults({}),
});
map.addInteraction(new Link());

const locate = document.createElement("div");
locate.className = "ol-control ol-unselectable locate";
locate.innerHTML = "<button title='Locate me'>◎</button>";
locate.addEventListener("click", function () {
  if (!source.isEmpty()) {
    map.getView().fit(source.getExtent(), {
      maxZoom: 18,
      duration: 500,
    });
  }
});

map.addControl(
  new Control({
    element: locate,
  })
);

const source = new VectorSource();
const accuracyFeature = new Feature();
source.addFeature(accuracyFeature);

navigator.geolocation.watchPosition(
  function (pos) {
    const coords = [pos.coords.longitude, pos.coords.latitude];
    const accuracy = circular(coords, pos.coords.accuracy);
    source.clear(true);
    source.addFeatures([
      new Feature(
        accuracy.transform("EPSG:4326", map.getView().getProjection())
      ),
      new Feature(new Point(fromLonLat(coords))),
    ]);
  },
  function (error) {
    alert(`ERROR: ${error.message}`);
  },
  {
    enableHighAccuracy: true,
  }
);

accuracyFeature.setStyle(
  new Style({
    fill: new Fill({
      color: "rgba(0, 0, 255, 0.1)",
    }),
    stroke: new Stroke({
      color: "blue",
      width: 2,
    }),
  })
);
