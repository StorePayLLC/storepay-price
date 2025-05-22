import { JSOAuth2 } from '@/utils/oauth2/JSOAuth2';
import cookies from "js-cookie";

export * from './flow';
// export * from './JSOAuth2';
export * from './OAuth2Token';

export const oauth = new JSOAuth2({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
  accessTokenUri: `${process.env.NEXT_PUBLIC_HOST}/oauth/token`,
  authorizationUri: `${process.env.NEXT_PUBLIC_HOST}/oauth/authorize`,
  scopes: currentScope(),
});

function currentScope() {
  switch (cookies.get('scope')) {
    case 'public':
      return ['public'];
    case 'merchant':
      return ['merchant'];
    case 'public backoffice':
      return ['public', 'backoffice'];
    default:
      return ['public'];
  }
}
