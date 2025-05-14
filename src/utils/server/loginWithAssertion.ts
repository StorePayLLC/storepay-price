import { AssertionFLow, oauth } from '../oauth2';

const assertionFlow = new AssertionFLow(oauth);

export async function loginWithAssertion(assertion: string, provider: string): Promise<string | undefined> {
  try {
    const response = await assertionFlow.getToken(assertion, provider);
    return JSON.stringify({
      accessToken: response.accessToken,
      refreshToken: response.refreshToken,
      tokenType: response.tokenType,
      expires: response.expires,
    });
  } catch (e) {
    return undefined;
  }
}
