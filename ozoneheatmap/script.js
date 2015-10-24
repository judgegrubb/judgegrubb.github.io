var map, heatmap, year, type, data;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: {lat: 39.778359, lng: -111.683226}
  });

  year = 2008
  type = "Ozone";

  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map,
    radius: 25
  });
}

function updateData(newYear) {
    // if (newYear == 2005)
    // {
    //     alert("Data for 2005 does not exist.");
    // }
    year = newYear;
    heatmap.set('data', getPoints());
}

function clickPlay() {
    iterate(2003);
}

function iterate(temp) {
    setTimeout(function () {
        document.getElementById("rangeId").setAttribute("oninput", "");
        document.getElementById("rangeId").setAttribute("onchange", "");
        document.getElementById("rangeId").value = temp;
        document.getElementById("rangeId").setAttribute("oninput", "updateData(this.value)");
        document.getElementById("rangeId").setAttribute("onchange", "updateData(this.value)");
        updateData(temp);
        if (temp == 2004) {
            iterate(temp + 2);
        }
        else if (temp < 2013) {
            iterate(temp + 1);
        }
    }, 500);
}


// Heatmap data: 500 Points
function getPoints() {
    data = generateData();

    var result = [];
    for (var i = data.length - 1; i >= 0; i--) {
        if (data[i]["Year"] == year && data[i]["Type"] == type)
        {
            result.push({location: new google.maps.LatLng(data[i]["Lat"], data[i]["Long"]), weight: data[i]["Count"] * 1000});
        }
    };

    return result;
}