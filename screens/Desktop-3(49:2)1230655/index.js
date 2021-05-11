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
      <View style={styles.View_51_2}>
        <View style={styles.View_49_96}>
          <Text style={styles.Text_49_96}>Platform</Text>
        </View>
        <View style={styles.View_49_97}>
          <Text style={styles.Text_49_97}>Help</Text>
        </View>
        <View style={styles.View_49_98}>
          <Text style={styles.Text_49_98}>Business Resources</Text>
        </View>
        <View style={styles.View_49_99}>
          <Text style={styles.Text_49_99}>Developer Resources</Text>
        </View>
        <View style={styles.View_49_100}>
          <Text style={styles.Text_49_100}>Social.africa</Text>
        </View>
        <View style={styles.View_49_101}>
          <Text style={styles.Text_49_101}>©2021 - Social Africa.</Text>
        </View>
        <View style={styles.View_49_102}>
          <Text style={styles.Text_49_102}>Help Center</Text>
        </View>
        <View style={styles.View_49_128}>
          <Text style={styles.Text_49_128}>Advertise</Text>
        </View>
        <View style={styles.View_49_129}>
          <Text style={styles.Text_49_129}>Developer Home</Text>
        </View>
        <View style={styles.View_49_130}>
          <Text style={styles.Text_49_130}>Status</Text>
        </View>
        <View style={styles.View_49_131}>
          <Text style={styles.Text_49_131}>Ads Help Center</Text>
        </View>
        <View style={styles.View_49_132}>
          <Text style={styles.Text_49_132}>Resources and Guide</Text>
        </View>
        <View style={styles.View_49_133}>
          <Text style={styles.Text_49_133}>Documentation</Text>
        </View>
        <View style={styles.View_49_134}>
          <Text style={styles.Text_49_134}>Privacy Center</Text>
        </View>
        <View style={styles.View_49_135}>
          <Text style={styles.Text_49_135}>Security and Safety</Text>
        </View>
        <View style={styles.View_49_136}>
          <Text style={styles.Text_49_136}>Marketing Insights</Text>
        </View>
        <View style={styles.View_49_137}>
          <Text style={styles.Text_49_137}>Forums</Text>
        </View>
        <View style={styles.View_49_138}>
          <Text style={styles.Text_49_138}>Transparency center</Text>
        </View>
        <View style={styles.View_49_139}>
          <Text style={styles.Text_49_139}>Managing your account</Text>
        </View>
        <View style={styles.View_49_140}>
          <Text style={styles.Text_49_140}>Brand Inspiration</Text>
        </View>
        <View style={styles.View_49_141}>
          <Text style={styles.Text_49_141}>Communities</Text>
        </View>
        <View style={styles.View_49_142}>
          <Text style={styles.Text_49_142}>Rules and Policies</Text>
        </View>
        <View style={styles.View_49_143}>
          <Text style={styles.Text_49_143}>Social Data</Text>
        </View>
        <View style={styles.View_49_144}>
          <Text style={styles.Text_49_144}>Developer Blog</Text>
        </View>
        <View style={styles.View_49_145}>
          <Text style={styles.Text_49_145}>Contact Us</Text>
        </View>
        <View style={styles.View_49_146}>
          <Text style={styles.Text_49_146}>Cookies</Text>
        </View>
        <View style={styles.View_49_147}>
          <Text style={styles.Text_49_147}>Valley Africa</Text>
        </View>
        <View style={styles.View_49_148}>
          <Text style={styles.Text_49_148}>Privacy Policy</Text>
        </View>
        <View style={styles.View_49_149}>
          <Text style={styles.Text_49_149}>Developer Terms</Text>
        </View>
        <View style={styles.View_49_150}>
          <Text style={styles.Text_49_150}>Terms and Conditions</Text>
        </View>
      </View>
      <View style={styles.View_51_3} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e35/8f71/0c09f5d1751f934a2446ef21ec3e58cb"
        }}
        style={styles.ImageBackground_49_155}
      />
      <View style={styles.View_51_4}>
        <Text style={styles.Text_51_4}>Social Africa for business.</Text>
      </View>
      <View style={styles.View_53_2}>
        <Text style={styles.Text_53_2}>
          An introduction to your next marketing goals. Discover the right tools
          and resources for your business goals and objectives .
        </Text>
      </View>
      <View style={styles.View_53_3}>
        <Text style={styles.Text_53_3}>Bring your business online.</Text>
      </View>
      <View style={styles.View_57_27}>
        <Text style={styles.Text_57_27}>
          How can Social Africa help you manage your business?
        </Text>
      </View>
      <View style={styles.View_53_4}>
        <Text style={styles.Text_53_4}>
          By expanding your message on Social Africa, you can connect and engage
          with new fans, network with partners, and identify influencers.
        </Text>
      </View>
      <View style={styles.View_57_28}>
        <Text style={styles.Text_57_28}>
          Build your following. Connect with your current customers, future
          fans, and loyal brand advocates on Social Africa.
        </Text>
      </View>
      <View style={styles.View_57_29}>
        <Text style={styles.Text_57_29}>
          Launch on Social. Whether you&#39;re launching a new product or a new
          sale, Social Africa is the place to be to break your latest news.
        </Text>
      </View>
      <View style={styles.View_57_30}>
        <Text style={styles.Text_57_30}>
          Provide timely customer service. Keep an eye out for mentions of your
          brand, create a dedicated customer service account
        </Text>
      </View>
      <View style={styles.View_57_31}>
        <Text style={styles.Text_57_31}>
          Leverage the power of ads. Amplify your following, drive traffic to
          your website, increase app downloads, and more.{" "}
        </Text>
      </View>
      <View style={styles.View_53_5}>
        <Text style={styles.Text_53_5}>Start here</Text>
      </View>
      <View style={styles.View_53_6}>
        <View style={styles.View_53_7}>
          <View style={styles.View_53_8}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b187/563c/2cdad467ee1354485c20f22dbfb8c261"
              }}
              style={styles.ImageBackground_53_9}
            />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b00/f8cb/4d61efc35e1c54dbeb30c8316329c8f3"
        }}
        style={styles.ImageBackground_57_2}
      />
      <View style={styles.View_60_0}>
        <View style={styles.View_57_3} />
        <View style={styles.View_57_4}>
          <View style={styles.View_57_5}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2150/9de0/86690225582d1fe5a8b052c5074ff817"
              }}
              style={styles.ImageBackground_57_6}
            />
          </View>
          <View style={styles.View_57_8}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee04/b4f6/4a247b3f0775fcd11d34a82366bd20b0"
              }}
              style={styles.ImageBackground_57_9}
            />
          </View>
        </View>
        <View style={styles.View_57_26}>
          <Text style={styles.Text_57_26}>Order confirmed</Text>
        </View>
      </View>
      <View style={styles.View_59_7} />
      <View style={styles.View_60_1}>
        <Text style={styles.Text_60_1}>
          When brands connect with Social Africa, they see lifts across the
          marketing funnel:
        </Text>
      </View>
      <View style={styles.View_61_2}>
        <Text style={styles.Text_61_2}>+20% message association</Text>
      </View>
      <View style={styles.View_61_3}>
        <Text style={styles.Text_61_3}>+8% brand awareness</Text>
      </View>
      <View style={styles.View_61_4}>
        <Text style={styles.Text_61_4}>+7% brand preference</Text>
      </View>
      <View style={styles.View_61_5}>
        <Text style={styles.Text_61_5}>+5% purchase intent</Text>
      </View>
      <View style={styles.View_61_7}>
        <View style={styles.View_61_8}>
          <Text style={styles.Text_61_8}>Sign In</Text>
        </View>
        <View style={styles.View_61_9}>
          <View style={styles.View_61_10}>
            <Text style={styles.Text_61_10}>Advertising</Text>
          </View>
          <View style={styles.View_61_11}>
            <View style={styles.View_61_12}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2b5/0385/7cb6a8cab47f90205954b9db5d78de0e"
                }}
                style={styles.ImageBackground_61_13}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_61_15}>
          <View style={styles.View_61_16}>
            <Text style={styles.Text_61_16}>Resources</Text>
          </View>
          <View style={styles.View_61_17}>
            <View style={styles.View_61_18}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2b5/0385/7cb6a8cab47f90205954b9db5d78de0e"
                }}
                style={styles.ImageBackground_61_19}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_61_21}>
          <View style={styles.View_61_22}>
            <Text style={styles.Text_61_22}>Guides</Text>
          </View>
          <View style={styles.View_61_23}>
            <View style={styles.View_61_24}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2b5/0385/7cb6a8cab47f90205954b9db5d78de0e"
                }}
                style={styles.ImageBackground_61_25}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_61_27} />
        <View style={styles.View_61_28}>
          <Text style={styles.Text_61_28}>Create Ad</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/965a/92de/668e16ed72c5c62bcbe7dc3f021cc495"
        }}
        style={styles.ImageBackground_61_30}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: {},
  View_51_2: {
    width: wp("97.01086956521739%"),
    minWidth: wp("97.01086956521739%"),
    height: hp("53.96174863387978%"),
    minHeight: hp("53.96174863387978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6494565217391304%"),
    top: hp("345.08196721311475%")
  },
  View_49_96: {
    width: wp("8.89945652173913%"),
    minWidth: wp("8.89945652173913%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_49_96: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_49_97: {
    width: wp("8.89945652173913%"),
    minWidth: wp("8.89945652173913%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.96195652173913%"),
    top: hp("0%")
  },
  Text_49_97: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_49_98: {
    width: wp("20.108695652173914%"),
    minWidth: wp("20.108695652173914%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.048913043478265%"),
    top: hp("0%")
  },
  Text_49_98: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_49_99: {
    width: wp("20.108695652173914%"),
    minWidth: wp("20.108695652173914%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.11684782608697%"),
    top: hp("0%")
  },
  Text_49_99: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_49_100: {
    width: wp("12.975543478260871%"),
    minWidth: wp("12.975543478260871%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.3770491803279015%")
  },
  Text_49_100: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_49_101: {
    width: wp("18.817934782608695%"),
    minWidth: wp("18.817934782608695%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48.633879781420774%")
  },
  Text_49_101: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_49_102: {
    width: wp("12.975543478260871%"),
    minWidth: wp("12.975543478260871%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.96195652173913%"),
    top: hp("7.3770491803279015%")
  },
  Text_49_102: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_49_128: {
    width: wp("12.907608695652172%"),
    minWidth: wp("12.907608695652172%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.048913043478265%"),
    top: hp("7.3770491803279015%")
  },
  Text_49_128: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_49_129: {
    width: wp("15.625%"),
    minWidth: wp("15.625%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.11684782608697%"),
    top: hp("7.3770491803279015%")
  },
  Text_49_129: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_49_130: {
    width: wp("12.975543478260871%"),
    minWidth: wp("12.975543478260871%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.114754098360663%")
  },
  Text_49_130: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_49_131: {
    width: wp("17.1875%"),
    minWidth: wp("17.1875%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.96195652173913%"),
    top: hp("13.114754098360663%")
  },
  Text_49_131: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_49_132: {
    width: wp("20.108695652173914%"),
    minWidth: wp("20.108695652173914%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.048913043478265%"),
    top: hp("13.114754098360663%")
  },
  Text_49_132: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_49_133: {
    width: wp("20.108695652173914%"),
    minWidth: wp("20.108695652173914%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.11684782608697%"),
    top: hp("13.114754098360663%")
  },
  Text_49_133: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_49_134: {
    width: wp("14.0625%"),
    minWidth: wp("14.0625%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.715846994535525%")
  },
  Text_49_134: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_49_135: {
    width: wp("18.342391304347828%"),
    minWidth: wp("18.342391304347828%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.96195652173913%"),
    top: hp("18.715846994535525%")
  },
  Text_49_135: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_49_136: {
    width: wp("18.27445652173913%"),
    minWidth: wp("18.27445652173913%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.048913043478265%"),
    top: hp("18.715846994535525%")
  },
  Text_49_136: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_49_137: {
    width: wp("18.27445652173913%"),
    minWidth: wp("18.27445652173913%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.11684782608697%"),
    top: hp("18.715846994535525%")
  },
  Text_49_137: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_49_138: {
    width: wp("20.17663043478261%"),
    minWidth: wp("20.17663043478261%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.863387978142043%")
  },
  Text_49_138: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_49_139: {
    width: wp("22.894021739130434%"),
    minWidth: wp("22.894021739130434%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.96195652173913%"),
    top: hp("24.863387978142043%")
  },
  Text_49_139: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_49_140: {
    width: wp("22.894021739130434%"),
    minWidth: wp("22.894021739130434%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.048913043478265%"),
    top: hp("24.863387978142043%")
  },
  Text_49_140: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_49_141: {
    width: wp("22.894021739130434%"),
    minWidth: wp("22.894021739130434%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.11684782608697%"),
    top: hp("24.863387978142043%")
  },
  Text_49_141: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_49_142: {
    width: wp("22.554347826086957%"),
    minWidth: wp("22.554347826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.96195652173913%"),
    top: hp("30.73770491803276%")
  },
  Text_49_142: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_49_143: {
    width: wp("22.554347826086957%"),
    minWidth: wp("22.554347826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.048913043478265%"),
    top: hp("31.01092896174862%")
  },
  Text_49_143: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_49_144: {
    width: wp("22.554347826086957%"),
    minWidth: wp("22.554347826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.11684782608697%"),
    top: hp("31.01092896174862%")
  },
  Text_49_144: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_49_145: {
    width: wp("22.554347826086957%"),
    minWidth: wp("22.554347826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.96195652173913%"),
    top: hp("36.202185792349724%")
  },
  Text_49_145: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_49_146: {
    width: wp("7.676630434782608%"),
    minWidth: wp("7.676630434782608%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.96195652173913%"),
    top: hp("48.633879781420774%")
  },
  Text_49_146: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_49_147: {
    width: wp("22.554347826086957%"),
    minWidth: wp("22.554347826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.048913043478265%"),
    top: hp("36.338797814207624%")
  },
  Text_49_147: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_49_148: {
    width: wp("13.31521739130435%"),
    minWidth: wp("13.31521739130435%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.048913043478265%"),
    top: hp("48.633879781420774%")
  },
  Text_49_148: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_49_149: {
    width: wp("22.554347826086957%"),
    minWidth: wp("22.554347826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.11684782608697%"),
    top: hp("36.338797814207624%")
  },
  Text_49_149: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_49_150: {
    width: wp("22.554347826086957%"),
    minWidth: wp("22.554347826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.11684782608697%"),
    top: hp("48.633879781420774%")
  },
  Text_49_150: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_51_3: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("82.78688524590164%"),
    minHeight: hp("82.78688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("78.82513661202186%"),
    backgroundColor: "rgba(212, 229, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_49_155: {
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
  View_51_4: {
    width: wp("87.97554347826086%"),
    minWidth: wp("87.97554347826086%"),
    minHeight: hp("26.197648178684258%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.434782608695652%"),
    top: hp("26.366120218579237%")
  },
  Text_51_4: {
    color: "rgba(5, 24, 53, 1)",
    fontSize: 62,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_53_2: {
    width: wp("87.97554347826086%"),
    minWidth: wp("87.97554347826086%"),
    minHeight: hp("26.197648178684258%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.434782608695652%"),
    top: hp("41.97175072841957%")
  },
  Text_53_2: {
    color: "rgba(5, 24, 53, 1)",
    fontSize: 33,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_53_3: {
    width: wp("53.60054347826087%"),
    minWidth: wp("53.60054347826087%"),
    minHeight: hp("15.983606557377051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.434782608695652%"),
    top: hp("100.40983606557377%")
  },
  Text_53_3: {
    color: "rgba(5, 24, 53, 1)",
    fontSize: 45,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_27: {
    width: wp("49.11684782608695%"),
    minWidth: wp("49.11684782608695%"),
    minHeight: hp("16.80327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.41847826086957%"),
    top: hp("173.36065573770492%")
  },
  Text_57_27: {
    color: "rgba(5, 24, 53, 1)",
    fontSize: 37,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_53_4: {
    width: wp("53.60054347826087%"),
    minWidth: wp("53.60054347826087%"),
    minHeight: hp("15.983606557377051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.434782608695652%"),
    top: hp("112.8415300546448%")
  },
  Text_53_4: {
    color: "rgba(5, 24, 53, 1)",
    fontSize: 25,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_28: {
    width: wp("49.11684782608695%"),
    minWidth: wp("49.11684782608695%"),
    minHeight: hp("16.939890710382514%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.41847826086957%"),
    top: hp("192.75956284153006%")
  },
  Text_57_28: {
    color: "rgba(5, 24, 53, 1)",
    fontSize: 23,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_29: {
    width: wp("49.11684782608695%"),
    minWidth: wp("49.11684782608695%"),
    minHeight: hp("16.80327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.41847826086957%"),
    top: hp("210.38251366120218%")
  },
  Text_57_29: {
    color: "rgba(5, 24, 53, 1)",
    fontSize: 23,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_30: {
    width: wp("49.11684782608695%"),
    minWidth: wp("49.11684782608695%"),
    minHeight: hp("16.80327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.41847826086957%"),
    top: hp("228.68852459016392%")
  },
  Text_57_30: {
    color: "rgba(5, 24, 53, 1)",
    fontSize: 23,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_57_31: {
    width: wp("49.11684782608695%"),
    minWidth: wp("49.11684782608695%"),
    minHeight: hp("16.80327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.41847826086957%"),
    top: hp("247.40437158469945%")
  },
  Text_57_31: {
    color: "rgba(5, 24, 53, 1)",
    fontSize: 23,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_53_5: {
    width: wp("17.866847826086957%"),
    minWidth: wp("17.866847826086957%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.434782608695652%"),
    top: hp("133.74316939890713%")
  },
  Text_53_5: {
    color: "rgba(5, 24, 53, 1)",
    fontSize: 21,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_53_6: {
    width: wp("2.6494565217391304%"),
    minWidth: wp("2.6494565217391304%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.605978260869565%"),
    top: hp("134.4262295081967%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_53_7: {
    width: wp("2.649456262588501%"),
    height: hp("2.246424669776458%"),
    top: hp("0.6527593227032185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_53_8: {
    width: wp("2.649456262588501%"),
    height: hp("2.246424669776458%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_53_9: {
    width: wp("2.649456262588501%"),
    height: hp("2.246424669776458%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_57_2: {
    width: wp("30.842391304347828%"),
    minWidth: wp("30.842391304347828%"),
    height: hp("88.3879781420765%"),
    minHeight: hp("88.3879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.33423913043478%"),
    top: hp("64.34426229508196%"),
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_60_0: {
    width: wp("20.92391304347826%"),
    minWidth: wp("20.92391304347826%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.46195652173913%"),
    top: hp("107.92349726775956%")
  },
  View_57_3: {
    width: wp("20.92391304347826%"),
    minWidth: wp("20.92391304347826%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_57_4: {
    width: wp("2.717391304347826%"),
    minWidth: wp("2.717391304347826%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.9510869565217348%"),
    top: hp("1.639344262295083%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_57_5: {
    width: wp("2.0243879245675127%"),
    height: hp("3.027361207972459%"),
    top: hp("0.6865537883154218%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.645197992739476%")
  },
  ImageBackground_57_6: {
    width: wp("2.0243879245675127%"),
    height: hp("3.027361207972459%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_57_8: {
    width: wp("2.717391304347826%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_57_9: {
    width: wp("2.717391304347826%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_57_26: {
    width: wp("15.692934782608695%"),
    minWidth: wp("15.692934782608695%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.891304347826086%"),
    top: hp("2.185792349726782%")
  },
  Text_57_26: {
    color: "rgba(5, 24, 53, 1)",
    fontSize: 21,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_59_7: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("62.841530054644814%"),
    minHeight: hp("62.841530054644814%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1358695652173913%"),
    top: hp("273.6338797814208%"),
    backgroundColor: "rgba(246, 246, 246, 1)"
  },
  View_60_1: {
    width: wp("86.07336956521739%"),
    minWidth: wp("86.07336956521739%"),
    minHeight: hp("15.983606557377051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.434782608695652%"),
    top: hp("283.0601092896175%")
  },
  Text_60_1: {
    color: "rgba(5, 24, 53, 1)",
    fontSize: 39,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_61_2: {
    width: wp("18.206521739130434%"),
    minWidth: wp("18.206521739130434%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.434782608695652%"),
    top: hp("305.1912568306011%")
  },
  Text_61_2: {
    color: "rgba(5, 24, 53, 1)",
    fontSize: 39,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_61_3: {
    width: wp("15.013586956521738%"),
    minWidth: wp("15.013586956521738%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.959239130434785%"),
    top: hp("305.0546448087432%")
  },
  Text_61_3: {
    color: "rgba(5, 24, 53, 1)",
    fontSize: 39,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_61_4: {
    width: wp("15.013586956521738%"),
    minWidth: wp("15.013586956521738%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.902173913043484%"),
    top: hp("305.0546448087432%")
  },
  Text_61_4: {
    color: "rgba(5, 24, 53, 1)",
    fontSize: 39,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_61_5: {
    width: wp("15.013586956521738%"),
    minWidth: wp("15.013586956521738%"),
    minHeight: hp("20.491803278688526%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.18478260869566%"),
    top: hp("305.0546448087432%")
  },
  Text_61_5: {
    color: "rgba(5, 24, 53, 1)",
    fontSize: 39,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_61_7: {
    width: wp("71.39945652173914%"),
    minWidth: wp("71.39945652173914%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.902173913043477%"),
    top: hp("4.781420765027322%")
  },
  View_61_8: {
    width: wp("6.929347826086957%"),
    minWidth: wp("6.929347826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.28260869565218%"),
    top: hp("2.5956284153005464%")
  },
  Text_61_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_61_9: {
    width: wp("11.616847826086957%"),
    minWidth: wp("11.616847826086957%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.5956284153005464%")
  },
  View_61_10: {
    width: wp("11.616847826086957%"),
    minWidth: wp("11.616847826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_61_10: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_61_11: {
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
  View_61_12: {
    width: wp("0.9510863086451654%"),
    height: hp("1.2949656919052042%"),
    top: hp("0.547873908704748%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_61_13: {
    width: wp("0.9510863086451654%"),
    height: hp("1.2949656919052042%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_61_15: {
    width: wp("11.616847826086957%"),
    minWidth: wp("11.616847826086957%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.60597826086957%"),
    top: hp("2.5956284153005464%")
  },
  View_61_16: {
    width: wp("11.616847826086957%"),
    minWidth: wp("11.616847826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_61_16: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_61_17: {
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
  View_61_18: {
    width: wp("0.9510863086451654%"),
    height: hp("1.2949656919052042%"),
    top: hp("0.547873908704748%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_61_19: {
    width: wp("0.9510863086451654%"),
    height: hp("1.2949656919052042%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_61_21: {
    width: wp("11.616847826086957%"),
    minWidth: wp("11.616847826086957%"),
    height: hp("5.327868852459016%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.464673913043477%"),
    top: hp("2.5956284153005464%")
  },
  View_61_22: {
    width: wp("11.616847826086957%"),
    minWidth: wp("11.616847826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_61_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_61_23: {
    width: wp("0.9510869565217392%"),
    minWidth: wp("0.9510869565217392%"),
    height: hp("2.390710382513661%"),
    minHeight: hp("2.390710382513661%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.793478260869563%"),
    top: hp("1.502732240437159%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_61_24: {
    width: wp("0.9510863086451654%"),
    height: hp("1.2949656919052042%"),
    top: hp("0.547873908704748%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_61_25: {
    width: wp("0.9510863086451654%"),
    height: hp("1.2949656919052042%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_61_27: {
    width: wp("16.23641304347826%"),
    minWidth: wp("16.23641304347826%"),
    height: hp("9.562841530054644%"),
    minHeight: hp("9.562841530054644%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.16304347826087%"),
    top: hp("0%"),
    backgroundColor: "rgba(241, 169, 1, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_61_28: {
    width: wp("11.073369565217392%"),
    minWidth: wp("11.073369565217392%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.744565217391305%"),
    top: hp("1.639344262295082%")
  },
  Text_61_28: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_61_30: {
    width: wp("38.247282608695656%"),
    minWidth: wp("38.247282608695656%"),
    height: hp("87.8415300546448%"),
    minHeight: hp("87.8415300546448%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.434782608695652%"),
    top: hp("173.224043715847%"),
    resizeMode: "cover"
  },
  View_2: { height: 2985 }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
