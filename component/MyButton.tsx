import { StyleSheet, Text, TouchableOpacity, GestureResponderEvent } from 'react-native'

interface Props {
    title: string
    onPress: (event: GestureResponderEvent) => void
}

const MyButton = ({ title, onPress }: Props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={style.button}
            onPress={onPress}
        >
            <Text style={style.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default MyButton

const style = StyleSheet.create({
    button: {
        backgroundColor: "blue",
        paddingHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 10,
        alignItems:'center'
    },
    text: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold"
    },
})