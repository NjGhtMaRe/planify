import {StyleSheet} from 'react-native';
import colors from '../../constant/colors';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.purple,
    width: 18,
    height: 18,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerSquare: {
    backgroundColor: colors.purple,
    padding: 3,
    width: 12,
    height: 12,
    borderRadius: 3,
  },
  checkedBox: {
    borderWidth: 2,
  },
});

export default styles;
