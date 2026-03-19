// ================= PODCAST DATA ================= //
export const podcasts = [
  {
    id: "d001",
    title: "Women’s Voices",
    description:
      "A space for women to share stories of identity, power, healing, motherhood, sexuality, spirituality, and survival. Unfiltered and deeply personal.",
    image: "https://images.pexels.com/photos/7586484/pexels-photo-7586484.jpeg",
    genres: [1, 4],
    updated: "2026-01-28T09:30:00.000Z",
    seasons: [
      {
        title: "Voices Unmuted",
        description: "Exploring the raw and real stories of women across the world.",
        image: "https://images.pexels.com/photos/7586484/pexels-photo-7586484.jpeg",
        episodes: [
          { title: "The Journey Begins", description: "Introducing our first guest." },
          { title: "Healing and Growth", description: "Deep dive into personal healing." },
          // ...add remaining episodes
        ],
      },
      {
        title: "Women & Power",
        description: "Exploring empowerment, leadership, and agency.",
        image: "https://images.pexels.com/photos/7586484/pexels-photo-7586484.jpeg",
        episodes: [
          { title: "Power Dynamics", description: "Understanding societal power structures." },
          { title: "Voices Rising", description: "Celebrating women leaders." },
        ],
      },
    ],
  },
  {
    id: "d002",
    title: "Men & Masculinity",
    description:
      "Exploring what it means to be a man in today’s world—vulnerability, mental health, fatherhood, patriarchy, relationships, and redefining masculinity.",
    image: "https://images.pexels.com/photos/9208206/pexels-photo-9208206.jpeg",
    genres: [1, 2],
    updated: "2026-01-25T14:15:00.000Z",
    seasons: [
      {
        title: "Redefining Masculinity",
        description: "Breaking stereotypes and opening conversations.",
        image: "https://images.pexels.com/photos/9208206/pexels-photo-9208206.jpeg",
        episodes: [
          { title: "The Modern Man", description: "Challenges men face today." },
          { title: "Emotional Intelligence", description: "Learning to embrace emotions." },
        ],
      },
    ],
  },
  // Add remaining podcasts following the same structure
];

// ================= GENRES ================= //
export const genres = [
  {
    id: 1,
    title: "Healing & Growth",
    description:
      "Stories of recovery, therapy, spirituality, self-discovery, and becoming whole.",
    shows: ["d001", "d002"],
  },
  {
    id: 2,
    title: "Power & Justice",
    description:
      "Conversations about patriarchy, inequality, justice, gender politics, law, and systemic change.",
    shows: ["d002"],
  },
  {
    id: 3,
    title: "Identity & Sexuality",
    description:
      "Gender identity, sexuality, queerness, spirituality, and self-definition stories.",
    shows: [],
  },
  {
    id: 4,
    title: "Trauma & Survival",
    description:
      "Survivor stories, childhood trauma, GBV, abuse, grief, and pathways to healing.",
    shows: ["d001"],
  },
  {
    id: 5,
    title: "Disability & Access",
    description:
      "Disability justice, lived experiences, neurodiversity, accessibility, and inclusion.",
    shows: [],
  },
];