import React from "react";
import ReactGlobe from "react-globe";
import ArticleCard from "./ArticleCard";
import ReactWordCloud from "react-wordcloud";
import { Button } from "@material-ui/core/";

//Despite the fact that this syntax is 'correct' according to the documentation, for some reason, only passing the link directly works.
//const globeTextureUrl = 'https://raw.githubusercontent.com/chrisrzhou/react-globe/master/textures/globe_dark.jpg'
const backgroundImage = "./assets/virus_green.jpg";

function flatten(ary, ret = []) {
  return ary.reduce((ret, entry) => {
    if (Array.isArray(entry)) {
      flatten(entry, ret);
    } else {
      ret.push(entry);
    }
    return ret;
  }, ret);
}

function wordFrequency(txt) {
  var wordArray = txt.split(/[ .?!,*'"]/);
  var newArray = [],
    wordObj;
  wordArray.forEach(function(word) {
    wordObj = newArray.filter(function(w) {
      return w.text == word;
    });
    if (wordObj.length) {
      wordObj[0].value += 1;
    } else {
      newArray.push({ text: word, value: 1 });
    }
  });
  let filteredArray = newArray.filter(wo => {
    if (
      wo.text !== "the" &&
      wo.text !== "and" &&
      wo.text !== "a" &&
      wo.text !== "of" &&
      wo.text !== "is" &&
      wo.text !== "to" &&
      wo.text !== "in"
    ) {
      return wo;
    }
  });
  return filteredArray;
}

const articlesPlacementInLayout = {
  width: "100%"
  //overflow: 'scroll' //It's a full amount of the 60% that's given to the globe.
};

const articleStyle = {
  single: {
    padding: "8px",
    margin: "8px",
    backgroundColor: "#FFF07C",
    float: "left",
    display: "inline",
    maxWidth: "40%",
    height: "160px",
    fontFamily: "sans-serif",
    borderRadius: 4
  },
  headline: {
    fontSize: "16px",
    marginBottom: "8px"
  },
  paragraph: {
    fontSize: 12
  },
  details: {
    fontSize: 10,
    marginBottom: "8px"
  }
};

//Function that fetches the marker data, marker by marker, and formats it to be ready for rendering.

const ArticleComponent = ({ marker }) => {
  return (
    <div style={articleStyle.single}>
      <div style={articleStyle.headline}>{marker.headline}</div>
      <div style={articleStyle.details}>
        <br />
        According to {marker.outlet} in {marker.date}
      </div>
      <div style={articleStyle.paragraph}>{marker.paragraph}</div>
    </div>
  );
};


//Modified version react-globe's default markerOptions
const customMarkerOpts = {
  activeScale: 1.3,
  enableGlow: true,
  enableTooltip: true,
  enterAnimationDuration: 1000,
  enterEasingFunction: ["Linear", "None"],
  exitAnimationDuration: 500,
  exitEasingFunction: ["Cubic", "Out"],
  getTooltipContent: marker => helperOnHover(marker),
  glowCoefficient: 0,
  glowPower: 3,
  glowRadiusScale: 2,
  radiusScaleRange: [0.005, 0.02]
  //type: MarkerType.Dot,
};

const customGlobeOps = {
  enableBackground: false,
  texture:
    "https://raw.githubusercontent.com/chrisrzhou/react-globe/master/textures/globe_dark.jpg", //`${globeTextureUrl}`,
  enableClouds: false,
  backgroundTexture: `${backgroundImage}`
};

//Determines what's shown when hovering on marker. Passed to Globe's markerOptions through customMarkerOpts.
//const helperOnHover = (marker) => `"${marker.headline}" - ${marker.city}`

const helperOnHover = marker => `${marker.city} (${marker.code})`;

//When cards are displayed, this appears and enables closing them.
const closeCards = (e, setDetails) => {
  e.preventDefault();
  setDetails(null);
};

const Globe = ({ setEvent, setDetails, markers }) => {
  /*
        {markers.map(
          marker =>
          <ReactWordCloud key={marker.id} words={marker.headline.split(/\W+/).map(w => {return {'text': w, 'value': 2 }})}/>
        )}
  
        <ReactWordCloud words={flatten(markers.map(m => m.headline).map(h => h.split(/\W+/))).map(w => {return {'text': w, 'value': Math.floor((Math.random() * 10) + 1) }})}/>
  
        */

  //<ArticleCard key={marker.id} marker={marker}/>
  //"Container" that fetches the articles from the markers and pushes them to readable format as news cards
  const helperDisplayArticle = (markers, setDetails) => {
    return (
      <div style={articlesPlacementInLayout}>
        <Button
          style={{
            position: "fixed",
            top: "2%",
            right: "2%",
            color: "white",
            zIndex: "100",
            backgroundColor: "#222222"
          }}
          onClick={e => closeCards(e, setDetails)}
        >
          Back to Map
        </Button>

        <h3
          style={{
            color: "#ffffff",
            textAlign: "center",
            width: "80%",
            fontFamily: "sans-serif",
            marginLeft: "20px"
          }}
        >
          When reading about Coronavirus in Finland, this city mostly sees:
        </h3>
        <ReactWordCloud
          options={{
            fontSizes: [20, 60],
            fontFamily: "sans-serif",
            margin: "8px",
            rotations: 0,
            rotationAngles: [0, 0],
            enableTooltip: false,
            colors: [
              "#fafafa",
              "yellow",
              "green",
              "pink",
              "yellow",
              "green",
              "pink",
              "orange"
            ]
          }}
          words={flatten(
            wordFrequency(markers.map(m => m.headline.toLowerCase()).join(" "))
          )
            .filter(wo => wo.value > 0)
            .map(wo => {
              return { text: wo.text, value: wo.value * 100 };
            })}
        />

        {markers.map(marker => (
          <ArticleComponent key={marker.id} marker={marker} />
        ))}
      </div>
    );
  };

  //Zoom in animation
  const onClickMarker = (marker, markerObject, event) => {
    setEvent({
      type: "CLICK",
      marker,
      markerObjectID: markerObject.uuid,
      pointerEventPosition: { x: event.clientX, y: event.clientY }
    });
    setDetails(
      helperDisplayArticle(
        markers.filter(m => m.city === marker.city),
        setDetails
      )
    );
  };

  //Zoom out animation
  const onDefocus = (previousCoordinates, event) => {
    setEvent({
      type: "DEFOCUS",
      previousCoordinates,
      pointerEventPosition: { x: event.clientX, y: event.clientY }
    });
    setDetails(null);
  };

  return (
    <ReactGlobe
      markers={markers}
      markerOptions={customMarkerOpts}
      onClickMarker={onClickMarker}
      onDefocus={onDefocus}
      globeOptions={customGlobeOps}
    />
  );
};

export default Globe;
