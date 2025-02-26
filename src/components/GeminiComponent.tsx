import React, { useState } from "react";
import { generateText } from "../service/GeminiService";

const GeminiComponent = () => {
    const [prompt, setPrompt] = useState<string>("");
    const [response, setResponse] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await generateText(prompt);
        setResponse(result);
    };

    return (
        <div style={{ padding: "2rem" }}>
            <h1>Gemini AI Integration</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    rows={4}
                    cols={50}
                    placeholder="Enter a prompt..."
                />
                <button type="submit">Generate</button>
            </form>
            <h2>Response:</h2>
            <p>{response}</p>
        </div>
    );
};

export default GeminiComponent;