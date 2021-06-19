import { FlexibleRating } from './src/flexible-rating.js';

declare module 'flexible-rating';

declare global {
  interface HTMLElementTagNameMap {
    'flexible-rating': FlexibleRating;
  }
}
