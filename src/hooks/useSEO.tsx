
import { useEffect } from 'react';
import { updateSEO } from '../utils/seo';

interface UseSEOProps {
  title?: string;
  description?: string;
}

export const useSEO = ({ title, description }: UseSEOProps) => {
  useEffect(() => {
    updateSEO({ title, description });
  }, [title, description]);
};
