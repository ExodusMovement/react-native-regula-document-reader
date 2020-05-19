import { NativeModules } from 'react-native'
import { wrap } from './wrap'
import Scenario from './scenario'

const reader = wrap(NativeModules.RNRegulaDocumentReader)
const { initialize, prepareDatabase } = reader
const scan = async ({ licenseKey, ...opts }) => {
  if (licenseKey) {
    await initialize({ licenseKey })
  }

  return await reader.scan(opts)
}

export default {
  initialize,
  scan,
  prepareDatabase,
  Scenario,
}
