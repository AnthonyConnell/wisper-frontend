import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(204, 204, 204, 0.1)',
  },
  heading: {
    color: 'rgba(255, 255, 255)',
  },
  image: {
    marginLeft: '5px',
  },
}));