export type ServiceItem = {
  id: string;
  title: string;
  description: string;
  points?: string[];
  example?: string;
};

export type ImpactItem = {title: string;text: string;};

export type ServicePageContent = {
  hero: {title: string;highlight: string;intro: string;};
  intro: {label: string;title: string;highlight: string;body: string[];points: string[];ordered?: boolean;};
  showcase: {title: string;highlight: string;intro: string;};
  services: ServiceItem[];
  expertise: {title: string;highlight: string;body: string;roles: string[];};
  impact: {title: string;highlight: string;items: ImpactItem[];};
};