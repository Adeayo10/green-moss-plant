import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'green-moss-plant',
  webDir: 'www',
  server: {
    hostname: 'localhost',
    androidScheme: 'https',
    iosScheme: 'ionic',
   // url: 'http://192.168.1.X:8100', // Replace X with your local IP
    cleartext: true
  },
  ios: {
    limitsNavigationsToAppBoundDomains: false
  }
};

export default config;
