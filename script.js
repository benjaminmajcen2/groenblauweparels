mapboxgl.accessToken = 'pk.eyJ1IjoiYmVuY2hzcG90dGVycyIsImEiOiJjbGJrdnAycXQwMW1rM25waXF1dHQ4djRhIn0.k00FDSeJrdDFoV_tMw7tLQ';
    const map = new mapboxgl.Map({
        container: 'map',
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/benchspotters/clfb49goi00dd01mx4fxguzss',
        center: [4.144318,51.015828],
        zoom: 7
    });

    map.on('load', () => {
        map.addSource('places', {
            'type': 'geojson',
            'data': {
                'type': 'FeatureCollection',
                'features': [
                    {'type': 'Feature','properties': {'description':'<strong>BLES Buiten Leren en Spelen: GVB Centrumschool - Kuurne</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [3.280713, 50.85129]}},
{'type': 'Feature','properties': {'description':'<strong>BLES Buiten Leren en Spelen: De Sprankel - Mechelen</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [4.506520, 51.03248]}},
{'type': 'Feature','properties': {'description':'<strong>BLES Buiten Leren en Spelen: VBS Markevallei - Herne</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [4.071062, 50.71530]}},
{'type': 'Feature','properties': {'description':'<strong>BLES Buiten Leren en Spelen: Sint-Michielsschool - Merelbeke</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [3.758756, 51.01077]}},
{'type': 'Feature','properties': {'description':'<strong>BLES Buiten Leren en Spelen: Atheneum Brasschaat - Antwerpen</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [4.494123, 51.29399]}},
{'type': 'Feature','properties': {'description':'<strong>Groenblauwe parels in de Zennevallei: Malleboot - Beersel</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [4.309473, 50.76672]}},
{'type': 'Feature','properties': {'description':'<strong>Groenblauwe parels in de Zennevallei: Ontharding publiek domein: straten en woonwijk Gravenhof - Beersel</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [4.292186, 50.73418]}},
{'type': 'Feature','properties': {'description':'<strong>Groenblauwe parels in de Zennevallei: Jan Ruusbroecschool - Sint-Pieters-Leeuw </strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [4.296281, 50.78613]}},
{'type': 'Feature','properties': {'description':'<strong>GMF Groenblauwe parels voor Ekkergem: Balans</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [3.705993, 51.05218]}},
{'type': 'Feature','properties': {'description':'<strong>GMF Groenblauwe parels voor Ekkergem: Coupure</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [3.708097, 51.05339]}},
{'type': 'Feature','properties': {'description':'<strong>GMF Groenblauwe parels voor Ekkergem: Dunant</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [3.703763, 51.04887]}},
{'type': 'Feature','properties': {'description':'<strong>GMF Groenblauwe parels voor Ekkergem: Corridors</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [3.707518, 51.05431]}},
{'type': 'Feature','properties': {'description':'<strong>Banneux klimaatrobuust!: KC Mozaïek – vergroenen speelplaats </strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [5.346403, 50.94742]}},
{'type': 'Feature','properties': {'description':'<strong>Banneux klimaatrobuust!: Kindsheid Jesu – vergroenen speelplaats </strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [5.345769, 50.95163]}},
{'type': 'Feature','properties': {'description':'<strong>Banneux klimaatrobuust!: vzw KIDS – vergroenen speelplaats </strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [5.371090, 50.95050]}},
{'type': 'Feature','properties': {'description':'<strong>Banneux klimaatrobuust!: Corda Campus – verbinding naar Banneuxwijk </strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [5.353599, 50.95109]}},
{'type': 'Feature','properties': {'description':'<strong>Banneux klimaatrobuust!: openbaar domein Banneuxwijk </strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [5.356695, 50.94685]}},
{'type': 'Feature','properties': {'description':'<strong>Banneux klimaatrobuust!: private tuinen Banneuxwijk </strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [5.351771, 50.94699]}},
{'type': 'Feature','properties': {'description':'<strong>Groenblauwe doorsteken: Trapstraat & parkkop - Duffel</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [4.511806, 51.09102]}},
{'type': 'Feature','properties': {'description':'<strong>Groenblauwe doorsteken: Graanweg - Heist-op-den-berg</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [4.789091, 51.10500]}},
{'type': 'Feature','properties': {'description':'<strong>Groenblauwe doorsteken: Toegangspoort UPC - Duffel</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [4.493874, 51.09315]}},
{'type': 'Feature','properties': {'description':'<strong>Vergroening en ontharding in het Waasland: Ik zit in t groen en hou van - Temse</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [4.215437, 51.12941]}},
{'type': 'Feature','properties': {'description':'<strong>Vergroening en ontharding in het Waasland: Ik wandel in t groen en ik hou van (groene ontsluiting Residentie Elisabeth) - Temse</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [4.214583, 51.12831]}},
{'type': 'Feature','properties': {'description':'<strong>Vergroening en ontharding in het Waasland: Ontharding Idsteinlaan - Zwijndrecht</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [4.343052, 51.20496]}},
{'type': 'Feature','properties': {'description':'<strong>Onthardingsprojecten Lubbeek: Linden Centrum</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [4.767485, 50.89556]}},
{'type': 'Feature','properties': {'description':'<strong>Onthardingsprojecten Lubbeek: Davidssquare</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [4.771275, 50.90387]}},
{'type': 'Feature','properties': {'description':'<strong>Onthardingsprojecten Lubbeek: Jeugdsquare</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [4.782360, 50.90577]}},
{'type': 'Feature','properties': {'description':'<strong>Groenblauwe parels Maldegem: Kleit Parelt</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [3.450570, 51.18056]}},
{'type': 'Feature','properties': {'description':'<strong>Groenblauwe parels Maldegem: Donk Parelt</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [3.384711, 51.21336]}},
{'type': 'Feature','properties': {'description':'<strong>Groenblauwe parels Maldegem: Parelen voor school en buurt</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [3.453600, 51.20879]}},
{'type': 'Feature','properties': {'description':'<strong>Heuvel, flank, vallei - spelen hoort erbij!: De Wijnpers</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [4.689759, 50.88706]}},
{'type': 'Feature','properties': {'description':'<strong>Heuvel, flank, vallei - spelen hoort erbij!: Heilig Hart Instituut</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [4.699782, 50.85644]}},
{'type': 'Feature','properties': {'description':'<strong>Heuvel, flank, vallei - spelen hoort erbij!: Redingenhof</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [4.693657, 50.87306]}},
{'type': 'Feature','properties': {'description':'<strong>Ontharding in de groene rand rond Leuven: Sint-Kamillus: grijs kerkhof wordt groene rustzone - Bierbeek</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [4.751155, 50.85193]}},
{'type': 'Feature','properties': {'description':'<strong>Ontharding in de groene rand rond Leuven: Basisschool Heilig Hart Oud-Heverlee: ontharding en vergroening speelplaats - Oud-Heverlee</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [4.665635, 50.83627]}},
{'type': 'Feature','properties': {'description':'<strong>Ontharding in de groene rand rond Leuven: GO! De Nova: ontharding en vergroening speelplaatsen basis en middelbaar - Kessel-lo</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [4.737340, 50.88400]}},
{'type': 'Feature','properties': {'description':'<strong>Ontharding in de groene rand rond Leuven: Voetbalclub Stormvogels Haasrode: parking wordt groene publieke ruimte - Oud-Heverlee</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [4.723132, 50.81870]}},
{'type': 'Feature','properties': {'description':'<strong>Ontharding in de groene rand rond Leuven: Zoet Water: groenblauwe herinrichting recreatiesite - Oud-Heverlee</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [4.656954, 50.82324]}},
{'type': 'Feature','properties': {'description':'<strong>Ontharding in de groene rand rond Leuven: Kleuterschool De Kraal Centrum: ontharding en vergroeining speelplaats - Herent</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [4.670806, 50.90694]}},
{'type': 'Feature','properties': {'description':'<strong>Op avontuur in groenblauwe schoolnatuur: Zevensprong - Dessel </strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [5.118352, 51.23785]}},
{'type': 'Feature','properties': {'description':'<strong>Op avontuur in groenblauwe schoolnatuur: Klimboom - Balen</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [5.164233, 51.17337]}},
{'type': 'Feature','properties': {'description':'<strong>Op avontuur in groenblauwe schoolnatuur: Curieuzeneuzen - Balen</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [5.164927, 51.17247]}},
{'type': 'Feature','properties': {'description':'<strong>3 Groenblauwe Parels Sint-Niklaas: Dit plein is klimaatrobust</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [4.141995, 51.16500]}},
{'type': 'Feature','properties': {'description':'<strong>4 Groenblauwe Parels Sint-Niklaas: Deze school is klimaatrobust</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [4.150058, 51.15809]}},
{'type': 'Feature','properties': {'description':'<strong>5 Groenblauwe Parels Sint-Niklaas: Deze sportclub is klimaatrobust</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [4.151458, 51.16788]}},
{'type': 'Feature','properties': {'description':'<strong>Na(b/t)uurschap: Binnengebied Ernest Staesstraat - Edegem</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [4.439110, 51.16913]}},
{'type': 'Feature','properties': {'description':'<strong>Na(b/t)uurschap: Egelsvennen - Mol</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [5.109735, 51.20182]}},
{'type': 'Feature','properties': {'description':'<strong>Na(b/t)uurschap: Vorstsebaan - Laakdal </strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [4.987710, 51.07111]}},
{'type': 'Feature','properties': {'description':'<strong>Klimaatspeelplaatsen: Kleuterschool</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [3.228648, 50.77824]}},
{'type': 'Feature','properties': {'description':'<strong>Klimaatspeelplaatsen: Lagere school</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [3.227871, 50.77854]}},
{'type': 'Feature','properties': {'description':'<strong>Klimaatspeelplaatsen: Wijkschool</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [3.224019, 50.76928]}},
{'type': 'Feature','properties': {'description':'<strong>Klimaatspeelplaatsen: kloostertuin</strong><p>Omschrijving</p>'},'geometry': {'type': 'Point','coordinates': [3.226924, 50.77831]}}

                ]
            }
        });
        // Add a layer showing the places.
        map.addLayer({
            'id': 'places',
            'type': 'circle',
            'source': 'places',
            'paint': {
                'circle-opacity': 0,
                'circle-stroke-width': 0,
                'circle-stroke-color': '#4f3d5a'
            }
        });

        // Create a popup, but don't add it to the map yet.
        const popup = new mapboxgl.Popup({
            closeButton: true,
            closeOnClick: true
        });

        map.on('click', 'places', (e) => {
            // Change the cursor style as a UI indicator.
            map.getCanvas().style.cursor = 'pointer';

            // Copy coordinates array.
            const coordinates = e.features[0].geometry.coordinates.slice();
            const description = e.features[0].properties.description;

            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            // Populate the popup and set its coordinates
            // based on the feature found.
            popup.setLngLat(coordinates).setHTML(description).addTo(map);
        });

    });

// Center the map on the coordinates of any clicked circle from the 'circle' layer.
map.on('click', 'places', (e) => {
map.flyTo({
center: e.features[0].geometry.coordinates, zoom:15
});
});

map.addControl(new mapboxgl.FullscreenControl());

map.addControl(new mapboxgl.NavigationControl());