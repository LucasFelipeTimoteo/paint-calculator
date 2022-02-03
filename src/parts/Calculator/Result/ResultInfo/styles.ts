import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  resultWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    zIndex: 2
  },

  canListWrapper: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 2,
    margin: '0 3px',
    padding: 0
  },

  canListListItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 2
  }
})

export default useStyles