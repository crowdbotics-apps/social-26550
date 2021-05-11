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
      <View style={styles.View_37_2} />
      <View style={styles.View_37_94}>
        <Text style={styles.Text_37_94}>Platform</Text>
      </View>
      <View style={styles.View_37_95}>
        <Text style={styles.Text_37_95}>Help</Text>
      </View>
      <View style={styles.View_37_96}>
        <Text style={styles.Text_37_96}>Business Resources</Text>
      </View>
      <View style={styles.View_37_97}>
        <Text style={styles.Text_37_97}>Developer Resources</Text>
      </View>
      <View style={styles.View_37_98}>
        <Text style={styles.Text_37_98}>Social.africa</Text>
      </View>
      <View style={styles.View_37_99}>
        <Text style={styles.Text_37_99}>©2021 - Social Africa.</Text>
      </View>
      <View style={styles.View_37_100}>
        <Text style={styles.Text_37_100}>Help Center</Text>
      </View>
      <View style={styles.View_37_126}>
        <Text style={styles.Text_37_126}>Advertise</Text>
      </View>
      <View style={styles.View_37_127}>
        <Text style={styles.Text_37_127}>Developer Home</Text>
      </View>
      <View style={styles.View_37_128}>
        <Text style={styles.Text_37_128}>Status</Text>
      </View>
      <View style={styles.View_37_129}>
        <Text style={styles.Text_37_129}>Ads Help Center</Text>
      </View>
      <View style={styles.View_37_130}>
        <Text style={styles.Text_37_130}>Resources and Guide</Text>
      </View>
      <View style={styles.View_37_131}>
        <Text style={styles.Text_37_131}>Documentation</Text>
      </View>
      <View style={styles.View_37_132}>
        <Text style={styles.Text_37_132}>Privacy Center</Text>
      </View>
      <View style={styles.View_37_133}>
        <Text style={styles.Text_37_133}>Security and Safety</Text>
      </View>
      <View style={styles.View_37_134}>
        <Text style={styles.Text_37_134}>Marketing Insights</Text>
      </View>
      <View style={styles.View_37_135}>
        <Text style={styles.Text_37_135}>Forums</Text>
      </View>
      <View style={styles.View_37_136}>
        <Text style={styles.Text_37_136}>Transparency center</Text>
      </View>
      <View style={styles.View_37_137}>
        <Text style={styles.Text_37_137}>Managing your account</Text>
      </View>
      <View style={styles.View_37_138}>
        <Text style={styles.Text_37_138}>Brand Inspiration</Text>
      </View>
      <View style={styles.View_37_139}>
        <Text style={styles.Text_37_139}>Communities</Text>
      </View>
      <View style={styles.View_37_140}>
        <Text style={styles.Text_37_140}>Rules and Policies</Text>
      </View>
      <View style={styles.View_37_141}>
        <Text style={styles.Text_37_141}>Social Data</Text>
      </View>
      <View style={styles.View_37_142}>
        <Text style={styles.Text_37_142}>Developer Blog</Text>
      </View>
      <View style={styles.View_37_143}>
        <Text style={styles.Text_37_143}>Contact Us</Text>
      </View>
      <View style={styles.View_37_144}>
        <Text style={styles.Text_37_144}>Cookies</Text>
      </View>
      <View style={styles.View_37_145}>
        <Text style={styles.Text_37_145}>Valley Africa</Text>
      </View>
      <View style={styles.View_37_146}>
        <Text style={styles.Text_37_146}>Privacy Policy</Text>
      </View>
      <View style={styles.View_37_147}>
        <Text style={styles.Text_37_147}>Developer Terms</Text>
      </View>
      <View style={styles.View_37_148}>
        <Text style={styles.Text_37_148}>Terms and Conditions</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e35/8f71/0c09f5d1751f934a2446ef21ec3e58cb"
        }}
        style={styles.ImageBackground_37_153}
      />
      <View style={styles.View_37_159}>
        <Text style={styles.Text_37_159}>Hi, How can we help you?</Text>
      </View>
      <View style={styles.View_37_183}>
        <Text style={styles.Text_37_183}>
          Popular searches: Privacy, Blocking, Rules and Policies, Direct
          Messages
        </Text>
      </View>
      <View style={styles.View_37_184}>
        <View style={styles.View_37_6} />
        <View style={styles.View_37_160} />
        <View style={styles.View_37_161}>
          <Text style={styles.Text_37_161}>Search</Text>
        </View>
        <View style={styles.View_37_162}>
          <Text style={styles.Text_37_162}>Search Social Africa help</Text>
        </View>
        <View style={styles.View_37_163}>
          <View style={styles.View_37_164}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8af7/d6c1/023d6ec80fe78beb75d26f10a53d2920"
              }}
              style={styles.ImageBackground_37_165}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_42_1} />
      <View style={styles.View_42_49} />
      <View style={styles.View_42_85} />
      <View style={styles.View_42_2}>
        <Text style={styles.Text_42_2}>Account</Text>
      </View>
      <View style={styles.View_42_50}>
        <Text style={styles.Text_42_50}>Safety &amp; Security</Text>
      </View>
      <View style={styles.View_42_86}>
        <Text style={styles.Text_42_86}>Rules &amp; Policies</Text>
      </View>
      <View style={styles.View_42_3}>
        <View style={styles.View_42_4}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/accf/ce97/3ee0126170d32f2258d7733a2db636be"
            }}
            style={styles.ImageBackground_42_5}
          />
        </View>
        <View style={styles.View_42_7}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e867/1d7d/43719189eb0d93240202219173ef7a3d"
            }}
            style={styles.ImageBackground_42_8}
          />
        </View>
        <View style={styles.View_42_10}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e867/1d7d/43719189eb0d93240202219173ef7a3d"
            }}
            style={styles.ImageBackground_42_11}
          />
        </View>
        <View style={styles.View_42_13}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e867/1d7d/43719189eb0d93240202219173ef7a3d"
            }}
            style={styles.ImageBackground_42_14}
          />
        </View>
        <View style={styles.View_42_16}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af2c/5701/a919825e70438b9afa79e52516d42c8c"
            }}
            style={styles.ImageBackground_42_17}
          />
        </View>
        <View style={styles.View_42_19}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd89/052e/cc621b43ed3a9ab41c53e23ccf59e9cf"
            }}
            style={styles.ImageBackground_42_20}
          />
        </View>
        <View style={styles.View_42_22}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/163a/8bf5/a1f25ecc0b0c3bf880678e68b8fbd048"
            }}
            style={styles.ImageBackground_42_23}
          />
        </View>
        <View style={styles.View_42_25}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9f15/73e9/de65907ebebfacf41b66c4df231af524"
            }}
            style={styles.ImageBackground_42_26}
          />
        </View>
        <View style={styles.View_42_28}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddf3/3edf/3c8fcafa34f7f9ac50089c1db22fe10c"
            }}
            style={styles.ImageBackground_42_29}
          />
        </View>
        <View style={styles.View_42_31}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1788/9d6e/5ff88276674c1617818adee19a40edbc"
            }}
            style={styles.ImageBackground_42_32}
          />
        </View>
      </View>
      <View style={styles.View_41_0}>
        <Text style={styles.Text_41_0}>Browse common questions</Text>
      </View>
      <View style={styles.View_42_0} />
      <View style={styles.View_42_97} />
      <View style={styles.View_42_90}>
        <Text style={styles.Text_42_90}>
          Where can I find answers to common account questions?
        </Text>
      </View>
      <View style={styles.View_42_98}>
        <Text style={styles.Text_42_98}>
          Where can I find answers to common account questions?
        </Text>
      </View>
      <View style={styles.View_42_91}>
        <Text style={styles.Text_42_91}>
          How can I resolve issues when my account is suspended?
        </Text>
      </View>
      <View style={styles.View_42_99}>
        <Text style={styles.Text_42_99}>
          How can I resolve issues when my account is suspended?
        </Text>
      </View>
      <View style={styles.View_42_92}>
        <Text style={styles.Text_42_92}>
          How do I delete all my direct messages from my account?
        </Text>
      </View>
      <View style={styles.View_42_100}>
        <Text style={styles.Text_42_100}>
          How do I delete all my direct messages from my account?
        </Text>
      </View>
      <View style={styles.View_42_93}>
        <Text style={styles.Text_42_93}>
          How can I change the name on my account and adjust my settings?
        </Text>
      </View>
      <View style={styles.View_42_101}>
        <Text style={styles.Text_42_101}>
          How can I change the name on my account and adjust my settings?
        </Text>
      </View>
      <View style={styles.View_42_94}>
        <Text style={styles.Text_42_94}>
          Where can I find answers to common account questions?
        </Text>
      </View>
      <View style={styles.View_42_102}>
        <Text style={styles.Text_42_102}>
          Where can I find answers to common account questions?
        </Text>
      </View>
      <View style={styles.View_47_0}>
        <View style={styles.View_37_185} />
        <View style={styles.View_38_69} />
        <View style={styles.View_38_4} />
        <View style={styles.View_38_70} />
        <View style={styles.View_38_35} />
        <View style={styles.View_38_71} />
        <View style={styles.View_37_186}>
          <View style={styles.View_37_187}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a2e/83ef/f6955b0424721c9a45276d3c172b5e41"
              }}
              style={styles.ImageBackground_37_188}
            />
          </View>
          <View style={styles.View_37_190}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7234/bf7d/91ec50337fa531d9a839ef7972c09cc5"
              }}
              style={styles.ImageBackground_37_191}
            />
          </View>
          <View style={styles.View_37_193}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3dda/5010/a280db07d72ad03edb3d6515bdca84f3"
              }}
              style={styles.ImageBackground_37_194}
            />
          </View>
          <View style={styles.View_37_196}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b12/67f6/65464d049a5efee8063da5c9d8e56746"
              }}
              style={styles.ImageBackground_37_197}
            />
          </View>
          <View style={styles.View_37_199}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c171/6535/0236f20ac50a045e07f55b20f09909d7"
              }}
              style={styles.ImageBackground_37_200}
            />
          </View>
          <View style={styles.View_37_202}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83af/0349/0cafb6136268142b4c5fed87db867c8e"
              }}
              style={styles.ImageBackground_37_203}
            />
          </View>
          <View style={styles.View_37_205}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f64d/07c6/e9fa493d9340840570cd1064d43ecd24"
              }}
              style={styles.ImageBackground_37_206}
            />
          </View>
          <View style={styles.View_37_208}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3dda/5010/a280db07d72ad03edb3d6515bdca84f3"
              }}
              style={styles.ImageBackground_37_209}
            />
          </View>
          <View style={styles.View_37_211}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3dda/5010/a280db07d72ad03edb3d6515bdca84f3"
              }}
              style={styles.ImageBackground_37_212}
            />
          </View>
        </View>
        <View style={styles.View_38_2}>
          <Text style={styles.Text_38_2}>Support</Text>
        </View>
        <View style={styles.View_38_128}>
          <Text style={styles.Text_38_128}>Account Settings</Text>
        </View>
        <View style={styles.View_38_33}>
          <Text style={styles.Text_38_33}>Community</Text>
        </View>
        <View style={styles.View_38_129}>
          <Text style={styles.Text_38_129}>Privacy and Safety</Text>
        </View>
        <View style={styles.View_38_64}>
          <Text style={styles.Text_38_64}>Live Chat</Text>
        </View>
        <View style={styles.View_38_130}>
          <Text style={styles.Text_38_130}>Advertise</Text>
        </View>
        <View style={styles.View_38_3}>
          <Text style={styles.Text_38_3}>
            Raise a ticket and get your issues fixed.
          </Text>
        </View>
        <View style={styles.View_38_131}>
          <Text style={styles.Text_38_131}>
            Adjust settings, learn about name changes and more.
          </Text>
        </View>
        <View style={styles.View_38_34}>
          <Text style={styles.Text_38_34}>
            Get answers and tips in our community portal.
          </Text>
        </View>
        <View style={styles.View_38_132}>
          <Text style={styles.Text_38_132}>
            Control who can see what you share.
          </Text>
        </View>
        <View style={styles.View_38_65}>
          <Text style={styles.Text_38_65}>
            Message our support team via live messaging.
          </Text>
        </View>
        <View style={styles.View_38_133}>
          <Text style={styles.Text_38_133}>
            Create and manage your ads and optimize your results.
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3fc6/41bb/11c453170d1484ff650b76523d5b467a"
          }}
          style={styles.ImageBackground_38_66}
        />
        <View style={styles.View_38_137}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca5e/f9e1/9ab4c8eceb208f28070a08af2463a901"
            }}
            style={styles.ImageBackground_38_138}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a152/bfe3/6160a5e5810a0ecdc1156e3f8d5528f2"
          }}
          style={styles.ImageBackground_38_146}
        />
        <View style={styles.View_40_0}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6b6/0a64/20d09f9a074ed308e89fe35a8046d4c1"
            }}
            style={styles.ImageBackground_40_1}
          />
        </View>
        <View style={styles.View_40_5}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0bde/9988/f8ab0862eccf38841f6ca0244c058d95"
            }}
            style={styles.ImageBackground_40_6}
          />
        </View>
      </View>
      <View style={styles.View_42_82}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ffdf/88ee/778a351cd798edf8fe6667716ffd2061"
          }}
          style={styles.ImageBackground_42_83}
        />
      </View>
      <View style={styles.View_43_0} />
      <View style={styles.View_45_0}>
        <Text style={styles.Text_45_0}>
          Everything you need to know. Use Social Africa like a pro.
        </Text>
      </View>
      <View style={styles.View_47_1}>
        <View style={styles.View_45_1} />
        <View style={styles.View_45_3} />
        <View style={styles.View_45_2}>
          <Text style={styles.Text_45_2}>Get Support</Text>
        </View>
        <View style={styles.View_45_4}>
          <Text style={styles.Text_45_4}>Browse Articles</Text>
        </View>
      </View>
      <View style={styles.View_61_6}>
        <View style={styles.View_37_107}>
          <Text style={styles.Text_37_107}>Sign In</Text>
        </View>
        <View style={styles.View_37_108}>
          <View style={styles.View_37_109}>
            <Text style={styles.Text_37_109}>Advertising</Text>
          </View>
          <View style={styles.View_37_110}>
            <View style={styles.View_37_111}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2b5/0385/7cb6a8cab47f90205954b9db5d78de0e"
                }}
                style={styles.ImageBackground_37_112}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_37_114}>
          <View style={styles.View_37_115}>
            <Text style={styles.Text_37_115}>Resources</Text>
          </View>
          <View style={styles.View_37_116}>
            <View style={styles.View_37_117}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2b5/0385/7cb6a8cab47f90205954b9db5d78de0e"
                }}
                style={styles.ImageBackground_37_118}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_37_120}>
          <View style={styles.View_37_121}>
            <Text style={styles.Text_37_121}>Guides</Text>
          </View>
          <View style={styles.View_37_122}>
            <View style={styles.View_37_123}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2b5/0385/7cb6a8cab47f90205954b9db5d78de0e"
                }}
                style={styles.ImageBackground_37_124}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_45_6} />
        <View style={styles.View_45_7}>
          <Text style={styles.Text_45_7}>Create Ad</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/14f1/4d39/b222d856cf2ced25e0fb3faa493dd82c"
        }}
        style={styles.ImageBackground_46_0}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_37_2: {
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
  View_37_94: {
    width: wp("8.89945652173913%"),
    minWidth: wp("8.89945652173913%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6494565217391304%"),
    top: hp("407.51366120218574%")
  },
  Text_37_94: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_95: {
    width: wp("8.89945652173913%"),
    minWidth: wp("8.89945652173913%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.611413043478258%"),
    top: hp("407.51366120218574%")
  },
  Text_37_95: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_96: {
    width: wp("20.108695652173914%"),
    minWidth: wp("20.108695652173914%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.6983695652174%"),
    top: hp("407.51366120218574%")
  },
  Text_37_96: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_97: {
    width: wp("20.108695652173914%"),
    minWidth: wp("20.108695652173914%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.7663043478261%"),
    top: hp("407.51366120218574%")
  },
  Text_37_97: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_98: {
    width: wp("12.975543478260871%"),
    minWidth: wp("12.975543478260871%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6494565217391304%"),
    top: hp("414.89071038251365%")
  },
  Text_37_98: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_99: {
    width: wp("18.817934782608695%"),
    minWidth: wp("18.817934782608695%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6494565217391304%"),
    top: hp("456.1475409836065%")
  },
  Text_37_99: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_100: {
    width: wp("12.975543478260871%"),
    minWidth: wp("12.975543478260871%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.611413043478258%"),
    top: hp("414.89071038251365%")
  },
  Text_37_100: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_126: {
    width: wp("12.907608695652172%"),
    minWidth: wp("12.907608695652172%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.6983695652174%"),
    top: hp("414.89071038251365%")
  },
  Text_37_126: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_127: {
    width: wp("15.625%"),
    minWidth: wp("15.625%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.7663043478261%"),
    top: hp("414.89071038251365%")
  },
  Text_37_127: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_128: {
    width: wp("12.975543478260871%"),
    minWidth: wp("12.975543478260871%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6494565217391304%"),
    top: hp("420.62841530054646%")
  },
  Text_37_128: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_129: {
    width: wp("17.1875%"),
    minWidth: wp("17.1875%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.611413043478258%"),
    top: hp("420.62841530054646%")
  },
  Text_37_129: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_130: {
    width: wp("20.108695652173914%"),
    minWidth: wp("20.108695652173914%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.6983695652174%"),
    top: hp("420.62841530054646%")
  },
  Text_37_130: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_131: {
    width: wp("20.108695652173914%"),
    minWidth: wp("20.108695652173914%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.7663043478261%"),
    top: hp("420.62841530054646%")
  },
  Text_37_131: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_132: {
    width: wp("14.0625%"),
    minWidth: wp("14.0625%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6494565217391304%"),
    top: hp("426.2295081967213%")
  },
  Text_37_132: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_133: {
    width: wp("18.342391304347828%"),
    minWidth: wp("18.342391304347828%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.611413043478258%"),
    top: hp("426.2295081967213%")
  },
  Text_37_133: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_134: {
    width: wp("18.27445652173913%"),
    minWidth: wp("18.27445652173913%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.6983695652174%"),
    top: hp("426.2295081967213%")
  },
  Text_37_134: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_135: {
    width: wp("18.27445652173913%"),
    minWidth: wp("18.27445652173913%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.7663043478261%"),
    top: hp("426.2295081967213%")
  },
  Text_37_135: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_136: {
    width: wp("20.17663043478261%"),
    minWidth: wp("20.17663043478261%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6494565217391304%"),
    top: hp("432.37704918032784%")
  },
  Text_37_136: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_137: {
    width: wp("22.894021739130434%"),
    minWidth: wp("22.894021739130434%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.611413043478258%"),
    top: hp("432.37704918032784%")
  },
  Text_37_137: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_138: {
    width: wp("22.894021739130434%"),
    minWidth: wp("22.894021739130434%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.6983695652174%"),
    top: hp("432.37704918032784%")
  },
  Text_37_138: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_139: {
    width: wp("22.894021739130434%"),
    minWidth: wp("22.894021739130434%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.7663043478261%"),
    top: hp("432.37704918032784%")
  },
  Text_37_139: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_140: {
    width: wp("22.554347826086957%"),
    minWidth: wp("22.554347826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.611413043478258%"),
    top: hp("438.25136612021856%")
  },
  Text_37_140: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_141: {
    width: wp("22.554347826086957%"),
    minWidth: wp("22.554347826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.6983695652174%"),
    top: hp("438.52459016393436%")
  },
  Text_37_141: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_142: {
    width: wp("22.554347826086957%"),
    minWidth: wp("22.554347826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.7663043478261%"),
    top: hp("438.52459016393436%")
  },
  Text_37_142: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_143: {
    width: wp("22.554347826086957%"),
    minWidth: wp("22.554347826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.611413043478258%"),
    top: hp("443.71584699453547%")
  },
  Text_37_143: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_144: {
    width: wp("7.676630434782608%"),
    minWidth: wp("7.676630434782608%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.611413043478258%"),
    top: hp("456.1475409836065%")
  },
  Text_37_144: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_145: {
    width: wp("22.554347826086957%"),
    minWidth: wp("22.554347826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.6983695652174%"),
    top: hp("443.8524590163935%")
  },
  Text_37_145: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_146: {
    width: wp("13.31521739130435%"),
    minWidth: wp("13.31521739130435%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51.6983695652174%"),
    top: hp("456.1475409836065%")
  },
  Text_37_146: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_147: {
    width: wp("22.554347826086957%"),
    minWidth: wp("22.554347826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.7663043478261%"),
    top: hp("443.8524590163935%")
  },
  Text_37_147: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_148: {
    width: wp("22.554347826086957%"),
    minWidth: wp("22.554347826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.7663043478261%"),
    top: hp("456.1475409836065%")
  },
  Text_37_148: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_37_153: {
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
  View_37_159: {
    width: wp("69.90489130434783%"),
    minWidth: wp("69.90489130434783%"),
    minHeight: hp("15.027322404371585%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.741847826086957%"),
    top: hp("38.52459016393443%")
  },
  Text_37_159: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 57,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_183: {
    width: wp("62.56793478260869%"),
    minWidth: wp("62.56793478260869%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.410326086956523%"),
    top: hp("76.91256830601093%")
  },
  Text_37_183: {
    color: "rgba(211, 211, 211, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_184: {
    width: wp("74.93206521739131%"),
    minWidth: wp("74.93206521739131%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.228260869565217%"),
    top: hp("59.42622950819673%")
  },
  View_37_6: {
    width: wp("74.93206521739131%"),
    minWidth: wp("74.93206521739131%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(241, 169, 1, 1)",
    opacity: 0,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: 3,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_37_160: {
    width: wp("16.508152173913043%"),
    minWidth: wp("16.508152173913043%"),
    height: hp("12.158469945355192%"),
    minHeight: hp("12.158469945355192%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.423913043478265%"),
    top: hp("0%"),
    backgroundColor: "rgba(241, 169, 1, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 0
  },
  View_37_161: {
    width: wp("7.608695652173914%"),
    minWidth: wp("7.608695652173914%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62.90760869565217%"),
    top: hp("3.1420765027322375%")
  },
  Text_37_161: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 25,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_162: {
    width: wp("35.39402173913043%"),
    minWidth: wp("35.39402173913043%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.366847826086955%"),
    top: hp("3.415300546448087%")
  },
  Text_37_162: {
    color: "rgba(211, 211, 211, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_163: {
    width: wp("2.0380434782608696%"),
    minWidth: wp("2.0380434782608696%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.038043478260869%"),
    top: hp("4.0983606557377%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_37_164: {
    width: wp("2.038042182507722%"),
    height: hp("4.09835857120368%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_37_165: {
    width: wp("2.038042182507722%"),
    height: hp("4.09835857120368%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_42_1: {
    width: wp("16.983695652173914%"),
    minWidth: wp("16.983695652173914%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.385869565217392%"),
    top: hp("212.2950819672131%"),
    backgroundColor: "rgba(241, 169, 1, 1)",
    borderColor: "rgba(241, 169, 1, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_42_49: {
    width: wp("22.96195652173913%"),
    minWidth: wp("22.96195652173913%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.13586956521739%"),
    top: hp("212.2950819672131%"),
    backgroundColor: "rgba(240, 240, 240, 1)",
    borderColor: "rgba(200, 200, 200, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_42_85: {
    width: wp("21.807065217391305%"),
    minWidth: wp("21.807065217391305%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.932065217391305%"),
    top: hp("212.2950819672131%"),
    backgroundColor: "rgba(240, 240, 240, 1)",
    borderColor: "rgba(200, 200, 200, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_42_2: {
    width: wp("9.646739130434783%"),
    minWidth: wp("9.646739130434783%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.432065217391305%"),
    top: hp("215.43715846994536%")
  },
  Text_42_2: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_42_50: {
    width: wp("19.36141304347826%"),
    minWidth: wp("19.36141304347826%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.736413043478258%"),
    top: hp("215.98360655737702%")
  },
  Text_42_50: {
    color: "rgba(241, 169, 1, 1)",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_42_86: {
    width: wp("17.05163043478261%"),
    minWidth: wp("17.05163043478261%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.5516304347826%"),
    top: hp("215.98360655737702%")
  },
  Text_42_86: {
    color: "rgba(241, 169, 1, 1)",
    fontSize: 22,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_42_3: {
    width: wp("4.076086956521739%"),
    minWidth: wp("4.076086956521739%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.220108695652174%"),
    top: hp("214.89071038251367%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_42_4: {
    width: wp("3.5601405993751856%"),
    height: hp("6.134145767962346%"),
    top: hp("0.390625%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_42_5: {
    width: wp("3.5601405993751856%"),
    height: hp("6.134145767962346%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_42_7: {
    width: wp("0.119735818842183%"),
    height: hp("0.24013981793096156%"),
    top: hp("1.0312940253586191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.25518666143002733%")
  },
  ImageBackground_42_8: {
    width: wp("0.119735818842183%"),
    height: hp("0.24013981793096156%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_42_10: {
    width: wp("0.11973568926686826%"),
    height: hp("0.24013981793096156%"),
    top: hp("1.0312940253586191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6368512692658808%")
  },
  ImageBackground_42_11: {
    width: wp("0.11973568926686826%"),
    height: hp("0.24013981793096156%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_42_13: {
    width: wp("0.11973568926686826%"),
    height: hp("0.24013981793096156%"),
    top: hp("1.0312940253586191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.44569761856742574%")
  },
  ImageBackground_42_14: {
    width: wp("0.11973568926686826%"),
    height: hp("0.24013981793096156%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_42_16: {
    width: wp("2.41323243016782%"),
    height: hp("0.24013981793096156%"),
    top: hp("1.0312940253586191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8920379306959063%")
  },
  ImageBackground_42_17: {
    width: wp("2.41323243016782%"),
    height: hp("0.24013981793096156%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_42_19: {
    width: wp("1.8397707006205684%"),
    height: hp("3.6996870093006904%"),
    top: hp("4.1064152952100414%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2363165150518007%")
  },
  ImageBackground_42_20: {
    width: wp("1.8397707006205684%"),
    height: hp("3.6996870093006904%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_42_22: {
    width: wp("0.79260079757027%"),
    height: hp("1.0674163943431416%"),
    top: hp("5.356735479636285%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.7692753335703966%")
  },
  ImageBackground_42_23: {
    width: wp("0.79260079757027%"),
    height: hp("1.0674163943431416%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_42_25: {
    width: wp("1.2663246496863987%"),
    height: hp("0.8807846757232165%"),
    top: hp("2.4407225228398204%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9115116285241172%")
  },
  ImageBackground_42_26: {
    width: wp("1.2663246496863987%"),
    height: hp("0.8807846757232165%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_42_28: {
    width: wp("0.8840225313020789%"),
    height: hp("0.2401396225058967%"),
    top: hp("3.593870069159834%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9752253656801972%")
  },
  ImageBackground_42_29: {
    width: wp("0.8840225313020789%"),
    height: hp("0.2401396225058967%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_42_31: {
    width: wp("0.5654408879902052%"),
    height: hp("0.24013988307264983%"),
    top: hp("4.1064319714822375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9752253656801972%")
  },
  ImageBackground_42_32: {
    width: wp("0.5654408879902052%"),
    height: hp("0.24013988307264983%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_41_0: {
    width: wp("47.41847826086957%"),
    minWidth: wp("47.41847826086957%"),
    minHeight: hp("9.972677595628415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.385869565217392%"),
    top: hp("198.49726775956285%")
  },
  Text_41_0: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 40,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_42_0: {
    width: wp("41.440217391304344%"),
    minWidth: wp("41.440217391304344%"),
    height: hp("77.59562841530054%"),
    minHeight: hp("77.59562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.385869565217392%"),
    top: hp("233.74316939890713%"),
    backgroundColor: "rgba(250, 250, 250, 1)",
    borderColor: "rgba(200, 200, 200, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_42_97: {
    width: wp("41.440217391304344%"),
    minWidth: wp("41.440217391304344%"),
    height: hp("77.59562841530054%"),
    minHeight: hp("77.59562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.85326086956522%"),
    top: hp("233.74316939890713%"),
    backgroundColor: "rgba(250, 250, 250, 1)",
    borderColor: "rgba(200, 200, 200, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_42_90: {
    width: wp("33.15217391304348%"),
    minWidth: wp("33.15217391304348%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.529891304347826%"),
    top: hp("240.57377049180326%")
  },
  Text_42_90: {
    color: "rgba(128, 128, 128, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_42_98: {
    width: wp("33.15217391304348%"),
    minWidth: wp("33.15217391304348%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.997282608695656%"),
    top: hp("240.57377049180326%")
  },
  Text_42_98: {
    color: "rgba(128, 128, 128, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_42_91: {
    width: wp("33.15217391304348%"),
    minWidth: wp("33.15217391304348%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.529891304347826%"),
    top: hp("253.55191256830602%")
  },
  Text_42_91: {
    color: "rgba(128, 128, 128, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_42_99: {
    width: wp("33.15217391304348%"),
    minWidth: wp("33.15217391304348%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.997282608695656%"),
    top: hp("253.55191256830602%")
  },
  Text_42_99: {
    color: "rgba(128, 128, 128, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_42_92: {
    width: wp("33.15217391304348%"),
    minWidth: wp("33.15217391304348%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.529891304347826%"),
    top: hp("266.53005464480873%")
  },
  Text_42_92: {
    color: "rgba(128, 128, 128, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_42_100: {
    width: wp("33.15217391304348%"),
    minWidth: wp("33.15217391304348%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.997282608695656%"),
    top: hp("266.53005464480873%")
  },
  Text_42_100: {
    color: "rgba(128, 128, 128, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_42_93: {
    width: wp("33.15217391304348%"),
    minWidth: wp("33.15217391304348%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.529891304347826%"),
    top: hp("279.78142076502735%")
  },
  Text_42_93: {
    color: "rgba(128, 128, 128, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_42_101: {
    width: wp("33.15217391304348%"),
    minWidth: wp("33.15217391304348%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.997282608695656%"),
    top: hp("279.78142076502735%")
  },
  Text_42_101: {
    color: "rgba(128, 128, 128, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_42_94: {
    width: wp("33.15217391304348%"),
    minWidth: wp("33.15217391304348%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.529891304347826%"),
    top: hp("293.44262295081967%")
  },
  Text_42_94: {
    color: "rgba(128, 128, 128, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_42_102: {
    width: wp("33.15217391304348%"),
    minWidth: wp("33.15217391304348%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56.997282608695656%"),
    top: hp("293.44262295081967%")
  },
  Text_42_102: {
    color: "rgba(128, 128, 128, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_0: {
    width: wp("87.63586956521739%"),
    minWidth: wp("87.63586956521739%"),
    height: hp("79.26242182163593%"),
    minHeight: hp("79.26242182163593%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.385869565217392%"),
    top: hp("108.46994535519126%")
  },
  View_37_185: {
    width: wp("27.64982140582541%"),
    minWidth: wp("27.64982140582541%"),
    height: hp("37.47441026030994%"),
    minHeight: hp("37.47441026030994%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(243, 243, 243, 1)",
    borderColor: "rgba(200, 200, 200, 1)",
    borderWidth: 0.996908962726593,
    borderTopLeftRadius: 19.93817901611328,
    borderTopRightRadius: 19.93817901611328,
    borderBottomLeftRadius: 19.93817901611328,
    borderBottomRightRadius: 19.93817901611328
  },
  View_38_69: {
    width: wp("27.64982140582541%"),
    minWidth: wp("27.64982140582541%"),
    height: hp("37.47441026030994%"),
    minHeight: hp("37.47441026030994%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41.788003223189904%"),
    backgroundColor: "rgba(243, 243, 243, 1)",
    borderColor: "rgba(200, 200, 200, 1)",
    borderWidth: 0.996908962726593,
    borderTopLeftRadius: 19.93817901611328,
    borderTopRightRadius: 19.93817901611328,
    borderBottomLeftRadius: 19.93817901611328,
    borderBottomRightRadius: 19.93817901611328
  },
  View_38_4: {
    width: wp("27.64982140582541%"),
    minWidth: wp("27.64982140582541%"),
    height: hp("37.47441026030994%"),
    minHeight: hp("37.47441026030994%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.993024079695992%"),
    top: hp("0%"),
    backgroundColor: "rgba(243, 243, 243, 1)",
    borderColor: "rgba(200, 200, 200, 1)",
    borderWidth: 0.996908962726593,
    borderTopLeftRadius: 19.93817901611328,
    borderTopRightRadius: 19.93817901611328,
    borderBottomLeftRadius: 19.93817901611328,
    borderBottomRightRadius: 19.93817901611328
  },
  View_38_70: {
    width: wp("27.64982140582541%"),
    minWidth: wp("27.64982140582541%"),
    height: hp("37.47441026030994%"),
    minHeight: hp("37.47441026030994%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.993024079695992%"),
    top: hp("41.788003223189904%"),
    backgroundColor: "rgba(243, 243, 243, 1)",
    borderColor: "rgba(200, 200, 200, 1)",
    borderWidth: 0.996908962726593,
    borderTopLeftRadius: 19.93817901611328,
    borderTopRightRadius: 19.93817901611328,
    borderBottomLeftRadius: 19.93817901611328,
    borderBottomRightRadius: 19.93817901611328
  },
  View_38_35: {
    width: wp("27.64982140582541%"),
    minWidth: wp("27.64982140582541%"),
    height: hp("37.47441026030994%"),
    minHeight: hp("37.47441026030994%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.986048159391984%"),
    top: hp("0%"),
    backgroundColor: "rgba(243, 243, 243, 1)",
    borderColor: "rgba(200, 200, 200, 1)",
    borderWidth: 0.996908962726593,
    borderTopLeftRadius: 19.93817901611328,
    borderTopRightRadius: 19.93817901611328,
    borderBottomLeftRadius: 19.93817901611328,
    borderBottomRightRadius: 19.93817901611328
  },
  View_38_71: {
    width: wp("27.64982140582541%"),
    minWidth: wp("27.64982140582541%"),
    height: hp("37.47441026030994%"),
    minHeight: hp("37.47441026030994%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59.986048159391984%"),
    top: hp("41.788003223189904%"),
    backgroundColor: "rgba(243, 243, 243, 1)",
    borderColor: "rgba(200, 200, 200, 1)",
    borderWidth: 0.996908962726593,
    borderTopLeftRadius: 19.93817901611328,
    borderTopRightRadius: 19.93817901611328,
    borderBottomLeftRadius: 19.93817901611328,
    borderBottomRightRadius: 19.93817901611328
  },
  View_37_186: {
    width: wp("5.8914873910986865%"),
    minWidth: wp("5.8914873910986865%"),
    height: hp("11.862403577794142%"),
    minHeight: hp("11.862403577794142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.912646418032438%"),
    top: hp("4.044000177435535%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_37_187: {
    width: wp("3.062273367591526%"),
    height: hp("6.716692252237289%"),
    top: hp("5.145713931224378%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_37_188: {
    width: wp("3.062273367591526%"),
    height: hp("6.716692252237289%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_37_190: {
    width: wp("3.062284511068593%"),
    height: hp("6.716692252237289%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.829203398331355%")
  },
  ImageBackground_37_191: {
    width: wp("3.062284511068593%"),
    height: hp("6.716692252237289%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_37_193: {
    width: wp("0.23013623836247815%"),
    height: hp("0.46337520489927203%"),
    top: hp("6.25324770401086%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.245318537173066%")
  },
  ImageBackground_37_194: {
    width: wp("0.23013623836247815%"),
    height: hp("0.46337520489927203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_37_196: {
    width: wp("3.110677263011103%"),
    height: hp("4.355726606858884%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_37_197: {
    width: wp("3.110677263011103%"),
    height: hp("4.355726606858884%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_37_199: {
    width: wp("3.1106767447098442%"),
    height: hp("4.355726085725378%"),
    top: hp("7.506682182270325%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.780806499978773%")
  },
  ImageBackground_37_200: {
    width: wp("3.1106767447098442%"),
    height: hp("4.355726085725378%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_37_202: {
    width: wp("0.8409830539122871%"),
    height: hp("1.2431147320023%"),
    top: hp("9.000213289521426%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.303534134574562%")
  },
  ImageBackground_37_203: {
    width: wp("0.8409830539122871%"),
    height: hp("1.2431147320023%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_37_205: {
    width: wp("0.7979330161343451%"),
    height: hp("1.8718367717305167%"),
    top: hp("0.788470825862376%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0240388953167496%")
  },
  ImageBackground_37_206: {
    width: wp("0.7979330161343451%"),
    height: hp("1.8718367717305167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_37_208: {
    width: wp("0.23013635174087857%"),
    height: hp("0.46337520489927203%"),
    top: hp("3.0835302801080218%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3079767641813866%")
  },
  ImageBackground_37_209: {
    width: wp("0.23013635174087857%"),
    height: hp("0.46337520489927203%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_37_211: {
    width: wp("0.23013623836247815%"),
    height: hp("0.4633746837657658%"),
    top: hp("10.472282034451851%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0528730309527887%")
  },
  ImageBackground_37_212: {
    width: wp("0.23013623836247815%"),
    height: hp("0.4633746837657658%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_38_2: {
    width: wp("20.017667438672937%"),
    minWidth: wp("20.017667438672937%"),
    minHeight: hp("5.931201788897071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8160738737686826%"),
    top: hp("18.33280552931822%")
  },
  Text_38_2: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24.904178619384766,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_38_128: {
    width: wp("20.017667438672937%"),
    minWidth: wp("20.017667438672937%"),
    minHeight: hp("5.931201788897071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8160738737686826%"),
    top: hp("60.12082125971226%")
  },
  Text_38_128: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24.904178619384766,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_38_33: {
    width: wp("20.017667438672937%"),
    minWidth: wp("20.017667438672937%"),
    minHeight: hp("5.931201788897071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.80909795346468%"),
    top: hp("18.33280552931822%")
  },
  Text_38_33: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24.904178619384766,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_38_129: {
    width: wp("20.017667438672937%"),
    minWidth: wp("20.017667438672937%"),
    minHeight: hp("5.931201788897071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33.80909795346468%"),
    top: hp("60.12082125971226%")
  },
  Text_38_129: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24.904178619384766,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_38_64: {
    width: wp("20.017667438672937%"),
    minWidth: wp("20.017667438672937%"),
    minHeight: hp("5.931201788897071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.80212203316066%"),
    top: hp("18.33280552931822%")
  },
  Text_38_64: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24.904178619384766,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_38_130: {
    width: wp("20.017667438672937%"),
    minWidth: wp("20.017667438672937%"),
    minHeight: hp("5.931201788897071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63.80212203316066%"),
    top: hp("60.12082125971226%")
  },
  Text_38_130: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24.904178619384766,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_38_3: {
    width: wp("25.306616658749785%"),
    minWidth: wp("25.306616658749785%"),
    minHeight: hp("5.931201788897071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2050794518512227%"),
    top: hp("24.533598019125677%")
  },
  Text_38_3: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19.9227237701416,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_38_131: {
    width: wp("25.306616658749785%"),
    minWidth: wp("25.306616658749785%"),
    minHeight: hp("5.931201788897071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2050794518512227%"),
    top: hp("66.32162625672386%")
  },
  Text_38_131: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19.9227237701416,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_38_34: {
    width: wp("25.306616658749785%"),
    minWidth: wp("25.306616658749785%"),
    minHeight: hp("5.931201788897071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.19809523872707%"),
    top: hp("24.533598019125677%")
  },
  Text_38_34: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19.9227237701416,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_38_132: {
    width: wp("25.306616658749785%"),
    minWidth: wp("25.306616658749785%"),
    minHeight: hp("5.931201788897071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.19809523872707%"),
    top: hp("66.32162625672386%")
  },
  Text_38_132: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19.9227237701416,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_38_65: {
    width: wp("25.306616658749785%"),
    minWidth: wp("25.306616658749785%"),
    minHeight: hp("5.931201788897071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.1911276112432%"),
    top: hp("24.533598019125677%")
  },
  Text_38_65: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19.9227237701416,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_38_133: {
    width: wp("25.306616658749785%"),
    minWidth: wp("25.306616658749785%"),
    minHeight: hp("5.931201788897071%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61.1911276112432%"),
    top: hp("66.32162625672386%")
  },
  Text_38_133: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19.9227237701416,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_38_66: {
    width: wp("5.8914873910986865%"),
    height: hp("11.862403577794142%"),
    top: hp("4.044000177435535%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.90567049772843%")
  },
  View_38_137: {
    width: wp("5.8914873910986865%"),
    minWidth: wp("5.8914873910986865%"),
    height: hp("11.862403577794142%"),
    minHeight: hp("11.862403577794142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.89869457742442%"),
    top: hp("4.044000177435535%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_38_138: {
    width: wp("5.523269072822902%"),
    height: hp("11.120951501398139%"),
    top: hp("0.3706968547216576%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.18410889998726532%")
  },
  ImageBackground_38_146: {
    width: wp("5.8914873910986865%"),
    height: hp("11.862403577794142%"),
    top: hp("45.83201590782956%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.912646418032438%")
  },
  View_40_0: {
    width: wp("5.8914873910986865%"),
    minWidth: wp("5.8914873910986865%"),
    height: hp("11.862403577794142%"),
    minHeight: hp("11.862403577794142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.90567049772843%"),
    top: hp("45.83201590782956%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_40_1: {
    width: wp("5.016912066418191%"),
    height: hp("11.862391070589993%"),
    top: hp("-0.000016676272167615025%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.43727211330248394%")
  },
  View_40_5: {
    width: wp("5.8914873910986865%"),
    minWidth: wp("5.8914873910986865%"),
    height: hp("11.862403577794142%"),
    minHeight: hp("11.862403577794142%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70.89869457742442%"),
    top: hp("45.83201590782956%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_40_6: {
    width: wp("5.715214687844981%"),
    height: hp("11.862403577794142%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08812779965607831%")
  },
  View_42_82: {
    width: wp("3.3967391304347823%"),
    minWidth: wp("3.3967391304347823%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.154891304347828%"),
    top: hp("214.75409836065575%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_42_83: {
    width: wp("2.865998641304348%"),
    height: hp("6.830596402694619%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2653702445652151%")
  },
  View_43_0: {
    width: wp("101.15489130434783%"),
    minWidth: wp("101.15489130434783%"),
    height: hp("71.85792349726776%"),
    minHeight: hp("71.85792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-1.0869565217391304%"),
    top: hp("326.09289617486337%"),
    backgroundColor: "rgba(218, 255, 188, 1)"
  },
  View_45_0: {
    width: wp("68.13858695652173%"),
    minWidth: wp("68.13858695652173%"),
    minHeight: hp("27.049180327868854%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.032608695652172%"),
    top: hp("335.92896174863387%")
  },
  Text_45_0: {
    color: "rgba(2, 34, 21, 1)",
    fontSize: 54,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_47_1: {
    width: wp("43.546195652173914%"),
    minWidth: wp("43.546195652173914%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.328804347826086%"),
    top: hp("370.76502732240436%")
  },
  View_45_1: {
    width: wp("19.83695652173913%"),
    minWidth: wp("19.83695652173913%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(2, 34, 21, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_45_3: {
    width: wp("19.83695652173913%"),
    minWidth: wp("19.83695652173913%"),
    height: hp("11.748633879781421%"),
    minHeight: hp("11.748633879781421%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.70923913043478%"),
    top: hp("0%"),
    backgroundColor: "rgba(2, 34, 21, 1)",
    opacity: 0,
    borderColor: "rgba(2, 34, 21, 1)",
    borderWidth: 3,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_45_2: {
    width: wp("16.032608695652172%"),
    minWidth: wp("16.032608695652172%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9021739130434803%"),
    top: hp("2.8688524590164093%")
  },
  Text_45_2: {
    color: "rgba(240, 240, 240, 1)",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_45_4: {
    width: wp("16.032608695652172%"),
    minWidth: wp("16.032608695652172%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.611413043478258%"),
    top: hp("2.8688524590164093%")
  },
  Text_45_4: {
    color: "rgba(2, 34, 21, 1)",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_61_6: {
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
  View_37_107: {
    width: wp("6.929347826086957%"),
    minWidth: wp("6.929347826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.28260869565218%"),
    top: hp("2.5956284153005464%")
  },
  Text_37_107: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_108: {
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
  View_37_109: {
    width: wp("11.616847826086957%"),
    minWidth: wp("11.616847826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_37_109: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_110: {
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
  View_37_111: {
    width: wp("0.9510863086451654%"),
    height: hp("1.2949656919052042%"),
    top: hp("0.547873908704748%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_37_112: {
    width: wp("0.9510863086451654%"),
    height: hp("1.2949656919052042%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_37_114: {
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
  View_37_115: {
    width: wp("11.616847826086957%"),
    minWidth: wp("11.616847826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_37_115: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_116: {
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
  View_37_117: {
    width: wp("0.9510863086451654%"),
    height: hp("1.2949656919052042%"),
    top: hp("0.547873908704748%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_37_118: {
    width: wp("0.9510863086451654%"),
    height: hp("1.2949656919052042%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_37_120: {
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
  View_37_121: {
    width: wp("11.616847826086957%"),
    minWidth: wp("11.616847826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_37_121: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_37_122: {
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
  View_37_123: {
    width: wp("0.9510863086451654%"),
    height: hp("1.2949656919052042%"),
    top: hp("0.547873908704748%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_37_124: {
    width: wp("0.9510863086451654%"),
    height: hp("1.2949656919052042%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_45_6: {
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
  View_45_7: {
    width: wp("11.073369565217392%"),
    minWidth: wp("11.073369565217392%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.744565217391305%"),
    top: hp("1.639344262295082%")
  },
  Text_45_7: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_46_0: {
    width: wp("4.076086956521739%"),
    height: hp("8.19672131147541%"),
    top: hp("214.89071038251367%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.67934782608695%")
  },
  View_2: { height: 3426 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
