import VRViz from "vr-viz";
import "aframe";
import "aframe-extras";

function App() {
  return (
    <a-scene
      networked-scene="
    app: myApp;
    room: room1;
    debug: true;"
    >
      <a-entity id="rig" movement-controls position="25 0 25">
        <a-entity
          camera
          position="0 40 0"
          look-controls="pointerLockEnabled: true"
        ></a-entity>
      </a-entity>
         
      <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
      <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
      <a-cylinder
        position="1 0.75 -3"
        radius="0.5"
        height="1.5"
        color="#FFC65D"
      ></a-cylinder>
      <a-plane
        position="0 0 -4"
        rotation="-90 0 0"
        width="4"
        height="4"
        color="#7BC8A4"
      ></a-plane>
      <a-grid></a-grid>

      {/* <a-sky color="#a9a9a9"></a-sky> */}
      <VRViz
        graph={[
          {
            type: "TimeSeries",
            data: {
              dataFile: "covid_impact_on_airport_traffic.csv",
              fileType: "csv",
              fieldDesc: [
                [["Date", "date", "YYYY-MM-DD"]],
                [["PercentOfBaseline", "number"]],
                // [["ActualElapsedTime", "number"]],
                // [["LateAircraftDelay", "number"]],
              ],
            },
            style: {
              origin: [0, 0, 0],
              dimensions: {
                width: 20,
                height: 100,
                depth: 10,
              },
            },
            mark: {
              position: {
                x: {
                  scaleType: "ordinal",
                  field: "Date",
                },
                y: {
                  field: "PercentOfBaseline",
                },
                z: {
                  field: "PercentOfBaseline",
                },
              },
              style: {
                fill: {
                  color: "red",
                  opacity: 0.4,
                },
                stroke: {
                  width: 1,
                  color: "black",
                },
              },
            },
            axis: {
              "x-axis": {
                orient: "back-bottom",
                ticks: {
                  noOfTicks: 10,
                  size: 0.01,
                  color: "white",
                  opacity: 0.7,
                  fontSize: 3,
                },
                grid: {
                  color: "white",
                  opacity: 0.7,
                },
              },
              "y-axis": {
                orient: "back-left",
                ticks: {
                  noOfTicks: 100,
                  size: 1,
                  color: "white",
                  opacity: 0.7,
                  fontSize: 10,
                },
                grid: {
                  color: "white",
                  opacity: 0.7,
                },
              },
              "z-axis": {
                orient: "bottom-left",
                ticks: {
                  noOfTicks: 10,
                  size: 0.01,
                  color: "white",
                  opacity: 0.7,
                  fontSize: 3,
                },
                grid: {
                  color: "white",
                  opacity: 0.7,
                },
              },
            },
          },
        ]}
      />
    </a-scene>
  );
}

export default App;
