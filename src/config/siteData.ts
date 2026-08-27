import cvPdfUrl from '../assets/Prateek_Parihar_CV_Generic_1.pdf';

export interface ChangeItem {
  area: string;
  description: string;
}

export interface SiteConfig {
  candidate: {
    name: string;
    linkedInUrl: string;
    cvPdfPath: string;
  };
  intro: {
    heading: string;
    paragraph1: string;
    paragraph2: string;
  };
  changes: {
    heading: string;
    items: ChangeItem[];
  };
  linksSection: {
    heading: string;
    linkedIn: {
      title: string;
      buttonText: string;
      url: string;
    };
    cv: {
      title: string;
      buttonText: string;
      pdfPath: string;
    };
  };
  closing: {
    heading: string;
    paragraph: string;
    signoff: string;
  };
}

export const siteData: SiteConfig = {
  candidate: {
    name: 'Prateek Parihar',
    linkedInUrl: 'https://www.linkedin.com/in/pprateek26',
    cvPdfPath: cvPdfUrl,
  },

  intro: {
    heading: 'Feedback received. Changes made.',
    paragraph1:
      'Thanks again for the feedback during our conversation. I went through my LinkedIn, CV and experience descriptions and made the changes we discussed.',
    paragraph2:
      'I put together this short page so you can quickly see what I changed and access the updated versions.',
  },
  changes: {
    heading: 'What I changed',
    items: [
      {
        area: 'Positioning',
        description: 'Refined my overall positioning to better connect AI, analytics and operations.',
      },
      {
        area: 'LinkedIn',
        description: 'Updated my headline, About section, skills and experience presentation.',
      },
      {
        area: 'Experience',
        description:
          'Reworked job titles and descriptions to better reflect the work and responsibilities of each role.',
      },
      {
        area: 'Projects',
        description:
          'Improved the way my projects are presented, with more focus on the problem, solution and practical outcome.',
      },
      {
        area: 'CV',
        description: 'Created an updated generic CV that I can use as a base for relevant opportunities.',
      },
    ],
  },
  linksSection: {
    heading: 'Updated profiles',
    linkedIn: {
      title: 'LinkedIn Profile',
      buttonText: 'LinkedIn Profile',
      url: 'https://www.linkedin.com/in/pprateek26',
    },
    cv: {
      title: 'Updated Generic CV',
      buttonText: 'Download CV',
      pdfPath: cvPdfUrl,
    },
  },

  closing: {
    heading: "I'd value your perspective",
    paragraph:
      "I've made the changes we discussed. If you have a moment, I'd appreciate your view on whether the profile is clearer now and if there is anything you think I should improve further.",
    signoff: 'Thank you again for the guidance.',
  },
};
