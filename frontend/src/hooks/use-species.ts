'use client';

import { useState, useEffect } from 'react';

export function useSpecies(id?: string) {
  const [species, setSpecies] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Fetch species data
    setLoading(false);
  }, [id]);
  
  return { species, loading };
}
