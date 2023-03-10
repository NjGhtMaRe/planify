import {StyleSheet} from 'react-native';
import colors from '../../../constant/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    margin: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  inputContainer: {
    marginVertical: 10,
    marginBottom: 40,
  },
  textInput: {
    backgroundColor: 'rgba(0,0,0,0.15)',
    padding: 13,
    marginHorizontal: 30,
    borderRadius: 12,
    marginVertical: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 24,
  },
  linkText: {
    color: colors.purple,
    fontWeight: 'bold',
    fontSize: 16,
  },
  text: {
    fontSize: 16,
  },
});

export default styles;
