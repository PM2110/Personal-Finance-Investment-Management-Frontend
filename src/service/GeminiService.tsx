export const generateText = async (prompt: string): Promise<string> => {
    try {
        const response = await fetch('http://localhost:5000/api/generate-text', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt }),
        });
    
        const data = await response.json();
        return data.text;
    } catch (error) {
        console.error('Error fetching data:', error);
        return 'Failed to generate text.';
    }
};
  