fetch('overlays.json')
.then(response => response.json())
.then(data => {
const primaryOverlays = data.primary;
primaryOverlays.forEach(({url}) => {
    createStyledOverlay(url).addTo(map);
});
});

fetch('overlays.json')
.then(response => response.json())
.then(data => {
const secondaryOverlays = data.secondary;
const mapOverlayFilesToggled = data;
    const overlayLayers = {};
    const overlayToggleDiv = document.getElementById('overlay-toggle-buttons');

    secondaryOverlays.forEach(({url, label, icon, disabled}) => {
        const overlay = createStyledOverlay(url);
        overlayLayers[url] = overlay;
        
        if (!disabled) {
            const btn = document.createElement('button');
            btn.title = label;
            btn.innerHTML = `<span class="material-symbols-outlined" style="font-size: 28px;">${icon}</span>`;
            btn.style.margin = '0 4px';
            btn.style.padding = '4px 4px';
            btn.style.fontSize = '14px';
            btn.style.cursor = 'pointer';
            btn.style.border = 'none';
            btn.style.background = '#08103b';
            btn.style.color = '#08103b';
            btn.style.borderRadius = '4px';
            btn.dataset.active = 'false';
    
            btn.onclick = function() {
                if (btn.dataset.active === 'false') {
                    overlay.addTo(map);
                    btn.style.background = '#0074D9';
                    btn.style.color = '#fff';
                    btn.dataset.active = 'true';
                } else {
                    map.removeLayer(overlay);
                    btn.style.background = '#08103b';
                    btn.style.color = '#08103b';
                    btn.dataset.active = 'false';
                }
            };
    
            overlayToggleDiv.appendChild(btn); // <-- Move this inside the if block
        }
    });
});




function styleFromStyleUrl(styleUrl, featureWeight) {
const match = styleUrl?.match(/#line-([0-9A-Fa-f]{6})/);
if (match) {
    return {
    color: `#${match[1]}`,
    weight: featureWeight,
    opacity: 1
    };
} else {
    return {
    color: "#0074D9", // grey by default
    weight: featureWeight,
    opacity: 0.8
    };
}
}

function colorFromStyleUrl(styleUrl) {
const match = styleUrl?.match(/#(?:icon-\d+-)?([0-9A-Fa-f]{6})/);
return match ? `#${match[1]}` : "#CCCCCC";
}

function pointToLayer(feature, latlng) {
const styleUrl = feature.properties?.styleUrl;
const fillColor = colorFromStyleUrl(styleUrl);

// Extract the relevant style (ignoring everything after the second '-')
const relevantStyle = styleUrl?.split('-')[1]?.split('-')[0];

// Mapping of relevant styles to Material Symbols icon names
const iconMapping = {
    '1589': 'fitness_center',
    '1877': 'stairs_2',
    '1833': 'directions_walk',
    '1718': 'tram',
    '1716': 'train',
    '1703': 'water_bottle',
    '959': 'car_crash',
};

// Default to 'question_mark' if no match is found
const iconName = iconMapping[relevantStyle] || 'question_mark';

// Create a combined divIcon with both the circle and the Material Symbols icon
const combinedIconHtml = `
    <div style="position: relative; width: 24px; height: 24px;">
    <div style="width: 22px; height: 22px; border-radius: 50%; background-color: ${fillColor}; opacity: 0.8; border: 1px solid white;"></div>
    <span class="material-symbols-outlined" style="position: absolute; top: 4px; left: 4px; font-size: 16px; color: #e6e5e1;">${iconName}</span>
    </div>
`;

const iconSizePx = 24
const combinedDivIcon = L.divIcon({
    className: 'custom-combined-icon',
    html: combinedIconHtml,
    iconSize: [iconSizePx, iconSizePx], // Adjust size as needed
    iconAnchor: [iconSizePx/2, iconSizePx/2] // Center the icon
});

// Create a marker with the combined icon
return L.marker(latlng, { icon: combinedDivIcon });
}

function createStyledOverlay(url) {
return omnivore.kml(url, null, L.geoJson(null, {
    style: function(feature) {
    const styleUrl = feature.properties?.styleUrl;

    // Determine weight based on feature type
    let featureWeight;
    if (feature.geometry?.type === 'Point') {
        featureWeight = 1;
    } else if (feature.geometry?.type === 'LineString') {
        featureWeight = 4;
    } else if (feature.geometry?.type === 'Polygon') {
        featureWeight = 0;
    }

    return styleFromStyleUrl(styleUrl, featureWeight);
    },
    pointToLayer: pointToLayer,
    onEachFeature: interactivePoints
}));
}

function interactivePoints(feature, layer) {
// Make only points interactive
if (feature.geometry?.type === 'Point') {
    if (feature.properties?.description) {
    layer.bindPopup(`
        <div style="
        position: relative;
        background: #fff;
        border-radius: 8px;
        padding: 16px 24px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.12);
        margin-bottom: 16px;
        max-width: 320px;
        ">
        <strong>${feature.properties.name}</strong>
        </div>

        <button style="
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: none;
        background: #e6e5e1;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        box-shadow: 0 2px 6px rgba(0,0,0,0.08);
        ">
        <span class="material-symbols-outlined" style="font-size: 20px; color: #444;">link</span>
        </button> 
    `);
    }
    if (feature.properties?.name) {
    layer.bindPopup(`
        <strong>${feature.properties.name}</strong>
    `)
    }
}
}
