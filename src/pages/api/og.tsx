import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

const getRubikMedium = async () => {
  const response = await fetch(new URL(
    "@/rubik-latin-500-normal.woff",
    import.meta.url
  ));
  const rubikMedium = await response.arrayBuffer();

  return rubikMedium;
};


export default async function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          fontFamily: "Rubik",
          fontWeight: 500,
          fontSize: 96
        }}
      >
        AT
      </div>
    ),
    {
      width: 1200,
      height: 600,
      fonts: [
        {
          name: "Rubik",
          data: await getRubikMedium(),
          weight: 500
        }
      ]
    }
  );
}