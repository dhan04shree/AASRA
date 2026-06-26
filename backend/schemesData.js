const schemesData = [
  {
    name: "Pradhan Mantri Awas Yojana - Urban (PMAY-U)",
    type: "Housing",
    state: "India",
    launchYear: 2015,
    description:
      "Flagship urban housing scheme aimed at providing pucca houses to eligible urban households, including economically weaker and low-income families.",
    benefits: [
      "Affordable housing support for urban families",
      "Interest subsidy / housing assistance under eligible components",
      "Support for slum redevelopment and house construction",
      "Improved access to formal urban housing"
    ],
    officialLink: "https://pmay-urban.gov.in/",
    applyMode: "Online",
    incomeGroup: ["EWS", "LIG", "MIG-I", "MIG-II"],
    requiredDocuments: [
      "Aadhaar Card",
      "Income Certificate",
      "Address Proof",
      "Bank Account Details",
      "Passport Size Photo"
    ],
    tags: ["housing", "urban", "pmay", "subsidy"],
    status: "Active",
    source: "Government",
    eligibility: {
      minIncome: 0,
      maxIncome: 1800000,
      categories: ["EWS", "LIG", "MIG-I", "MIG-II", "SC", "ST", "OBC", "General"],
      gender: "Any",
      minAge: 18,
      maxAge: null,
      locationType: "Urban",
      landOwnershipRequired: false,
      bplRequired: false,
      aadhaarRequired: true
    }
  },

  {
    name: "Pradhan Mantri Awas Yojana - Gramin (PMAY-G)",
    type: "Housing",
    state: "India",
    launchYear: 2016,
    description:
      "Rural housing scheme for eligible rural households living in kutcha, dilapidated or inadequate houses.",
    benefits: [
      "Financial assistance for pucca house construction in rural areas",
      "Priority for houseless and poor households",
      "Improvement of rural housing quality"
    ],
    officialLink: "https://pmayg.nic.in/",
    applyMode: "Online",
    incomeGroup: ["BPL", "EWS"],
    requiredDocuments: [
      "Aadhaar Card",
      "Ration Card",
      "Income Proof",
      "Bank Account Details"
    ],
    tags: ["housing", "rural", "pmay-g", "bpl"],
    status: "Active",
    source: "Government",
    eligibility: {
      minIncome: 0,
      maxIncome: 300000,
      categories: ["BPL", "EWS", "SC", "ST", "OBC"],
      gender: "Any",
      minAge: 18,
      maxAge: null,
      locationType: "Rural",
      landOwnershipRequired: false,
      bplRequired: true,
      aadhaarRequired: true
    }
  },

  {
    name: "Affordable Rental Housing Complexes (ARHC)",
    type: "Rental",
    state: "India",
    launchYear: 2020,
    description:
      "Affordable rental housing initiative for urban migrants, workers, students and low-income households.",
    benefits: [
      "Affordable rental accommodation",
      "Support for migrants and urban workers",
      "Access to safer formal rental housing near work hubs"
    ],
    officialLink: "https://pmay-urban.gov.in/arhc",
    applyMode: "Online",
    incomeGroup: ["EWS", "LIG"],
    requiredDocuments: [
      "Aadhaar Card",
      "Identity Proof",
      "Income Proof"
    ],
    tags: ["rental", "urban", "migrant", "arhc"],
    status: "Active",
    source: "Government",
    eligibility: {
      minIncome: 0,
      maxIncome: 600000,
      categories: ["EWS", "LIG", "SC", "ST", "OBC", "General"],
      gender: "Any",
      minAge: 18,
      maxAge: null,
      locationType: "Urban",
      landOwnershipRequired: false,
      bplRequired: false,
      aadhaarRequired: true
    }
  },

  {
    name: "PMAY-U In-Situ Slum Redevelopment (ISSR)",
    type: "Slum Redevelopment",
    state: "India",
    launchYear: 2015,
    description:
      "Redevelopment of eligible slum settlements using land as a resource, with formal housing support for beneficiaries.",
    benefits: [
      "Rehabilitation of eligible slum households",
      "Improved housing and basic services in redeveloped settlements",
      "Formal housing in place of unsafe slum structures"
    ],
    officialLink: "https://pmay-urban.gov.in/",
    applyMode: "Both",
    incomeGroup: ["EWS"],
    requiredDocuments: [
      "Aadhaar Card",
      "Residence Proof",
      "Slum Occupancy / Local Verification Documents"
    ],
    tags: ["issr", "slum redevelopment", "urban"],
    status: "Active",
    source: "Government",
    eligibility: {
      minIncome: 0,
      maxIncome: 300000,
      categories: ["EWS", "SC", "ST", "OBC", "General"],
      gender: "Any",
      minAge: 18,
      maxAge: null,
      locationType: "Urban",
      landOwnershipRequired: false,
      bplRequired: false,
      aadhaarRequired: true
    }
  },

  {
    name: "PMAY-U Beneficiary Led Construction / Enhancement (BLC)",
    type: "Housing",
    state: "India",
    launchYear: 2015,
    description:
      "Financial assistance for eligible urban beneficiaries to construct a new house or enhance an existing one on their own land.",
    benefits: [
      "Support for self-construction or house extension",
      "Useful for households with land but inadequate housing",
      "Helps improve structural quality of homes"
    ],
    officialLink: "https://pmay-urban.gov.in/",
    applyMode: "Online",
    incomeGroup: ["EWS"],
    requiredDocuments: [
      "Aadhaar Card",
      "Land / Property Ownership Proof",
      "Income Certificate",
      "Bank Details"
    ],
    tags: ["blc", "self construction", "pmay"],
    status: "Active",
    source: "Government",
    eligibility: {
      minIncome: 0,
      maxIncome: 300000,
      categories: ["EWS", "SC", "ST", "OBC", "General"],
      gender: "Any",
      minAge: 18,
      maxAge: null,
      locationType: "Urban",
      landOwnershipRequired: true,
      bplRequired: false,
      aadhaarRequired: true
    }
  },

  {
    name: "PMAY-U Affordable Housing in Partnership (AHP)",
    type: "Housing",
    state: "India",
    launchYear: 2015,
    description:
      "Affordable housing projects developed through partnerships with public and private agencies for eligible urban beneficiaries.",
    benefits: [
      "Access to affordable housing units in partnership projects",
      "Improved supply of affordable urban homes",
      "Support for EWS-focused housing stock"
    ],
    officialLink: "https://pmay-urban.gov.in/",
    applyMode: "Both",
    incomeGroup: ["EWS", "LIG"],
    requiredDocuments: [
      "Aadhaar Card",
      "Income Proof",
      "Address Proof"
    ],
    tags: ["ahp", "affordable housing", "urban"],
    status: "Active",
    source: "Government",
    eligibility: {
      minIncome: 0,
      maxIncome: 600000,
      categories: ["EWS", "LIG", "SC", "ST", "OBC", "General"],
      gender: "Any",
      minAge: 18,
      maxAge: null,
      locationType: "Urban",
      landOwnershipRequired: false,
      bplRequired: false,
      aadhaarRequired: true
    }
  },

  {
    name: "Credit Linked Subsidy Support under PMAY (Home Loan Support)",
    type: "Housing",
    state: "India",
    launchYear: 2015,
    description:
      "Home-loan linked subsidy support category commonly associated with PMAY housing affordability support.",
    benefits: [
      "Reduced loan burden for eligible families",
      "Encourages formal home ownership",
      "Useful for first-time home buyers in eligible categories"
    ],
    officialLink: "https://pmay-urban.gov.in/",
    applyMode: "Online",
    incomeGroup: ["EWS", "LIG", "MIG-I", "MIG-II"],
    requiredDocuments: [
      "Aadhaar Card",
      "Income Proof",
      "Bank / Loan Documents",
      "Property Documents"
    ],
    tags: ["clss", "loan subsidy", "housing finance"],
    status: "Active",
    source: "Government",
    eligibility: {
      minIncome: 0,
      maxIncome: 1800000,
      categories: ["EWS", "LIG", "MIG-I", "MIG-II"],
      gender: "Any",
      minAge: 18,
      maxAge: 70,
      locationType: "Both",
      landOwnershipRequired: false,
      bplRequired: false,
      aadhaarRequired: true
    }
  },

  {
    name: "Rajiv Awas Yojana (Legacy Slum-Free City Scheme)",
    type: "Rehabilitation",
    state: "India",
    launchYear: 2011,
    description:
      "Earlier urban housing and slum improvement initiative aimed at moving toward slum-free cities; useful as legacy scheme data in housing dashboards.",
    benefits: [
      "Slum improvement and housing focus",
      "Support for urban poor housing planning",
      "Useful for rehabilitation-oriented references"
    ],
    officialLink: "",
    applyMode: "Both",
    incomeGroup: ["EWS", "LIG", "BPL"],
    requiredDocuments: [
      "Identity Proof",
      "Income Proof",
      "Residence Proof"
    ],
    tags: ["legacy", "slum", "rehabilitation"],
    status: "Closed",
    source: "Government",
    eligibility: {
      minIncome: 0,
      maxIncome: 600000,
      categories: ["BPL", "EWS", "LIG", "SC", "ST", "OBC"],
      gender: "Any",
      minAge: 18,
      maxAge: null,
      locationType: "Urban",
      landOwnershipRequired: false,
      bplRequired: false,
      aadhaarRequired: true
    }
  },

  {
    name: "Basic Services to Urban Poor (BSUP) - Legacy Housing Support",
    type: "Basic Services",
    state: "India",
    launchYear: 2005,
    description:
      "Legacy urban poverty and housing support program focused on basic services and housing-related infrastructure for the urban poor.",
    benefits: [
      "Improved housing-linked urban services",
      "Support for poor urban households",
      "Useful legacy scheme reference for rehabilitation mapping"
    ],
    officialLink: "",
    applyMode: "Offline",
    incomeGroup: ["BPL", "EWS"],
    requiredDocuments: [
      "Identity Proof",
      "Urban Residence Proof"
    ],
    tags: ["bsup", "legacy", "urban poor"],
    status: "Closed",
    source: "Government",
    eligibility: {
      minIncome: 0,
      maxIncome: 300000,
      categories: ["BPL", "EWS", "SC", "ST", "OBC"],
      gender: "Any",
      minAge: 18,
      maxAge: null,
      locationType: "Urban",
      landOwnershipRequired: false,
      bplRequired: true,
      aadhaarRequired: false
    }
  },

  {
    name: "Integrated Housing and Slum Development Programme (IHSDP) - Legacy",
    type: "Rehabilitation",
    state: "India",
    launchYear: 2005,
    description:
      "Legacy housing and slum development support scheme focused on shelter and basic services for urban poor communities.",
    benefits: [
      "Slum housing improvement support",
      "Better access to housing and civic amenities",
      "Useful legacy rehabilitation reference"
    ],
    officialLink: "",
    applyMode: "Offline",
    incomeGroup: ["BPL", "EWS"],
    requiredDocuments: [
      "Identity Proof",
      "Residence Proof"
    ],
    tags: ["ihsdp", "slum", "legacy"],
    status: "Closed",
    source: "Government",
    eligibility: {
      minIncome: 0,
      maxIncome: 300000,
      categories: ["BPL", "EWS", "SC", "ST", "OBC"],
      gender: "Any",
      minAge: 18,
      maxAge: null,
      locationType: "Urban",
      landOwnershipRequired: false,
      bplRequired: true,
      aadhaarRequired: false
    }
  },

  {
    name: "MHADA Affordable Housing Scheme",
    type: "Housing",
    state: "Maharashtra",
    launchYear: 1977,
    description:
      "MHADA housing scheme umbrella for affordable homes and lottery-based allotment for different income groups in Maharashtra.",
    benefits: [
      "Affordable housing access through public housing authority",
      "Lottery-based housing opportunities",
      "Units for EWS, LIG, MIG and HIG groups depending on project"
    ],
    officialLink: "https://www.mhada.gov.in/",
    applyMode: "Online",
    incomeGroup: ["EWS", "LIG", "MIG", "HIG"],
    requiredDocuments: [
      "Aadhaar Card",
      "PAN Card",
      "Income Certificate",
      "Domicile Certificate",
      "Bank Details"
    ],
    tags: ["mhada", "maharashtra", "lottery", "housing"],
    status: "Active",
    source: "Government",
    eligibility: {
      minIncome: 0,
      maxIncome: 2500000,
      categories: ["EWS", "LIG", "MIG", "HIG", "SC", "ST", "OBC", "General"],
      gender: "Any",
      minAge: 18,
      maxAge: null,
      locationType: "Both",
      landOwnershipRequired: false,
      bplRequired: false,
      aadhaarRequired: true
    }
  },

  {
    name: "MHADA EWS Housing Scheme",
    type: "Housing",
    state: "Maharashtra",
    launchYear: 1977,
    description:
      "MHADA housing opportunities targeted at economically weaker section households under state housing allotments and project launches.",
    benefits: [
      "Affordable homes for economically weaker households",
      "Government-backed housing allotment opportunity",
      "Useful for low-income urban families"
    ],
    officialLink: "https://www.mhada.gov.in/",
    applyMode: "Online",
    incomeGroup: ["EWS"],
    requiredDocuments: [
      "Aadhaar Card",
      "Income Certificate",
      "Domicile Proof"
    ],
    tags: ["mhada", "ews", "maharashtra"],
    status: "Active",
    source: "Government",
    eligibility: {
      minIncome: 0,
      maxIncome: 300000,
      categories: ["EWS", "SC", "ST", "OBC", "General"],
      gender: "Any",
      minAge: 18,
      maxAge: null,
      locationType: "Urban",
      landOwnershipRequired: false,
      bplRequired: false,
      aadhaarRequired: true
    }
  },

  {
    name: "MHADA LIG Housing Scheme",
    type: "Housing",
    state: "Maharashtra",
    launchYear: 1977,
    description:
      "MHADA housing support bucket for low-income group applicants under eligible state housing allotment projects.",
    benefits: [
      "Affordable housing opportunity for LIG families",
      "Access to public housing stock",
      "Useful for salaried low-income households"
    ],
    officialLink: "https://www.mhada.gov.in/",
    applyMode: "Online",
    incomeGroup: ["LIG"],
    requiredDocuments: [
      "Aadhaar Card",
      "Income Proof",
      "PAN Card",
      "Domicile Certificate"
    ],
    tags: ["mhada", "lig", "maharashtra"],
    status: "Active",
    source: "Government",
    eligibility: {
      minIncome: 300001,
      maxIncome: 600000,
      categories: ["LIG", "SC", "ST", "OBC", "General"],
      gender: "Any",
      minAge: 18,
      maxAge: null,
      locationType: "Urban",
      landOwnershipRequired: false,
      bplRequired: false,
      aadhaarRequired: true
    }
  },

  {
    name: "MHADA MIG Housing Scheme",
    type: "Housing",
    state: "Maharashtra",
    launchYear: 1977,
    description:
      "MHADA housing allotment category for middle-income group households in state housing projects.",
    benefits: [
      "Public housing access for middle-income households",
      "Lottery-based allotment opportunities",
      "Useful for urban home ownership"
    ],
    officialLink: "https://www.mhada.gov.in/",
    applyMode: "Online",
    incomeGroup: ["MIG"],
    requiredDocuments: [
      "Aadhaar Card",
      "PAN Card",
      "Income Certificate",
      "Bank Details"
    ],
    tags: ["mhada", "mig", "housing"],
    status: "Active",
    source: "Government",
    eligibility: {
      minIncome: 600001,
      maxIncome: 1200000,
      categories: ["MIG", "SC", "ST", "OBC", "General"],
      gender: "Any",
      minAge: 18,
      maxAge: null,
      locationType: "Urban",
      landOwnershipRequired: false,
      bplRequired: false,
      aadhaarRequired: true
    }
  },

  {
    name: "MHADA HIG Housing Scheme",
    type: "Housing",
    state: "Maharashtra",
    launchYear: 1977,
    description:
      "MHADA higher-income housing allotment category used in selected state housing projects and lotteries.",
    benefits: [
      "Public housing purchase opportunity for HIG applicants",
      "Access to larger / higher-category housing stock"
    ],
    officialLink: "https://www.mhada.gov.in/",
    applyMode: "Online",
    incomeGroup: ["HIG"],
    requiredDocuments: [
      "Aadhaar Card",
      "PAN Card",
      "Income Proof"
    ],
    tags: ["mhada", "hig", "housing"],
    status: "Active",
    source: "Government",
    eligibility: {
      minIncome: 1200001,
      maxIncome: 2500000,
      categories: ["HIG", "General", "SC", "ST", "OBC"],
      gender: "Any",
      minAge: 18,
      maxAge: null,
      locationType: "Urban",
      landOwnershipRequired: false,
      bplRequired: false,
      aadhaarRequired: true
    }
  },

  {
    name: "Nagpur Housing and Area Development Board (MHADA-Nagpur) Housing Scheme",
    type: "Housing",
    state: "Maharashtra",
    launchYear: 1977,
    description:
      "Regional MHADA housing opportunities and board projects serving Nagpur and nearby districts in Vidarbha.",
    benefits: [
      "Regional affordable housing access in Nagpur division",
      "Board-led housing allotment opportunities",
      "Useful for local housing project visibility in AASRA"
    ],
    officialLink: "https://www.mhada.gov.in/en/nagpur-housing-and-area-development-board",
    applyMode: "Online",
    incomeGroup: ["EWS", "LIG", "MIG", "HIG"],
    requiredDocuments: [
      "Aadhaar Card",
      "Income Proof",
      "Domicile / Residence Proof"
    ],
    tags: ["nagpur", "mhada", "vidarbha"],
    status: "Active",
    source: "Government",
    eligibility: {
      minIncome: 0,
      maxIncome: 2500000,
      categories: ["EWS", "LIG", "MIG", "HIG", "SC", "ST", "OBC", "General"],
      gender: "Any",
      minAge: 18,
      maxAge: null,
      locationType: "Urban",
      landOwnershipRequired: false,
      bplRequired: false,
      aadhaarRequired: true
    }
  },

  {
    name: "Pune MHADA Housing Scheme",
    type: "Housing",
    state: "Maharashtra",
    launchYear: 1977,
    description:
      "MHADA housing opportunities and board-led residential schemes for eligible households in Pune region.",
    benefits: [
      "Affordable housing access in Pune region",
      "Lottery / allotment based public housing opportunities"
    ],
    officialLink: "https://www.mhada.gov.in/",
    applyMode: "Online",
    incomeGroup: ["EWS", "LIG", "MIG", "HIG"],
    requiredDocuments: [
      "Aadhaar Card",
      "Income Certificate",
      "PAN Card"
    ],
    tags: ["pune", "mhada", "housing"],
    status: "Active",
    source: "Government",
    eligibility: {
      minIncome: 0,
      maxIncome: 2500000,
      categories: ["EWS", "LIG", "MIG", "HIG", "SC", "ST", "OBC", "General"],
      gender: "Any",
      minAge: 18,
      maxAge: null,
      locationType: "Urban",
      landOwnershipRequired: false,
      bplRequired: false,
      aadhaarRequired: true
    }
  },

  {
    name: "Konkan MHADA Housing Scheme",
    type: "Housing",
    state: "Maharashtra",
    launchYear: 1977,
    description:
      "MHADA regional housing opportunities for Konkan board applicants under state housing projects.",
    benefits: [
      "Regional housing allotment opportunities",
      "Affordable public housing options for eligible groups"
    ],
    officialLink: "https://www.mhada.gov.in/",
    applyMode: "Online",
    incomeGroup: ["EWS", "LIG", "MIG", "HIG"],
    requiredDocuments: [
      "Aadhaar Card",
      "Income Certificate",
      "Residence Proof"
    ],
    tags: ["konkan", "mhada", "housing"],
    status: "Active",
    source: "Government",
    eligibility: {
      minIncome: 0,
      maxIncome: 2500000,
      categories: ["EWS", "LIG", "MIG", "HIG", "SC", "ST", "OBC", "General"],
      gender: "Any",
      minAge: 18,
      maxAge: null,
      locationType: "Urban",
      landOwnershipRequired: false,
      bplRequired: false,
      aadhaarRequired: true
    }
  },

  {
    name: "CIDCO Housing Lottery Scheme",
    type: "Housing",
    state: "Maharashtra",
    launchYear: 1970,
    description:
      "CIDCO housing allotment / lottery opportunities for eligible applicants in Navi Mumbai and CIDCO-administered regions.",
    benefits: [
      "Affordable and planned urban housing opportunities",
      "Lottery-based housing allotment",
      "Useful for formal housing access in CIDCO areas"
    ],
    officialLink: "https://cidco.maharashtra.gov.in/",
    applyMode: "Online",
    incomeGroup: ["EWS", "LIG", "MIG"],
    requiredDocuments: [
      "Aadhaar Card",
      "PAN Card",
      "Income Proof",
      "Bank Details"
    ],
    tags: ["cidco", "lottery", "navi mumbai"],
    status: "Active",
    source: "Government",
    eligibility: {
      minIncome: 0,
      maxIncome: 1200000,
      categories: ["EWS", "LIG", "MIG", "SC", "ST", "OBC", "General"],
      gender: "Any",
      minAge: 18,
      maxAge: null,
      locationType: "Urban",
      landOwnershipRequired: false,
      bplRequired: false,
      aadhaarRequired: true
    }
  },

  {
    name: "Slum Rehabilitation Authority (SRA) Housing Scheme",
    type: "Slum Redevelopment",
    state: "Maharashtra",
    launchYear: 1995,
    description:
      "State-led slum rehabilitation framework aimed at redeveloping eligible slum settlements and rehabilitating beneficiaries into formal housing.",
    benefits: [
      "Rehabilitation housing for eligible slum households",
      "Improved housing quality and access to basic services",
      "Formal housing in redevelopment projects"
    ],
    officialLink: "https://sra.gov.in/",
    applyMode: "Both",
    incomeGroup: ["EWS", "LIG", "BPL"],
    requiredDocuments: [
      "Aadhaar Card",
      "Residence Proof",
      "Eligibility / Occupancy Related Documents"
    ],
    tags: ["sra", "slum rehab", "maharashtra"],
    status: "Active",
    source: "Government",
    eligibility: {
      minIncome: 0,
      maxIncome: 600000,
      categories: ["BPL", "EWS", "LIG", "SC", "ST", "OBC", "General"],
      gender: "Any",
      minAge: 18,
      maxAge: null,
      locationType: "Urban",
      landOwnershipRequired: false,
      bplRequired: false,
      aadhaarRequired: true
    }
  },

  {
    name: "Maharashtra Affordable Rental Housing Support",
    type: "Rental",
    state: "Maharashtra",
    launchYear: 2025,
    description:
      "State-level rental housing support direction aligned with Maharashtra Housing Policy 2025, with emphasis on affordable rental housing and migrant accommodation.",
    benefits: [
      "Rental housing focus for workers and low-income households",
      "Support for affordable urban rental supply",
      "Can help migrant and industrial workers access housing"
    ],
    officialLink: "",
    applyMode: "Both",
    incomeGroup: ["EWS", "LIG", "MIG"],
    requiredDocuments: [
      "Aadhaar Card",
      "Income Proof",
      "Identity / Residence Proof"
    ],
    tags: ["rental", "maharashtra policy", "workers"],
    status: "Upcoming",
    source: "Government",
    eligibility: {
      minIncome: 0,
      maxIncome: 1200000,
      categories: ["EWS", "LIG", "MIG", "SC", "ST", "OBC", "General"],
      gender: "Any",
      minAge: 18,
      maxAge: null,
      locationType: "Urban",
      landOwnershipRequired: false,
      bplRequired: false,
      aadhaarRequired: true
    }
  },

  {
    name: "Maharashtra Industrial Worker Housing Support",
    type: "Housing",
    state: "Maharashtra",
    launchYear: 2025,
    description:
      "Housing support direction for industrial workers near employment hubs under state housing policy planning concepts.",
    benefits: [
      "Housing closer to work locations",
      "Support for industrial and migrant workers",
      "Can reduce informal housing dependency near industrial areas"
    ],
    officialLink: "",
    applyMode: "Both",
    incomeGroup: ["EWS", "LIG", "MIG"],
    requiredDocuments: [
      "Aadhaar Card",
      "Employment / Worker Proof",
      "Income Proof"
    ],
    tags: ["worker housing", "industrial housing", "maharashtra"],
    status: "Upcoming",
    source: "Government",
    eligibility: {
      minIncome: 0,
      maxIncome: 1200000,
      categories: ["EWS", "LIG", "MIG", "General", "SC", "ST", "OBC"],
      gender: "Any",
      minAge: 18,
      maxAge: 60,
      locationType: "Urban",
      landOwnershipRequired: false,
      bplRequired: false,
      aadhaarRequired: true
    }
  },

  {
    name: "Maharashtra Senior Citizen Housing Support",
    type: "Housing",
    state: "Maharashtra",
    launchYear: 2025,
    description:
      "Housing support category inspired by Maharashtra’s senior citizen housing policy direction for elderly-friendly residential projects.",
    benefits: [
      "Age-friendly housing focus",
      "Improved residential safety and support for senior citizens",
      "Can support dedicated senior housing projects"
    ],
    officialLink: "",
    applyMode: "Both",
    incomeGroup: ["EWS", "LIG", "MIG", "HIG"],
    requiredDocuments: [
      "Aadhaar Card",
      "Age Proof",
      "Income Proof"
    ],
    tags: ["senior citizen", "housing", "maharashtra"],
    status: "Upcoming",
    source: "Government",
    eligibility: {
      minIncome: 0,
      maxIncome: 1800000,
      categories: ["General", "SC", "ST", "OBC", "EWS", "LIG", "MIG"],
      gender: "Any",
      minAge: 55,
      maxAge: null,
      locationType: "Both",
      landOwnershipRequired: false,
      bplRequired: false,
      aadhaarRequired: true
    }
  },

  {
    name: "Maharashtra Transit / Temporary Rehabilitation Housing",
    type: "Rehabilitation",
    state: "Maharashtra",
    launchYear: 2025,
    description:
      "Temporary / transit accommodation support concept relevant during redevelopment or rehabilitation of informal settlements and vulnerable communities.",
    benefits: [
      "Temporary shelter support during redevelopment",
      "Reduces displacement risk during rehabilitation projects",
      "Useful in slum redevelopment workflows"
    ],
    officialLink: "",
    applyMode: "Offline",
    incomeGroup: ["BPL", "EWS", "LIG"],
    requiredDocuments: [
      "Identity Proof",
      "Residence / Local Verification"
    ],
    tags: ["transit housing", "rehabilitation", "redevelopment"],
    status: "Upcoming",
    source: "Government",
    eligibility: {
      minIncome: 0,
      maxIncome: 600000,
      categories: ["BPL", "EWS", "LIG", "SC", "ST", "OBC", "General"],
      gender: "Any",
      minAge: 18,
      maxAge: null,
      locationType: "Urban",
      landOwnershipRequired: false,
      bplRequired: false,
      aadhaarRequired: true
    }
  },

  {
    name: "Maharashtra Slum Upgradation and Basic Services Support",
    type: "Basic Services",
    state: "Maharashtra",
    launchYear: 2025,
    description:
      "Housing-linked slum upgradation support bucket focused on improving living conditions, basic services and rehabilitation planning.",
    benefits: [
      "Improved settlement conditions",
      "Basic services and housing-linked support",
      "Useful for slum improvement and AASRA recommendations"
    ],
    officialLink: "",
    applyMode: "Both",
    incomeGroup: ["BPL", "EWS", "LIG"],
    requiredDocuments: [
      "Aadhaar Card",
      "Residence Proof",
      "Income Proof"
    ],
    tags: ["slum improvement", "basic services", "maharashtra"],
    status: "Upcoming",
    source: "Government",
    eligibility: {
      minIncome: 0,
      maxIncome: 600000,
      categories: ["BPL", "EWS", "LIG", "SC", "ST", "OBC", "General"],
      gender: "Any",
      minAge: 18,
      maxAge: null,
      locationType: "Urban",
      landOwnershipRequired: false,
      bplRequired: false,
      aadhaarRequired: true
    }
  },

  {
    name: "Maharashtra Women-Led Affordable Housing Support",
    type: "Housing",
    state: "Maharashtra",
    launchYear: 2025,
    description:
      "Women-oriented affordable housing support bucket for project demonstration, aligned to inclusive housing and ownership support goals.",
    benefits: [
      "Encourages women-led housing access",
      "Supports vulnerable women-headed households",
      "Useful for inclusive scheme recommendations"
    ],
    officialLink: "",
    applyMode: "Both",
    incomeGroup: ["EWS", "LIG", "MIG"],
    requiredDocuments: [
      "Aadhaar Card",
      "Income Proof",
      "Identity Proof"
    ],
    tags: ["women", "inclusive housing", "maharashtra"],
    status: "Upcoming",
    source: "Government",
    eligibility: {
      minIncome: 0,
      maxIncome: 1200000,
      categories: ["EWS", "LIG", "MIG", "SC", "ST", "OBC", "General"],
      gender: "Female",
      minAge: 18,
      maxAge: null,
      locationType: "Both",
      landOwnershipRequired: false,
      bplRequired: false,
      aadhaarRequired: true
    }
  },

  {
    name: "Maharashtra Urban Poor Housing Support",
    type: "Housing",
    state: "Maharashtra",
    launchYear: 2025,
    description:
      "State-level affordable housing support bucket for urban poor and vulnerable households for project recommendation purposes.",
    benefits: [
      "Affordable housing support for vulnerable urban households",
      "Useful for urban poverty-focused recommendations",
      "Can complement slum rehabilitation and rental options"
    ],
    officialLink: "",
    applyMode: "Both",
    incomeGroup: ["BPL", "EWS", "LIG"],
    requiredDocuments: [
      "Aadhaar Card",
      "Income Certificate",
      "Residence Proof"
    ],
    tags: ["urban poor", "housing", "maharashtra"],
    status: "Upcoming",
    source: "Government",
    eligibility: {
      minIncome: 0,
      maxIncome: 600000,
      categories: ["BPL", "EWS", "LIG", "SC", "ST", "OBC", "General"],
      gender: "Any",
      minAge: 18,
      maxAge: null,
      locationType: "Urban",
      landOwnershipRequired: false,
      bplRequired: false,
      aadhaarRequired: true
    }
  },

  {
    name: "Maharashtra Redevelopment-linked Affordable Housing Support",
    type: "Rehabilitation",
    state: "Maharashtra",
    launchYear: 2025,
    description:
      "Affordable housing support bucket relevant to redevelopment-driven rehabilitation and resettlement scenarios in dense urban areas.",
    benefits: [
      "Supports rehabilitation in redevelopment contexts",
      "Can reduce housing insecurity during urban renewal",
      "Useful for redevelopment recommendation logic"
    ],
    officialLink: "",
    applyMode: "Both",
    incomeGroup: ["EWS", "LIG", "MIG"],
    requiredDocuments: [
      "Aadhaar Card",
      "Residence Proof",
      "Income Proof"
    ],
    tags: ["redevelopment", "rehabilitation", "urban renewal"],
    status: "Upcoming",
    source: "Government",
    eligibility: {
      minIncome: 0,
      maxIncome: 1200000,
      categories: ["EWS", "LIG", "MIG", "SC", "ST", "OBC", "General"],
      gender: "Any",
      minAge: 18,
      maxAge: null,
      locationType: "Urban",
      landOwnershipRequired: false,
      bplRequired: false,
      aadhaarRequired: true
    }
  }
];

module.exports = schemesData;