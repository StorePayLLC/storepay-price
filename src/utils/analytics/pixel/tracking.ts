// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const fbq: any;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function trackFBPixel(eventType: string, eventName: string, params: any, options?: any) {
  if (typeof fbq === 'undefined') return;
  fbq(eventType, eventName, params, options);
}

export const pixel = {
  purchase(params: PurchaseParameters) {
    trackFBPixel('track', 'Purchase', params);
  },
  viewContent(params: ViewContentParameters) {
    trackFBPixel('track', 'ViewContent', params);
  },
  search(params: SearchParameters) {
    trackFBPixel('track', 'Search', params);
  },
  addToCart(params: AddToCartParameters) {
    trackFBPixel('track', 'AddToCart', params);
  },
  addToWishlist(params: AddToWishlistParameters) {
    trackFBPixel('track', 'AddToWishlist', params);
  },
  initiateCheckout(params: InitiateCheckoutParameters) {
    trackFBPixel('track', 'InitiateCheckout', params);
  },
  addPaymentInfo(params: AddPaymentInfoParameters) {
    trackFBPixel('track', 'AddPaymentInfo', params);
  },
  lead(params: LeadParameters) {
    trackFBPixel('track', 'Lead', params);
  },
  completeRegistration(params: CompleteRegistrationParameters) {
    trackFBPixel('track', 'CompleteRegistration', params);
  },
  customEvent(params: CustomParameters, options: EventIDOptions) {
    trackFBPixel('trackCustom', options.eventID, params);
  },
};

interface ViewContentParameters {
  value?: number | undefined;
  currency?: string | undefined;
  content_name?: string | undefined;
  content_type?: string | undefined;
  content_ids?: string[] | undefined;
  content_category?: string | undefined;
  contents?: Array<{ id: string; quantity: number }> | undefined;
}

interface SearchParameters {
  value?: number | undefined;
  currency?: string | undefined;
  content_category?: string | undefined;
  content_ids?: string[] | undefined;
  search_string?: string | undefined;
}

interface AddToCartParameters {
  value?: number | undefined;
  currency?: string | undefined;
  content_name?: string | undefined;
  content_type?: string | undefined;
  content_ids?: string[] | undefined;
}

interface AddToWishlistParameters {
  value?: number | undefined;
  currency?: string | undefined;
  content_name?: string | undefined;
  content_category?: string | undefined;
  content_ids?: string[] | undefined;
}

interface InitiateCheckoutParameters {
  value?: number | undefined;
  currency?: string | undefined;
  content_name?: string | undefined;
  content_category?: string | undefined;
  content_ids?: string[] | undefined;
  num_items?: number | undefined;
}

interface AddPaymentInfoParameters {
  value?: number | undefined;
  currency?: string | undefined;
  content_category?: string | undefined;
  content_ids?: string[] | undefined;
}

interface PurchaseParameters {
  value: number;
  currency: string;
  content_name?: string | undefined;
  content_type?: string | undefined;
  content_ids?: string[] | undefined;
  num_items?: number | undefined;
  order_id?: string | undefined;
}

interface LeadParameters {
  value?: number | undefined;
  currency?: string | undefined;
  content_name?: string | undefined;
  content_category?: string | undefined;
}

interface CompleteRegistrationParameters {
  value?: number | undefined;
  currency?: string | undefined;
  content_name?: string | undefined;
  status?: boolean | undefined;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CustomParameters = Record<string, any>;

interface EventIDOptions {
  eventID: string;
}
