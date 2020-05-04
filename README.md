
# react-native-regula-document-reader

Fork of https://github.com/tradle/react-native-regula-document-reader

## Getting started

`npm install @exodus/react-native-regula-document-reader --save`

### Mostly automatic installation

`react-native link @exodus/react-native-regula-document-reader`

#### iOS

1. Add to Podfile:
```
  pod 'DocumentReader', '~> 4.0'
  pod 'DocumentReaderFull', '~> 4.0'
```
1. Generate license for your application bundle ID: https://licensing.regulaforensics.com/. Convert it to a base64 string, e.g.: `fs.readFileSync('./path/to/regula.license').toString('base64')`
1. Download database from: https://licensing.regulaforensics.com/Customer/Account/Databases. Add it to the iOS project (db.dat).
1. Go to your project Targets -> Builds Settings -> Always Embed Swift Standard Libraries - set to Yes
1. Go to your project Targets -> Info -> Add new key Privacy - Camera Usage Description = “Your message that will be appeared during ask to run camera”.

#### Android

1. Open your top level build.gradle (android/build.gradle)
1. add the block below:
```
allprojects {
  repositories {
    maven {
      url "http://maven.regulaforensics.com/RegulaDocumentReader"
    }
  }
}
```
1. In your app level build.gradle:
1. increate 'minSdkVersion' to 19 (if it's below)
1. Open AndroidManifest.xml file and set: `android:allowBackup="true"`
1. `mkdir -p android/app/src/main/res/raw/`
1. Copy `regula.license` to that folder
1. This project comes bundled with a db.dat, but if you want to use the latest, download it from Regula and copy it to `node_modules/@exodus/react-native-regula-document-reader/android/src/main/assets/Regula/`

## Usage
```js
import RegulaDocumentReader, { Scenario } from '@exodus/react-native-regula-document-reader';

// do this early on to save some time
await RegulaDocumentReader.initialize({
  licenseKey: base64LicenseKeyYouCreatedAbove
}) 

// initialize on the fly, and scan
// set options as you like
// see Regula docs for what they mean
await RegulaDocumentReader.scan({
  return: {
    base64Images: true,
    jsonResult: true,
    barcodeResult: true,
  },
  // see RGLFunctionality
  functionality: {
    showTorchButton: true,
    showCloseButton: true,
    showCaptureButton: false,
    showChangeFrameButton: false,
    showCameraSwitchButton: false,
    showSkipNextPageButton: false,
    skipFocusingFrames: false,
    videoCaptureMotionControl: false,
    // orientation: '..todo..',
    // onlineMode: true,
    singleResult: true,
    useAuthenticator: false,
    rfidEnabled: false,
    showCaptureButtonDelayFromDetect: 10,
    showCaptureButtonDelayFromStart: 10,
    // cameraPosition
  },
  // see RGLCustomization
  // there are all kinds of colors that can theoretically be set
  customization: {
    showStatusMessages: true,
    showResultStatusMessages: true,
    showNextPageAnimation: true,
    showBackgroundMask: true,
    // default is 'Searching for document...'
    status: '',
  },
  // see RGLProcessParams
  processParams: {
    scenario: Regula.Scenario.fullProcess,
    dateFormat: 'yyyy-mm-dd',
    multipageProcessing: true,
    logs: true,
  },
})
```
