
export interface TripSuggestion {
  id: string;
  destinationName: string;
  description: string;
  suggestedActivities: string[];
  estimatedCostUSD: string;
  bestTimeToVisit: string;
  imagePrompt: string; // For generating image ideas
  imageUrl?: string; // Actual image URL, e.g., from picsum
  isTopSuggestion?: boolean;
}

export interface SuggestionFormData {
  destinationKeywords: string;
  tripDuration: string;
  estimatedBudget: number;
  interests: string; // e.g., "adventure, relaxation, culture"
  travelStyle: string; // e.g., "luxury, budget-friendly, family"
}

export interface GroundingChunk {
  web?: {
    uri: string;
    title: string;
  };
  retrievedContext?: {
    uri: string;
    title: string;
  };
}

export interface User {
  id: string;
  name: string;
  email: string;
  // password will not be stored in client-side state for security reasons,
  // but is used during registration/login flow.
}

// For mock auth, we might store a version with a hashed password or just simulate
export interface StoredUser extends User {
  hashedPassword?: string; // In a real app, this would be properly hashed
}
