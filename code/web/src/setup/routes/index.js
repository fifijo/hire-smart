// App Imports
import pages from './pages'
import user from './user'
import dashboard from './dashboard'
import organization from './organization'
import client from './client'
import candidate from './candidate'
import interviewer from './interviewer'
import invite from './invite'
import feedback from './feedback'

// Combined routes
const routes = {
  ...pages,
  ...user,
  ...dashboard,
  ...organization,
  ...client,
  ...candidate,
  ...interviewer,
  ...invite,
  ...feedback
}

export default routes
