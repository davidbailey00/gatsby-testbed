exports.onRouteUpdate = ({ location }) => {
  console.log("onRouteUpdate", location.pathname)
}

exports.onPreRouteUpdate = ({ location }) => {
  console.log("onPreRouteUpdate", location.pathname)
}

exports.onServiceWorkerUpdateReady = () => {
  console.log(`onServiceWorkerUpdateReady`)
}
