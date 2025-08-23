const API_URL = process.env.NEXT_PUBLIC_API_URL;

const res = await fetch(`${API_URL}/api/diary`);
const diary = await res.json();

await fetch(`${API_URL}/api/diary`, {
    method:"POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newDiary),
    });