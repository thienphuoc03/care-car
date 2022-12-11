import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Constant from '../../controller/Constant'
import { useRoute } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const DetailContactScreen = () => {
    const route = useRoute()
    const contact = route.params?.contact

    return (
        <View style={styles.rootView}>
            <View style={styles.contactView}>
                <TouchableOpacity style={styles.buttonAvatar}>
                    <Image style={styles.avatarImg} source={{ uri: contact?.avatar }} />
                </TouchableOpacity>
                <View style={styles.contentView}>
                    <Text style={styles.nameView}>{contact?.name}</Text>
                    <Text styles={styles.phoneNumber}>{contact?.phoneNumber}</Text>
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.callIcon}>
                        <Icon name='phone' size={25} color='blue'></Icon>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.callIcon}>
                        <Icon name='edit' size={25} color='orange'></Icon>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.diaryView}>
                <Text style={styles.diaryName}>Nhật ký</Text>
            </View>
        </View>
    )
}

export default DetailContactScreen

const styles = StyleSheet.create({
    rootView: {
        flex: 1,
        marginTop: 30,
        alignItems: 'center',
        flexDirection: 'column'
    },
    contactView: {
        width: Constant.screen.width * 0.9,
        height: Constant.screen.height * 0.35,
        backgroundColor: Constant.colors.white,
        alignItems: 'center',
        borderRadius: 30,
        paddingTop: 10
    },
    buttonAvatar: {
        width: 100,
        aspectRatio: 1,
        borderRadius: 50,
        backgroundColor: 'transform'
    },
    avatarImg: {
        width: 100,
        aspectRatio: 1,
        borderRadius: 50,
        backgroundColor: Constant.colors.gray
    },
    contentView: {
        marginVertical: 10,
        alignItems: 'center'
    },
    nameView: {
        fontSize: 16,
        color: Constant.colors.black,
        marginBottom: 10,
        fontWeight: 'bold'
    },
    phoneNumber: {
        fontSize: 16
    },
    buttonView: {
        marginTop: 20,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    callIcon: {
        marginHorizontal: 10
    },
    diaryView: {
        width: Constant.screen.width * 0.9,
        height: Constant.screen.height * 0.4,
        backgroundColor: Constant.colors.white,
        borderRadius: 30,
        marginTop: 20
    },
    diaryName: {
        marginTop: 20,
        marginLeft: 20,
        fontSize: 16,
        fontWeight: 'bold'
    }
})
