import { makeStyles } from "@material-ui/core";
import waveMobile from '../../../assets/images/wave-mobile.svg';
import wave from '../../../assets/images/wave.svg';

const useStyles = makeStyles(({ breakpoints }) => ({
  heroBackground: {
    width: '100%',
    height: '100%',
    aspectRatio: "960/540",
    backgroundImage: `url(${wave})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    [breakpoints.down(breakpoints.values.sm)]: {
      aspectRatio: "600/900",
      backgroundImage: `url(${waveMobile})`,
    }
  },
}))

export default useStyles