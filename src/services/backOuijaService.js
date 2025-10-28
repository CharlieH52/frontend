const API_BASE = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001';

/**
 * Envía el mensaje al backend Nest (POST /ouija/ask)
 * @param {string} question - Mensaje a enviar (si no se pasa, usa state.message)
 * @param {{ personality?: string, language?: string }} opts - Opciones de personalidad y idioma
 * @returns {Promise<object>} Respuesta del backend
 */
export async function sendBackendMessage(question, opts) {
    const res = await fetch(`${API_BASE}/ouija/ask`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            question,
            personality: opts.personality,
            language: opts.language,
        }),
    });

    if (!res.ok) {
        const text = await res.text();
        throw new Error(`HTTP ${res.status}: ${text}`);
    }

    const data = await res.json();
    return data;
}
