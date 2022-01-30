import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  heroWrapper: {
    width: '100vw',
    height: '100vh',
    position: 'relative',
  },

  heroTextWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: '28vh 5vw 0',
    color: 'whitesmoke',
    maxWidth: 500,
  },
})

export default useStyles