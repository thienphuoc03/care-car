import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Constant from '../../../controller/Constant'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const ContactItem = ({ screen, contact }) => {
    const navigation = useNavigation()

    const showDetailContact = () => {
        navigation.navigate(Constant.nameScreens.DetailContact, { contact })

        // navigation.dispatch(StackActions.push(Constant.nameScreens.DetailContact))
    }

    return (
        <TouchableOpacity style={styles.rootView} onPress={showDetailContact}>
            <Image style={styles.avatarImg} source={{ uri: contact?.avatar }} />
            <View style={styles.contentView}>
                <Text
                    style={styles.nameView}
                >{`${contact?.first_name} ${contact?.last_name}`}</Text>
                <Text styles={styles.emailView}>{contact?.email}</Text>
            </View>
            <View style={styles.buttonCall}>
                <Icon name='envelope' size={25} color='blue'></Icon>
            </View>
        </TouchableOpacity>
    )
}

export default ContactItem

const styles = StyleSheet.create({
    rootView: {
        width: Constant.screen.width,
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatarImg: {
        width: 65,
        aspectRatio: 1,
        borderRadius: 40,
        backgroundColor: Constant.colors.gray
    },
    contentView: {
        marginLeft: 12,
        flex: 1
    },
    nameView: {
        fontSize: 16,
        color: Constant.colors.black,
        fontWeight: 'bold'
    },
    emailView: {
        flex: 1,
        fontSize: 16,
        marginLeft: 4
    },
    buttonCall: {
        width: 25,
        borderRadius: 15
    }
})
