import React from 'react';
import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import { WebBrowser } from 'expo';
import { Button } from 'react-native-elements'
import { MonoText } from '../components/StyledText';
import { connect } from 'react-redux';
import {selectTrain, grabTrainTweets } from '../redux/store/train'


class HomeScreen extends React.Component {
  constructor () {
    super (),
    this.state = {
      trainLines: [{train: "1", color:"red"}, {train: "2", color:"red"}, {train: "3", color:"red"}, {train: "4", color:"green"}, {train: "5", color:"green"}, {train: "6", color:"green"}, {train: "7", color:"red"}, {train: "A", color:"blue"}, {train: "C", color:"blue"}, {train: "E", color:"blue"}, {train: "L", color:"gray"}, {train: "B", color:"orange"}, {train: "D", color:"orange"}, {train: "F", color:"orange"}, {train: "M", color:"orange"}, {train: "N", color:"yellow"}, {train: "Q", color:"yellow"}, {train: "R", color:"yellow"}, {train: "W", color:"yellow"}, {train: "G", color:"green"}, {train: "J", color:"brown"}, {train: "Z", color:"brown"}]
    }
  }

  static navigationOptions = {
    header: null,
  };

  showTrain (train) {
    this.props.selectTrain(train)
    this.props.grabTrainTweets(train.train)
    this.props.navigation.navigate('Train')
  }

  render() {
    return (
      <View style={styles.container}>
 
      <View style={styles.welcomeContainer}>
            <Image
              source={ require('../assets/images/subway-big.png')}
              style={styles.welcomeImage}
            />
            <Text style={styles.headerText}>Inside Track</Text>
      </View>
      
        <View style={styles.trainsContainer}>
          {this.state.trainLines.map((elem, index) => {
            return (
              <Button 
                key={index} 
                title={elem.train} 
                type="clear" 
                titleStyle={styles.buttonText} 
                onPress={() => this.showTrain(elem)}
                buttonStyle={styles.trainButton}>
             </Button>
            )
          })}
        </View>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const mapDispatchToProps = dispatch => {
  return {
    grabTrainTweets: train => dispatch(grabTrainTweets(train)),
    selectTrain: train => dispatch(selectTrain(train))
  }
}

export default connect(null, mapDispatchToProps)(HomeScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    backgroundColor: "white"
  },

  trainsContainer: {
    flex: 1,
    flexDirection: "row",
    alignContent: "space-around",
    justifyContent: "space-evenly",
    marginHorizontal: 20,
    marginVertical: 20,
    flexWrap: "wrap",
    backgroundColor: "white"
  },

  trainButton: {
    width: 65,
    height: 65,
    borderRadius: 65/2,
    backgroundColor: "#1D3A2E",
    flexWrap: "wrap",
  },

  circle: {
    flex: 2,
    justifyContent: "center",
    textAlign: "center",
    width: 100,
    height: 100,
    borderRadius: 60,
    backgroundColor: "white",
    borderColor: "black",

  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 34
  },

  headerText: {
    fontSize: 40,
    fontWeight: 'bold',
    fontFamily: "Copperplate-Bold",
    color: "#0D5F8A",
  },

  welcomeContainer: {
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: "flex-start",
      marginTop: 10,
      marginBottom: 0,
  },
    
  welcomeImage: {
      width: 100,
      height: 100,
      resizeMode: "contain",
      marginTop: 15,
      marginLeft: 25,
  },



  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
})
