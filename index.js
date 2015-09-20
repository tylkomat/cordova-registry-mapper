var map = {
    'org.apache.cordova.battery-status':'cordova-plugin-battery-status',
    'org.apache.cordova.camera':'cordova-plugin-camera',
    'org.apache.cordova.console':'cordova-plugin-console',
    'org.apache.cordova.contacts':'cordova-plugin-contacts',
    'org.apache.cordova.device':'cordova-plugin-device',
    'org.apache.cordova.device-motion':'cordova-plugin-device-motion',
    'org.apache.cordova.device-orientation':'cordova-plugin-device-orientation',
    'org.apache.cordova.dialogs':'cordova-plugin-dialogs',
    'org.apache.cordova.file':'cordova-plugin-file',
    'org.apache.cordova.file-transfer':'cordova-plugin-file-transfer',
    'org.apache.cordova.geolocation':'cordova-plugin-geolocation',
    'org.apache.cordova.globalization':'cordova-plugin-globalization',
    'org.apache.cordova.inappbrowser':'cordova-plugin-inappbrowser',
    'org.apache.cordova.media':'cordova-plugin-media',
    'org.apache.cordova.media-capture':'cordova-plugin-media-capture',
    'org.apache.cordova.network-information':'cordova-plugin-network-information',
    'org.apache.cordova.splashscreen':'cordova-plugin-splashscreen',
    'org.apache.cordova.statusbar':'cordova-plugin-statusbar',
    'org.apache.cordova.vibration':'cordova-plugin-vibration',
    'org.apache.cordova.test-framework':'cordova-plugin-test-framework',
    'com.msopentech.websql' : 'cordova-plugin-websql',
    'com.msopentech.indexeddb' : 'cordova-plugin-indexeddb',
    'com.microsoft.aad.adal' : 'cordova-plugin-ms-adal',
    'com.microsoft.capptain' : 'capptain-cordova',
    'com.microsoft.services.aadgraph' : 'cordova-plugin-ms-aad-graph',
    'com.microsoft.services.files' : 'cordova-plugin-ms-files',
    'om.microsoft.services.outlook' : 'cordova-plugin-ms-outlook',
    'com.pbakondy.sim' : 'cordova-plugin-sim',
    'android.support.v4' : 'cordova-plugin-android-support-v4',
    'android.support.v7-appcompat' : 'cordova-plugin-android-support-v7-appcompat',
    'com.google.playservices' : 'cordova-plugin-googleplayservices',
    'com.google.cordova.admob' : 'cordova-plugin-admobpro',
    'com.rjfun.cordova.extension' : 'cordova-plugin-extension',
    'com.rjfun.cordova.plugin.admob' : 'cordova-plugin-admob',
    'com.rjfun.cordova.flurryads' : 'cordova-plugin-flurry',
    'com.rjfun.cordova.facebookads' : 'cordova-plugin-facebookads',
    'com.rjfun.cordova.httpd' : 'cordova-plugin-httpd',
    'com.rjfun.cordova.iad' : 'cordova-plugin-iad',
    'com.rjfun.cordova.iflyspeech' : 'cordova-plugin-iflyspeech',
    'com.rjfun.cordova.lianlianpay' : 'cordova-plugin-lianlianpay',
    'com.rjfun.cordova.mobfox' : 'cordova-plugin-mobfox',
    'com.rjfun.cordova.mopub' : 'cordova-plugin-mopub',
    'com.rjfun.cordova.mmedia' : 'cordova-plugin-mmedia',
    'com.rjfun.cordova.nativeaudio' : 'cordova-plugin-nativeaudio',
    'com.rjfun.cordova.plugin.paypalmpl' : 'cordova-plugin-paypalmpl',
    'com.rjfun.cordova.smartadserver' : 'cordova-plugin-smartadserver',
    'com.rjfun.cordova.sms' : 'cordova-plugin-sms',
    'com.rjfun.cordova.wifi' : 'cordova-plugin-wifi',
    'com.ohh2ahh.plugins.appavailability' : 'cordova-plugin-appavailability',
    'org.adapt-it.cordova.fonts' : 'cordova-plugin-fonts',
    'de.martinreinhardt.cordova.plugins.barcodeScanner' : 'cordova-plugin-barcodescanner',
    'de.martinreinhardt.cordova.plugins.urlhandler' : 'cordova-plugin-urlhandler',
    'de.martinreinhardt.cordova.plugins.email' : 'cordova-plugin-email',
    'de.martinreinhardt.cordova.plugins.certificates' : 'cordova-plugin-certificates',
    'de.martinreinhardt.cordova.plugins.sqlite' : 'cordova-plugin-sqlite',
    'fr.smile.cordova.fileopener' : 'cordova-plugin-fileopener',
    'org.smile.websqldatabase.initializer' : 'cordova-plugin-websqldatabase-initializer',
    'org.smile.websqldatabase.wpdb' : 'cordova-plugin-websqldatabase',
    'org.jboss.aerogear.cordova.push' : 'aerogear-cordova-push',
    'org.jboss.aerogear.cordova.oauth2' : 'aerogear-cordova-oauth2',
    'org.jboss.aerogear.cordova.geo' : 'aerogear-cordova-geo',
    'org.jboss.aerogear.cordova.crypto' : 'aerogear-cordova-crypto',
    'org.jboss.aerogaer.cordova.otp' : 'aerogear-cordova-otp',
    'uk.co.ilee.applewatch' : 'cordova-plugin-apple-watch',
    'uk.co.ilee.directions' : 'cordova-plugin-directions',
    'uk.co.ilee.gamecenter' : 'cordova-plugin-game-center',
    'uk.co.ilee.jailbreakdetection' : 'cordova-plugin-jailbreak-detection',
    'uk.co.ilee.nativetransitions' : 'cordova-plugin-native-transitions',
    'uk.co.ilee.pedometer' : 'cordova-plugin-pedometer',
    'uk.co.ilee.shake' : 'cordova-plugin-shake',
    'uk.co.ilee.touchid' : 'cordova-plugin-touchid',
    'com.knowledgecode.cordova.websocket' : 'cordova-plugin-websocket',
    'com.elixel.plugins.settings' : 'cordova-plugin-settings',
    'com.cowbell.cordova.geofence' : 'cordova-plugin-geofence',
    'com.blackberry.community.preventsleep' : 'cordova-plugin-preventsleep',
    'com.blackberry.community.gamepad' : 'cordova-plugin-gamepad',
    'com.blackberry.community.led' : 'cordova-plugin-led',
    'com.blackberry.community.thumbnail' : 'cordova-plugin-thumbnail',
    'com.blackberry.community.mediakeys' : 'cordova-plugin-mediakeys',
    'com.blackberry.community.simplebtlehrplugin' : 'cordova-plugin-bluetoothheartmonitor',
    'com.blackberry.community.simplebeaconplugin' : 'cordova-plugin-bluetoothibeacon',
    'com.blackberry.community.simplebtsppplugin' : 'cordova-plugin-bluetoothspp',
    'com.blackberry.community.clipboard' : 'cordova-plugin-clipboard',
    'com.blackberry.community.curl' : 'cordova-plugin-curl',
    'com.blackberry.community.qt' : 'cordova-plugin-qtbridge',
    'com.blackberry.community.upnp' : 'cordova-plugin-upnp',
    'com.blackberry.community.PasswordCrypto' : 'cordova-plugin-password-crypto',
    'com.blackberry.community.deviceinfoplugin' : 'cordova-plugin-deviceinfo',
    'com.blackberry.community.gsecrypto' : 'cordova-plugin-bb-crypto',
    'com.blackberry.community.mongoose' : 'cordova-plugin-mongoose',
    'com.blackberry.community.sysdialog' : 'cordova-plugin-bb-sysdialog',
    'com.blackberry.community.screendisplay' : 'cordova-plugin-screendisplay',
    'com.blackberry.community.messageplugin' : 'cordova-plugin-bb-messageretrieve',
    'com.blackberry.community.emailsenderplugin' : 'cordova-plugin-emailsender',
    'com.blackberry.community.audiometadata' : 'cordova-plugin-audiometadata',
    'com.blackberry.community.deviceemails' : 'cordova-plugin-deviceemails',
    'com.blackberry.community.audiorecorder' : 'cordova-plugin-audiorecorder',
    'com.blackberry.community.vibration' : 'cordova-plugin-vibrate-intense',
    'com.blackberry.community.SMSPlugin' : 'cordova-plugin-bb-sms',
    'com.blackberry.community.extractZipFile' : 'cordova-plugin-bb-zip',
    'com.blackberry.community.lowlatencyaudio' : 'cordova-plugin-bb-nativeaudio',
    'com.blackberry.community.barcodescanner' : 'phonegap-plugin-barcodescanner',
    'com.blackberry.app' : 'cordova-plugin-bb-app',
    'com.blackberry.bbm.platform' : 'cordova-plugin-bbm',
    'com.blackberry.connection' : 'cordova-plugin-bb-connection',
    'com.blackberry.identity' : 'cordova-plugin-bb-identity',
    'com.blackberry.invoke.card' : 'cordova-plugin-bb-card',
    'com.blackberry.invoke' : 'cordova-plugin-bb-invoke',
    'com.blackberry.invoked' : 'cordova-plugin-bb-invoked',
    'com.blackberry.io.filetransfer' : 'cordova-plugin-bb-filetransfer',
    'com.blackberry.io' : 'cordova-plugin-bb-io',
    'com.blackberry.notification' : 'cordova-plugin-bb-notification',
    'com.blackberry.payment' : 'cordova-plugin-bb-payment',
    'com.blackberry.pim.calendar' : 'cordova-plugin-bb-calendar',
    'com.blackberry.pim.contacts' : 'cordova-plugin-bb-contacts',
    'com.blackberry.pim.lib' : 'cordova-plugin-bb-pimlib',
    'com.blackberry.push' : 'cordova-plugin-bb-push',
    'com.blackberry.screenshot' : 'cordova-plugin-screenshot',
    'com.blackberry.sensors' : 'cordova-plugin-bb-sensors',
    'com.blackberry.system' : 'cordova-plugin-bb-system',
    'com.blackberry.ui.contextmenu' : 'cordova-plugin-bb-ctxmenu',
    'com.blackberry.ui.cover' : 'cordova-plugin-bb-cover',
    'com.blackberry.ui.dialog' : 'cordova-plugin-bb-dialog',
    'com.blackberry.ui.input' : 'cordova-plugin-touch-keyboard',
    'com.blackberry.ui.toast' : 'cordova-plugin-toast',
    'com.blackberry.user.identity' : 'cordova-plugin-bb-idservice',
    'com.blackberry.utils' : 'cordova-plugin-bb-utils',
    'net.yoik.cordova.plugins.screenorientation' : 'cordova-plugin-screen-orientation',
    'com.phonegap.plugins.barcodescanner' : 'phonegap-plugin-barcodescanner',
    'com.manifoldjs.hostedwebapp' : 'cordova-plugin-hostedwebapp',
    'com.initialxy.cordova.themeablebrowser' : 'cordova-plugin-themeablebrowser',
    'gr.denton.photosphere' : 'cordova-plugin-panoramaviewer',
    'nl.x-services.plugins.googleplus' : 'cordova-plugin-googleplus',
    'nl.x-services.plugins.insomnia' : 'cordova-plugin-insomnia',
    'nl.x-services.plugins.toast' : 'cordova-plugin-x-toast',
    'nl.x-services.plugins.calendar' : 'cordova-plugin-calendar',
    'nl.x-services.plugins.launchmyapp' : 'cordova-plugin-customurlscheme',
    'com.bridge.open' : 'cordova-open',
    'com.bridge.safe' : 'cordova-safe',
    'com.disusered.open' : 'cordova-open',
    'com.disusered.safe' : 'cordova-safe',
    'me.apla.cordova.app-preferences' : 'cordova-plugin-app-preferences',
    'com.konotor.cordova' : 'cordova-plugin-konotor',
    'io.intercom.cordova' : 'cordova-plugin-intercom',
    'com.onesignal.plugins.onesignal' : 'onesignal-cordova-plugin',
    'com.danjarvis.document-contract': 'cordova-plugin-document-contract',
    'com.eface2face.iosrtc' : 'cordova-plugin-iosrtc',
    'com.mobileapptracking.matplugin' : 'cordova-plugin-tune',
    'com.marianhello.cordova.background-geolocation' : 'cordova-plugin-mauron85-background-geolocation',
    'fr.louisbl.cordova.locationservices' : 'cordova-plugin-locationservices',
    'fr.louisbl.cordova.gpslocation' : 'cordova-plugin-gpslocation',
    'com.hiliaox.weibo' : 'cordova-plugin-weibo',
    'com.uxcam.cordova.plugin' : 'cordova-uxcam',
    'de.fastr.phonegap.plugins.downloader' : 'cordova-plugin-fastrde-downloader',
    'de.fastr.phonegap.plugins.injectView' : 'cordova-plugin-fastrde-injectview',
    'de.fastr.phonegap.plugins.CheckGPS' : 'cordova-plugin-fastrde-checkgps',
    'de.fastr.phonegap.plugins.md5chksum' : ' cordova-plugin-fastrde-md5',
    'io.repro.cordova' : 'cordova-plugin-repro',
    're.notifica.cordova': 'cordova-plugin-notificare-push',
    'com.megster.cordova.ble': 'cordova-plugin-ble-central',
    'com.megster.cordova.bluetoothserial': 'cordova-plugin-bluetooth-serial',
    'cz.velda.cordova.plugin.devicefeedback': 'cordova-plugin-velda-devicefeedback',
    'cz.Velda.cordova.plugin.devicefeedback': 'cordova-plugin-velda-devicefeedback',
    'org.scriptotek.appinfo': 'cordova-plugin-appinfo',
    'com.yezhiming.cordova.appinfo': 'cordova-plugin-appinfo',
    'pl.makingwaves.estimotebeacons': 'cordova-plugin-estimote',
    'com.evothings.ble': 'cordova-plugin-ble',
    'com.appsee.plugin' : 'cordova-plugin-appsee'
}

module.exports.oldToNew = map;

var reverseMap = {};
Object.keys(map).forEach(function(elem){
    reverseMap[map[elem]] = elem;
})

module.exports.newToOld = reverseMap;
