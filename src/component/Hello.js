import { useState } from "react";
import UserName from "./UserName";

export default function Hello({age}) {
    const [name, setName] = useState('Mike');
    const msg = age > 19 ? "Adult" : "Not an Adult";

    return (
        <div>
            <h2 id="name">
                {name}({age}) : {msg}
            </h2>
            <UserName name={name} />
            <button
                onClick={() => {
                    setName(name === "Mike" ? "Jane" : "Mike")
                }}
            >
                Change
            </button>
        </div>
    );
}