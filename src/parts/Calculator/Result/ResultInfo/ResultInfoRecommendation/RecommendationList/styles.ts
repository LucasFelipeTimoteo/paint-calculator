import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  canListWrapper: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 2,
    margin: '4px 3px 0',
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