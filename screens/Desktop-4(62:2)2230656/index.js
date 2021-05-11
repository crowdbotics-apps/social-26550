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
      <View style={styles.View_62_3}>
        <View style={styles.View_62_4}>
          <Text style={styles.Text_62_4}>Platform</Text>
        </View>
        <View style={styles.View_62_5}>
          <Text style={styles.Text_62_5}>Help</Text>
        </View>
        <View style={styles.View_62_6}>
          <Text style={styles.Text_62_6}>Business Resources</Text>
        </View>
        <View style={styles.View_62_7}>
          <Text style={styles.Text_62_7}>Developer Resources</Text>
        </View>
        <View style={styles.View_62_8}>
          <Text style={styles.Text_62_8}>Social.africa</Text>
        </View>
        <View style={styles.View_62_9}>
          <Text style={styles.Text_62_9}>©2021 - Social Africa.</Text>
        </View>
        <View style={styles.View_62_10}>
          <Text style={styles.Text_62_10}>Help Center</Text>
        </View>
        <View style={styles.View_62_11}>
          <Text style={styles.Text_62_11}>Advertise</Text>
        </View>
        <View style={styles.View_62_12}>
          <Text style={styles.Text_62_12}>Developer Home</Text>
        </View>
        <View style={styles.View_62_13}>
          <Text style={styles.Text_62_13}>Status</Text>
        </View>
        <View style={styles.View_62_14}>
          <Text style={styles.Text_62_14}>Ads Help Center</Text>
        </View>
        <View style={styles.View_62_15}>
          <Text style={styles.Text_62_15}>Resources and Guide</Text>
        </View>
        <View style={styles.View_62_16}>
          <Text style={styles.Text_62_16}>Documentation</Text>
        </View>
        <View style={styles.View_62_17}>
          <Text style={styles.Text_62_17}>Privacy Center</Text>
        </View>
        <View style={styles.View_62_18}>
          <Text style={styles.Text_62_18}>Security and Safety</Text>
        </View>
        <View style={styles.View_62_19}>
          <Text style={styles.Text_62_19}>Marketing Insights</Text>
        </View>
        <View style={styles.View_62_20}>
          <Text style={styles.Text_62_20}>Forums</Text>
        </View>
        <View style={styles.View_62_21}>
          <Text style={styles.Text_62_21}>Transparency center</Text>
        </View>
        <View style={styles.View_62_22}>
          <Text style={styles.Text_62_22}>Managing your account</Text>
        </View>
        <View style={styles.View_62_23}>
          <Text style={styles.Text_62_23}>Brand Inspiration</Text>
        </View>
        <View style={styles.View_62_24}>
          <Text style={styles.Text_62_24}>Communities</Text>
        </View>
        <View style={styles.View_62_25}>
          <Text style={styles.Text_62_25}>Rules and Policies</Text>
        </View>
        <View style={styles.View_62_26}>
          <Text style={styles.Text_62_26}>Social Data</Text>
        </View>
        <View style={styles.View_62_27}>
          <Text style={styles.Text_62_27}>Developer Blog</Text>
        </View>
        <View style={styles.View_62_28}>
          <Text style={styles.Text_62_28}>Contact Us</Text>
        </View>
        <View style={styles.View_62_29}>
          <Text style={styles.Text_62_29}>Cookies</Text>
        </View>
        <View style={styles.View_62_30}>
          <Text style={styles.Text_62_30}>Valley Africa</Text>
        </View>
        <View style={styles.View_62_31}>
          <Text style={styles.Text_62_31}>Privacy Policy</Text>
        </View>
        <View style={styles.View_62_32}>
          <Text style={styles.Text_62_32}>Developer Terms</Text>
        </View>
        <View style={styles.View_62_33}>
          <Text style={styles.Text_62_33}>Terms and Conditions</Text>
        </View>
      </View>
      <View style={styles.View_62_34} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e35/8f71/0c09f5d1751f934a2446ef21ec3e58cb"
        }}
        style={styles.ImageBackground_62_35}
      />
      <View style={styles.View_62_36}>
        <Text style={styles.Text_62_36}>Achieve your marketing goals</Text>
      </View>
      <View style={styles.View_62_37}>
        <Text style={styles.Text_62_37}>
          With our Ads, brands and businesses can easily select campaign
          objectives that optimize towards a marketing goal
        </Text>
      </View>
      <View style={styles.View_62_38}>
        <Text style={styles.Text_62_38}>Expand your reach.</Text>
      </View>
      <View style={styles.View_62_40}>
        <Text style={styles.Text_62_40}>Advertise with confidence</Text>
      </View>
      <View style={styles.View_62_41}>
        <Text style={styles.Text_62_41}>
          Whether you’re launching something new or joining the conversation,
          connect with the people at the center of what’s happening. Start with
          them.
        </Text>
      </View>
      <View style={styles.View_62_43}>
        <Text style={styles.Text_62_43}>
          You don&#39;t have to be an expert to start advertising on Social
          Africa. Create and run campaigns using simple self-service tools, and
          track their performance with easy-to-read reports. More than two
          billion people use Social Africa every month – so no matter what kind
          of audience you want to reach, you&#39;ll find them here.
        </Text>
      </View>
      <View style={styles.View_62_50}>
        <Text style={styles.Text_62_50}>Learn how to run campaigns</Text>
      </View>
      <View style={styles.View_66_2}>
        <Text style={styles.Text_66_2}>Create an ad</Text>
      </View>
      <View style={styles.View_62_51}>
        <View style={styles.View_62_52}>
          <View style={styles.View_62_53}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9ff/e9e0/fd7adb990e589b40ae04b0ce471e5441"
              }}
              style={styles.ImageBackground_62_54}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_66_3}>
        <View style={styles.View_66_4}>
          <View style={styles.View_66_5}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c583/3cc2/35f54b8ed126938d04d51e47066d6e0a"
              }}
              style={styles.ImageBackground_66_6}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_62_73}>
        <View style={styles.View_62_74}>
          <Text style={styles.Text_62_74}>Sign In</Text>
        </View>
        <View style={styles.View_62_75}>
          <View style={styles.View_62_76}>
            <Text style={styles.Text_62_76}>Advertising</Text>
          </View>
          <View style={styles.View_62_77}>
            <View style={styles.View_62_78}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2b5/0385/7cb6a8cab47f90205954b9db5d78de0e"
                }}
                style={styles.ImageBackground_62_79}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_62_81}>
          <View style={styles.View_62_82}>
            <Text style={styles.Text_62_82}>Resources</Text>
          </View>
          <View style={styles.View_62_83}>
            <View style={styles.View_62_84}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2b5/0385/7cb6a8cab47f90205954b9db5d78de0e"
                }}
                style={styles.ImageBackground_62_85}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_62_87}>
          <View style={styles.View_62_88}>
            <Text style={styles.Text_62_88}>Guides</Text>
          </View>
          <View style={styles.View_62_89}>
            <View style={styles.View_62_90}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2b5/0385/7cb6a8cab47f90205954b9db5d78de0e"
                }}
                style={styles.ImageBackground_62_91}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_62_93} />
        <View style={styles.View_62_94}>
          <Text style={styles.Text_62_94}>Create Ad</Text>
        </View>
      </View>
      <View style={styles.View_66_8} />
      <View style={styles.View_68_15} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c145/211a/8b3a7deb3eb4b5322e437651a180dbcd"
        }}
        style={styles.ImageBackground_66_12}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67eb/761e/ae841cde357a21d54cc65563bba94d8b"
        }}
        style={styles.ImageBackground_68_16}
      />
      <View style={styles.View_67_2}>
        <Text style={styles.Text_67_2}>Image Ads</Text>
      </View>
      <View style={styles.View_68_17}>
        <Text style={styles.Text_68_17}>Video Ads</Text>
      </View>
      <View style={styles.View_68_2}>
        <Text style={styles.Text_68_2}>
          Drive people to destination websites or apps through high-quality and
          engaging visuals.
        </Text>
      </View>
      <View style={styles.View_68_18}>
        <Text style={styles.Text_68_18}>
          Show off product features and draw people in with sound and motion.
          Upload a video that you created.{" "}
        </Text>
      </View>
      <View style={styles.View_68_3}>
        <Text style={styles.Text_68_3}>Get image ad specifications</Text>
      </View>
      <View style={styles.View_68_19}>
        <Text style={styles.Text_68_19}>Get video ad specifications</Text>
      </View>
      <View style={styles.View_68_4}>
        <View style={styles.View_68_5}>
          <View style={styles.View_68_6}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/469c/2de3/f1ef2fdbba0181bca6fc74931d976e4d"
              }}
              style={styles.ImageBackground_68_7}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_68_20}>
        <View style={styles.View_68_21}>
          <View style={styles.View_68_22}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/469c/2de3/f1ef2fdbba0181bca6fc74931d976e4d"
              }}
              style={styles.ImageBackground_68_23}
            />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9bef/7953/f06fa56a35f4a7d69a53cc8d1768e669"
        }}
        style={styles.ImageBackground_68_9}
      />
      <View style={styles.View_68_31}>
        <View style={styles.View_68_32}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a23c/10e4/a1301ae9f2911bb9d6044413d4511fc8"
            }}
            style={styles.ImageBackground_68_33}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9ff/90a6/fc3be36d5ddaffa0247cb1eddf146a9b"
            }}
            style={styles.ImageBackground_68_42}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7dbb/fe0f/d9887f3ced5350b9cbd4f3689980d01c"
            }}
            style={styles.ImageBackground_68_43}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/489d/017c/ecdf63f353df358ff9f01d3662c8365e"
            }}
            style={styles.ImageBackground_68_44}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/668e/6b49/27e61cc0bb6556b08640acef0f5e639e"
            }}
            style={styles.ImageBackground_68_45}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b26d/e1d9/4465159827d80664cc25131f45546fd1"
            }}
            style={styles.ImageBackground_68_46}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b0c/311d/9abec206240c1bf3196c3f1c9b01fc21"
            }}
            style={styles.ImageBackground_68_47}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6ef/a8df/89bbd1ca817939e2a42b57aa01d6e8fd"
            }}
            style={styles.ImageBackground_68_48}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ae0/c37a/665e6094a9a21e96e84f3e550c9500b5"
            }}
            style={styles.ImageBackground_68_49}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e325/9955/d0c65df2201c9cde96aa0e1b65f67883"
            }}
            style={styles.ImageBackground_68_50}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ca7/23ea/b901f61ad486839ec816e48c02e2d28a"
            }}
            style={styles.ImageBackground_68_52}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e5b/f316/cd87a848d29554d4eeb6ceb6226be702"
            }}
            style={styles.ImageBackground_68_53}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c500/d5f1/740fcc0e44e46519a62d800a28fc0674"
            }}
            style={styles.ImageBackground_68_54}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1182/32b2/e2fe6c89274457def9ce750707467144"
            }}
            style={styles.ImageBackground_68_55}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b56a/a999/76f59c3de62c6dbab177aabbce7e4ddd"
            }}
            style={styles.ImageBackground_68_56}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85bb/7025/fbf1e4a3dfd62f091bb6ff978f52ecfb"
            }}
            style={styles.ImageBackground_68_57}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/95cc/cc1e/4e425ce2e78937b37eff46edafa14d1d"
        }}
        style={styles.ImageBackground_70_0}
      />
      <View style={styles.View_68_58} />
      <View style={styles.View_68_59} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c145/211a/8b3a7deb3eb4b5322e437651a180dbcd"
        }}
        style={styles.ImageBackground_68_60}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67eb/761e/ae841cde357a21d54cc65563bba94d8b"
        }}
        style={styles.ImageBackground_68_61}
      />
      <View style={styles.View_68_62}>
        <Text style={styles.Text_68_62}>Carousel Ads</Text>
      </View>
      <View style={styles.View_68_63}>
        <Text style={styles.Text_68_63}>Collection Ads</Text>
      </View>
      <View style={styles.View_68_64}>
        <Text style={styles.Text_68_64}>
          Display up to ten images or videos within a single ad, each with its
          own link.{" "}
        </Text>
      </View>
      <View style={styles.View_68_65}>
        <Text style={styles.Text_68_65}>
          Encourage shopping by displaying items from your product catalogue –
          customised for each individual.
        </Text>
      </View>
      <View style={styles.View_68_66}>
        <Text style={styles.Text_68_66}>Get carousel ad specifications</Text>
      </View>
      <View style={styles.View_68_67}>
        <Text style={styles.Text_68_67}>Get collection ad specifications</Text>
      </View>
      <View style={styles.View_68_68}>
        <View style={styles.View_68_69}>
          <View style={styles.View_68_70}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/469c/2de3/f1ef2fdbba0181bca6fc74931d976e4d"
              }}
              style={styles.ImageBackground_68_71}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_68_73}>
        <View style={styles.View_68_74}>
          <View style={styles.View_68_75}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/469c/2de3/f1ef2fdbba0181bca6fc74931d976e4d"
              }}
              style={styles.ImageBackground_68_76}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_68_111}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b28/ed59/dbaec8e090e63904edf51ffa8e12c601"
          }}
          style={styles.ImageBackground_68_112}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d99a/7c8b/b6d60c03b4456fe2e6048ddf96ce66f1"
          }}
          style={styles.ImageBackground_68_113}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5eb6/ba30/766517035baf7f2810093a73a68a6f0a"
          }}
          style={styles.ImageBackground_68_114}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4719/e30f/0ba930c4b1e2bb3edc77b6014df521e4"
          }}
          style={styles.ImageBackground_68_115}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1df3/d005/7fb79dd1bc490c6f232e44ff32d1ae3a"
          }}
          style={styles.ImageBackground_68_116}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d99a/7c8b/b6d60c03b4456fe2e6048ddf96ce66f1"
          }}
          style={styles.ImageBackground_68_117}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5eb6/ba30/766517035baf7f2810093a73a68a6f0a"
          }}
          style={styles.ImageBackground_68_118}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4719/e30f/0ba930c4b1e2bb3edc77b6014df521e4"
          }}
          style={styles.ImageBackground_68_119}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1df3/d005/7fb79dd1bc490c6f232e44ff32d1ae3a"
          }}
          style={styles.ImageBackground_68_120}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d99a/7c8b/b6d60c03b4456fe2e6048ddf96ce66f1"
          }}
          style={styles.ImageBackground_68_121}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5eb6/ba30/766517035baf7f2810093a73a68a6f0a"
          }}
          style={styles.ImageBackground_68_122}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4719/e30f/0ba930c4b1e2bb3edc77b6014df521e4"
          }}
          style={styles.ImageBackground_68_123}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1df3/d005/7fb79dd1bc490c6f232e44ff32d1ae3a"
          }}
          style={styles.ImageBackground_68_124}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0448/16f2/45ed56c661989359103ba696a2382876"
          }}
          style={styles.ImageBackground_68_125}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70fa/7ba0/c46d0893d8b7ff67e9ffed1b194f0486"
          }}
          style={styles.ImageBackground_68_126}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d881/e2f5/2b19716ef4dd4c568d07f076624610d2"
          }}
          style={styles.ImageBackground_68_127}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb8b/e7ac/7894ec3dd0837039058c79d6b1126ed7"
          }}
          style={styles.ImageBackground_68_128}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0448/16f2/45ed56c661989359103ba696a2382876"
          }}
          style={styles.ImageBackground_68_129}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2e4/b785/4b03abe11c1e9147d7e2d34ff14de126"
          }}
          style={styles.ImageBackground_68_130}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2e4/b785/4b03abe11c1e9147d7e2d34ff14de126"
          }}
          style={styles.ImageBackground_68_131}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2e4/b785/4b03abe11c1e9147d7e2d34ff14de126"
          }}
          style={styles.ImageBackground_68_132}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f383/bba9/4cc6bc8edfa006467ff5c9839efba8ba"
          }}
          style={styles.ImageBackground_68_133}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4ff/1719/dbcfb6c0adec98abd76cb7ba503f2835"
          }}
          style={styles.ImageBackground_68_134}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c46e/24bc/30ce97fd0f2de78b94588270b9d47eaf"
          }}
          style={styles.ImageBackground_68_141}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c46e/24bc/30ce97fd0f2de78b94588270b9d47eaf"
          }}
          style={styles.ImageBackground_68_142}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/70fa/7ba0/c46d0893d8b7ff67e9ffed1b194f0486"
          }}
          style={styles.ImageBackground_68_143}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5672/2182/ca5c4ff7b3a9c965e8efcded598b045f"
          }}
          style={styles.ImageBackground_68_144}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb8b/e7ac/7894ec3dd0837039058c79d6b1126ed7"
          }}
          style={styles.ImageBackground_68_145}
        />
      </View>
      <View style={styles.View_68_146}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73ae/1d85/850fadad1317ade278e728a3a47bea79"
          }}
          style={styles.ImageBackground_68_147}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ca35/da00/30eb85830015b7a69fff179cf169e7e8"
          }}
          style={styles.ImageBackground_68_148}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ee2/b138/59b0c6e52955ff5f1a0e3075855b7d82"
          }}
          style={styles.ImageBackground_68_149}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/099a/0ea4/1d48111816654fc1413e53161f703e0e"
          }}
          style={styles.ImageBackground_68_150}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b9a/f76b/2fd07c2b327f9737cdb071cfd99135b0"
          }}
          style={styles.ImageBackground_68_151}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a547/6f98/7e90db7280e47d803c39729ba3173c58"
          }}
          style={styles.ImageBackground_68_152}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/83e3/6e7b/01fc61255d248cc7873dc2ecb5116f84"
          }}
          style={styles.ImageBackground_68_153}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/facc/0337/470431adec2c2f965a0e3191d25fbaef"
          }}
          style={styles.ImageBackground_68_154}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/19d8/8c52/8e7ba7dce4a2eedcea1d80a62965a05e"
          }}
          style={styles.ImageBackground_68_155}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8047/05a3/d2eb999bd3ae2de7678d5178e27a828a"
          }}
          style={styles.ImageBackground_68_156}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6cd8/d22e/b2e47163157c39eda3b9e8ff2a66b146"
          }}
          style={styles.ImageBackground_68_157}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfe5/a77d/81e6364d7889adc025a2c6f99fd48f8f"
          }}
          style={styles.ImageBackground_68_158}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbc3/88d7/94e06cc4439680c52a0c8a6a0ff6223a"
          }}
          style={styles.ImageBackground_68_159}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e6b/9a08/f155cb122759a8350d2154201cc24552"
          }}
          style={styles.ImageBackground_68_162}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fe5/d563/024b3601252a8ed59d44bb44c26692e6"
          }}
          style={styles.ImageBackground_68_163}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2604/6eef/1c0004734550f05bacae52c7b4ecbc40"
          }}
          style={styles.ImageBackground_68_164}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56b2/f519/79091dff569f357db8bae25515b5eeff"
          }}
          style={styles.ImageBackground_68_165}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a4e/8fea/7fcd4fd9e2da4d0cce0267f76b79176e"
          }}
          style={styles.ImageBackground_68_166}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e99/035f/f8822184a1973d8474f4ec8ab9201a47"
          }}
          style={styles.ImageBackground_68_167}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/013e/4501/1d1bcfb00cbbefc372c86f95f208948d"
          }}
          style={styles.ImageBackground_68_168}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4330/368a/f5eae377b97faed0ed5c728d5220bbaa"
          }}
          style={styles.ImageBackground_68_169}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/032b/76da/78bd5a730cb10e60234f7decee1823b2"
          }}
          style={styles.ImageBackground_68_170}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc8f/f5e7/a4982333913dd20d859bb374be6b91b3"
          }}
          style={styles.ImageBackground_68_171}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d390/0506/6b60305bb9caca933ba60a062f9c1c7b"
          }}
          style={styles.ImageBackground_68_172}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/48b3/f1f4/f6d11b567fc29a3b6e7cb503561d9b81"
          }}
          style={styles.ImageBackground_68_173}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f4db/1805/6d05c7cd03735e282920300ebdc5be10"
          }}
          style={styles.ImageBackground_68_174}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1c74/c0f3/45e2b78e90c2911cde2ec6605eca723f"
          }}
          style={styles.ImageBackground_68_175}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/07a9/4b77/d38b0a185dc391a85144ac62ff1ffefa"
          }}
          style={styles.ImageBackground_68_176}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b077/0fbc/ea686f44e07581dea99f4d28e2f6086c"
          }}
          style={styles.ImageBackground_68_177}
        />
      </View>
      <View style={styles.View_70_1}>
        <View style={styles.View_62_58} />
        <View style={styles.View_62_66}>
          <Text style={styles.Text_62_66}>1M+ impressions</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/292e/9634/94be15b0ea93254b20ef85dff77f75fc"
          }}
          style={styles.ImageBackground_68_195}
        />
      </View>
      <View style={styles.View_70_2} />
      <View style={styles.View_70_3}>
        <Text style={styles.Text_70_3}>Ready to get started?</Text>
      </View>
      <View style={styles.View_70_6}>
        <View style={styles.View_70_4} />
        <View style={styles.View_70_5}>
          <Text style={styles.Text_70_5}>Create your ad</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_62_3: {
    width: wp("97.01086956521739%"),
    minWidth: wp("97.01086956521739%"),
    height: hp("53.96174863387978%"),
    minHeight: hp("53.96174863387978%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6494565217391304%"),
    top: hp("489.344262295082%")
  },
  View_62_4: {
    width: wp("8.89945652173913%"),
    minWidth: wp("8.89945652173913%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_62_4: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_5: {
    width: wp("8.89945652173913%"),
    minWidth: wp("8.89945652173913%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.96195652173913%"),
    top: hp("0%")
  },
  Text_62_5: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_6: {
    width: wp("20.108695652173914%"),
    minWidth: wp("20.108695652173914%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.048913043478265%"),
    top: hp("0%")
  },
  Text_62_6: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_7: {
    width: wp("20.108695652173914%"),
    minWidth: wp("20.108695652173914%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.11684782608697%"),
    top: hp("0%")
  },
  Text_62_7: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_8: {
    width: wp("12.975543478260871%"),
    minWidth: wp("12.975543478260871%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7.3770491803279015%")
  },
  Text_62_8: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_9: {
    width: wp("18.817934782608695%"),
    minWidth: wp("18.817934782608695%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48.633879781420774%")
  },
  Text_62_9: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_10: {
    width: wp("12.975543478260871%"),
    minWidth: wp("12.975543478260871%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.96195652173913%"),
    top: hp("7.3770491803279015%")
  },
  Text_62_10: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_11: {
    width: wp("12.907608695652172%"),
    minWidth: wp("12.907608695652172%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.048913043478265%"),
    top: hp("7.3770491803279015%")
  },
  Text_62_11: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_12: {
    width: wp("15.625%"),
    minWidth: wp("15.625%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.11684782608697%"),
    top: hp("7.3770491803279015%")
  },
  Text_62_12: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_13: {
    width: wp("12.975543478260871%"),
    minWidth: wp("12.975543478260871%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.114754098360606%")
  },
  Text_62_13: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_14: {
    width: wp("17.1875%"),
    minWidth: wp("17.1875%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.96195652173913%"),
    top: hp("13.114754098360606%")
  },
  Text_62_14: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_15: {
    width: wp("20.108695652173914%"),
    minWidth: wp("20.108695652173914%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.048913043478265%"),
    top: hp("13.114754098360606%")
  },
  Text_62_15: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_16: {
    width: wp("20.108695652173914%"),
    minWidth: wp("20.108695652173914%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.11684782608697%"),
    top: hp("13.114754098360606%")
  },
  Text_62_16: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_17: {
    width: wp("14.0625%"),
    minWidth: wp("14.0625%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18.715846994535525%")
  },
  Text_62_17: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_18: {
    width: wp("18.342391304347828%"),
    minWidth: wp("18.342391304347828%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.96195652173913%"),
    top: hp("18.715846994535525%")
  },
  Text_62_18: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_19: {
    width: wp("18.27445652173913%"),
    minWidth: wp("18.27445652173913%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.048913043478265%"),
    top: hp("18.715846994535525%")
  },
  Text_62_19: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_20: {
    width: wp("18.27445652173913%"),
    minWidth: wp("18.27445652173913%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.11684782608697%"),
    top: hp("18.715846994535525%")
  },
  Text_62_20: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_21: {
    width: wp("20.17663043478261%"),
    minWidth: wp("20.17663043478261%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24.863387978141986%")
  },
  Text_62_21: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_22: {
    width: wp("22.894021739130434%"),
    minWidth: wp("22.894021739130434%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.96195652173913%"),
    top: hp("24.863387978141986%")
  },
  Text_62_22: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_23: {
    width: wp("22.894021739130434%"),
    minWidth: wp("22.894021739130434%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.048913043478265%"),
    top: hp("24.863387978141986%")
  },
  Text_62_23: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_24: {
    width: wp("22.894021739130434%"),
    minWidth: wp("22.894021739130434%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.11684782608697%"),
    top: hp("24.863387978141986%")
  },
  Text_62_24: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_25: {
    width: wp("22.554347826086957%"),
    minWidth: wp("22.554347826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.96195652173913%"),
    top: hp("30.737704918032705%")
  },
  Text_62_25: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_26: {
    width: wp("22.554347826086957%"),
    minWidth: wp("22.554347826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.048913043478265%"),
    top: hp("31.01092896174862%")
  },
  Text_62_26: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_27: {
    width: wp("22.554347826086957%"),
    minWidth: wp("22.554347826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.11684782608697%"),
    top: hp("31.01092896174862%")
  },
  Text_62_27: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_28: {
    width: wp("22.554347826086957%"),
    minWidth: wp("22.554347826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.96195652173913%"),
    top: hp("36.202185792349724%")
  },
  Text_62_28: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_29: {
    width: wp("7.676630434782608%"),
    minWidth: wp("7.676630434782608%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.96195652173913%"),
    top: hp("48.633879781420774%")
  },
  Text_62_29: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_30: {
    width: wp("22.554347826086957%"),
    minWidth: wp("22.554347826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.048913043478265%"),
    top: hp("36.338797814207624%")
  },
  Text_62_30: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_31: {
    width: wp("13.31521739130435%"),
    minWidth: wp("13.31521739130435%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49.048913043478265%"),
    top: hp("48.633879781420774%")
  },
  Text_62_31: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_32: {
    width: wp("22.554347826086957%"),
    minWidth: wp("22.554347826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.11684782608697%"),
    top: hp("36.338797814207624%")
  },
  Text_62_32: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_33: {
    width: wp("22.554347826086957%"),
    minWidth: wp("22.554347826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.11684782608697%"),
    top: hp("48.633879781420774%")
  },
  Text_62_33: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_34: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("82.78688524590164%"),
    minHeight: hp("82.78688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("78.14207650273224%"),
    backgroundColor: "rgba(255, 212, 215, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_62_35: {
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
  View_62_36: {
    width: wp("87.97554347826086%"),
    minWidth: wp("87.97554347826086%"),
    minHeight: hp("26.197648178684258%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.434782608695652%"),
    top: hp("26.366120218579237%")
  },
  Text_62_36: {
    color: "rgba(5, 24, 53, 1)",
    fontSize: 62,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_37: {
    width: wp("87.97554347826086%"),
    minWidth: wp("87.97554347826086%"),
    minHeight: hp("26.197648178684258%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.434782608695652%"),
    top: hp("42.928034881425035%")
  },
  Text_62_37: {
    color: "rgba(5, 24, 53, 1)",
    fontSize: 33,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_38: {
    width: wp("53.60054347826087%"),
    minWidth: wp("53.60054347826087%"),
    minHeight: hp("15.983606557377051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.434782608695652%"),
    top: hp("101.63934426229508%")
  },
  Text_62_38: {
    color: "rgba(44, 2, 2, 1)",
    fontSize: 45,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_40: {
    width: wp("53.940217391304344%"),
    minWidth: wp("53.940217391304344%"),
    minHeight: hp("9.426229508196721%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.434782608695652%"),
    top: hp("171.5846994535519%")
  },
  Text_62_40: {
    color: "rgba(5, 24, 53, 1)",
    fontSize: 46,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_41: {
    width: wp("53.60054347826087%"),
    minWidth: wp("53.60054347826087%"),
    minHeight: hp("15.983606557377051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.434782608695652%"),
    top: hp("114.07103825136613%")
  },
  Text_62_41: {
    color: "rgba(44, 2, 2, 1)",
    fontSize: 25,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_43: {
    width: wp("88.72282608695652%"),
    minWidth: wp("88.72282608695652%"),
    minHeight: hp("15.983606557377051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.434782608695652%"),
    top: hp("183.87978142076503%")
  },
  Text_62_43: {
    color: "rgba(5, 24, 53, 1)",
    fontSize: 25,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_50: {
    width: wp("26.42663043478261%"),
    minWidth: wp("26.42663043478261%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.434782608695652%"),
    top: hp("134.9726775956284%")
  },
  Text_62_50: {
    color: "rgba(44, 2, 2, 1)",
    fontSize: 21,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_66_2: {
    width: wp("26.42663043478261%"),
    minWidth: wp("26.42663043478261%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.434782608695652%"),
    top: hp("209.42622950819674%")
  },
  Text_66_2: {
    color: "rgba(5, 24, 53, 1)",
    fontSize: 21,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_51: {
    width: wp("2.6494565217391304%"),
    minWidth: wp("2.6494565217391304%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.589673913043477%"),
    top: hp("135.92896174863387%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_62_52: {
    width: wp("2.649456262588501%"),
    height: hp("2.246424669776458%"),
    top: hp("0.6527593227032185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_62_53: {
    width: wp("2.649456262588501%"),
    height: hp("2.246424669776458%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_62_54: {
    width: wp("2.649456262588501%"),
    height: hp("2.246424669776458%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_66_3: {
    width: wp("2.6494565217391304%"),
    minWidth: wp("2.6494565217391304%"),
    height: hp("3.551912568306011%"),
    minHeight: hp("3.551912568306011%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.070652173913043%"),
    top: hp("210.10928961748633%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_66_4: {
    width: wp("2.649456262588501%"),
    height: hp("2.246424669776458%"),
    top: hp("0.65275932270319%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_66_5: {
    width: wp("2.649456262588501%"),
    height: hp("2.246424669776458%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_66_6: {
    width: wp("2.649456262588501%"),
    height: hp("2.246424669776458%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_62_73: {
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
  View_62_74: {
    width: wp("6.929347826086957%"),
    minWidth: wp("6.929347826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47.28260869565218%"),
    top: hp("2.5956284153005464%")
  },
  Text_62_74: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_75: {
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
  View_62_76: {
    width: wp("11.616847826086957%"),
    minWidth: wp("11.616847826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_62_76: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_77: {
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
  View_62_78: {
    width: wp("0.9510863086451654%"),
    height: hp("1.2949656919052042%"),
    top: hp("0.547873908704748%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_62_79: {
    width: wp("0.9510863086451654%"),
    height: hp("1.2949656919052042%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_62_81: {
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
  View_62_82: {
    width: wp("11.616847826086957%"),
    minWidth: wp("11.616847826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_62_82: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_83: {
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
  View_62_84: {
    width: wp("0.9510863086451654%"),
    height: hp("1.2949656919052042%"),
    top: hp("0.547873908704748%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_62_85: {
    width: wp("0.9510863086451654%"),
    height: hp("1.2949656919052042%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_62_87: {
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
  View_62_88: {
    width: wp("11.616847826086957%"),
    minWidth: wp("11.616847826086957%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_62_88: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_89: {
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
  View_62_90: {
    width: wp("0.9510863086451654%"),
    height: hp("1.2949656919052042%"),
    top: hp("0.547873908704748%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_62_91: {
    width: wp("0.9510863086451654%"),
    height: hp("1.2949656919052042%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_62_93: {
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
  View_62_94: {
    width: wp("11.073369565217392%"),
    minWidth: wp("11.073369565217392%"),
    minHeight: hp("6.967213114754098%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.744565217391305%"),
    top: hp("1.639344262295082%")
  },
  Text_62_94: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_66_8: {
    width: wp("41.049683612325914%"),
    minWidth: wp("41.049683612325914%"),
    height: hp("85.24590163934425%"),
    minHeight: hp("85.24590163934425%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.114130434782608%"),
    top: hp("224.8633879781421%"),
    backgroundColor: "rgba(249, 249, 249, 1)",
    borderColor: "rgba(200, 200, 200, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_68_15: {
    width: wp("41.049683612325914%"),
    minWidth: wp("41.049683612325914%"),
    height: hp("85.24590163934425%"),
    minHeight: hp("85.24590163934425%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.97204722528872%"),
    top: hp("224.8633879781421%"),
    backgroundColor: "rgba(249, 249, 249, 1)",
    borderColor: "rgba(200, 200, 200, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_66_12: {
    width: wp("17.203105014303457%"),
    minWidth: wp("17.203105014303457%"),
    height: hp("34.377855811614154%"),
    minHeight: hp("34.377855811614154%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.072377080502715%"),
    top: hp("231.01227973979678%")
  },
  ImageBackground_68_16: {
    width: wp("17.203105014303457%"),
    minWidth: wp("17.203105014303457%"),
    height: hp("34.377855811614154%"),
    minHeight: hp("34.377855811614154%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.9303270422894%"),
    top: hp("231.01227973979678%")
  },
  View_67_2: {
    width: wp("16.154134791830312%"),
    minWidth: wp("16.154134791830312%"),
    minHeight: hp("5.45014761836151%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.07221454122792%"),
    top: hp("272.3774894339139%")
  },
  Text_67_2: {
    color: "rgba(5, 24, 53, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_17: {
    width: wp("16.154134791830312%"),
    minWidth: wp("16.154134791830312%"),
    minHeight: hp("5.45014761836151%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.93011474609375%"),
    top: hp("272.3774894339139%")
  },
  Text_68_17: {
    color: "rgba(5, 24, 53, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_2: {
    width: wp("34.47614130766495%"),
    minWidth: wp("34.47614130766495%"),
    minHeight: hp("9.363074380843365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.07221454122792%"),
    top: hp("280.2033638042179%")
  },
  Text_68_2: {
    color: "rgba(5, 24, 53, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_18: {
    width: wp("34.47614130766495%"),
    minWidth: wp("34.47614130766495%"),
    minHeight: hp("9.363074380843365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.93011474609375%"),
    top: hp("280.2033638042179%")
  },
  Text_68_18: {
    color: "rgba(5, 24, 53, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_3: {
    width: wp("26.503969275433086%"),
    minWidth: wp("26.503969275433086%"),
    minHeight: hp("9.363074380843365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.07221454122792%"),
    top: hp("298.09103376878414%")
  },
  Text_68_3: {
    color: "rgba(241, 169, 1, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_19: {
    width: wp("26.503969275433086%"),
    minWidth: wp("26.503969275433086%"),
    minHeight: hp("9.363074380843365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.93011474609375%"),
    top: hp("298.09103376878414%")
  },
  Text_68_19: {
    color: "rgba(241, 169, 1, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_4: {
    width: wp("2.7273214381674062%"),
    minWidth: wp("2.7273214381674062%"),
    height: hp("3.6334319192855085%"),
    minHeight: hp("3.6334319192855085%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.22652534816576%"),
    top: hp("298.78976957394127%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_68_5: {
    width: wp("2.727321179016777%"),
    height: hp("2.2979819709486%"),
    top: hp("0.667734615138329%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_68_6: {
    width: wp("2.727321179016777%"),
    height: hp("2.2979819709486%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_68_7: {
    width: wp("2.727321179016777%"),
    height: hp("2.2979819709486%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_68_20: {
    width: wp("2.7273214381674062%"),
    minWidth: wp("2.7273214381674062%"),
    height: hp("3.6334319192855085%"),
    minHeight: hp("3.6334319192855085%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81.08444213867188%"),
    top: hp("298.78976957394127%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_68_21: {
    width: wp("2.727321179016777%"),
    height: hp("2.2979819709486%"),
    top: hp("0.667734615138329%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_68_22: {
    width: wp("2.727321179016777%"),
    height: hp("2.2979819709486%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_68_23: {
    width: wp("2.727321179016777%"),
    height: hp("2.2979819709486%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_68_9: {
    width: wp("11.468735985133959%"),
    height: hp("22.918569846231428%"),
    top: hp("236.74191334208504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.93956988790761%")
  },
  View_68_31: {
    width: wp("11.468735985133959%"),
    minWidth: wp("11.468735985133959%"),
    height: hp("22.918569846231428%"),
    minHeight: hp("22.918569846231428%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.79748667841372%"),
    top: hp("236.74191334208504%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_68_32: {
    width: wp("11.468735985133959%"),
    height: hp("20.047436906991763%"),
    top: hp("1.4355768922899586%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_68_33: {
    width: wp("10.79595607259999%"),
    height: hp("16.672275105460745%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_68_42: {
    width: wp("3.831543093142302%"),
    height: hp("13.716896765870477%"),
    top: hp("6.33054639472337%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.637189782184109%")
  },
  ImageBackground_68_43: {
    width: wp("1.16503964299741%"),
    height: hp("13.716896765870477%"),
    top: hp("6.33054639472337%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.637189782184109%")
  },
  ImageBackground_68_44: {
    width: wp("2.8945122076117475%"),
    height: hp("5.784252562809511%"),
    top: hp("5.0918996008367685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8353298021399524%")
  },
  ImageBackground_68_45: {
    width: wp("1.7241630865179973%"),
    height: hp("5.784252562809511%"),
    top: hp("5.0918996008367685%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8353629734205157%")
  },
  ImageBackground_68_46: {
    width: wp("1.1054847551428753%"),
    height: hp("2.750277910076204%"),
    top: hp("6.6088900540044335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.845262610394016%")
  },
  ImageBackground_68_47: {
    width: wp("0.5538147428761359%"),
    height: hp("2.750277910076204%"),
    top: hp("6.6088900540044335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.845229439113453%")
  },
  ImageBackground_68_48: {
    width: wp("3.831543093142302%"),
    height: hp("8.167337719859972%"),
    top: hp("9.602080798539959%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.637189782184109%")
  },
  ImageBackground_68_49: {
    width: wp("0.6941499917403511%"),
    height: hp("8.167337719859972%"),
    top: hp("9.602080798539959%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.637189782184109%")
  },
  ImageBackground_68_50: {
    width: wp("0.714018033898395%"),
    height: hp("0.6916775729486851%"),
    top: hp("18.489816801144116%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.195941427479625%")
  },
  ImageBackground_68_52: {
    width: wp("2.5191794271054473%"),
    height: hp("5.034205952628714%"),
    top: hp("11.15534214374145%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.293350883152172%")
  },
  ImageBackground_68_53: {
    width: wp("1.4975651450779126%"),
    height: hp("5.03425077011025%"),
    top: hp("11.155308791197086%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.293350883152172%")
  },
  ImageBackground_68_54: {
    width: wp("0.7057075915129288%"),
    height: hp("1.384247326460041%"),
    top: hp("8.283404574368177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.637189782184109%")
  },
  ImageBackground_68_55: {
    width: wp("3.1374174615611197%"),
    height: hp("1.384247326460041%"),
    top: hp("8.283404574368177%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.331331999405577%")
  },
  ImageBackground_68_56: {
    width: wp("0.9621640910273013%"),
    height: hp("2.393674589897114%"),
    top: hp("12.475635966316588%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.17229030443275%")
  },
  ImageBackground_68_57: {
    width: wp("0.47595189965289575%"),
    height: hp("2.3936631249599767%"),
    top: hp("12.475635966316588%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.17229030443275%")
  },
  ImageBackground_70_0: {
    width: wp("30.842391304347828%"),
    minWidth: wp("30.842391304347828%"),
    height: hp("88.3879781420765%"),
    minHeight: hp("88.3879781420765%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.33423913043478%"),
    top: hp("64.07103825136612%"),
    resizeMode: "cover",
    borderTopLeftRadius: 9.54411792755127,
    borderTopRightRadius: 9.54411792755127,
    borderBottomLeftRadius: 9.54411792755127,
    borderBottomRightRadius: 9.54411792755127
  },
  View_68_58: {
    width: wp("41.049683612325914%"),
    minWidth: wp("41.049683612325914%"),
    height: hp("85.24590163934425%"),
    minHeight: hp("85.24590163934425%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.114130434782608%"),
    top: hp("322.26775956284155%"),
    backgroundColor: "rgba(249, 249, 249, 1)",
    borderColor: "rgba(200, 200, 200, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_68_59: {
    width: wp("41.049683612325914%"),
    minWidth: wp("41.049683612325914%"),
    height: hp("85.24590163934425%"),
    minHeight: hp("85.24590163934425%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52.97204722528872%"),
    top: hp("322.26775956284155%"),
    backgroundColor: "rgba(249, 249, 249, 1)",
    borderColor: "rgba(200, 200, 200, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_68_60: {
    width: wp("17.203105014303457%"),
    minWidth: wp("17.203105014303457%"),
    height: hp("34.377855811614154%"),
    minHeight: hp("34.377855811614154%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.072377080502715%"),
    top: hp("328.41663464822403%")
  },
  ImageBackground_68_61: {
    width: wp("17.203105014303457%"),
    minWidth: wp("17.203105014303457%"),
    height: hp("34.377855811614154%"),
    minHeight: hp("34.377855811614154%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64.9303270422894%"),
    top: hp("328.41663464822403%")
  },
  View_68_62: {
    width: wp("16.154134791830312%"),
    minWidth: wp("16.154134791830312%"),
    minHeight: hp("5.45014761836151%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.07221454122792%"),
    top: hp("369.78186101861337%")
  },
  Text_68_62: {
    color: "rgba(5, 24, 53, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_63: {
    width: wp("17.692623967709746%"),
    minWidth: wp("17.692623967709746%"),
    minHeight: hp("5.45014761836151%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.93011474609375%"),
    top: hp("369.78186101861337%")
  },
  Text_68_63: {
    color: "rgba(5, 24, 53, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_64: {
    width: wp("34.47614130766495%"),
    minWidth: wp("34.47614130766495%"),
    minHeight: hp("9.363074380843365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.07221454122792%"),
    top: hp("377.6077353889173%")
  },
  Text_68_64: {
    color: "rgba(5, 24, 53, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_65: {
    width: wp("34.47614130766495%"),
    minWidth: wp("34.47614130766495%"),
    minHeight: hp("9.363074380843365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.93011474609375%"),
    top: hp("377.6077353889173%")
  },
  Text_68_65: {
    color: "rgba(5, 24, 53, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_66: {
    width: wp("28.881634836611543%"),
    minWidth: wp("28.881634836611543%"),
    minHeight: hp("9.363074380843365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.07221454122792%"),
    top: hp("395.4954053534836%")
  },
  Text_68_66: {
    color: "rgba(241, 169, 1, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_67: {
    width: wp("28.881634836611543%"),
    minWidth: wp("28.881634836611543%"),
    minHeight: hp("9.363074380843365%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54.93011474609375%"),
    top: hp("395.4954053534836%")
  },
  Text_68_67: {
    color: "rgba(241, 169, 1, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_68_68: {
    width: wp("2.7273214381674062%"),
    minWidth: wp("2.7273214381674062%"),
    height: hp("3.6334319192855085%"),
    minHeight: hp("3.6334319192855085%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.464326278023094%"),
    top: hp("396.19410780609627%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_68_69: {
    width: wp("2.727321179016777%"),
    height: hp("2.2979819709486%"),
    top: hp("0.667751291410525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_68_70: {
    width: wp("2.727321179016777%"),
    height: hp("2.2979819709486%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_68_71: {
    width: wp("2.727321179016777%"),
    height: hp("2.2979819709486%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_68_73: {
    width: wp("2.7273214381674062%"),
    minWidth: wp("2.7273214381674062%"),
    height: hp("3.6334319192855085%"),
    minHeight: hp("3.6334319192855085%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84.30129341457202%"),
    top: hp("396.19410780609627%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_68_74: {
    width: wp("2.727321179016777%"),
    height: hp("2.2979819709486%"),
    top: hp("0.667751291410525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_68_75: {
    width: wp("2.727321179016777%"),
    height: hp("2.2979819709486%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_68_76: {
    width: wp("2.727321179016777%"),
    height: hp("2.2979819709486%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_68_111: {
    width: wp("11.468735985133959%"),
    minWidth: wp("11.468735985133959%"),
    height: hp("22.918571930765456%"),
    minHeight: hp("22.918571930765456%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.93956988790761%"),
    top: hp("333.727026767418%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_68_112: {
    width: wp("11.110338957413383%"),
    height: hp("17.905134190627134%"),
    top: hp("3.2236401500597935%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17919125764266397%")
  },
  ImageBackground_68_113: {
    width: wp("3.2255805057028066%"),
    height: hp("6.447998422091125%"),
    top: hp("8.953290428620221%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.527260158372965%")
  },
  ImageBackground_68_114: {
    width: wp("0.7167956103449282%"),
    height: hp("1.4324104851060877%"),
    top: hp("10.20878025742826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.15552421238111%")
  },
  ImageBackground_68_115: {
    width: wp("2.0115085270093833%"),
    height: hp("2.8595491836631233%"),
    top: hp("12.541724033043067%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.741329027258832%")
  },
  ImageBackground_68_116: {
    width: wp("1.2085183807041333%"),
    height: hp("2.1434627595495006%"),
    top: hp("13.257803161287598%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.025592306385867%")
  },
  ImageBackground_68_117: {
    width: wp("3.225581801455954%"),
    height: hp("6.447998422091125%"),
    top: hp("8.953290428620221%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.121564782184102%")
  },
  ImageBackground_68_118: {
    width: wp("0.7167961286461871%"),
    height: hp("1.4324104851060877%"),
    top: hp("10.20878025742826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.749862007472824%")
  },
  ImageBackground_68_119: {
    width: wp("2.01151008191316%"),
    height: hp("2.8595491836631233%"),
    top: hp("12.541724033043067%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.335633651069973%")
  },
  ImageBackground_68_120: {
    width: wp("1.2085173441016155%"),
    height: hp("2.1434627595495006%"),
    top: hp("13.257803161287598%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.619930101477582%")
  },
  ImageBackground_68_121: {
    width: wp("3.225581801455954%"),
    height: hp("6.447998422091125%"),
    top: hp("8.953290428620221%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7159025772758127%")
  },
  ImageBackground_68_122: {
    width: wp("0.716796258221502%"),
    height: hp("1.4324104851060877%"),
    top: hp("10.20878025742826%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3441666312839686%")
  },
  ImageBackground_68_123: {
    width: wp("2.011509045310642%"),
    height: hp("2.8595491836631233%"),
    top: hp("12.541724033043067%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.9299714461616837%")
  },
  ImageBackground_68_124: {
    width: wp("1.2085182511288186%"),
    height: hp("2.1434627595495006%"),
    top: hp("13.257803161287598%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.214267896569293%")
  },
  ImageBackground_68_125: {
    width: wp("11.110338957413383%"),
    height: hp("1.4324104851060877%"),
    top: hp("1.7897975900785923%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17919125764266397%")
  },
  ImageBackground_68_126: {
    width: wp("4.837656539419423%"),
    height: hp("2.149332807363708%"),
    top: hp("3.2222059906505933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7178596828294808%")
  },
  ImageBackground_68_127: {
    width: wp("3.249594439630923%"),
    height: hp("2.149332807363708%"),
    top: hp("3.2222059906505933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.2812221361243203%")
  },
  ImageBackground_68_128: {
    width: wp("1.7633175072462661%"),
    height: hp("2.149332807363708%"),
    top: hp("3.2222059906505933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3773379118546174%")
  },
  ImageBackground_68_129: {
    width: wp("11.110338957413383%"),
    height: hp("1.432410745672841%"),
    top: hp("1.7912317494877357%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17919125764266397%")
  },
  ImageBackground_68_130: {
    width: wp("0.3592940452306167%"),
    height: hp("0.716205503119797%"),
    top: hp("2.1486209389942132%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.537772800611414%")
  },
  ImageBackground_68_131: {
    width: wp("0.359294012836788%"),
    height: hp("0.716205503119797%"),
    top: hp("2.1486209389942132%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0751807171365506%")
  },
  ImageBackground_68_132: {
    width: wp("0.3592940776244454%"),
    height: hp("0.716205503119797%"),
    top: hp("2.1486209389942132%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6133184018342384%")
  },
  ImageBackground_68_133: {
    width: wp("0.5375969669093256%"),
    height: hp("1.0743094272300846%"),
    top: hp("10.387850068306022%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4335964037024453%")
  },
  ImageBackground_68_134: {
    width: wp("6.8074122719142744%"),
    height: hp("11.817388065525742%"),
    top: hp("6.44799737982413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.3317419964334256%")
  },
  ImageBackground_68_141: {
    width: wp("4.837655502816905%"),
    height: hp("1.7876505200328723%"),
    top: hp("19.34110714438185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.91427346934443%")
  },
  ImageBackground_68_142: {
    width: wp("4.837656539419423%"),
    height: hp("1.7876505200328723%"),
    top: hp("19.34110714438185%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.716068433678668%")
  },
  ImageBackground_68_143: {
    width: wp("4.837655502816905%"),
    height: hp("2.149332807363708%"),
    top: hp("3.2222059906505933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.913576872452442%")
  },
  ImageBackground_68_144: {
    width: wp("3.249417180600374%"),
    height: hp("2.149332807363708%"),
    top: hp("3.2222059906505933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.477072010869563%")
  },
  ImageBackground_68_145: {
    width: wp("1.7634972282077954%"),
    height: hp("2.149332807363708%"),
    top: hp("3.2222059906505933%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.573021930197012%")
  },
  View_68_146: {
    width: wp("11.258942147959834%"),
    minWidth: wp("11.258942147959834%"),
    height: hp("22.499328363137167%"),
    minHeight: hp("22.499328363137167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.86741173785666%"),
    top: hp("333.727026767418%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_68_147: {
    width: wp("3.249127968497898%"),
    height: hp("2.9428450787653686%"),
    top: hp("17.781675578466547%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4624514372452495%")
  },
  ImageBackground_68_148: {
    width: wp("1.357582081919131%"),
    height: hp("2.9428450787653686%"),
    top: hp("17.781675578466547%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4624846085258127%")
  },
  ImageBackground_68_149: {
    width: wp("4.603236136229142%"),
    height: hp("1.3155035633858436%"),
    top: hp("20.68484780566945%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.785392429517657%")
  },
  ImageBackground_68_150: {
    width: wp("1.5549219172933826%"),
    height: hp("1.3155119015219434%"),
    top: hp("20.684781100580608%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.785392429517657%")
  },
  ImageBackground_68_151: {
    width: wp("10.192068763401197%"),
    height: hp("17.32813100345799%"),
    top: hp("0.49893738793548437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_68_152: {
    width: wp("1.8846414659334267%"),
    height: hp("17.32813100345799%"),
    top: hp("0.49893738793548437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_68_153: {
    width: wp("10.192068763401197%"),
    height: hp("14.651808191518315%"),
    top: hp("0.49893738793548437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_68_154: {
    width: wp("1.8846414659334267%"),
    height: hp("14.651808191518315%"),
    top: hp("0.49893738793548437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_68_155: {
    width: wp("8.85280526202658%"),
    height: hp("9.525916094337004%"),
    top: hp("4.263922686133924%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6582840629245936%")
  },
  ImageBackground_68_156: {
    width: wp("0.5674991270770197%"),
    height: hp("9.525916094337004%"),
    top: hp("4.263922686133924%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6582840629245936%")
  },
  ImageBackground_68_157: {
    width: wp("0.3404731335847274%"),
    height: hp("0.680403370674842%"),
    top: hp("16.140363516051934%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.916746720023781%")
  },
  ImageBackground_68_158: {
    width: wp("3.027901183003965%"),
    height: hp("3.1753034539561455%"),
    top: hp("7.076342640027349%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.5564588463824833%")
  },
  ImageBackground_68_159: {
    width: wp("8.85280526202658%"),
    height: hp("9.820781770299693%"),
    top: hp("1.8143950915727487%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6582840629245936%")
  },
  ImageBackground_68_162: {
    width: wp("0.567521025305209%"),
    height: hp("2.5856205674468495%"),
    top: hp("1.8144451203893368%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.6582840629245936%")
  },
  ImageBackground_68_163: {
    width: wp("0.3404952909635461%"),
    height: hp("0.6802822071346428%"),
    top: hp("2.81929057803967%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3903410538383127%")
  },
  ImageBackground_68_164: {
    width: wp("0.3404952909635461%"),
    height: hp("0.6801581773601595%"),
    top: hp("2.8194073119450422%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.033432670261547%")
  },
  ImageBackground_68_165: {
    width: wp("0.3404954205388608%"),
    height: hp("0.6802188894136356%"),
    top: hp("2.819340606856258%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6767233143682034%")
  },
  ImageBackground_68_166: {
    width: wp("5.266284942626953%"),
    height: hp("0.6804296879169068%"),
    top: hp("2.835049655268108%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.461655326511547%")
  },
  ImageBackground_68_167: {
    width: wp("3.8816306902014692%"),
    height: hp("12.111579394731367%"),
    top: hp("9.888762593920774%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.37732597019361%")
  },
  ImageBackground_68_168: {
    width: wp("1.183045428732167%"),
    height: hp("12.111579394731367%"),
    top: hp("9.888762593920774%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.37732597019361%")
  },
  ImageBackground_68_169: {
    width: wp("2.7239390041517173%"),
    height: hp("9.752755086930073%"),
    top: hp("11.068141916410525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.967509394106656%")
  },
  ImageBackground_68_170: {
    width: wp("0.64782888992973%"),
    height: hp("9.752755086930073%"),
    top: hp("11.068141916410525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.967509394106656%")
  },
  ImageBackground_68_171: {
    width: wp("0.5901906801306683%"),
    height: hp("0.6804273428161287%"),
    top: hp("10.637227042776658%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.045741869055703%")
  },
  ImageBackground_68_172: {
    width: wp("0.34049386563508405%"),
    height: hp("0.6806253735484973%"),
    top: hp("19.192221386185167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.180151897927985%")
  },
  ImageBackground_68_173: {
    width: wp("1.6116556913956352%"),
    height: hp("0.6804283850831413%"),
    top: hp("14.765138052851796%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.54638141134511%")
  },
  ImageBackground_68_174: {
    width: wp("1.6116556913956352%"),
    height: hp("0.6804273428161287%"),
    top: hp("13.222816342213093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.54638141134511%")
  },
  ImageBackground_68_175: {
    width: wp("1.6116556913956352%"),
    height: hp("0.6804294273501538%"),
    top: hp("17.849748121584696%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.54638141134511%")
  },
  ImageBackground_68_176: {
    width: wp("1.6116556913956352%"),
    height: hp("0.6804283850831413%"),
    top: hp("16.307459763490442%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.54638141134511%")
  },
  ImageBackground_68_177: {
    width: wp("2.2699965083080786%"),
    height: hp("1.179369942086642%"),
    top: hp("11.29490586577873%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.040461001188859%")
  },
  View_70_1: {
    width: wp("19.70108695652174%"),
    minWidth: wp("19.70108695652174%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60.46195652173913%"),
    top: hp("109.15300546448088%")
  },
  View_62_58: {
    width: wp("19.70108695652174%"),
    minWidth: wp("19.70108695652174%"),
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
  View_62_66: {
    width: wp("15.692934782608695%"),
    minWidth: wp("15.692934782608695%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.0081521739130395%"),
    top: hp("2.1857923497267677%")
  },
  Text_62_66: {
    color: "rgba(44, 2, 2, 1)",
    fontSize: 21,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_68_195: {
    width: wp("2.717391304347826%"),
    height: hp("5.46448087431694%"),
    top: hp("1.7759562841529828%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.8152173913043512%")
  },
  View_70_2: {
    width: wp("100.61141304347827%"),
    minWidth: wp("100.61141304347827%"),
    height: hp("58.879781420765035%"),
    minHeight: hp("58.879781420765035%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-0.1358695652173913%"),
    top: hp("420.90163934426226%"),
    backgroundColor: "rgba(218, 255, 188, 1)"
  },
  View_70_3: {
    width: wp("80.50271739130434%"),
    minWidth: wp("80.50271739130434%"),
    minHeight: hp("15.983606557377051%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.782608695652174%"),
    top: hp("432.37704918032784%")
  },
  Text_70_3: {
    color: "rgba(2, 34, 21, 1)",
    fontSize: 80,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_70_6: {
    width: wp("21.875%"),
    minWidth: wp("21.875%"),
    height: hp("10.655737704918032%"),
    minHeight: hp("10.655737704918032%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.0625%"),
    top: hp("455.0546448087432%")
  },
  View_70_4: {
    width: wp("21.875%"),
    minWidth: wp("21.875%"),
    height: hp("10.655737704918032%"),
    minHeight: hp("10.655737704918032%"),
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
  View_70_5: {
    width: wp("17.1875%"),
    minWidth: wp("17.1875%"),
    minHeight: hp("5.327868852459016%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.377717391304344%"),
    top: hp("2.595628415300496%")
  },
  Text_70_5: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 4012 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
