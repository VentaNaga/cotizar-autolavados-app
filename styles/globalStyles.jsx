import { StyleSheet } from "react-native";

export const COLORS = {
    bgDark: 'hsl(0 0% 90%)',
    bg: 'hsl(0 0% 95%)',
    bgLight: 'hsl(0 0% 100%)',
    text: 'hsl(0 0% 5%)',
    textMuted: 'hsl(0 0% 30%)',
    highlight: 'hsl(235 100% 100%)',
    border: 'hsl(236 9% 53%)',
    borderMuted: 'hsl(236 13% 65%)',
    primary: 'hsl(241 33% 37%)',
    secondary: 'hsl(54 100% 12%)',
    danger: 'hsl(9 21% 41%)',
    warning: 'hsl(52 23% 34%)',
    success: 'hsl(147 19% 36%)',
    info: 'hsl(217 22% 41%)',
};

export const globalStyles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 20,
    },
        logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginLeft: 20,
    },
    itemContainer: {
        justifyContent: 'flex-center',
        borderRadius: 5,
        padding: 10,
        height: 150,
        boxShadow: '0px 12px 12px #00000015'
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
        textAlign: 'center',
    },
    gridView: {
        marginTop: 10,
        flex: 1,
    },
});