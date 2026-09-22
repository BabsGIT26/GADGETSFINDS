import { NextResponse } from 'next/server';

interface NewsAPIArticle {
  source: { id: string | null; name: string };
  author: string | null;
  title: string;
  description: string | null;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string | null;
}

interface NewsAPIResponse {
  status: string;
  totalResults: number;
  articles: NewsAPIArticle[];
}

// Function to validate basic URL format (not accessibility)
async function isValidUrlFormat(url: string | null): Promise<boolean> {
  if (!url || url.trim() === '') return false;
  
  try {
    // Only validate URL format, don't make HTTP requests
    const urlObj = new URL(url);
    // Check if it's http or https protocol
    return urlObj.protocol === 'http:' || urlObj.protocol === 'https:';
  } catch (error) {
    return false;
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') || 'technology';
  const pageSize = searchParams.get('pageSize') || '20';
  
  const apiKey = process.env.NEWS_API_KEY;
  
  if (!apiKey || apiKey === 'your-newsapi-key-here') {
    // Return mock data if API key is not configured
    return NextResponse.json({
      status: 'ok',
      totalResults: 0,
      articles: [],
      useMockData: true
    });
  }

  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?category=${category}&pageSize=${pageSize}&apiKey=${apiKey}`,
      { next: { revalidate: 900 } } // Cache for 15 minutes to reduce rate limit hits
    );

    if (!response.ok) {
      // Handle rate limiting gracefully — return mock data fallback
      if (response.status === 429) {
        console.warn('NewsAPI rate limit reached (429). Returning mock data fallback.');
        return NextResponse.json({
          status: 'ok',
          totalResults: 0,
          articles: [],
          useMockData: true
        });
      }
      throw new Error(`NewsAPI error: ${response.status}`);
    }

    const data: NewsAPIResponse = await response.json();
    
    // Only validate URL format, let browser handle actual image loading
    const validatedArticles = await Promise.all(
      data.articles.map(async (article) => {
        const hasValidFormat = await isValidUrlFormat(article.urlToImage);
        
        // Keep the URL if format is valid, let browser handle loading/CORS
        return {
          ...article,
          urlToImage: hasValidFormat ? article.urlToImage : null,
        };
      })
    );
    
    return NextResponse.json({
      ...data,
      articles: validatedArticles
    });
  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json(
      { error: 'Failed to fetch news', useMockData: true },
      { status: 500 }
    );
  }
}