export interface PortfolioDataType {
  resumeTitle: ResumeTitleType;
  information: InformationType;
  workExperience: WorkExperienceType[];
  project: ProjectType[];
  activity: ActivityType[];
  education: EducationType[];
  certificate: CertificateType[];
}

export interface ResumeTitleType {
  title: string;
}

export interface InformationType {
  name: string;
  birth: string;
  contact: ContactType[];
  introductionText: IntroductionType;
}

export interface WorkExperienceType {
  id: number;
  name: string;
  position: string;
  period: string[];
  description: string[];
  project: WorkProjectType[];
}

export interface WorkProjectType {
  name: string;
  description: WorkDescriptionType[];
}

export interface WorkDescriptionType {
  mainText: string;
  subText: string[];
}

export interface ActivityType {
  id: number;
  name: string;
  period: string;
  description: string[] | string;
}

export interface EducationType {
  id: number;
  name: string;
  period: string;
  description: string[] | string;
}

export interface IntroductionType {
  mainText: string;
  baseText: {
    baseMainText: string;
    baseSubText: string[];
  }[];
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
