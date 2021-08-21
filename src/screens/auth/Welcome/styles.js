import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../../constants';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        padding: SIZES.base * 2,
        paddingTop: 50,
    },
    bgWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.lightGray,
        padding: SIZES.base * 2,
        borderRadius: SIZES.radius,

    },
    txtInBackground: {
        fontWeight: 'bold',
        fontSize: 30,
        marginVertical: SIZES.base * 5,

    },
    sloganWrapper: {
        alignItems: 'center',
        paddingVertical: SIZES.base * 2,

    },
    txtSlogan: {
        fontSize: 22,
        marginVertical: SIZES.base * 4,

    },


});

export default styles;
