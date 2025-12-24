import { StyleSheet } from "react-native";

export const COLORS = {
    black: 'hsl(0 0% 0%)',
    subtleDark: 'hsl(222 5% 40%)',
    subtleLight: 'hsl(222 5% 70%)',
    highlight: 'hsl(235 100% 100%)',
    primary: 'hsl(244 89% 65%)',
    danger: 'hsl(9 21% 41%)',
    warning: 'hsl(52 23% 34%)',
    success: 'hsl(147 19% 36%)',
    info: 'hsl(217 22% 41%)',
};

export const globalStyles = StyleSheet.create({
    title: {
        fontSize: 30,
        marginLeft: 20,
        fontWeight: 'bold',
        marginTop: 20,
    },
    location: {
        marginTop: 30,
        marginLeft: 5,
        marginBottom: 25,
        fontSize: 16,
        color: COLORS.black,
    },
    text: {
        fontSize: 16,
        marginLeft: 39,
        marginBottom: 10,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        width: '100%',
    },
    itemcontainer: {
        alignItems: 'center',
        borderWidth: 1,
        width: 80,
    },
    containerImage: {
        width: 58,
        height: 58,
    },
    label: {
        fontSize: 12,
        fontWeight: 600,
    }
});