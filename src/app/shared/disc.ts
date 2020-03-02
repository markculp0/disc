
import { Song } from './song';

/**
 * Disc class - Defines Disc type
 */
export class Disc {
    /** id - Unique identifier for the album */
    id: string;
    /** title - Title of the album */
    title: string;
    /** artist - Artist of the album */
    artist: string;
    /** year - Year album published */
    year: string;
    /** image - path to image file */
    image: string;
    /** featured - Is albumn featured */
    featured: boolean;
    /** description - description/review of album */
    description: string;
    /** songs - Array of songs contained on album */
    songs: Song[];
}