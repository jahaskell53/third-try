# VR-Viz Boilerplate

This git repo provides a boilerplate for creating data visualization in VR using __[VR-Viz](https://github.com/mustafasaifee42/VR-Viz)__  package. 

__VR-Viz is react component which combines React.js, D3.js and A-frame to create data visualization in VR.__

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

To see the full documentation regarding that, go [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md). The salient points are reproduced below, along with important custom setup documentation.

## Installation using NPM
This project uses `npm`. Install it as described here [https://docs.npmjs.com/downloading-and-installing-node-js-and-npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) if you haven't already.

To install this boilerplate, simply clone the repo and run `npm install`;

e.g.

    git clone https://github.com/mustafasaifee42/vr-viz-boilerplate.git
    cd vr-viz-boilerplate
    npm install

## Local Development

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

To view this in your VR headset (if the headset is connected to the same system on which the local development is done) open a browser(prefereablly latest version of chrome, firefox or edge) in the VR environment and open [http://localhost:3000](http://localhost:3000) in it.

If the headset is connected to another system than on which the local development is done then using `ipconfig` in CLI get the IPv4 address of the system on which the development is done. Then, open a browser(prefereablly latest version of chrome, firefox or edge) in the VR environment in the headset and open `{ip-address}:3000` in it (replace ip-address with the IPv4 address got using `ipconfig`). Make sure that both the systems are connected to the same wi-fi network.

In the browser you should be able to see a barchart.

![BarGraph](./imgs/bargraph.PNG)

To enter the VR mode click the Enter VR Mode icon in the bottom right in the browser.

## Editing the Boilerplate

### Updating the data sheet

In the project directory, in public folder edit `data.csv` file with new data to plot that data in VR. You can replace this file in public folder with another `csv`, `json`, `txt`, or `ply` file which has your data.

* `csv` file can be created in excel or any other software.
* `txt` file is used for datafiles without headers with values seperated by a comma.
* `ply` is primarily used for `point cloud` visualization.

### Updating the graph

In the project directory, in src folder edit `App.js` file. Read the detail documention [here](https://github.com/mustafasaifee42/VR-Viz) how `App.js` can be edited to use a specific visualization and how these visualizations can be edited.
