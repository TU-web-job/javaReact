import { useEffect, useState } from "react";
import { Diary } from "../../types/typeItems";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Section = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [diary, setDiary] = useSate<Diary[]>([]);
    const [showModal, setShowModal] = useState<"view" | "new" | null>(null);
    const [newDiary, setNewDiary] = useState<Omit<Diary,"id">>({
        title:"",
        text:"",
        date:"",
        image:"",
        });

    const handleDateClick = async (date: Date) => {
        setSelectedDate(date);
        setShowModal("view");

        const res = await fetch(`/api/diary=${date.toISOString().split("T")[0]}`);
        const data = await res.json();
        setDiary(data);
    };

    const handleSave = async () => {
        if(!selectedDate) return;

        const payload = {
            ...newDiary,
            date: selectedDate.toISOString().split("T")[0],
        },

        const res = await fetch("/api/diary", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify(payload),
        });

        if(res.ok) {
            const saved = await res.json();
            setDiary((prev) => [...prev, saved]);
            setShowModal(null);
            setNewDiary({ title: "", text: "", date: "", image: "" });
        } else {
            alert("登録に失敗しました。");
        }
    };

    return(
        <div className="w-full p-4">
            <h2 className="font-bold text-2xl">Pet's Diary Calendar</h2>
            <Calendar onClickDay={handleDateClick} />

            {showModal === "view" && selectedDate && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-md w-96">
                        <h3 className="font-bold text-xl mb-4">
                            {selectedDate.toLocaleDateString()}の日常
                        </h3>

                        {diary.length > 0 ? (
                            diary.map((item) => (
                                <div key={item.id} className="mb-4">
                                    <p className="font-semibold">{item.title}</p>
                                    <p>Text : {item.text}</p>
                                    {item.image && (
                                        <img src={item.image}
                                             alt="diaryImage"
                                             className="w-full h-45 object-cover rounded-md mt-2"
                                        />
                                    )}
                                </div>
                            ))
                        ) : (
                            <p>日記が登録されていません。</p>
                        )}

                        <div className="flex justify-between mt-4">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                onClick={() => setShowModal("new")}> 日記追加
                            </button>
                            <button className="bg-gray-500 text-white px-4 py-2 rounded-md"
                                onClick={() => setShowModal(null)}> 閉じる
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showModal === "new" && selectedDate && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-4 rounded-md w-96">
                        <h3 className="font-bold text-xl mb-4">日常の新規追加</h3>
                        <input
                            type="text"
                            placeholder="Title"
                            className="w-full border p-2 mb-2"
                            value={newDiary.title}
                            onChange={(e) => setNewDiary({ ...newDiary, title: e.target.value })}
                        />
                        <textarea
                            placeholder="Text"
                            className="w-full border p-2 mb-2"
                            value={newDiary.text}
                            onChange={(e) => setNewDiary({ ...newDiary, text: e.target.value})}
                        />
                        <input
                            type="text"
                            placeholder="Image Path"
                            className="w-full border p-2 mb-2"
                            value={newDiary.image}
                            onChange={(e) => setNewDiary({ ...newDiary, image: e.target.value})}
                        />
                        <div className="flex justify-between mt-4">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleSave}>
                                保存</button>
                            <button className="bg-gray-200 text-black px-4 py-2 rounded-md" onClick={() => setShowModal(null)}>
                                キャンセル</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
        );
    };

export default Section;