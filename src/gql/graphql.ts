export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  ISO8601Date: { input: any; output: any };
  ISO8601DateTime: { input: any; output: any };
  JSON: { input: any; output: any };
};

export type BaseModelInterface = {
  createdAt: Scalars["ISO8601DateTime"]["output"];
  id: Scalars["ID"]["output"];
  updatedAt: Scalars["ISO8601DateTime"]["output"];
};

export type Node = {
  id: Scalars["ID"]["output"];
};

export type WalletInterface = {
  account?: Maybe<Scalars["String"]["output"]>;
  balance?: Maybe<Scalars["Float"]["output"]>;
  createdAt: Scalars["ISO8601DateTime"]["output"];
  currency?: Maybe<Scalars["String"]["output"]>;
  expiresAt?: Maybe<Scalars["ISO8601DateTime"]["output"]>;
  id: Scalars["ID"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  owner?: Maybe<Node>;
  preferences?: Maybe<Scalars["JSON"]["output"]>;
  startsAt?: Maybe<Scalars["ISO8601DateTime"]["output"]>;
  status?: Maybe<WalletStatus | `${WalletStatus}`>;
  transactions: TransactionConnection;
  type?: Maybe<Scalars["String"]["output"]>;
  updatedAt: Scalars["ISO8601DateTime"]["output"];
};

export type WalletInterfaceTransactionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<WalletTransactionFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFilter>;
};

export type TransactionSourceUnion = Offer | User;

export type Merchant = BaseModelInterface &
  Node & {
    __typename?: "Merchant";
    address?: Maybe<Scalars["String"]["output"]>;
    applicantId?: Maybe<Scalars["String"]["output"]>;
    country?: Maybe<Scalars["String"]["output"]>;
    createdAt: Scalars["ISO8601DateTime"]["output"];
    currency?: Maybe<Scalars["String"]["output"]>;
    description?: Maybe<Scalars["String"]["output"]>;
    email?: Maybe<Scalars["String"]["output"]>;
    feePercent?: Maybe<Scalars["Float"]["output"]>;
    id: Scalars["ID"]["output"];
    merchantUsers: MerchantUserConnection;
    name?: Maybe<Scalars["String"]["output"]>;
    number?: Maybe<Scalars["String"]["output"]>;
    phone?: Maybe<Scalars["String"]["output"]>;
    preferences?: Maybe<Scalars["JSON"]["output"]>;
    registrationNumber?: Maybe<Scalars["String"]["output"]>;
    rejectedAt?: Maybe<Scalars["ISO8601DateTime"]["output"]>;
    spcWallet?: Maybe<WalletCrypto>;
    startedAt?: Maybe<Scalars["ISO8601DateTime"]["output"]>;
    state?: Maybe<State | `${State}`>;
    status?: Maybe<MerchantStatus | `${MerchantStatus}`>;
    tokens: TokenConnection;
    updatedAt: Scalars["ISO8601DateTime"]["output"];
    verifiedAt?: Maybe<Scalars["ISO8601DateTime"]["output"]>;
  };

export type MerchantMerchantUsersArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<MerchantUserFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFilter>;
};

export type MerchantTokensArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<TokenFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFilter>;
};

export type MerchantConnection = {
  __typename?: "MerchantConnection";
  edges: Array<MerchantEdge>;
  metrics: Array<MetricResponse>;
  nodes: Array<Merchant>;
  pageInfo: PageInfo;
  sum: Scalars["Float"]["output"];
  totalCount: Scalars["Int"]["output"];
};

export type MerchantConnectionMetricsArgs = {
  dateField: Scalars["String"]["input"];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars["String"]["input"]>;
};

export type MerchantConnectionSumArgs = {
  field: Scalars["String"]["input"];
};

export type MerchantEdge = {
  __typename?: "MerchantEdge";
  cursor: Scalars["String"]["output"];
  node: Merchant;
};

export type MerchantUser = BaseModelInterface &
  Node & {
    __typename?: "MerchantUser";
    createdAt: Scalars["ISO8601DateTime"]["output"];
    id: Scalars["ID"]["output"];
    merchant?: Maybe<Merchant>;
    merchantId?: Maybe<Scalars["ID"]["output"]>;
    role: UserRole | `${UserRole}`;
    status: UserStatus | `${UserStatus}`;
    updatedAt: Scalars["ISO8601DateTime"]["output"];
    user?: Maybe<MerchantUser>;
    userId?: Maybe<Scalars["ID"]["output"]>;
  };

export type MerchantUserConnection = {
  __typename?: "MerchantUserConnection";
  edges: Array<MerchantUserEdge>;
  metrics: Array<MetricResponse>;
  nodes: Array<MerchantUser>;
  pageInfo: PageInfo;
  sum: Scalars["Float"]["output"];
  totalCount: Scalars["Int"]["output"];
};

export type MerchantUserConnectionMetricsArgs = {
  dateField: Scalars["String"]["input"];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars["String"]["input"]>;
};

export type MerchantUserConnectionSumArgs = {
  field: Scalars["String"]["input"];
};

export type MerchantUserEdge = {
  __typename?: "MerchantUserEdge";
  cursor: Scalars["String"]["output"];
  node: MerchantUser;
};

export type MetricResponse = {
  __typename?: "MetricResponse";
  label: Scalars["String"]["output"];
  value: Scalars["Float"]["output"];
};

export type Offer = BaseModelInterface &
  Node & {
    __typename?: "Offer";
    amount?: Maybe<Scalars["Float"]["output"]>;
    callbackUrl?: Maybe<Scalars["String"]["output"]>;
    canceledAt?: Maybe<Scalars["ISO8601DateTime"]["output"]>;
    confirmedAt?: Maybe<Scalars["ISO8601DateTime"]["output"]>;
    createdAt: Scalars["ISO8601DateTime"]["output"];
    currency?: Maybe<Scalars["String"]["output"]>;
    description?: Maybe<Scalars["String"]["output"]>;
    expiredAt?: Maybe<Scalars["ISO8601DateTime"]["output"]>;
    externalId?: Maybe<Scalars["String"]["output"]>;
    externalPayload?: Maybe<Scalars["JSON"]["output"]>;
    failedAt?: Maybe<Scalars["ISO8601DateTime"]["output"]>;
    feePercent?: Maybe<Scalars["Float"]["output"]>;
    id: Scalars["ID"]["output"];
    merchant?: Maybe<Merchant>;
    merchantId?: Maybe<Scalars["ID"]["output"]>;
    number?: Maybe<Scalars["String"]["output"]>;
    preferences?: Maybe<Scalars["JSON"]["output"]>;
    rate?: Maybe<Scalars["Float"]["output"]>;
    refundedAt?: Maybe<Scalars["ISO8601DateTime"]["output"]>;
    rejectedAt?: Maybe<Scalars["ISO8601DateTime"]["output"]>;
    respondBy?: Maybe<Node>;
    status?: Maybe<OfferStatus | `${OfferStatus}`>;
    updatedAt: Scalars["ISO8601DateTime"]["output"];
    user?: Maybe<User>;
    userId?: Maybe<Scalars["ID"]["output"]>;
  };

export type OfferConnection = {
  __typename?: "OfferConnection";
  edges: Array<OfferEdge>;
  metrics: Array<MetricResponse>;
  nodes: Array<Offer>;
  pageInfo: PageInfo;
  sum: Scalars["Float"]["output"];
  totalCount: Scalars["Int"]["output"];
};

export type OfferConnectionMetricsArgs = {
  dateField: Scalars["String"]["input"];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars["String"]["input"]>;
};

export type OfferConnectionSumArgs = {
  field: Scalars["String"]["input"];
};

export type OfferEdge = {
  __typename?: "OfferEdge";
  cursor: Scalars["String"]["output"];
  node: Offer;
};

export type PageInfo = {
  __typename?: "PageInfo";
  endCursor?: Maybe<Scalars["String"]["output"]>;
  hasNextPage: Scalars["Boolean"]["output"];
  hasPreviousPage: Scalars["Boolean"]["output"];
  startCursor?: Maybe<Scalars["String"]["output"]>;
};

export type Query = {
  __typename?: "Query";
  me?: Maybe<User>;
  merchantTokens: TokenConnection;
  merchantUsers: MerchantUserConnection;
  merchants: MerchantConnection;
  node?: Maybe<Node>;
  nodes?: Maybe<Array<Node>>;
  offers: OfferConnection;
  users: UserConnection;
  walletTransactions: TransactionConnection;
  wallets: WalletInterfaceConnection;
};

export type QueryMerchantTokensArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<TokenFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryMerchantUsersArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<MerchantUserFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryMerchantsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<MerchantFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryNodeArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryNodesArgs = {
  ids: Array<Scalars["ID"]["input"]>;
};

export type QueryOffersArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<OfferFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryUsersArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryWalletTransactionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<WalletTransactionFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFilter>;
};

export type QueryWalletsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<WalletFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFilter>;
};

export type Token = BaseModelInterface &
  Node & {
    __typename?: "Token";
    createdAt: Scalars["ISO8601DateTime"]["output"];
    id: Scalars["ID"]["output"];
    lastUsedAt?: Maybe<Scalars["ISO8601DateTime"]["output"]>;
    merchant?: Maybe<Merchant>;
    merchantId?: Maybe<Scalars["ID"]["output"]>;
    publicKey?: Maybe<Scalars["String"]["output"]>;
    secretKey?: Maybe<Scalars["String"]["output"]>;
    updatedAt: Scalars["ISO8601DateTime"]["output"];
  };

export type TokenConnection = {
  __typename?: "TokenConnection";
  edges: Array<TokenEdge>;
  metrics: Array<MetricResponse>;
  nodes: Array<Token>;
  pageInfo: PageInfo;
  sum: Scalars["Float"]["output"];
  totalCount: Scalars["Int"]["output"];
};

export type TokenConnectionMetricsArgs = {
  dateField: Scalars["String"]["input"];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars["String"]["input"]>;
};

export type TokenConnectionSumArgs = {
  field: Scalars["String"]["input"];
};

export type TokenEdge = {
  __typename?: "TokenEdge";
  cursor: Scalars["String"]["output"];
  node: Token;
};

export type Transaction = BaseModelInterface &
  Node & {
    __typename?: "Transaction";
    amount?: Maybe<Scalars["Float"]["output"]>;
    authorizedAt?: Maybe<Scalars["ISO8601DateTime"]["output"]>;
    authorizedById?: Maybe<Scalars["ID"]["output"]>;
    balance?: Maybe<Scalars["Float"]["output"]>;
    category?: Maybe<TransactionCategory | `${TransactionCategory}`>;
    createdAt: Scalars["ISO8601DateTime"]["output"];
    description?: Maybe<Scalars["String"]["output"]>;
    dueDate?: Maybe<Scalars["ISO8601DateTime"]["output"]>;
    id: Scalars["ID"]["output"];
    nonce?: Maybe<Scalars["String"]["output"]>;
    number: Scalars["String"]["output"];
    preferences?: Maybe<Scalars["JSON"]["output"]>;
    response?: Maybe<Scalars["JSON"]["output"]>;
    source?: Maybe<TransactionSourceUnion>;
    sourceId?: Maybe<Scalars["ID"]["output"]>;
    sourceType?: Maybe<Scalars["String"]["output"]>;
    status: TransactionStatus | `${TransactionStatus}`;
    transactionAt?: Maybe<Scalars["ISO8601DateTime"]["output"]>;
    typeCode?: Maybe<
      WalletTransactionTypeCode | `${WalletTransactionTypeCode}`
    >;
    updatedAt: Scalars["ISO8601DateTime"]["output"];
    wallet: WalletInterface;
    walletId: Scalars["ID"]["output"];
    withdrawTransaction?: Maybe<Transaction>;
    withdrawTransactionId?: Maybe<Scalars["ID"]["output"]>;
  };

export type TransactionConnection = {
  __typename?: "TransactionConnection";
  edges: Array<TransactionEdge>;
  metrics: Array<MetricResponse>;
  nodes: Array<Transaction>;
  pageInfo: PageInfo;
  sum: Scalars["Float"]["output"];
  totalCount: Scalars["Int"]["output"];
};

export type TransactionConnectionMetricsArgs = {
  dateField: Scalars["String"]["input"];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars["String"]["input"]>;
};

export type TransactionConnectionSumArgs = {
  field: Scalars["String"]["input"];
};

export type TransactionEdge = {
  __typename?: "TransactionEdge";
  cursor: Scalars["String"]["output"];
  node: Transaction;
};

export type User = BaseModelInterface &
  Node & {
    __typename?: "User";
    citizenIdNumber?: Maybe<Scalars["String"]["output"]>;
    confirmedAt?: Maybe<Scalars["ISO8601DateTime"]["output"]>;
    createdAt: Scalars["ISO8601DateTime"]["output"];
    dob?: Maybe<Scalars["ISO8601Date"]["output"]>;
    email?: Maybe<Scalars["String"]["output"]>;
    externalKycId?: Maybe<Scalars["String"]["output"]>;
    firstName?: Maybe<Scalars["String"]["output"]>;
    gender?: Maybe<Gender | `${Gender}`>;
    id: Scalars["ID"]["output"];
    language?: Maybe<Scalars["String"]["output"]>;
    merchantUsers: MerchantUserConnection;
    offers?: Maybe<Array<Offer>>;
    phone?: Maybe<Scalars["String"]["output"]>;
    spcWallet?: Maybe<WalletCrypto>;
    state?: Maybe<KycState | `${KycState}`>;
    status?: Maybe<Status | `${Status}`>;
    updatedAt: Scalars["ISO8601DateTime"]["output"];
    username?: Maybe<Scalars["String"]["output"]>;
  };

export type UserMerchantUsersArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<MerchantUserFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFilter>;
};

export type UserConnection = {
  __typename?: "UserConnection";
  edges: Array<UserEdge>;
  metrics: Array<MetricResponse>;
  nodes: Array<User>;
  pageInfo: PageInfo;
  sum: Scalars["Float"]["output"];
  totalCount: Scalars["Int"]["output"];
};

export type UserConnectionMetricsArgs = {
  dateField: Scalars["String"]["input"];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserConnectionSumArgs = {
  field: Scalars["String"]["input"];
};

export type UserEdge = {
  __typename?: "UserEdge";
  cursor: Scalars["String"]["output"];
  node: User;
};

export type WalletCrypto = BaseModelInterface &
  Node &
  WalletInterface & {
    __typename?: "WalletCrypto";
    account?: Maybe<Scalars["String"]["output"]>;
    balance?: Maybe<Scalars["Float"]["output"]>;
    createdAt: Scalars["ISO8601DateTime"]["output"];
    currency?: Maybe<Scalars["String"]["output"]>;
    expiresAt?: Maybe<Scalars["ISO8601DateTime"]["output"]>;
    id: Scalars["ID"]["output"];
    name?: Maybe<Scalars["String"]["output"]>;
    owner?: Maybe<Node>;
    preferences?: Maybe<Scalars["JSON"]["output"]>;
    startsAt?: Maybe<Scalars["ISO8601DateTime"]["output"]>;
    status?: Maybe<WalletStatus | `${WalletStatus}`>;
    transactions: TransactionConnection;
    type?: Maybe<Scalars["String"]["output"]>;
    updatedAt: Scalars["ISO8601DateTime"]["output"];
  };

export type WalletCryptoTransactionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<WalletTransactionFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFilter>;
};

export type WalletFiat = BaseModelInterface &
  Node &
  WalletInterface & {
    __typename?: "WalletFiat";
    account?: Maybe<Scalars["String"]["output"]>;
    balance?: Maybe<Scalars["Float"]["output"]>;
    createdAt: Scalars["ISO8601DateTime"]["output"];
    currency?: Maybe<Scalars["String"]["output"]>;
    expiresAt?: Maybe<Scalars["ISO8601DateTime"]["output"]>;
    id: Scalars["ID"]["output"];
    name?: Maybe<Scalars["String"]["output"]>;
    owner?: Maybe<Node>;
    preferences?: Maybe<Scalars["JSON"]["output"]>;
    startsAt?: Maybe<Scalars["ISO8601DateTime"]["output"]>;
    status?: Maybe<WalletStatus | `${WalletStatus}`>;
    transactions: TransactionConnection;
    type?: Maybe<Scalars["String"]["output"]>;
    updatedAt: Scalars["ISO8601DateTime"]["output"];
  };

export type WalletFiatTransactionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  filter?: InputMaybe<WalletTransactionFilter>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  sort?: InputMaybe<SortFilter>;
};

export type WalletInterfaceConnection = {
  __typename?: "WalletInterfaceConnection";
  edges: Array<WalletInterfaceEdge>;
  metrics: Array<MetricResponse>;
  nodes: Array<WalletInterface>;
  pageInfo: PageInfo;
  sum: Scalars["Float"]["output"];
  totalCount: Scalars["Int"]["output"];
};

export type WalletInterfaceConnectionMetricsArgs = {
  dateField: Scalars["String"]["input"];
  granularity: MetricGranularity;
  sumField?: InputMaybe<Scalars["String"]["input"]>;
};

export type WalletInterfaceConnectionSumArgs = {
  field: Scalars["String"]["input"];
};

export type WalletInterfaceEdge = {
  __typename?: "WalletInterfaceEdge";
  cursor: Scalars["String"]["output"];
  node: WalletInterface;
};

export enum Gender {
  Female = "female",
  Male = "male",
  Undefined = "undefined",
}

export enum KycState {
  FaceCompareFailed = "FACE_COMPARE_FAILED",
  FaceCompareVerified = "FACE_COMPARE_VERIFIED",
  FaceLivenessFailed = "FACE_LIVENESS_FAILED",
  FaceLivenessVerified = "FACE_LIVENESS_VERIFIED",
  Pending = "PENDING",
  Rejected = "REJECTED",
  Verified = "VERIFIED",
}

export enum MerchantStatus {
  Active = "active",
  Inactive = "inactive",
}

export enum MetricGranularity {
  Day = "day",
  Hour = "hour",
  Month = "month",
  Week = "week",
  Year = "year",
}

export enum OfferStatus {
  Canceled = "canceled",
  Confirmed = "confirmed",
  Expired = "expired",
  Failed = "failed",
  Pending = "pending",
  Processing = "processing",
  Refunded = "refunded",
  Rejected = "rejected",
}

export enum SortDirection {
  Asc = "asc",
  Desc = "desc",
}

export enum State {
  Pending = "pending",
  Rejected = "rejected",
  Started = "started",
  Verified = "verified",
}

export enum Status {
  Active = "active",
  Banned = "banned",
  Deleted = "deleted",
  Inactive = "inactive",
  Pending = "pending",
  Suspended = "suspended",
}

export enum TransactionCategory {
  Deposit = "deposit",
  Locked = "locked",
  Transfer = "transfer",
  Unlock = "unlock",
  Withdraw = "withdraw",
}

export enum TransactionStatus {
  Authorized = "authorized",
  Pending = "pending",
  Rejected = "rejected",
}

export enum UserRole {
  Admin = "admin",
  BillingManager = "billing_manager",
  Developer = "developer",
}

export enum UserStatus {
  Active = "active",
  Inactive = "inactive",
}

export enum WalletStatus {
  Active = "active",
  Closed = "closed",
  Locked = "locked",
}

export enum WalletTransactionTypeCode {
  Credit = "credit",
  Debit = "debit",
}

export type BoolFilter = {
  eq?: InputMaybe<Scalars["Boolean"]["input"]>;
  notEq?: InputMaybe<Scalars["Boolean"]["input"]>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type DateFilter = {
  eq?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gteq?: InputMaybe<Scalars["String"]["input"]>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lteq?: InputMaybe<Scalars["String"]["input"]>;
  notEq?: InputMaybe<Scalars["String"]["input"]>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type EnumStringFilter = {
  eq?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  notEq?: InputMaybe<Scalars["String"]["input"]>;
  notIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type IdFilter = {
  blank?: InputMaybe<Scalars["Boolean"]["input"]>;
  eq?: InputMaybe<Scalars["ID"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  gteq?: InputMaybe<Scalars["Int"]["input"]>;
  in?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  lteq?: InputMaybe<Scalars["Int"]["input"]>;
  notEq?: InputMaybe<Scalars["ID"]["input"]>;
  notIn?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  start?: InputMaybe<Scalars["Int"]["input"]>;
};

export type IntFilter = {
  blank?: InputMaybe<Scalars["Boolean"]["input"]>;
  eq?: InputMaybe<Scalars["Float"]["input"]>;
  gt?: InputMaybe<Scalars["Float"]["input"]>;
  gteq?: InputMaybe<Scalars["Float"]["input"]>;
  in?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  lt?: InputMaybe<Scalars["Float"]["input"]>;
  lteq?: InputMaybe<Scalars["Float"]["input"]>;
  notEq?: InputMaybe<Scalars["Float"]["input"]>;
  notIn?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type MerchantFilter = {
  applicantId?: InputMaybe<IdFilter>;
  country?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  currency?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  email?: InputMaybe<StringFilter>;
  feePercent?: InputMaybe<IntFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  number?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  registrationNumber?: InputMaybe<StringFilter>;
  rejectedAt?: InputMaybe<DateFilter>;
  startedAt?: InputMaybe<DateFilter>;
  state?: InputMaybe<EnumStringFilter>;
  status?: InputMaybe<EnumStringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  verifiedAt?: InputMaybe<DateFilter>;
};

export type MerchantUserFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  merchant?: InputMaybe<MerchantFilter>;
  merchantId?: InputMaybe<IdFilter>;
  role?: InputMaybe<EnumStringFilter>;
  status?: InputMaybe<EnumStringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
  userId?: InputMaybe<IdFilter>;
};

export type OfferFilter = {
  amount?: InputMaybe<IntFilter>;
  callbackUrl?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  currency?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  externalId?: InputMaybe<StringFilter>;
  feePercent?: InputMaybe<IntFilter>;
  id?: InputMaybe<IdFilter>;
  merchant?: InputMaybe<MerchantFilter>;
  merchantId?: InputMaybe<IdFilter>;
  number?: InputMaybe<StringFilter>;
  rate?: InputMaybe<IntFilter>;
  respondById?: InputMaybe<IdFilter>;
  respondByType?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  user?: InputMaybe<UserFilter>;
  userId?: InputMaybe<IdFilter>;
};

export type SortFilter = {
  direction?: InputMaybe<SortDirection | `${SortDirection}`>;
  field: Scalars["String"]["input"];
};

export type StringFilter = {
  blank?: InputMaybe<Scalars["Boolean"]["input"]>;
  cont?: InputMaybe<Scalars["String"]["input"]>;
  end?: InputMaybe<Scalars["String"]["input"]>;
  eq?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  notEq?: InputMaybe<Scalars["String"]["input"]>;
  notIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  start?: InputMaybe<Scalars["String"]["input"]>;
};

export type TokenFilter = {
  createdAt?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  merchant?: InputMaybe<MerchantFilter>;
  merchantId?: InputMaybe<IdFilter>;
  publicKey?: InputMaybe<StringFilter>;
  secretKey?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type UserFilter = {
  citizenIdNumber?: InputMaybe<StringFilter>;
  civilId?: InputMaybe<StringFilter>;
  confirmed?: InputMaybe<BoolFilter>;
  confirmedAt?: InputMaybe<DateFilter>;
  createdAt?: InputMaybe<DateFilter>;
  dob?: InputMaybe<DateFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  fullName?: InputMaybe<StringFilter>;
  gender?: InputMaybe<EnumStringFilter>;
  id?: InputMaybe<IdFilter>;
  lastName?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  state?: InputMaybe<EnumStringFilter>;
  status?: InputMaybe<EnumStringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  username?: InputMaybe<StringFilter>;
};

export type WalletFilter = {
  availableAmount?: InputMaybe<IntFilter>;
  balance?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateFilter>;
  freezeAmount?: InputMaybe<IntFilter>;
  id?: InputMaybe<IdFilter>;
  merchantName?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  ownerId?: InputMaybe<IdFilter>;
  ownerType?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStringFilter>;
  storeName?: InputMaybe<StringFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
};

export type WalletTransactionFilter = {
  accountNumber?: InputMaybe<StringFilter>;
  amount?: InputMaybe<IntFilter>;
  archived?: InputMaybe<BoolFilter>;
  authorizedAt?: InputMaybe<DateFilter>;
  authorizedById?: InputMaybe<IdFilter>;
  balance?: InputMaybe<IntFilter>;
  category?: InputMaybe<EnumStringFilter>;
  createdAt?: InputMaybe<DateFilter>;
  date?: InputMaybe<DateFilter>;
  description?: InputMaybe<StringFilter>;
  dueDate?: InputMaybe<DateFilter>;
  id?: InputMaybe<IdFilter>;
  merchantName?: InputMaybe<StringFilter>;
  number?: InputMaybe<StringFilter>;
  sourceId?: InputMaybe<IdFilter>;
  sourceType?: InputMaybe<StringFilter>;
  status?: InputMaybe<EnumStringFilter>;
  storeName?: InputMaybe<StringFilter>;
  transactionAt?: InputMaybe<DateFilter>;
  typeCode?: InputMaybe<EnumStringFilter>;
  updatedAt?: InputMaybe<DateFilter>;
  wallet?: InputMaybe<WalletFilter>;
  walletId?: InputMaybe<IdFilter>;
  walletTransactionId?: InputMaybe<IdFilter>;
  withdrawTransaction?: InputMaybe<WalletTransactionFilter>;
};
