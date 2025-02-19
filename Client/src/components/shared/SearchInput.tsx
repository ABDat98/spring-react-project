import React, { useState } from 'react'
import { mockSearchResult } from "../../lib/spring/api/mock";
import { Input } from "@/components/ui/input"
const SearchInput = ({ placeholder = "Search...", className = "" }) => {
    const [input, setInput] = useState('');
    const [bestMatches, setBestMatches] = useState(mockSearchResult.result);
    const clear = () => {
        setInput('');
        setBestMatches([]);
    };
    const updateBestMatches = () => {
        setBestMatches(mockSearchResult.result);
    }
    return (
        <div className="flex w-full  gap-2">

            <Input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                    if (event.key === "Enter") {
                        if (input.length > 0) {
                            updateBestMatches();
                        }
                    }
                }}
                placeholder={placeholder}
                className={className}
            />
            {input && <button onClick={updateBestMatches} >
                <img src="/assets/icons/search.svg" alt="" />
            </button>}

        </div>
    )
}

export default SearchInput
