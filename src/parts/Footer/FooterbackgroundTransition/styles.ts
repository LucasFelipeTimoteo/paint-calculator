import { makeStyles } from "@material-ui/core";
import multiWave from '../../../assets/images/multi-wave.svg'

const useStyles = makeStyles({
  footerWavesTransition: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
    aspectRatio: "960/540",
    backgroundImage: `url(${multiWave})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  footerWavesTransitionProtector: {
    position: 'absolute',
    bottom: -3,
    background: '#C62368',
    width: '100%',
    height: 6,
    zIndex: 2,
  },
})

export default useStyles