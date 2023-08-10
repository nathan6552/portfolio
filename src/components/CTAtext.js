import React from 'react'
//import CountryDropdown from './CountryDropdown'
import Dropdown from './Dropdown'
//import TopicInput from './TopicInput'
import { Button, Container, makeStyles } from '@material-ui/core/'
import CallMade from '@material-ui/icons/CallMade'



const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: "20%",
    backgroundColor: "#020308",
    padding: "24px",
    paddingLeft: "24px",
    paddingRight: "24px",
    width: "80%"
  },
  blockLine: {
    color: "#fafafa",
    fontSize: "160%",
    lineHeight: "1.2em",
    fontFamily: "sans-serif",
    //display: "inline",
    maxWidth: "500px",
    margin: 0
  },

  purple: {
    color: "#f3f3f3"
  },

  transpButton: {
    color: "white",
    padding: "8px",
    position: "absolute",
    backgroundColor: "#111",
    left: "20%",
    marginTop: "20px"
  }
}));

const CTAText = ({ selectedCountry, setSelectedCountry, prepareInitMarkers }) => {

  const classes = useStyles();

  return (
    <div className={classes.box}>
      <div className={classes.blockLine}>
        <h1 style={{ lineHeight: "1.2em"}}> Geo News Bubbles </h1>
        <span>
          See how other countries read about
          <span className={classes.purple}>
            <Dropdown
              selectedCountry={selectedCountry}
              setSelectedCountry={setSelectedCountry}
            />
          </span>
          in relation to{" "}
          <span style={{ color: "yellow", textDecorationLine: "underline" }}>
            Coronavirus |
          </span>
        </span>
        <br />
        <div style = {{
        color: "#fafafa",
        fontFamily: "sans-serif",
        maxWidth: "460px",
        paddingTop: "80px",
        opacity: "0.4",
        position: "fixed",
        top: "40%"
      }}>
        <br/><br/><h3 style={{ fontSize: "16px"}}>How it works</h3> 
        <p style={{ fontSize: "16px", lineHeight: "24px"}}>Choose both a country and a topic and then hit explore. Afterwards, you’ll be able to see how the rest of the world talks about that country and topic in within their own news. The word cloud shows at a glance the most common words within their headlines.

  
        <br/><br/>Make the connection– Do certain places focus on different keywords to share the same news? Or are certain perspectives entirely missing from others?</p>
        </div>
       
      </div>

      {/*This button actually launches the markers.*/}
      <Container>
        <Button
          className={classes.transpButton}
          onClick={() => prepareInitMarkers()}
          endIcon={<CallMade />}>
          Explore
        </Button>
      </Container>

    </div>
  )
}

export default CTAText