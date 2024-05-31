//Map's styling
const defaultMapContainerStyle = {
    width: '100%',
    height: '325px',
    borderRadius: '15px 0px 0px 15px',
};

//Default zoom level, can be adjusted
const defaultMapZoom = 18

//Map options
const defaultMapOptions = {
    zoomControl: true,
    tilt: 0,
    gestureHandling: 'auto',
    mapTypeId: 'satellite',
};

export {defaultMapContainerStyle, defaultMapZoom, defaultMapOptions};