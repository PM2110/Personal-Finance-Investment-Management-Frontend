declare module 'vader-sentiment' {
    export const SentimentIntensityAnalyzer: {
      polarity_scores(text: string): { compound: number };
    };
  }
  