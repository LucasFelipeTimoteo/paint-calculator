import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  additionalTextLink: {
    textDecoration: 'none',
    color: 'whitesmoke',

    '&:hover': {
      textDecoration: 'underline'
    }
  }
})

export default useStyles