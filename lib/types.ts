export interface CommitteeMember {
  name: string;
  position: string;
  headshot?: string;
  socials: {
    github?: string;
    linkedin?: string;
    website?: string;
  };
}

export interface NewsItem {
  title: string;
  path: string;
  date: string;
  prettyDate: string;
  excerpt: string;
}

export interface Content {
  title: string;
  description: string;
  published: boolean;
}

export interface NewsContent extends Content {
  slug: string;
  date: Date;
}
