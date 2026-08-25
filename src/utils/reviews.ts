import { GoogleReview } from '@/components/GoogleReviewCard/GoogleReviewCard';
import { SITE_CONFIG } from '@/config/site.config';

function seededRandom(seed: number) {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

export function generateContextualReviews(contextName: string, type: 'city' | 'brand' | 'service' | 'general' = 'general'): GoogleReview[] {
  // Suppress TS unused variable warnings since we now use static real reviews
  void contextName;
  void type;
  
  // Use the real reviews configured in site.config.ts
  const realReviews = SITE_CONFIG.realReviews;

  // Map the real reviews to the GoogleReview interface format
  const mappedReviews: GoogleReview[] = realReviews.map((review, index) => {
    // Generate a consistent avatar color based on the name
    const seed = review.name.charCodeAt(0) + index;
    const avatarColor = ['#e81c62', '#3f51b5', '#4caf50', '#ff9800', '#9c27b0', '#00bcd4', '#795548', '#009688', '#607d8b'][Math.floor(seededRandom(seed) * 9)];
    
    return {
      name: review.name,
      avatarLetter: review.name.charAt(0).toUpperCase(),
      avatarColor: avatarColor,
      date: review.date,
      rating: review.rating,
      text: review.text
    };
  });
  
  return mappedReviews;
}
