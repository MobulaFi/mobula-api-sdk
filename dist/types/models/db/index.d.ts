import { BlockchainName } from 'mobula-lite/lib/model';
export interface Token {
    ipfsHash: string;
    id: number;
    lastUpdate: number;
    utilityScore: number;
    socialScore: number;
    trustScore: number;
}
export interface TokenListing {
    token: Token;
    coeff: number;
    status: ListingStatus;
    submitter: string;
    statusIndex: number;
    accruedUtilityScore: number;
    accruedSocialScore: number;
    accruedTrustScore: number;
    phase: number;
}
export declare enum ListingStatus {
    Init = 1,
    Pool = 2,
    Updating = 3,
    Sorting = 4,
    Validation = 5,
    Validated = 6,
    Rejected = 7,
    Killed = 8
}
export declare enum ListingVote {
    Accept = 0,
    Reject = 1,
    ModificationsNeeded = 2
}
export interface TokenIpfsData {
    name: string;
    symbol: string;
    type: 'token' | 'coin' | 'nft';
    logo: string;
    description: string;
    categories: string[];
    links: {
        website: string;
        twitter: string;
        telegram: string;
        github: string;
        discord: string;
        audits: string[];
        kycs: string[];
    };
    team: TeamMember[];
    contracts: Address[];
    totalSupplyContracts: Address[];
    excludedFromCirculationAddresses: Address[];
    tokenomics: {
        distribution: Distribution[];
        launch: Launch;
        sales: Sale[];
        vestingSchedule: ScheduleUpdate[];
        fees: Fee[];
    };
}
export interface Launch {
    date: number;
    lag: number;
    exchange?: string;
    vsToken?: string;
}
export interface Address {
    address: string;
    blockchain: BlockchainName;
    blockchain_id: number;
}
export interface TeamMember {
    name: string;
    role: string;
    telegram: string;
    twitter: string;
    linkedin: string;
}
export interface Distribution {
    name: string;
    percentage: number;
    addresses?: Address[];
}
export interface Sale {
    name: string;
    date: number;
    valuation: number;
    price: number;
    amount: number;
    platform: string;
}
export type ScheduleUpdate = [
    number,
    number,
    {
        name: string;
        amount: number;
    }[]
];
export interface Fee {
    name: string;
    percentage: number;
    details?: string;
    side: 'buy' | 'sell';
}
export interface ListingEntry {
    token_id: number;
    ipfs_hash: string;
    utility_score: number;
    social_score: number;
    trust_score: number;
    status: 'new' | 'update';
    final_decision: boolean;
    validated: boolean;
    votes: ListingVoteEntry[];
    submitter: string;
    coeff: number;
    protocol_version: number;
    block_number: number;
    timestamp: number;
    token_data: TokenIpfsData;
}
export interface ListingVoteEntry {
    block_number: number;
    member: string;
    token_id: number;
    final_decision: boolean;
    utility_score: number;
    social_score: number;
    trust_score: number;
    validated: boolean;
    protocol_version: number;
}
export interface Asset {
    binance_id?: string;
    created_at?: string;
    total_supply_contracts?: string[];
    circulating_supply_addresses?: string[];
    utility_score?: number;
    social_score?: number;
    trust_score?: number;
    market_score?: number;
    twitter?: string;
    website?: string;
    description?: string;
    audit?: string;
    kyc?: string;
    chat?: string;
    logo?: string;
    symbol?: string;
    discord?: string;
    decimals?: number[];
    name?: string;
    contracts?: string[];
    blockchains?: BlockchainName[];
    coin?: boolean;
    off_chain_volume?: number;
    off_chain_volume_history?: {
        off_chain_volume: [number, number][];
    };
    volume_change_24h?: number;
    off_chain_volume_change_24h?: number;
    market_cap_history?: {
        market_cap: [number, number][];
    };
    total_volume?: number;
    total_volume_history?: {
        total_volume: [number, number][];
    };
    market_cap_diluted_history?: {
        market_cap_diluted: [number, number][];
    };
    volume_history?: {
        volume: [number, number][];
    };
    liquidity_history?: {
        liquidity: [number, number][];
    };
    price_history?: {
        price: [number, number][];
    };
    price_change_1h?: number;
    price_change_24h?: number;
    price_change_7d?: number;
    price_change_1m?: number;
    price_change_1y?: number;
    liquidity_change_24h?: number;
    rank?: number;
    liquidity_market_cap_ratio?: number;
    market_cap?: number;
    market_cap_diluted?: number;
    volume?: number;
    volume_7d?: number;
    liquidity?: number;
    price?: number;
    circulating_supply?: number;
    total_supply?: number;
    max_supply?: number;
    team: TeamMember[];
    ath: [number, number];
    atl: [number, number];
    history_loaded?: boolean;
    tracked?: boolean;
    untrack_reason: string;
    untracked_at: string;
    coingecko_id?: string;
    id?: number;
    telegram_members?: number;
    telegram_online_members?: number;
    telegram_online_ratio?: number;
    discord_members?: number;
    discord_online_members?: number;
    discord_online_ratio?: number;
    twitter_members?: number;
    tags?: string[];
    dropstab_id?: string;
    launch: Launch;
    distribution?: Distribution[];
    sales: Sale[];
    fees: Fee[];
    release_schedule?: ScheduleUpdate[];
    ico_price?: number;
    listing_hash?: string;
    listing_amount?: number;
    protocol_id?: number;
    listing_type?: string;
    discord_name?: string;
    github?: string;
}
export interface Database {
    public: {
        Tables: {
            assets: {
                Row: Asset;
            };
        };
    };
}
