export type PreviewData = {
  hostname: string;
  title: string;
  description: string;
  image?: {
    url: string;
    alt?: string;
  };
  details: object;
};

type Error = {
  error: string;
};

export const getData = async (href: string) => {
  const response = await fetch(`https://opengraph.ninja/api/v1?url=${href}`);
  const body = await response.json();
  if (!response.ok) {
    throw body as Error;
  }
  return body as PreviewData;
};
