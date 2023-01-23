import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../constant/colors';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    margin: 10,
  },
  title: {
    marginLeft: 26,
    fontWeight: '400',
    fontSize: 24,
    marginTop: 15,
    marginBottom: 6,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskContainer: {
    borderRadius: 10,
    width: width / 3.7,
    margin: 5,
    // backgroundColor: '#D7D9CE',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    color: '#D80000',
    backgroundColor: '#FFF1F1',
  },
  text: {
    fontWeight: '400',
    fontSize: 12,
    marginLeft: 10,
    marginTop: 10,
    color: '#0C7489',
  },
  number: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 16,
    marginLeft: 10,
    marginTop: 10,
    color: '#13505B',
  },
  redBox: {
    color: '#D80000',
    backgroundColor: '#DF8686',
  },
});

export default styles;
