// UI Imports
import grey from '@material-ui/core/colors/grey'

// Component Styles
const styles = theme => ({
  item: {
    marginBottom: theme.spacing.unit * 2.5,
    borderBottom: `1px solid ${ grey[200] }`
  },

  itemLast: {
    marginBottom: theme.spacing.unit
  },

  clickToCopy: {
    cursor: 'pointer'
  },

  multiLine: {
    whiteSpace: 'pre-wrap'
  }
})

export default styles
