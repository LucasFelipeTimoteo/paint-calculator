import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  footerContactsWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    margin: '0 20px 0'
  },

  footerItemTextLink: {
    textDecoration: 'none',
    color: 'whitesmoke'
  }
})

export default useStyles