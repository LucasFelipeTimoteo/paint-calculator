import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  calculatorWrapper: {
    width: '100vw',
    height: '100vh',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  calculatorButtonsGroup: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    marginTop: 30
  }
})

export default useStyles