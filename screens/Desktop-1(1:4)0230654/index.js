import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_23_5} />
      <View style={styles.View_21_0}>
        <Text style={styles.Text_21_0}>
          Advertising solutions to fit your goals.
        </Text>
      </View>
      <View style={styles.View_22_21}>
        <Text style={styles.Text_22_21}>
          Get better at promoting your business on Social Africa.
        </Text>
      </View>
      <View style={styles.View_21_1}>
        <Text style={styles.Text_21_1}>
          The people who will love your business are here – and running targeted
          Social Africa ads is the first step to connecting with them. Establish
          your business&#39;s presence on Social Africa so that people can find
          out about you and connect with you.
        </Text>
      </View>
      <View style={styles.View_21_2} />
      <View style={styles.View_21_4}>
        <Text style={styles.Text_21_4}>Get Started</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf47/1dff/8efa5f4a36e4e7c8a1cbffd2edd4af83"
        }}
        style={styles.ImageBackground_34_2}
      />
      <View style={styles.View_22_1}>
        <View style={styles.View_22_2}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2adf/eaf4/7711e523b10c00604138b7687e05c308"
            }}
            style={styles.ImageBackground_22_3}
          />
        </View>
      </View>
      <View style={styles.View_22_23} />
      <View style={styles.View_22_35} />
      <View style={styles.View_22_47} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7ef1/c92e/ebf32042e44f0815ef2aa327fab44304"
        }}
        style={styles.ImageBackground_22_24}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41d6/d242/e9e5787276c4664fe080e4af8e929e58"
        }}
        style={styles.ImageBackground_23_3}
      />
      <View style={styles.View_22_25}>
        <Text style={styles.Text_22_25}>ADVERTISING</Text>
      </View>
      <View style={styles.View_22_37}>
        <Text style={styles.Text_22_37}>TIPS AND TRICKS</Text>
      </View>
      <View style={styles.View_22_49}>
        <Text style={styles.Text_22_49}>BEST PRACTICES</Text>
      </View>
      <View style={styles.View_22_34}>
        <Text style={styles.Text_22_34}>
          Maximising results of ad campaigns.
        </Text>
      </View>
      <View style={styles.View_23_4}>
        <Text style={styles.Text_23_4}>Browse all articles</Text>
      </View>
      <View style={styles.View_22_38}>
        <Text style={styles.Text_22_38}>Master marketing on social.</Text>
      </View>
      <View style={styles.View_22_50}>
        <Text style={styles.Text_22_50}>Be strategic with your content.</Text>
      </View>
      <View style={styles.View_22_26}>
        <View style={styles.View_22_27}>
          <View style={styles.View_22_28}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab74/e0c2/af0a88bec2e5422da57fb6880ec0dca4"
              }}
              style={styles.ImageBackground_22_29}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_22_39}>
        <View style={styles.View_22_40}>
          <View style={styles.View_22_41}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab74/e0c2/af0a88bec2e5422da57fb6880ec0dca4"
              }}
              style={styles.ImageBackground_22_42}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_22_51}>
        <View style={styles.View_22_52}>
          <View style={styles.View_22_53}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ab74/e0c2/af0a88bec2e5422da57fb6880ec0dca4"
              }}
              style={styles.ImageBackground_22_54}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_22_32} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d05/f3a1/58d6b52d7d1c666cfab80912e19edda7"
        }}
        style={styles.ImageBackground_23_2}
      />
      <View style={styles.View_22_45} />
      <View style={styles.View_22_57} />
      <View style={styles.View_22_33}>
        <Text style={styles.Text_22_33}>03 Apr</Text>
      </View>
      <View style={styles.View_22_46}>
        <Text style={styles.Text_22_46}>07 Nov</Text>
      </View>
      <View style={styles.View_22_58}>
        <Text style={styles.Text_22_58}>03 Apr</Text>
      </View>
      <View style={styles.View_23_7} />
      <View style={styles.View_23_8}>
        <Text style={styles.Text_23_8}>Start advertising on Social Africa</Text>
      </View>
      <View style={styles.View_29_4}>
        <Text style={styles.Text_29_4}>
          Grow your following and build a community to amplify your message –
          Drive higher brand recall and awareness with show-stopping visual
          content.{" "}
        </Text>
      </View>
      <View style={styles.View_23_9} />
      <View style={styles.View_23_10}>
        <Text style={styles.Text_23_10}>Let’s Go</Text>
      </View>
      <View style={styles.View_23_11}>
        <Text style={styles.Text_23_11}>Platform</Text>
      </View>
      <View style={styles.View_23_16}>
        <Text style={styles.Text_23_16}>Help</Text>
      </View>
      <View style={styles.View_23_23}>
        <Text style={styles.Text_23_23}>Business Resources</Text>
      </View>
      <View style={styles.View_25_2}>
        <Text style={styles.Text_25_2}>Developer Resources</Text>
      </View>
      <View style={styles.View_23_12}>
        <Text style={styles.Text_23_12}>Social.africa</Text>
      </View>
      <View style={styles.View_25_9}>
        <Text style={styles.Text_25_9}>©2021 - Social Africa.</Text>
      </View>
      <View style={styles.View_23_17}>
        <Text style={styles.Text_23_17}>Help Center</Text>
      </View>
      <View style={styles.View_23_24}>
        <Text style={styles.Text_23_24}>Advertise</Text>
      </View>
      <View style={styles.View_25_3}>
        <Text style={styles.Text_25_3}>Developer Home</Text>
      </View>
      <View style={styles.View_23_13}>
        <Text style={styles.Text_23_13}>Status</Text>
      </View>
      <View style={styles.View_23_18}>
        <Text style={styles.Text_23_18}>Ads Help Center</Text>
      </View>
      <View style={styles.View_23_25}>
        <Text style={styles.Text_23_25}>Resources and Guide</Text>
      </View>
      <View style={styles.View_25_4}>
        <Text style={styles.Text_25_4}>Documentation</Text>
      </View>
      <View style={styles.View_23_14}>
        <Text style={styles.Text_23_14}>Privacy Center</Text>
      </View>
      <View style={styles.View_23_19}>
        <Text style={styles.Text_23_19}>Security and Safety</Text>
      </View>
      <View style={styles.View_23_26}>
        <Text style={styles.Text_23_26}>Marketing Insights</Text>
      </View>
      <View style={styles.View_25_5}>
        <Text style={styles.Text_25_5}>Forums</Text>
      </View>
      <View style={styles.View_23_15}>
        <Text style={styles.Text_23_15}>Transparency center</Text>
      </View>
      <View style={styles.View_23_20}>
        <Text style={styles.Text_23_20}>Managing your account</Text>
      </View>
      <View style={styles.View_23_27}>
        <Text style={styles.Text_23_27}>Brand Inspiration</Text>
      </View>
      <View style={styles.View_25_6}>
        <Text style={styles.Text_25_6}>Communities</Text>
      </View>
      <View style={styles.View_23_21}>
        <Text style={styles.Text_23_21}>Rules and Policies</Text>
      </View>
      <View style={styles.View_23_28}>
        <Text style={styles.Text_23_28}>Social Data</Text>
      </View>
      <View style={styles.View_25_7}>
        <Text style={styles.Text_25_7}>Developer Blog</Text>
      </View>
      <View style={styles.View_23_22}>
        <Text style={styles.Text_23_22}>Contact Us</Text>
      </View>
      <View style={styles.View_26_2}>
        <Text style={styles.Text_26_2}>Cookies</Text>
      </View>
      <View style={styles.View_23_29}>
        <Text style={styles.Text_23_29}>Valley Africa</Text>
      </View>
      <View style={styles.View_27_2}>
        <Text style={styles.Text_27_2}>Privacy Policy</Text>
      </View>
      <View style={styles.View_25_8}>
        <Text style={styles.Text_25_8}>Developer Terms</Text>
      </View>
      <View style={styles.View_27_3}>
        <Text style={styles.Text_27_3}>Terms and Conditions</Text>
      </View>
      <View style={styles.View_4_34} />
      <View style={styles.View_1_10}>
        <Text style={styles.Text_1_10}>
          Better growth tools for your business.
        </Text>
      </View>
      <View style={styles.View_2_2} />
      <View style={styles.View_28_44} />
      <View style={styles.View_2_3} />
      <View style={styles.View_2_4}>
        <Text style={styles.Text_2_4}>Create Ad</Text>
      </View>
      <View style={styles.View_28_45}>
        <Text style={styles.Text_28_45}>Create Ad</Text>
      </View>
      <View style={styles.View_2_5}>
        <Text style={styles.Text_2_5}>Learn More</Text>
      </View>
      <View style={styles.View_23_6}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4ece/3afd/6bf7fc3a763f8286a8e9ceab0f2750f2"
          }}
          style={styles.ImageBackground_6_6}
        />
        <View style={styles.View_8_0} />
      </View>
      <View style={styles.View_8_9}>
        <Text style={styles.Text_8_9}>Discover how to;</Text>
      </View>
      <View style={styles.View_31_2}>
        <View style={styles.View_8_3} />
        <View style={styles.View_8_5} />
        <View style={styles.View_8_7} />
        <View style={styles.View_8_4}>
          <Text style={styles.Text_8_4}>
            Start advertising on Social Africa.
          </Text>
        </View>
        <View style={styles.View_29_40}>
          <Text style={styles.Text_29_40}>
            Establish your business&#39;s presence on social.
          </Text>
        </View>
        <View style={styles.View_29_41}>
          <Text style={styles.Text_29_41}>
            Establish your business&#39;s presence on social.
          </Text>
        </View>
        <View style={styles.View_29_42}>
          <Text style={styles.Text_29_42}>
            Establish your business&#39;s presence on social.
          </Text>
        </View>
        <View style={styles.View_8_6}>
          <Text style={styles.Text_8_6}>Get help targeting your clients.</Text>
        </View>
        <View style={styles.View_8_8}>
          <Text style={styles.Text_8_8}>Get resources for your business.</Text>
        </View>
        <View style={styles.View_8_10}>
          <View style={styles.View_8_11}>
            <View style={styles.View_8_12}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e564/1335/1af2962bba17f4a645b9287c6918dc1f"
                }}
                style={styles.ImageBackground_8_13}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_8_31}>
          <View style={styles.View_8_32}>
            <View style={styles.View_8_33}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e564/1335/1af2962bba17f4a645b9287c6918dc1f"
                }}
                style={styles.ImageBackground_8_34}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_8_37}>
          <View style={styles.View_8_38}>
            <View style={styles.View_8_39}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e564/1335/1af2962bba17f4a645b9287c6918dc1f"
                }}
                style={styles.ImageBackground_8_40}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_28_26}>
        <View style={styles.View_27_4}>
          <Text style={styles.Text_27_4}>Basics</Text>
        </View>
        <View style={styles.View_28_2}>
          <View style={styles.View_28_3}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2b5/0385/7cb6a8cab47f90205954b9db5d78de0e"
              }}
              style={styles.ImageBackground_28_4}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_28_43}>
        <Text style={styles.Text_28_43}>Sign In</Text>
      </View>
      <View style={styles.View_28_46}>
        <View style={styles.View_28_28}>
          <Text style={styles.Text_28_28}>Advertising</Text>
        </View>
        <View style={styles.View_28_29}>
          <View style={styles.View_28_30}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2b5/0385/7cb6a8cab47f90205954b9db5d78de0e"
              }}
              style={styles.ImageBackground_28_31}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_28_47}>
        <View style={styles.View_28_33}>
          <Text style={styles.Text_28_33}>Resources</Text>
        </View>
        <View style={styles.View_28_34}>
          <View style={styles.View_28_35}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2b5/0385/7cb6a8cab47f90205954b9db5d78de0e"
              }}
              style={styles.ImageBackground_28_36}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_28_48}>
        <View style={styles.View_28_38}>
          <Text style={styles.Text_28_38}>Help Center</Text>
        </View>
        <View style={styles.View_28_39}>
          <View style={styles.View_28_40}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2b5/0385/7cb6a8cab47f90205954b9db5d78de0e"
              }}
              style={styles.ImageBackground_28_41}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_28_49}>
        <View style={styles.View_28_50}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a04d/4672/bf51f96e6b27e4e40848c8a0b9abb4bc"
            }}
            style={styles.ImageBackground_28_51}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e35/8f71/0c09f5d1751f934a2446ef21ec3e58cb"
        }}
        style={styles.ImageBackground_29_2}
      />
      <View style={styles.View_29_5}>
        <View style={styles.View_29_6}>
          <View style={styles.View_29_7}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50f6/4224/af3545ae497aef5ef20525133c17fef5"
              }}
              style={styles.ImageBackground_29_8}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_23_5: {
    width: wp("104.61956521739131%"),
    minWidth: wp("104.61956521739131%"),
    height: hp("125.40983606557377%"),
    minHeight: hp("125.40983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2.989130434782609%"),
    top: hp("299.1803278688525%"),
    backgroundColor: "rgba(249, 249, 249, 1)"
  },
  View_21_0: {
    width: wp("41.03260869565217%"),
    minWidth: wp("41.03260869565217%"),
    minHeight: hp("16.120218579234972%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.114130434782608%"),
    top: hp("213.7978142076503%")
  },
  Text_21_0: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 37,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_21: {
    width: wp("62.3641304347826%"),
    minWidth: wp("62.3641304347826%"),
    minHeight: hp("14.617486338797814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.114130434782608%"),
    top: hp("308.46994535519127%")
  },
  Text_22_21: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 46,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_1: {
    width: wp("41.03260869565217%"),
    minWidth: wp("41.03260869565217%"),
    minHeight: hp("42.89617486338798%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.114130434782608%"),
    top: hp("232.24043715846994%")
  },
  Text_21_1: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_21_2: {
    width: wp("18.13858695652174%"),
    minWidth: wp("18.13858695652174%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.182065217391304%"),
    top: hp("273.22404371584696%"),
    backgroundColor: "rgba(241, 169, 1, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_21_4: {
    width: wp("15.489130434782608%"),
    minWidth: wp("15.489130434782608%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.4728260869565215%"),
    top: hp("275%")
  },
  Text_21_4: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_34_2: {
    width: wp("42.1875%"),
    minWidth: wp("42.1875%"),
    height: hp("57.377049180327866%"),
    minHeight: hp("57.377049180327866%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.29076086956522%"),
    top: hp("214.0710382513661%"),
    resizeMode: "cover"
  },
  View_22_1: {
    width: wp("6.725543478260869%"),
    minWidth: wp("6.725543478260869%"),
    height: hp("13.387978142076504%"),
    minHeight: hp("13.387978142076504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69.02173913043478%"),
    top: hp("239.48087431693986%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_22_2: {
    width: wp("6.725543478260869%"),
    height: hp("13.387978142076504%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_22_3: {
    width: wp("6.725543478260869%"),
    height: hp("13.387978142076504%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_22_23: {
    width: wp("28.532608695652172%"),
    minWidth: wp("28.532608695652172%"),
    height: hp("71.44808743169399%"),
    minHeight: hp("71.44808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.182065217391304%"),
    top: hp("337.0218579234973%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_22_35: {
    width: wp("28.668478260869566%"),
    minWidth: wp("28.668478260869566%"),
    height: hp("71.44808743169399%"),
    minHeight: hp("71.44808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.54891304347826%"),
    top: hp("337.0218579234973%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_22_47: {
    width: wp("28.464673913043477%"),
    minWidth: wp("28.464673913043477%"),
    height: hp("71.44808743169399%"),
    minHeight: hp("71.44808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.05163043478261%"),
    top: hp("337.0218579234973%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_22_24: {
    width: wp("28.464673913043477%"),
    minWidth: wp("28.464673913043477%"),
    height: hp("35.92896174863388%"),
    minHeight: hp("35.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.182065217391304%"),
    top: hp("337.1584699453552%"),
    resizeMode: "cover"
  },
  ImageBackground_23_3: {
    width: wp("28.396739130434785%"),
    minWidth: wp("28.396739130434785%"),
    height: hp("35.92896174863388%"),
    minHeight: hp("35.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.05163043478261%"),
    top: hp("337.1584699453552%"),
    resizeMode: "cover"
  },
  View_22_25: {
    width: wp("10.801630434782608%"),
    minWidth: wp("10.801630434782608%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.540760869565218%"),
    top: hp("376.5027322404371%")
  },
  Text_22_25: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_37: {
    width: wp("16.915760869565215%"),
    minWidth: wp("16.915760869565215%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.11141304347826%"),
    top: hp("376.5027322404371%")
  },
  Text_22_37: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_49: {
    width: wp("12.975543478260871%"),
    minWidth: wp("12.975543478260871%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.47826086956522%"),
    top: hp("376.5027322404371%")
  },
  Text_22_49: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_34: {
    width: wp("24.728260869565215%"),
    minWidth: wp("24.728260869565215%"),
    minHeight: hp("13.797814207650273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.540760869565218%"),
    top: hp("381.2841530054645%")
  },
  Text_22_34: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 30,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_4: {
    width: wp("17.866847826086957%"),
    minWidth: wp("17.866847826086957%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.453804347826086%"),
    top: hp("328.9617486338798%")
  },
  Text_23_4: {
    color: "rgba(241, 169, 1, 1)",
    fontSize: 21,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_38: {
    width: wp("25.611413043478258%"),
    minWidth: wp("25.611413043478258%"),
    minHeight: hp("13.797814207650273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38.11141304347826%"),
    top: hp("381.2841530054645%")
  },
  Text_22_38: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 30,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_50: {
    width: wp("25.47554347826087%"),
    minWidth: wp("25.47554347826087%"),
    minHeight: hp("13.797814207650273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.47826086956522%"),
    top: hp("381.2841530054645%")
  },
  Text_22_50: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 30,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_26: {
    width: wp("3.3967391304347823%"),
    minWidth: wp("3.3967391304347823%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.785326086956523%"),
    top: hp("397.6775956284153%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_22_27: {
    width: wp("3.3967391304347823%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_22_28: {
    width: wp("3.3967391304347823%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_22_29: {
    width: wp("3.3967391304347823%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_22_39: {
    width: wp("3.3967391304347823%"),
    minWidth: wp("3.3967391304347823%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.69565217391305%"),
    top: hp("397.6775956284153%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_22_40: {
    width: wp("3.3967391304347823%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_22_41: {
    width: wp("3.3967391304347823%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_22_42: {
    width: wp("3.3967391304347823%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_22_51: {
    width: wp("3.3967391304347823%"),
    minWidth: wp("3.3967391304347823%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.74184782608695%"),
    top: hp("397.6775956284153%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_22_52: {
    width: wp("3.3967391304347823%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_22_53: {
    width: wp("3.3967391304347823%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_22_54: {
    width: wp("3.3967391304347823%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_22_32: {
    width: wp("7.336956521739131%"),
    minWidth: wp("7.336956521739131%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.309782608695656%"),
    top: hp("360.24590163934425%"),
    backgroundColor: "rgba(241, 169, 1, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_23_2: {
    width: wp("28.60054347826087%"),
    minWidth: wp("28.60054347826087%"),
    height: hp("35.92896174863388%"),
    minHeight: hp("35.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.54891304347826%"),
    top: hp("337.1584699453552%"),
    resizeMode: "cover"
  },
  View_22_45: {
    width: wp("7.404891304347825%"),
    minWidth: wp("7.404891304347825%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.74456521739131%"),
    top: hp("360.24590163934425%"),
    backgroundColor: "rgba(241, 169, 1, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_22_57: {
    width: wp("7.336956521739131%"),
    minWidth: wp("7.336956521739131%"),
    height: hp("12.841530054644808%"),
    minHeight: hp("12.841530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88.11141304347827%"),
    top: hp("360.24590163934425%"),
    backgroundColor: "rgba(241, 169, 1, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_22_33: {
    width: wp("7.676630434782608%"),
    minWidth: wp("7.676630434782608%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.03804347826087%"),
    top: hp("361.4754098360656%")
  },
  Text_22_33: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_46: {
    width: wp("7.744565217391304%"),
    minWidth: wp("7.744565217391304%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.472826086956516%"),
    top: hp("361.4754098360656%")
  },
  Text_22_46: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_22_58: {
    width: wp("7.676630434782608%"),
    minWidth: wp("7.676630434782608%"),
    minHeight: hp("9.01639344262295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.83967391304348%"),
    top: hp("361.4754098360656%")
  },
  Text_22_58: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_7: {
    width: wp("102.71739130434783%"),
    minWidth: wp("102.71739130434783%"),
    height: hp("61.065573770491795%"),
    minHeight: hp("61.065573770491795%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("424.7267759562842%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_23_8: {
    width: wp("72.41847826086956%"),
    minWidth: wp("72.41847826086956%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.149456521739129%"),
    top: hp("435.655737704918%")
  },
  Text_23_8: {
    color: "rgba(241, 169, 1, 1)",
    fontSize: 49,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_4: {
    width: wp("67.3913043478261%"),
    minWidth: wp("67.3913043478261%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.66304347826087%"),
    top: hp("447.4043715846994%")
  },
  Text_29_4: {
    color: "rgba(211, 211, 211, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_9: {
    width: wp("18.070652173913043%"),
    minWidth: wp("18.070652173913043%"),
    height: hp("9.972677595628415%"),
    minHeight: hp("9.972677595628415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.32336956521739%"),
    top: hp("465.43715846994536%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_23_10: {
    width: wp("11.684782608695652%"),
    minWidth: wp("11.684782608695652%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.516304347826086%"),
    top: hp("467.48633879781426%")
  },
  Text_23_10: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 27,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_11: {
    width: wp("8.89945652173913%"),
    minWidth: wp("8.89945652173913%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6494565217391304%"),
    top: hp("494.8087431693989%")
  },
  Text_23_11: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_16: {
    width: wp("8.89945652173913%"),
    minWidth: wp("8.89945652173913%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.611413043478258%"),
    top: hp("494.8087431693989%")
  },
  Text_23_16: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_23: {
    width: wp("20.108695652173914%"),
    minWidth: wp("20.108695652173914%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.6983695652174%"),
    top: hp("494.8087431693989%")
  },
  Text_23_23: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_2: {
    width: wp("20.108695652173914%"),
    minWidth: wp("20.108695652173914%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.7663043478261%"),
    top: hp("494.8087431693989%")
  },
  Text_25_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_12: {
    width: wp("12.975543478260871%"),
    minWidth: wp("12.975543478260871%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6494565217391304%"),
    top: hp("502.1857923497268%")
  },
  Text_23_12: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_9: {
    width: wp("18.817934782608695%"),
    minWidth: wp("18.817934782608695%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6494565217391304%"),
    top: hp("543.4426229508197%")
  },
  Text_25_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_17: {
    width: wp("12.975543478260871%"),
    minWidth: wp("12.975543478260871%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.611413043478258%"),
    top: hp("502.1857923497268%")
  },
  Text_23_17: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_24: {
    width: wp("12.907608695652172%"),
    minWidth: wp("12.907608695652172%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.6983695652174%"),
    top: hp("502.1857923497268%")
  },
  Text_23_24: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_3: {
    width: wp("15.625%"),
    minWidth: wp("15.625%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.7663043478261%"),
    top: hp("502.1857923497268%")
  },
  Text_25_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_13: {
    width: wp("12.975543478260871%"),
    minWidth: wp("12.975543478260871%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6494565217391304%"),
    top: hp("507.92349726775956%")
  },
  Text_23_13: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_18: {
    width: wp("17.1875%"),
    minWidth: wp("17.1875%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.611413043478258%"),
    top: hp("507.92349726775956%")
  },
  Text_23_18: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_25: {
    width: wp("20.108695652173914%"),
    minWidth: wp("20.108695652173914%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.6983695652174%"),
    top: hp("507.92349726775956%")
  },
  Text_23_25: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_4: {
    width: wp("20.108695652173914%"),
    minWidth: wp("20.108695652173914%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.7663043478261%"),
    top: hp("507.92349726775956%")
  },
  Text_25_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_14: {
    width: wp("14.0625%"),
    minWidth: wp("14.0625%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6494565217391304%"),
    top: hp("513.5245901639344%")
  },
  Text_23_14: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_19: {
    width: wp("18.342391304347828%"),
    minWidth: wp("18.342391304347828%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.611413043478258%"),
    top: hp("513.5245901639344%")
  },
  Text_23_19: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_26: {
    width: wp("18.27445652173913%"),
    minWidth: wp("18.27445652173913%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.6983695652174%"),
    top: hp("513.5245901639344%")
  },
  Text_23_26: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_5: {
    width: wp("18.27445652173913%"),
    minWidth: wp("18.27445652173913%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.7663043478261%"),
    top: hp("513.5245901639344%")
  },
  Text_25_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_15: {
    width: wp("20.17663043478261%"),
    minWidth: wp("20.17663043478261%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6494565217391304%"),
    top: hp("519.672131147541%")
  },
  Text_23_15: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_20: {
    width: wp("22.894021739130434%"),
    minWidth: wp("22.894021739130434%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.611413043478258%"),
    top: hp("519.672131147541%")
  },
  Text_23_20: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_27: {
    width: wp("22.894021739130434%"),
    minWidth: wp("22.894021739130434%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.6983695652174%"),
    top: hp("519.672131147541%")
  },
  Text_23_27: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_6: {
    width: wp("22.894021739130434%"),
    minWidth: wp("22.894021739130434%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.7663043478261%"),
    top: hp("519.672131147541%")
  },
  Text_25_6: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_21: {
    width: wp("22.554347826086957%"),
    minWidth: wp("22.554347826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.611413043478258%"),
    top: hp("525.5464480874317%")
  },
  Text_23_21: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_28: {
    width: wp("22.554347826086957%"),
    minWidth: wp("22.554347826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.6983695652174%"),
    top: hp("525.8196721311475%")
  },
  Text_23_28: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_7: {
    width: wp("22.554347826086957%"),
    minWidth: wp("22.554347826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.7663043478261%"),
    top: hp("525.8196721311475%")
  },
  Text_25_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_22: {
    width: wp("22.554347826086957%"),
    minWidth: wp("22.554347826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.611413043478258%"),
    top: hp("531.0109289617486%")
  },
  Text_23_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_26_2: {
    width: wp("7.676630434782608%"),
    minWidth: wp("7.676630434782608%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.611413043478258%"),
    top: hp("543.4426229508197%")
  },
  Text_26_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_29: {
    width: wp("22.554347826086957%"),
    minWidth: wp("22.554347826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.6983695652174%"),
    top: hp("531.1475409836065%")
  },
  Text_23_29: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_27_2: {
    width: wp("13.31521739130435%"),
    minWidth: wp("13.31521739130435%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.6983695652174%"),
    top: hp("543.4426229508197%")
  },
  Text_27_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_25_8: {
    width: wp("22.554347826086957%"),
    minWidth: wp("22.554347826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.7663043478261%"),
    top: hp("531.1475409836065%")
  },
  Text_25_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_27_3: {
    width: wp("22.554347826086957%"),
    minWidth: wp("22.554347826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.7663043478261%"),
    top: hp("543.4426229508197%")
  },
  Text_27_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_34: {
    width: wp("100.67934782608697%"),
    minWidth: wp("100.67934782608697%"),
    height: hp("81.14754098360656%"),
    minHeight: hp("81.14754098360656%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.6793478260869565%"),
    top: hp("19.398907103825135%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_1_10: {
    width: wp("87.7038043478261%"),
    minWidth: wp("87.7038043478261%"),
    minHeight: hp("39.20765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.114130434782608%"),
    top: hp("30.601092896174865%")
  },
  Text_1_10: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 83,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2: {
    width: wp("17.05163043478261%"),
    minWidth: wp("17.05163043478261%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.114130434782608%"),
    top: hp("75%"),
    backgroundColor: "rgba(241, 169, 1, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_28_44: {
    width: wp("16.23641304347826%"),
    minWidth: wp("16.23641304347826%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.72554347826086%"),
    top: hp("4.781420765027322%"),
    backgroundColor: "rgba(241, 169, 1, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_2_3: {
    width: wp("16.57608695652174%"),
    minWidth: wp("16.57608695652174%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.834239130434785%"),
    top: hp("75%"),
    backgroundColor: "rgba(241, 169, 1, 1)",
    opacity: 0,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 3,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_2_4: {
    width: wp("11.073369565217392%"),
    minWidth: wp("11.073369565217392%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.831521739130435%"),
    top: hp("76.63934426229508%")
  },
  Text_2_4: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_45: {
    width: wp("11.073369565217392%"),
    minWidth: wp("11.073369565217392%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.30706521739131%"),
    top: hp("6.420765027322404%")
  },
  Text_28_45: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_5: {
    width: wp("12.296195652173914%"),
    minWidth: wp("12.296195652173914%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.415760869565215%"),
    top: hp("76.775956284153%")
  },
  Text_2_5: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_23_6: {
    width: wp("100.95108695652173%"),
    minWidth: wp("100.95108695652173%"),
    height: hp("97.26775956284153%"),
    minHeight: hp("97.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.5434782608695652%"),
    top: hp("100.27322404371584%")
  },
  ImageBackground_6_6: {
    width: wp("100.4732961240022%"),
    minWidth: wp("100.4732961240022%"),
    height: hp("96.72284569245218%"),
    minHeight: hp("96.72284569245218%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.47779497892960254%"),
    top: hp("0.1362284675973484%"),
    resizeMode: "cover"
  },
  View_8_0: {
    width: wp("100.4732961240022%"),
    minWidth: wp("100.4732961240022%"),
    height: hp("97.26775956284153%"),
    minHeight: hp("97.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.3100000023841858
  },
  View_8_9: {
    width: wp("47.21467391304348%"),
    minWidth: wp("47.21467391304348%"),
    minHeight: hp("16.530054644808743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.114130434782608%"),
    top: hp("108.19672131147541%")
  },
  Text_8_9: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 60,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_31_2: {
    width: wp("87.90760869565217%"),
    minWidth: wp("87.90760869565217%"),
    height: hp("56.9672131147541%"),
    minHeight: hp("56.9672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.114130434782608%"),
    top: hp("127.59562841530054%")
  },
  View_8_3: {
    width: wp("27.014796630195946%"),
    minWidth: wp("27.014796630195946%"),
    height: hp("56.9672131147541%"),
    minHeight: hp("56.9672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13
  },
  View_8_5: {
    width: wp("27.014796630195946%"),
    minWidth: wp("27.014796630195946%"),
    height: hp("56.9672131147541%"),
    minHeight: hp("56.9672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.446404996125594%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13
  },
  View_8_7: {
    width: wp("27.014796630195946%"),
    minWidth: wp("27.014796630195946%"),
    height: hp("56.9672131147541%"),
    minHeight: hp("56.9672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.89280999225119%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13
  },
  View_8_4: {
    width: wp("21.173759128736414%"),
    minWidth: wp("21.173759128736414%"),
    minHeight: hp("17.36280201562767%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.5554532590119736%"),
    top: hp("9.614112728931886%")
  },
  Text_8_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 27,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_40: {
    width: wp("21.83087390402089%"),
    minWidth: wp("21.83087390402089%"),
    minHeight: hp("16.501836307713244%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7744915174401337%"),
    top: hp("24.681016265368854%")
  },
  Text_29_40: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_41: {
    width: wp("21.83087390402089%"),
    minWidth: wp("21.83087390402089%"),
    minHeight: hp("16.501836307713244%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.36692478345788%"),
    top: hp("24.681016265368854%")
  },
  Text_29_41: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_29_42: {
    width: wp("21.83087390402089%"),
    minWidth: wp("21.83087390402089%"),
    minHeight: hp("16.501836307713244%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.59428737474525%"),
    top: hp("24.681016265368854%")
  },
  Text_29_42: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_6: {
    width: wp("23.145111747409985%"),
    minWidth: wp("23.145111747409985%"),
    minHeight: hp("13.057975560589567%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.36692478345788%"),
    top: hp("9.614112728931886%")
  },
  Text_8_6: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 27,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_8: {
    width: wp("22.999083477517832%"),
    minWidth: wp("22.999083477517832%"),
    minHeight: hp("10.905561811937009%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.59428737474525%"),
    top: hp("9.614112728931886%")
  },
  Text_8_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 27,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_10: {
    width: wp("3.869686955990999%"),
    minWidth: wp("3.869686955990999%"),
    height: hp("7.461700543679826%"),
    minHeight: hp("7.461700543679826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.910358263098676%"),
    top: hp("41.46982828776042%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_8_11: {
    width: wp("3.869686955990999%"),
    height: hp("7.461700543679826%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_12: {
    width: wp("3.869686955990999%"),
    height: hp("7.461700543679826%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_13: {
    width: wp("3.869686955990999%"),
    height: hp("7.461700543679826%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_31: {
    width: wp("3.869686955990999%"),
    minWidth: wp("3.869686955990999%"),
    height: hp("7.461700543679826%"),
    minHeight: hp("7.461700543679826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.67099695620329%"),
    top: hp("41.46982828776042%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_8_32: {
    width: wp("3.869686955990999%"),
    height: hp("7.461700543679826%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_33: {
    width: wp("3.869686955990999%"),
    height: hp("7.461700543679826%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_34: {
    width: wp("3.869686955990999%"),
    height: hp("7.461700543679826%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_37: {
    width: wp("3.869686955990999%"),
    minWidth: wp("3.869686955990999%"),
    height: hp("7.461700543679826%"),
    minHeight: hp("7.461700543679826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.48246433423913%"),
    top: hp("41.46982828776042%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_8_38: {
    width: wp("3.869686955990999%"),
    height: hp("7.461700543679826%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_8_39: {
    width: wp("3.869686955990999%"),
    height: hp("7.461700543679826%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_8_40: {
    width: wp("3.869686955990999%"),
    height: hp("7.461700543679826%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_28_26: {
    width: wp("7.201086956521739%"),
    minWidth: wp("7.201086956521739%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.1875%"),
    top: hp("7.377049180327869%")
  },
  View_27_4: {
    width: wp("6.861413043478261%"),
    minWidth: wp("6.861413043478261%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_27_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_2: {
    width: wp("0.9510869565217392%"),
    minWidth: wp("0.9510869565217392%"),
    height: hp("2.390710382513661%"),
    minHeight: hp("2.390710382513661%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.25%"),
    top: hp("1.502732240437159%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_28_3: {
    width: wp("0.9510863734328228%"),
    height: hp("1.2949656919052042%"),
    top: hp("0.547873908704748%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_28_4: {
    width: wp("0.9510863734328228%"),
    height: hp("1.2949656919052042%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_28_43: {
    width: wp("6.929347826086957%"),
    minWidth: wp("6.929347826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.18478260869566%"),
    top: hp("7.377049180327869%")
  },
  Text_28_43: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_46: {
    width: wp("11.616847826086957%"),
    minWidth: wp("11.616847826086957%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.902173913043477%"),
    top: hp("7.377049180327869%")
  },
  View_28_28: {
    width: wp("11.616847826086957%"),
    minWidth: wp("11.616847826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_28_28: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_29: {
    width: wp("0.9510869565217392%"),
    minWidth: wp("0.9510869565217392%"),
    height: hp("2.390710382513661%"),
    minHeight: hp("2.390710382513661%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.665760869565219%"),
    top: hp("1.502732240437159%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_28_30: {
    width: wp("0.9510863086451654%"),
    height: hp("1.2949656919052042%"),
    top: hp("0.547873908704748%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0000010366025193775386%")
  },
  ImageBackground_28_31: {
    width: wp("0.9510863086451654%"),
    height: hp("1.2949656919052042%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_28_47: {
    width: wp("11.616847826086957%"),
    minWidth: wp("11.616847826086957%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41.50815217391305%"),
    top: hp("7.377049180327869%")
  },
  View_28_33: {
    width: wp("11.616847826086957%"),
    minWidth: wp("11.616847826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_28_33: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_34: {
    width: wp("0.9510869565217392%"),
    minWidth: wp("0.9510869565217392%"),
    height: hp("2.390710382513661%"),
    minHeight: hp("2.390710382513661%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.850543478260867%"),
    top: hp("1.502732240437159%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_28_35: {
    width: wp("0.9510863086451654%"),
    height: hp("1.2949656919052042%"),
    top: hp("0.547873908704748%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.4787657549914e-7%")
  },
  ImageBackground_28_36: {
    width: wp("0.9510863086451654%"),
    height: hp("1.2949656919052042%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_28_48: {
    width: wp("12.228260869565217%"),
    minWidth: wp("12.228260869565217%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.36684782608695%"),
    top: hp("7.377049180327869%")
  },
  View_28_38: {
    width: wp("11.616847826086957%"),
    minWidth: wp("11.616847826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_28_38: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_28_39: {
    width: wp("0.9510869565217392%"),
    minWidth: wp("0.9510869565217392%"),
    height: hp("2.390710382513661%"),
    minHeight: hp("2.390710382513661%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.277173913043484%"),
    top: hp("1.502732240437159%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_28_40: {
    width: wp("0.9510863086451654%"),
    height: hp("1.2949656919052042%"),
    top: hp("0.547873908704748%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0000010366025122721112%")
  },
  ImageBackground_28_41: {
    width: wp("0.9510863086451654%"),
    height: hp("1.2949656919052042%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_28_49: {
    width: wp("1.970108695652174%"),
    minWidth: wp("1.970108695652174%"),
    height: hp("3.9617486338797816%"),
    minHeight: hp("3.9617486338797816%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.65217391304348%"),
    top: hp("7.377049180327869%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_28_50: {
    width: wp("1.970106752022453%"),
    height: hp("3.961746549345756%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_28_51: {
    width: wp("1.970106752022453%"),
    height: hp("3.961746549345756%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_29_2: {
    width: wp("8.355978260869565%"),
    minWidth: wp("8.355978260869565%"),
    height: hp("6.563780737704918%"),
    minHeight: hp("6.563780737704918%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2418478260869565%"),
    top: hp("6.967213114754098%"),
    resizeMode: "cover"
  },
  View_29_5: {
    width: wp("2.6494565217391304%"),
    minWidth: wp("2.6494565217391304%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.96195652173913%"),
    top: hp("329.37158469945354%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_29_6: {
    width: wp("2.649456262588501%"),
    height: hp("2.246424669776458%"),
    top: hp("0.6527593227032185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_29_7: {
    width: wp("2.649456262588501%"),
    height: hp("2.246424669776458%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_29_8: {
    width: wp("2.649456262588501%"),
    height: hp("2.246424669776458%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2: { height: 4080 }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
