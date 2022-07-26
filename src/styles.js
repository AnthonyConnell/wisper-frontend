import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    elevation: 0,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(255, 255, 255)',
  },
  heading: {
    color: 'rgba(0, 13, 94)',
  },
  image: {
    marginLeft: '1px',
  },
}));