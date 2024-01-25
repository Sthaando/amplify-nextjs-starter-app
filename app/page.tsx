import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';

Amplify.configure(amplifyconfig);
Amplify.configure({
  ...Amplify.getConfig(),
  Interactions: {
    LexV2: {
      'WelcomeBot': {
        aliasId: 'TSTALIASID',
        botId: 'UJZJZJ9AMZ',
        region: 'us-east-1'
      }
    }
  }
});
