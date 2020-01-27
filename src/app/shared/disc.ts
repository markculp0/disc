
import { Song } from './song';

export class Disc {
    id: string;
    title: string;
    artist: string;
    year: string;
    image: string;
    featured: boolean;
    description: string;
    songs: Song[];
}