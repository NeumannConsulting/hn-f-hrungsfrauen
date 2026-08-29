export type SiteSettings={siteName:string;logo?:unknown;email?:string;phone?:string;instagram?:string;linkedin?:string;donationUrl?:string;footerText?:string};
export type Event={_id:string;title:string;slug:string;date:string;time?:string;location?:string;type:string;excerpt?:string;description?:string;image?:unknown;registrationUrl?:string;featured?:boolean};
export type Person={_id:string;name:string;role?:string;organization?:string;bio?:string;quote?:string;image?:unknown;imageAlt?:string;order:number};
export type PressArticle={_id:string;title:string;slug:string;date:string;medium?:string;excerpt?:string;url?:string;image?:unknown};
export type PageTimelineItem={year:string;text:string};
export type Page={_id:string;title:string;slug:string;eyebrow?:string;intro?:string;heroImage?:unknown;featureImage?:unknown;secondaryImage?:unknown;bodyTitle?:string;bodyText?:string;timelineTitle?:string;timeline?:PageTimelineItem[];seoTitle?:string;seoDescription?:string};
