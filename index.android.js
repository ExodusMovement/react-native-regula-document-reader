import Scenario from './scenario'

const thrower = async () => {
  throw new Error('not supported on Android yet!')
}

export default {
  initialize: thrower,
  scan: thrower,
  prepareDatabase: thrower,
  Scenario,
}
