export {};

const API_URL = process.env.NEXT_PUBLIC_API_URL;
async function fetchDiary() {
    const res = await fetch(`${API_URL}/api/diary`);
    const diary = await res.json();
    console.log(diary);
    return diary;
}

async function addDiary(newDiary: { title: string; text:string; date: string, image: string}){
    const res = await fetch(`${API_URL}/api/diary`, {
        method:"POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newDiary),
    });

    const created = await res.json();
    console.log(created);
    return created;
}

fetchDiary();

addDiary({title: "New " , text: "Diary", date:"2025-08-31",image:"test.png"});