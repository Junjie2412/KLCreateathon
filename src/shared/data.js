export const nodesData = [
    { "id": "1", "radius": "5", "name": "OPNT" },
    { "id": "2", "radius": "3", "name": "Parker Rodriguez" },
    { "id": "3", "radius": "5", "name": "Luis Martinez" },
    { "id": "4", "radius": "15", "name": "Medmen Enterprises Inc." },
    { "id": "5", "radius": "5", "name": "STAR Matter 486593" },
    { "id": "6", "radius": "2", "name": "Form D 345 10/31/2017" },
    { "id": "7", "radius": "8", "name": "Jessica Powers" },
    { "id": "8", "radius": "5", "name": "STAR Matter 7426523" },
    { "id": "9", "radius": "3", "name": "2923219" },
    { "id": "10", "radius": "8", "name": "Aurora Cannibas Inc."  },
    { "id": "11", "radius": "5", "name": "ACB" },
    { "id": "12", "radius": "5", "name": "Opiant Pharmaceuticals" },
    { "id": "13", "radius": "2", "name": "Jack Roberts" },
    { "id": "14", "radius": "2", "name": "Eli Martinelli" },
    { "id": "15", "radius": "3", "name": "Joints 'R' Us" },
    { "id": "16", "radius": "5", "name": "Eugene Mendel" },
    { "id": "17", "radius": "4", "name": "RCM filing 23556" },
    { "id": "18", "radius": "5", "name": "Harold Watkins" },
    { "id": "19", "radius": "12", "name": "Charles Schwab & Co. Inc. (5393)" },
    { "id": "20", "radius": "6", "name": "Apple" },
    { "id": "21", "radius": "5", "name": "IBM" }
];

export const linksData = [
    { "source":  "5", "target":  "3", "weight": "5", "label": "mentions" },
    { "source":  "5", "target":  "4", "weight": "2", "label": "relates to" },
    { "source":  "3", "target":  "4", "weight": "2", "label": "employed by" },
    { "source":  "6", "target":  "4", "weight": "1", "label": "mentions" },
    { "source":  "4", "target":  "1", "weight": "1", "label": "contacts" },
    { "source":  "4", "target": "11", "weight": "1", "label": "trades with" },
    { "source":  "2", "target":  "4", "weight": "1", "label": "employd by" },
    { "source":  "2", "target":  "9", "weight": "1", "label": "contacts" },
    { "source":  "4", "target": "10", "weight": "9", "label": "owns" },
    { "source": "14", "target": "10", "weight": "1", "label": "employed by" },
    { "source": "13", "target": "10", "weight": "1", "label": "employed by" },
    { "source": "11", "target": "10", "weight": "2", "label": "trades with" },
    { "source":  "8", "target": "10", "weight": "1", "label": "relates to" },
    { "source":  "8", "target": "12", "weight": "2", "label": "mentions" },
    { "source":  "7", "target": "16", "weight": "3", "label": "contacts" },
    { "source": "16", "target": "19", "weight": "4", "label": "employed by" },
    { "source": "19", "target": "21", "weight": "5", "label": "trades" },
    { "source": "12", "target": "19", "weight": "1", "label": "trades with" },
    { "source": "19", "target": "20", "weight": "4", "label": "trades" },
    { "source": "18", "target": "20", "weight": "1", "label": "owns stock in" },
    { "source": "19", "target": "10", "weight": "7", "label": "sued in 2017" },
    { "source":  "4", "target": "15", "weight": "1", "label": "trades" },
    { "source": "18", "target": "15", "weight": "1", "label": "owns stock in" },
    { "source": "17", "target": "19", "weight": "4", "label": "references" },
    { "source": "17", "target": "18", "weight": "1", "label": "references" }
];

export const nodesDataVis = [{
    id: 1,			// id number, for the edges graph to reference
    value: 5,		// fatness of node
    label: "OPNT",	// friendly name for node
    type: "firm",	// some context
    info: [			// outside resources relevant to the node
        {
            name: "4503",					// name of outside resource
            quantity: 5,					// number of relevant findings
            url: "https://www.finra.org",	// how to get there from here
        },
        {
            name: "CRD Rep Disclosures",
            quantity: 2,
            url: "https://www.finra.org",
        },
        {
            name: "Form D",
            quantity: 1,
            url: "https://www.finra.org",
        },
    ]
},

    {
        id: 4,
        value: 15,
        label: "Medmen Enterprises Inc.",
        type: "firm",
        info: [
            {
                name: "4503",
                quantity: 31,
                url: "https://www.finra.org",
            },
            {
                name: "Arbitration Awards",
                quantity: 2,
                url: "https://www.finra.org",
            },
            {
                name: "CRD Rep Disclosures",
                quantity: 17,
                url: "https://www.finra.org",
            },
            {
                name: "Form D",
                quantity: 6,
                url: "https://www.finra.org",
            },
            {
                name: "Formal Complaints",
                quantity: 1,
                url: "https://www.finra.org",
            },
            {
                name: "NCFCD Referrals",
                quantity: 2,
                url: "https://www.finra.org",
            },
            {
                name: "Pleadings",
                quantity: 19,
                url: "https://www.finra.org",
            },
            {
                name: "STAR Matters",
                quantity: 98,
                url: "https://www.finra.org",
            },
        ]
    },

    {
        id: 19,
        value: 12,
        label: "Charles Schwab & Co. Inc.",
        type: "firm",
        info: [
            {
                name: "4503",
                quantity: 56,
                url: "https://www.finra.org",
            },
            {
                name: "Arbitration Awards",
                quantity: 19,
                url: "https://www.finra.org",
            },
            {
                name: "AWCs",
                quantity: 5,
                url: "https://www.finra.org",
            },
            {
                name: "CRD Rep Disclosures",
                quantity: 145,
                url: "https://www.finra.org",
            },
            {
                name: "Decisions",
                quantity: 1,
                url: "https://www.finra.org",
            },
            {
                name: "Disciplinary Actions",
                quantity: 5,
                url: "https://www.finra.org",
            },
            {
                name: "Dispute Res. Cases",
                quantity: 12,
                url: "https://www.finra.org",
            },
            {
                name: "Form D",
                quantity: 41,
                url: "https://www.finra.org",
            },
            {
                name: "Formal Complaints",
                quantity: 1,
                url: "https://www.finra.org",
            },
            {
                name: "NAC Appellate Briefs",
                quantity: 4,
                url: "https://www.finra.org",
            },
            {
                name: "NAC Appellate Decisions",
                quantity: 2,
                url: "https://www.finra.org",
            },
            {
                name: "NCFCD Referrals",
                quantity: 2,
                url: "https://www.finra.org",
            },
            {
                name: "OAD Memos",
                quantity: 8,
                url: "https://www.finra.org",
            },
            {
                name: "OHO Orders",
                quantity: 1,
                url: "https://www.finra.org",
            },
            {
                name: "Outcome Memos",
                quantity: 16,
                url: "https://www.finra.org",
            },
            {
                name: "Pleadings",
                quantity: 76,
                url: "https://www.finra.org",
            },
            {
                name: "RAD Firm Regulatory Notes",
                quantity: 2,
                url: "https://www.finra.org",
            },
            {
                name: "RAD Rep Regulatory Notes",
                quantity: 28,
                url: "https://www.finra.org",
            },
            {
                name: "Senior Helpline",
                quantity: 9,
                url: "https://www.finra.org",
            },
            {
                name: "Small Firm Helpline",
                quantity: 2,
                url: "https://www.finra.org",
            },
            {
                name: "STAR Matters",
                quantity: 285,
                url: "https://www.finra.org",
            },
        ]
    },

    {
        id: 11,
        value: 5,
        label: "ACB",
        type: "firm",
        info: [
            {
                name: "4503",
                quantity: 8,
                url: "https://www.finra.org",
            },
            {
                name: "Arbitration Awards",
                quantity: 1,
                url: "https://www.finra.org",
            },
            {
                name: "CRD Rep Disclosures",
                quantity: 12,
                url: "https://www.finra.org",
            },
            {
                name: "NCFCD Referrals",
                quantity: 1,
                url: "https://www.finra.org",
            },
            {
                name: "STAR Matters",
                quantity: 77,
                url: "https://www.finra.org",
            },
        ]
    },

    {
        id: 2,
        value: 3,
        label: "Parker Rodriguez",
        type: "person",
        info: [
            {
                name: "4503",
                quantity: 16,
                url: "https://www.finra.org",
            },
            {
                name: "Form D",
                quantity: 8,
                url: "https://www.finra.org",
            },
            {
                name: "Pleadings",
                quantity: 1,
                url: "https://www.finra.org",
            },
            {
                name: "STAR Matters",
                quantity: 43,
                url: "https://www.finra.org",
            },
        ]
    },

    {
        id: 3,
        value: 5,
        label: "Luis Martinez",
        type: "person",
        info: [
            {
                name: "CRD Rep Disclosures",
                quantity: 4,
                url: "https://www.finra.org",
            },
            {
                name: "Form D",
                quantity: 3,
                url: "https://www.finra.org",
            },
            {
                name: "STAR Matters",
                quantity: 63,
                url: "https://www.finra.org",
            },
        ]
    },

    {
        id: 7,
        value: 8,
        label: "Jessica Powers",
        type: "person",
        info: [
            {
                name: "STAR Matters",
                quantity: 1,
                url: "https://www.finra.org",
            },
        ]
    },

    {
        id: 13,
        value: 2,
        label: "Jack Roberts",
        type: "person",
        info: [
            {
                name: "Formal Complaints",
                quantity: 1,
                url: "https://www.finra.org",
            },
        ]
    },

    {
        id: 14,
        value: 2,
        label: "Eli Martinelli",
        type: "person",
        info: [
            {
                name: "Arbitration Awards",
                quantity: 1,
                url: "https://www.finra.org",
            },
            {
                name: "Form D",
                quantity: 2,
                url: "https://www.finra.org",
            },
            {
                name: "NCFCD Referrals",
                quantity: 1,
                url: "https://www.finra.org",
            },
            {
                name: "STAR Matters",
                quantity: 12,
                url: "https://www.finra.org",
            },
        ]
    },

    {
        id: 16,
        value: 5,
        label: "Eugene Mendel",
        type: "person",
        info: [
            {
                name: "4503",
                quantity: 4,
                url: "https://www.finra.org",
            },
            {
                name: "CRD Rep Disclosures",
                quantity: 38,
                url: "https://www.finra.org",
            },
            {
                name: "Form D",
                quantity: 29,
                url: "https://www.finra.org",
            },
            {
                name: "Formal Complaints",
                quantity: 3,
                url: "https://www.finra.org",
            },
            {
                name: "NCFCD Referrals",
                quantity: 15,
                url: "https://www.finra.org",
            },
            {
                name: "Pleadings",
                quantity: 2,
                url: "https://www.finra.org",
            },
            {
                name: "STAR Matters",
                quantity: 146,
                url: "https://www.finra.org",
            },
        ]
    },

    {
        id: 18,
        value: 5,
        label: "Harold Watkins",
        type: "person",
        info: [
            {
                name: "4503",
                quantity: 1,
                url: "https://www.finra.org",
            },
            {
                name: "Form D",
                quantity: 1,
                url: "https://www.finra.org",
            },
            {
                name: "STAR Matters",
                quantity: 1,
                url: "https://www.finra.org",
            },
        ]
    },

    {
        id: 10,
        value: 8,
        label: "Aurora Chemicals Inc.",
        type: "company",
        info: [
            {
                name: "4503",
                quantity: 3,
                url: "https://www.finra.org",
            },
            {
                name: "Arbitration Awards",
                quantity: 4,
                url: "https://www.finra.org",
            },
            {
                name: "CRD Rep Disclosures",
                quantity: 10,
                url: "https://www.finra.org",
            },
            {
                name: "Form D",
                quantity: 45,
                url: "https://www.finra.org",
            },
            {
                name: "Formal Complaints",
                quantity: 5,
                url: "https://www.finra.org",
            },
            {
                name: "Pleadings",
                quantity: 1,
                url: "https://www.finra.org",
            },
            {
                name: "STAR Matters",
                quantity: 35,
                url: "https://www.finra.org",
            },
        ]
    },

    {
        id: 12,
        value: 5,
        label: "Dawn Pharmaceuticals",
        type: "company",
        info: [
            {
                name: "4503",
                quantity: 31,
                url: "https://www.finra.org",
            },
            {
                name: "Arbitration Awards",
                quantity: 2,
                url: "https://www.finra.org",
            },
            {
                name: "CRD Rep Disclosures",
                quantity: 17,
                url: "https://www.finra.org",
            },
            {
                name: "Form D",
                quantity: 6,
                url: "https://www.finra.org",
            },
            {
                name: "Formal Complaints",
                quantity: 1,
                url: "https://www.finra.org",
            },
            {
                name: "NCFCD Referrals",
                quantity: 2,
                url: "https://www.finra.org",
            },
            {
                name: "Pleadings",
                quantity: 19,
                url: "https://www.finra.org",
            },
            {
                name: "STAR Matters",
                quantity: 98,
                url: "https://www.finra.org",
            },
        ]
    },

    {
        id: 15,
        value: 3,
        label: "Vaccines 'R' Us",
        type: "company",
        info: [
            {
                name: "4503",
                quantity: 31,
                url: "https://www.finra.org",
            },
            {
                name: "Arbitration Awards",
                quantity: 2,
                url: "https://www.finra.org",
            },
            {
                name: "CRD Rep Disclosures",
                quantity: 17,
                url: "https://www.finra.org",
            },
            {
                name: "Form D",
                quantity: 6,
                url: "https://www.finra.org",
            },
            {
                name: "Formal Complaints",
                quantity: 1,
                url: "https://www.finra.org",
            },
            {
                name: "NCFCD Referrals",
                quantity: 2,
                url: "https://www.finra.org",
            },
            {
                name: "Pleadings",
                quantity: 19,
                url: "https://www.finra.org",
            },
            {
                name: "STAR Matters",
                quantity: 98,
                url: "https://www.finra.org",
            },
        ]
    },

    {
        id: 20,
        value: 6,
        label: "Apple",
        type: "company",
        info: [
            {
                name: "4503",
                quantity: 31,
                url: "https://www.finra.org",
            },
            {
                name: "Arbitration Awards",
                quantity: 2,
                url: "https://www.finra.org",
            },
            {
                name: "CRD Rep Disclosures",
                quantity: 17,
                url: "https://www.finra.org",
            },
            {
                name: "Form D",
                quantity: 6,
                url: "https://www.finra.org",
            },
            {
                name: "Formal Complaints",
                quantity: 1,
                url: "https://www.finra.org",
            },
            {
                name: "NCFCD Referrals",
                quantity: 2,
                url: "https://www.finra.org",
            },
            {
                name: "Pleadings",
                quantity: 19,
                url: "https://www.finra.org",
            },
            {
                name: "STAR Matters",
                quantity: 98,
                url: "https://www.finra.org",
            },
        ]
    },

    {
        id: 21,
        value: 5,
        label: "IBM",
        type: "company",
        info: [
            {
                name: "4503",
                quantity: 31,
                url: "https://www.finra.org",
            },
            {
                name: "Arbitration Awards",
                quantity: 2,
                url: "https://www.finra.org",
            },
            {
                name: "CRD Rep Disclosures",
                quantity: 17,
                url: "https://www.finra.org",
            },
            {
                name: "Form D",
                quantity: 6,
                url: "https://www.finra.org",
            },
            {
                name: "Formal Complaints",
                quantity: 1,
                url: "https://www.finra.org",
            },
            {
                name: "NCFCD Referrals",
                quantity: 2,
                url: "https://www.finra.org",
            },
            {
                name: "Pleadings",
                quantity: 19,
                url: "https://www.finra.org",
            },
            {
                name: "STAR Matters",
                quantity: 98,
                url: "https://www.finra.org",
            },
        ]
    }
];

export const linksDataVis = [
    { id:  1, from:  3, to:  4, value: 2, label: "employed by", description: "Luis Martinez has been a registered representative at Medmen Enterprises Inc. since March 2018." },
    { id:  2, from:  4, to:  1, value: 1, label: "litigation", description: "Medmen Enterprises sued OPNT in 2017 over trade disputes.  <a href='https://www.finra.org' target='_blank'>Read the Article</a>" },
    { id:  3, from: 11, to:  4, value: 1, label: "parent of", description: "ACB is the parent company of Medmen Enterprises Inc." },
    { id:  4, from:  2, to:  4, value: 1, label: "employed by", description: "Parker Rodriguez has been a supervisor at Medmen Enterprises Inc. since 2008." },
    { id:  5, from:  4, to: 10, value: 5, label: "trades", description: "Medmen Enterprises often trades Aurora Chemicals securities." },
    { id:  6, from: 14, to: 10, value: 1, label: "employed by", description: "Eli Martinelli is a sales representative at Aurora Chemicals.  View Eli Martinelli's <a href='https://www.finra.org' target='_blank'>LinkedIn profile.</a>" },
    { id:  7, from: 13, to: 10, value: 1, label: "filed complaint", description: "Jack Roberts filed a complaint against Aurora Chemicals in November 2009.  <a href='https://www.finra.org' target='_blank'>Read the Article</a>" },
    { id:  8, from: 11, to: 10, value: 2, label: "trades", description: "ACB trades Aurora Chemicals securities." },
    { id:  9, from:  7, to: 16, value: 3, label: "filed complaint", description: "Jessica Powers filed a complaint against registered representative Eugene Mendel in February 2020." },
    { id: 10, from: 16, to: 19, value: 4, label: "employed by", description: "Eugene Mendel has been a registered representative at Charles Schwab & Co. Inc. since April 2019." },
    { id: 11, from: 19, to: 21, value: 5, label: "trades", description: "Charles Schwab trades IBM securities." },
    { id: 12, from: 19, to: 12, value: 1, label: "trades", description: "Charles Schwab trades Dawn Pharmaceuticals securities." },
    { id: 13, from: 19, to: 20, value: 4, label: "trades", description: "Charles Schwab trades Apple securities." },
    { id: 14, from: 18, to: 20, value: 1, label: "owns stock in", description: "Harold Watkins owns stock in Apple." },
    { id: 15, from: 19, to: 10, value: 5, label: "sued in 2017", description: "Charles Schwab sued Aurora Chemicals in 2017 over an alleged fraud.  <a href='https://www.finra.org' target='_blank'>Read the Article</a>" },
    { id: 16, from:  4, to: 15, value: 1, label: "trades", description: "Medmen Enterprises trades Vaccines 'R' Us securities." },
    { id: 17, from: 18, to: 15, value: 1, label: "employed by", description: "Harold Watkins is a medical technitian at Vaccines 'R' Us.  View Harold Watkins's <a href='https://www.finra.org' target='_blank'>LinkedIn profile.</a>" },
];