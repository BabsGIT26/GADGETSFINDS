export const API_PARTNER_TAG: string;
export function hasCredentials(): boolean;
export function getItems(asins: string[]): Promise<
  Record<
    string,
    {
      asin: string;
      title: string | null;
      image: { url: string; width: number; height: number } | null;
      price: string | null;
      availability: string | null;
    }
  >
>;
