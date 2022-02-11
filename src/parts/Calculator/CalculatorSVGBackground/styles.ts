import { makeStyles } from "@material-ui/core";
import waveBottomMobile from '../../../assets/images/wave-bottom-mobile.svg';
import waveBottom from '../../../assets/images/wave-bottom.svg';

const useStyles = makeStyles(({ breakpoints, palette }) => ({
  calculatorBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    aspectRatio: "960/540",
    backgroundImage: `url(${waveBottom})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    [breakpoints.down(breakpoints.values.sm)]: {
      aspectRatio: "600/900",
      backgroundImage: `url(${waveBottomMobile})`,
    },
  },

  calculatorBackgroundProtector: {
    position: 'absolute',
    top: -3,
    background: palette.secondary.main,
    width: '100%',
    height: 6,
    zIndex: 2,
  },
}))

export default useStyles