import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { genre, characters, setting, mood } = await req.json();

    const genreLabel: Record<string, string> = {
      adventure: "Aventura", romance: "Romance", terror: "Terror",
      scifi: "Ciencia Ficcion", fantasy: "Fantasia", mystery: "Misterio",
      comedy: "Comedia", drama: "Drama", children: "Para Ninos",
    };

    const moodLabel: Record<string, string> = {
      mysterious: "misterioso y tenso", happy: "alegre y optimista",
      dark: "oscuro e inquietante", romantic: "romantico y apasionado",
      funny: "divertido y comico", epic: "epico y grandioso",
      nostalgic: "nostalgico y melancolico", thrilling: "emocionante y lleno de accion",
    };

    const apiKey = process.env.GROQ_API_KEY;
    const baseUrl = process.env.API_BASE_URL || "https://api.groq.com/openai/v1";

    if (!apiKey) {
      return NextResponse.json({
        error: "API key no configurada. Agrega GROQ_API_KEY en Vercel."
      }, { status: 500 });
    }

    const prompt = "Escribe una historia corta (800-1200 palabras) en espanol.\n\nGenero: " + (genreLabel[genre] || genre) + "\nPersonajes: " + characters + "\nEscenario: " + setting + "\nTono: " + (moodLabel[mood] || mood) + "\n\nLa historia debe tener inicio, nudo y desenlace. Incluye dialogos naturales, descripciones sensoriales y un giro inesperado. Termina con una reflexion. Escribe SOLO la historia.";

    const response = await fetch(baseUrl + "/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: process.env.MODEL_NAME || "llama-3.3-70b-versatile",
        messages: [
          { role: "system", content: "Eres un escritor de ficcion galardonado. Creas historias unicas, vividas y con giros inesperados. Escribes en espanol." },
          { role: "user", content: prompt },
        ],
        max_tokens: 3000,
        temperature: 0.9,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Error al conectar con la API. Verifica tu API key." }, { status: 500 });
    }

    const data = await response.json();
    const storyText = data.choices?.[0]?.message?.content;

    if (!storyText) {
      return NextResponse.json({ error: "No se pudo generar la historia. Intenta de nuevo." }, { status: 500 });
    }

    return NextResponse.json({ story: storyText });
  } catch (error) {
    return NextResponse.json({ error: "Error interno. Intenta de nuevo." }, { status: 500 });
  }
}
