/**
 * BEASTIQUE Type Definitions
 * Species and Gallery Types
 */

export type ConservationStatus = 
  | 'EX'   // Extinct
  | 'EW'   // Extinct in the Wild
  | 'CR'   // Critically Endangered
  | 'EN'   // Endangered
  | 'VU'   // Vulnerable
  | 'NT'   // Near Threatened
  | 'LC'   // Least Concern
  | 'DD'   // Data Deficient
  | 'NE';  // Not Evaluated

export interface Taxonomy {
  class: string;
  order: string;
  family: string;
}

export interface Species {
  id: string;
  commonName: string;
  scientificName: string;
  status: ConservationStatus;
  taxonomy: Taxonomy;
  biome: string;
  range: string;
  populationEstimate: string;
  primaryThreats: string[];
  description: string;
  intriguingFacts: string[];
  beastiqueMaterialSuggestion: string;
  beastiqueNarrative: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Artwork {
  id: string;
  speciesId: string;
  title: string;
  material: string;
  imageUrl: string;
  thumbnailUrl: string;
  highResUrl?: string;
  dimensions: {
    width: number;
    height: number;
  };
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  subcategories: Subcategory[];
  speciesCount?: number;
}

export interface Subcategory {
  id: string;
  name: string;
  slug: string;
  parentId: string;
}

export interface GalleryFilters {
  category?: string;
  status?: ConservationStatus;
  search?: string;
  sortBy?: 'name' | 'status' | 'recent';
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

// Status display info
export const STATUS_INFO: Record<ConservationStatus, { label: string; color: string }> = {
  EX: { label: 'Extinct', color: 'status-extinct' },
  EW: { label: 'Extinct in Wild', color: 'status-extinct-wild' },
  CR: { label: 'Critically Endangered', color: 'status-critical' },
  EN: { label: 'Endangered', color: 'status-endangered' },
  VU: { label: 'Vulnerable', color: 'status-vulnerable' },
  NT: { label: 'Near Threatened', color: 'status-near-threatened' },
  LC: { label: 'Least Concern', color: 'status-least-concern' },
  DD: { label: 'Data Deficient', color: 'status-unknown' },
  NE: { label: 'Not Evaluated', color: 'status-unknown' },
};
