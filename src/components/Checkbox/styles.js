import {StyleSheet} from 'react-native';
import colors from '../../constant/colors';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.purple,
    width: 16,
    height: 16,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerSquare: {
    backgroundColor: colors.purple,
    padding: 3,
    width: 10,
    height: 10,
    borderRadius: 3,
  },
  checkedBox: {
    borderWidth: 2,
  },
});

export default styles;
