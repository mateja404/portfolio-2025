export const notifyIndexNow = async (url: string) => {
  try {
    const key = 'c3c7991a01f345e08bc2fb6185939cee';
    const keyLocation = `https://mateja.studiozid.rs/${key}.txt`;

    const body = JSON.stringify({
      host: 'tvoj-domen.com',
      key,
      keyLocation,
      urlList: [url],
    });

    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body,
    });

    if (!res.ok) {
      throw new Error(`IndexNow API returned ${res.status}`);
    }

    console.log('IndexNow: uspešno poslato za', url);
  } catch (err) {
    console.error('IndexNow greška:', err);
  }
};