interface Songs {
  data: Song[];
}

interface Song {
  title: string;
  artist: string;
}

interface SongDetail {
  id: string;
  uri: string;
  title: string;
  artist: string;
  image: string;
  duration: string;
  popularity: number;
}

interface Spotify {
  tracks: Tracks;
  artists: Artists;
  albums: Albums;
  playlists: Playlists;
  shows: Audiobooks;
  episodes: Episodes;
  audiobooks: Audiobooks;
}

interface Albums {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: AlbumElement[];
}

interface AlbumElement {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: ExternalUrls;
  href: Href;
  id: string;
  images: Image[];
  name: Href;
  release_date: string;
  release_date_precision: string;
  restrictions: Restrictions;
  type: string;
  uri: string;
  artists: Owner[];
}

interface Owner {
  external_urls: ExternalUrls;
  href: Href;
  id: Href;
  name?: Href;
  type: string;
  uri: Href;
  display_name?: Href;
}

enum Href {
  String = "string",
}

interface ExternalUrls {
  spotify: Href;
}

interface Image {
  url: string;
  height: number;
  width: number;
}

interface Restrictions {
  reason: string;
}

interface Artists {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: ArtistsItem[];
}

interface ArtistsItem {
  external_urls: ExternalUrls;
  followers: Followers;
  genres: string[];
  href: Href;
  id: Href;
  images: Image[];
  name: Href;
  popularity: number;
  type: string;
  uri: Href;
}

interface Followers {
  href: Href;
  total: number;
}

interface Audiobooks {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: AudiobooksItem[];
}

interface AudiobooksItem {
  authors?: Author[];
  available_markets: Href[];
  copyrights: Copyright[];
  description: Href;
  html_description: Href;
  edition?: string;
  explicit: boolean;
  external_urls: ExternalUrls;
  href: Href;
  id: Href;
  images: Image[];
  languages: Href[];
  media_type: Href;
  name: Href;
  narrators?: Author[];
  publisher: Href;
  type: string;
  uri: Href;
  total_chapters?: number;
  is_externally_hosted?: boolean;
  total_episodes?: number;
}

interface Author {
  name: Href;
}

interface Copyright {
  text: Href;
  type: Href;
}

interface Episodes {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: EpisodesItem[];
}

interface EpisodesItem {
  audio_preview_url: string;
  description: string;
  html_description: string;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  is_externally_hosted: boolean;
  is_playable: boolean;
  language: string;
  languages: string[];
  name: string;
  release_date: Date;
  release_date_precision: string;
  resume_point: ResumePoint;
  type: string;
  uri: string;
  restrictions: Restrictions;
}

interface ResumePoint {
  fully_played: boolean;
  resume_position_ms: number;
}

interface Playlists {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: PlaylistsItem[];
}

interface PlaylistsItem {
  collaborative: boolean;
  description: Href;
  external_urls: ExternalUrls;
  href: Href;
  id: Href;
  images: Image[];
  name: Href;
  owner: Owner;
  public: boolean;
  snapshot_id: Href;
  tracks: Followers;
  type: Href;
  uri: Href;
}

interface Tracks {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: TracksItem[];
}

interface TracksItem {
  album: AlbumElement;
  artists: Owner[];
  available_markets: Href[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIDS;
  external_urls: ExternalUrls;
  href: Href;
  id: Href;
  is_playable: boolean;
  linked_from: LinkedFrom;
  restrictions: Restrictions;
  name: Href;
  popularity: number;
  preview_url: Href;
  track_number: number;
  type: string;
  uri: Href;
  is_local: boolean;
}

interface ExternalIDS {
  isrc: Href;
  ean: Href;
  upc: Href;
}

interface BasicAuthSpotify {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export interface Me {
  country: string;
  display_name: string;
  email: string;
  explicit_content: ExplicitContent;
  external_urls: ExternalUrls;
  followers: Followers;
  href: string;
  id: string;
  images: Image[];
  product: string;
  type: string;
  uri: string;
}

export interface ExplicitContent {
  filter_enabled: boolean;
  filter_locked: boolean;
}

export interface ExternalUrls {
  spotify: string;
}

export interface Followers {
  href: string;
  total: number;
}

export interface Image {
  url: string;
  height: number;
  width: number;
}

export interface Playlist {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  owner: Owner;
  public: boolean;
  snapshot_id: string;
  tracks: Tracks;
  type: string;
  uri: string;
}

export interface ExternalUrls {
  spotify: string;
}

export interface Image {
  url: string;
  height: number;
  width: number;
}

export interface Owner {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  type: string;
  uri: string;
  display_name?: string;
  name?: string;
}

export interface Tracks {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: Item[];
}

export interface Item {
  added_at: string;
  added_by: Owner;
  is_local: boolean;
  track: Track;
}

export interface Track {
  album: Album;
  artists: Owner[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: ExternalIDS;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_playable: boolean;
  linked_from: LinkedFrom;
  restrictions: Restrictions;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
  is_local: boolean;
}

export interface Album {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions: Restrictions;
  type: string;
  uri: string;
  artists: Owner[];
}

export interface Restrictions {
  reason: string;
}

export interface ExternalIDS {
  isrc: string;
  ean: string;
  upc: string;
}

export type {
  Song,
  Songs,
  SongDetail,
  Spotify,
  BasicAuthSpotify,
  Me,
  Playlist,
};
