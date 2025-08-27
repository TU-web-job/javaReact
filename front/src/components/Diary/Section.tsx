import { useEffect, useState } from "react";
import { Diary } from "../../types/typeItems";

const Section = () => {
    return(
        <div className="w-full p-4">
            <h2 className="font-bold text-2xl">Pet's Diary Calendar</h2>
            <div className="grid gap-8 md:grid-cols-3">
                {Diary.map((item) => (
                    <div key={item.id} className="bg-gray-100 p-4 rounded-md shadow-md md-4">
                        <div>
                            <h3 className="font-semibold">{item.title}</h3>
                        </div>
                        <div>
                            <div className="p-4">
                                <img src={item.image} className="w-full h-full rounded-md object-cover"/>
                            </div>
                            <div className="text-left p-2">
                                <p><span className="font-semibold">Text</span> : {item.text}</p>
                                <p><span className="font-semibold">Date</span> : {item.date}</p>
                            </div>

                        </div>
                    </div>
                    ))};
            </div>
        </div>
        );
    }

export default Section;