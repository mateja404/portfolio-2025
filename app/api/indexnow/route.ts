import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    if (!url || typeof url !== 'string') {
      return NextResponse.json({ error: 'Invalid URL' }, { status: 400 });
    }

    const key = 'c3c7991a01f345e08bc2fb6185939cee';
    const host = 'mateja.studiozid.rs';
    const keyLocation = `https://${host}/${key}.txt`;

    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        host,
        key,
        keyLocation,
        urlList: [url],
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to notify IndexNow' }, { status: 500 });
    }

    return NextResponse.json({ message: 'IndexNow notified successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}