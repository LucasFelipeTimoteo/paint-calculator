import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  formWrapper: {
    margin: '7px 20px 40px',
    width: '100%',
    height: '100%',
    maxWidth: 400,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 4,
    zIndex: 1
  },

  inputFields: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 4,
    margin: '0 5px'
  },
})

export default useStyles