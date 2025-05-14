import { JSOAuth2 } from '../JSOAuth2';

export class BaseFlow {
  client: JSOAuth2;
  constructor(client: JSOAuth2) {
    this.client = client;
  }
}
