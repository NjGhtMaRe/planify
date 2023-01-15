import {StyleSheet} from 'react-native';
import colors from '../../../constant/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    flex: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  bottom: {
    padding: 30,
    borderRadius: 18,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
    color: colors.black,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: 'rgba(0,0,0,0.5)',
    textAlign: 'center',
  },
});

export default styles;
