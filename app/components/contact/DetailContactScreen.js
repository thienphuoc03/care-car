import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import Constant from '../../controller/Constant'
import { useRoute } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import Dialog from 'react-native-dialog'

const DetailContactScreen = () => {
    const route = useRoute()
    const contact = route.params?.contact
    const [visible, setVisible] = useState(false)
    const [avatar, setAvatar] = useState(contact?.avatar)
    const [name, setName] = useState(contact?.name)
    const [email, setEmail] = useState(contact?.email)

    const showDialog = () => {
        setVisible(true)
    }
    const handleCancel = () => {
        setVisible(false)
    }
    const handleUpdate = () => {
        setVisible(false)
        Alert.alert('Cập nhật thành công')
    }

    return (
        <View style={styles.rootView}>
            <View style={styles.contactView}>
                <TouchableOpacity style={styles.buttonAvatar}>
                    <Image style={styles.avatarImg} source={{ uri: avatar }} />
                </TouchableOpacity>
                <View style={styles.contentView}>
                    <Text style={styles.nameView}>{name}</Text>
                    <Text styles={styles.email}>{email}</Text>
                </View>
                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.callIcon}>
                        <Icon name='envelope' size={25} color='blue'></Icon>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.callIcon} onPress={showDialog}>
                        <Icon name='edit' size={25} color='orange'></Icon>
                    </TouchableOpacity>
                </View>
            </View>

            <Dialog.Container visible={visible}>
                <Dialog.Title>Chỉnh sửa thông tin</Dialog.Title>
                <Dialog.Input
                    label='Avatar(url)'
                    style={styles.dialogInput}
                    onChangeText={(value) => setAvatar(value)}
                    value={avatar}
                    autoCapitalize={'none'}
                ></Dialog.Input>
                <Dialog.Input
                    label='Tên'
                    style={styles.dialogInput}
                    onChangeText={(value) => setName(value)}
                    value={name}
                    autoCapitalize={'none'}
                ></Dialog.Input>
                <Dialog.Input
                    label='Email'
                    style={styles.dialogInput}
                    onChangeText={(value) => setEmail(value)}
                    value={email}
                    autoCapitalize={'none'}
                ></Dialog.Input>
                <Dialog.Button label='Trở về' onPress={handleCancel} />
                <Dialog.Button label='Cập nhật' onPress={handleUpdate} />
            </Dialog.Container>

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
    email: {
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
