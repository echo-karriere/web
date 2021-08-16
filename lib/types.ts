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
