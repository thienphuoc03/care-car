import { Dimensions } from 'react-native'

export default {
    colors: {
        primary: '#BD403A',
        secondary: '#0079BF',
        white: '#ffffff',
        black: '#000000',
        gray: '#bbbbbb'
    },
    images: {
        logo: require('../assets/images/ic_logo.png'),
        facebook: require('../assets/images/ic_facebook.png'),
        zalo: require('../assets/images/ic_zalo.png'),
        apple: require('../assets/images/ic_apple.png'),
        back: require('../assets/images/ic_back.png')
    },
    screen: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    fonts: {
        notoSansJPBold: 'NotoSansJP-Bold',
        notoSansJPRegular: 'NotoSansJP-Regular',
        notoSansJPMedium: 'NotoSansJP-Medium',
        notoSansJPThin: 'NotoSansJP-Thin',
        notoSansJPLight: 'NotoSansJP-Light'
    },
    nameScreens: {
        Login: 'LoginScreen',
        Home: 'HomeScreen',
        Contact: 'ContactScreen',
        DetailContact: 'DetailContactScreen'
    }
}
