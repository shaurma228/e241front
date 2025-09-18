'use client'

import React, {useState} from "react"
import { Button } from "@/components/ui/button"

function Counter() {
    const [count, setCount] = useState(0)

    function addCount() {
        setCount(count + 1)
    }

    function removeCount() {
        setCount(0)
    }

    return (
        <div className="flex flex-col items-center justify-between h-[100px] w-[100px]">
            <Button onClick={addCount} className="w-15">+1</Button>
            <Button onClick={removeCount} className="w-15">reset</Button>
            <div>{count}</div>
        </div>
    )
}

export default Counter