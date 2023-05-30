export interface PortfolioDataType {
  title: ResumeTitleType;
  information: InformationType;
  project: ProjectType[];
  certificate: CertificateType[];
}

export interface ResumeTitleType {
  title: string;
}

export interface InformationType {
  name: string;
  address: string;
  birth: string;
  contact: ContactType[];
}

export interface ContactType {
  id: number;
  name: string;
  href: string;
  isEmail?: boolean;
}

export interface ProjectType {
  id: number;
  name: string;
  description: string;
  shortDesc?: string;
  repoUrl?: string;
  webUrl?: string;
  videoUrl?: string;
  figmaUrl?: string;
  isTeam: boolean;
  percent: string;
  teamInfo: string;
  period: string[];
  stack: string[];
}

export interface CertificateType {
  id: number;
  name: string;
  description?: string;
  data: string;
  organizer: string;
}
