"use client";
import { useState } from "react";

const genres = [
  { value: "adventure", label: "Aventura", emoji: "⚔️" },
  { value: "romance", label: "Romance", emoji: "💕" },
  { value: "terror", label: "Terror", emoji: "👻" },
  { value: "scifi", label: "Ciencia Ficcion", emoji: "🚀" },
  { value: "fantasy", label: "Fantasia", emoji: "🐉" },
  { value: "mystery", label: "Misterio", emoji: "🔍" },
  { value: "comedy", label: "Comedia", emoji: "😂" },
  { value: "drama", label: "Drama", emoji: "🎭" },
  { value: "children", label: "Para Ninos", emoji: "🌈" },
];

const moods = [
  { value: "mysterious", label: "Misterioso" },
  { value: "happy", label: "Alegre" },
  { value: "dark", label: "Oscuro" },
  { value: "romantic", label: "Romantico" },
  { value: "funny", label: "Divertido" },
  { value: "epic", label: "Epico" },
  { value: "nostalgic", label: "Nostalgico" },
  { value: "thrilling", label: "Emocionante" },
];

export default function Home() {
  const [genre, setGenre] = useState("");
  const [characters, setCharacters] = useState("");
  const [setting, setSetting] = useState("");
  const [mood, setMood] = useState("");
  const [story, setStory] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [step, setStep] = useState<"form" | "result">("form");

  const canGenerate = genre && characters.trim().length > 0;

  async function generateStory() {
    if (!canGenerate) return;
    setLoading(true);
    setStep("result");
    try {
      const res = await fetch("/api/generate-story", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          genre,
          characters: characters.trim(),
          setting: setting.trim() || "Un lugar inesperado",
          mood: mood || "thrilling",
        }),
      });
      const data = await res.json();
      if (data.error) { alert(data.error); setStep("form"); }
      else { setStory(data.story); }
    } catch { alert("Error de conexion. Intenta de nuevo."); setStep("form"); }
    finally { setLoading(false); }
  }

  function copyStory() {
    navigator.clipboard.writeText(story);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function shareWhatsApp() {
    const text = encodeURIComponent("Mira esta historia que acabo de generar con StoryMinds (IA):\n\n" + story.substring(0, 200) + "...\n\nGenera la tuya gratis!");
    window.open("https://wa.me/?text=" + text, "_blank");
  }

  function shareTwitter() {
    const text = encodeURIComponent("Acabo de generar una historia increible con IA en StoryMinds! Genera la tuya gratis!");
    window.open("https://twitter.com/intent/tweet?text=" + text, "_blank");
  }

  function shareFacebook() {
    window.open("https://www.facebook.com/sharer/sharer.php?quote=Genera%20historias%20con%20IA%20gratis%20en%20StoryMinds!", "_blank");
  }

  function resetForm() { setStory(""); setStep("form"); window.scrollTo({ top: 0, behavior: "smooth" }); }

  const selectedGenre = genres.find((g) => g.value === genre);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "linear-gradient(to bottom, #fffbeb, #fff7ed, #ffffff)" }}>
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-amber-200/50">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #f59e0b, #ea580c)" }}>
              <span className="text-white text-lg">📖</span>
            </div>
            <span className="text-xl font-bold" style={{ color: "#d97706" }}>StoryMinds</span>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-amber-100 text-amber-700 font-medium">✨ Powered by AI</span>
        </div>
      </header>

      <main className="flex-1">
        {/* HERO */}
        {step === "form" && (
          <section className="max-w-5xl mx-auto px-4 pt-14 pb-10 text-center">
            <div className="inline-block px-4 py-1.5 rounded-full text-sm text-white font-medium mb-4" style={{ background: "linear-gradient(to right, #f59e0b, #ea580c)" }}>
              ⚡ 100% Gratis - Historias Infinitas
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-3">
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(to right, #d97706, #f97316, #ef4444)" }}>Crea Historias</span>
              <br />
              <span className="text-gray-800">con Inteligencia Artificial</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">Elige un genero, describe tus personajes y deja que la IA escriba una historia unica para ti.</p>
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm text-gray-500">
              <span>📚 9 Generos</span>
              <span>👥 Historias Unicas</span>
              <span>⭐ 100% Gratis</span>
            </div>
            <button onClick={() => document.getElementById("gen")?.scrollIntoView({ behavior: "smooth" })} className="text-white px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg" style={{ background: "linear-gradient(to right, #f59e0b, #ea580c)" }}>
              Crear mi Historia →
            </button>
            {/* Ad */}
            <div className="mt-10 bg-gray-100 border border-gray-200 rounded-lg p-3 text-center text-xs text-gray-400 max-w-xl mx-auto">Espacio Publicitario</div>
          </section>
        )}

        {/* FORM */}
        {step === "form" && (
          <section id="gen" className="max-w-2xl mx-auto px-4 pb-14 scroll-mt-20">
            <div className="bg-white rounded-2xl shadow-xl shadow-amber-100/50 p-6 sm:p-8 border-0">
              <h2 className="text-2xl font-bold mb-1 flex items-center gap-2">✨ Configura tu Historia</h2>
              <p className="text-gray-500 text-sm mb-6">Completa los campos y la IA creara una historia unica para ti</p>

              {/* Genre */}
              <label className="block text-sm font-semibold text-gray-700 mb-3">Genero de la historia</label>
              <div className="grid grid-cols-3 gap-2 mb-6">
                {genres.map((g) => (
                  <button key={g.value} onClick={() => setGenre(g.value)} className={`p-3 rounded-xl border-2 text-left transition-all ${genre === g.value ? "border-amber-500 bg-amber-50 shadow-md" : "border-gray-200 hover:border-amber-300"}`}>
                    <span className="text-xl">{g.emoji}</span>
                    <p className={`text-sm font-semibold mt-1 ${genre === g.value ? "text-amber-700" : "text-gray-700"}`}>{g.label}</p>
                  </button>
                ))}
              </div>

              {/* Characters */}
              <label className="block text-sm font-semibold text-gray-700 mb-2">Personajes principales *</label>
              <textarea value={characters} onChange={(e) => setCharacters(e.target.value)} placeholder="Ej: Luna, una cientifica joven y curiosa; Max, un robot con emociones humanas" className="w-full min-h-[80px] p-3 border border-amber-200 rounded-xl text-sm focus:outline-none focus:border-amber-500 resize-none mb-4" />
              <p className="text-xs text-gray-400 mb-5">Describe los personajes, sus personalidades y relaciones</p>

              {/* Setting */}
              <label className="block text-sm font-semibold text-gray-700 mb-2">Escenario (opcional)</label>
              <textarea value={setting} onChange={(e) => setSetting(e.target.value)} placeholder="Ej: Una ciudad flotante en las nubes, en un futuro donde la gravedad es opcional" className="w-full min-h-[60px] p-3 border border-amber-200 rounded-xl text-sm focus:outline-none focus:border-amber-500 resize-none mb-5" />

              {/* Mood */}
              <label className="block text-sm font-semibold text-gray-700 mb-2">Tono / Emocion</label>
              <select value={mood} onChange={(e) => setMood(e.target.value)} className="w-full p-3 border border-amber-200 rounded-xl text-sm focus:outline-none focus:border-amber-500 mb-6 bg-white">
                <option value="">Selecciona el tono</option>
                {moods.map((m) => <option key={m.value} value={m.value}>{m.label}</option>)}
              </select>

              {/* Submit */}
              <button onClick={generateStory} disabled={!canGenerate || loading} className={`w-full py-4 rounded-xl text-lg font-semibold text-white shadow-lg ${canGenerate && !loading ? "cursor-pointer" : "opacity-50 cursor-not-allowed"}`} style={{ background: "linear-gradient(to right, #f59e0b, #ea580c)" }}>
                {loading ? "🔄 Creando tu historia..." : "✨ Generar Historia con IA"}
              </button>
            </div>
          </section>
        )}

        {/* RESULT */}
        {step === "result" && (
          <section className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
            <button onClick={resetForm} className="mb-6 text-gray-500 hover:text-amber-600 text-sm">← Crear otra historia</button>
            <div className="bg-gray-100 border border-gray-200 rounded-lg p-3 text-center text-xs text-gray-400 mb-6">Espacio Publicitario</div>

            <div className="bg-white rounded-2xl shadow-xl shadow-amber-100/50 overflow-hidden mb-6">
              {selectedGenre && (
                <div className="px-6 py-4" style={{ background: "linear-gradient(to right, #f59e0b, #ea580c)" }}>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{selectedGenre.emoji}</span>
                    <div>
                      <h2 className="text-white font-bold text-xl">{selectedGenre.label}</h2>
                      <p className="text-amber-100 text-sm">Historia generada con IA</p>
                    </div>
                  </div>
                </div>
              )}
              <div className="p-6 sm:p-8">
                {loading ? (
                  <div className="space-y-4">
                    {[1,2,3,4,5,6,7,8,9,10].map((i) => <div key={i} className="h-4 bg-gray-100 rounded animate-pulse" style={{ width: `${Math.random()*40+60}%` }} />)}
                  </div>
                ) : (
                  story.split("\n").map((p, i) => p.trim() ? <p key={i} className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 first-letter-amber">{p}</p> : null)
                )}
              </div>
            </div>

            {!loading && story && (
              <div className="space-y-3">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <button onClick={copyStory} className="p-3 border-2 border-amber-200 rounded-xl text-sm font-medium hover:bg-amber-50">{copied ? "✅ Copiado" : "📋 Copiar"}</button>
                  <button onClick={shareTwitter} className="p-3 border-2 border-sky-200 rounded-xl text-sm font-medium text-sky-600 hover:bg-sky-50">🐦 Twitter</button>
                  <button onClick={shareWhatsApp} className="p-3 border-2 border-green-200 rounded-xl text-sm font-medium text-green-600 hover:bg-green-50">💬 WhatsApp</button>
                  <button onClick={shareFacebook} className="p-3 border-2 border-blue-200 rounded-xl text-sm font-medium text-blue-600 hover:bg-blue-50">📘 Facebook</button>
                </div>
                <button onClick={generateStory} disabled={loading} className="w-full py-4 rounded-xl text-base font-semibold text-white shadow-lg" style={{ background: "linear-gradient(to right, #f59e0b, #ea580c)" }}>
                  {loading ? "🔄 Generando..." : "✨ Generar Otra Historia"}
                </button>
              </div>
            )}
            {!loading && story && <div className="bg-gray-100 border border-gray-200 rounded-lg p-3 text-center text-xs text-gray-400 mt-6">Espacio Publicitario</div>}
          </section>
        )}

        {/* HOW IT WORKS */}
        {step === "form" && (
          <section className="py-14 bg-white">
            <div className="max-w-5xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Como Funciona</h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {[{ e: "🎨", t: "1. Elige el Estilo", d: "Selecciona el genero, personajes, escenario y tono que deseas" }, { e: "✨", t: "2. La IA Escribe", d: "La inteligencia artificial crea una historia original en segundos" }, { e: "📖", t: "3. Lee y Comparte", d: "Disfruta tu historia y compartela en redes sociales" }].map((s, i) => (
                  <div key={i} className="bg-white rounded-2xl shadow-lg p-6 text-center">
                    <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4 text-2xl">{s.e}</div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800">{s.t}</h3>
                    <p className="text-sm text-gray-500">{s.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        {step === "form" && (
          <section className="py-14" style={{ background: "linear-gradient(to bottom, #ffffff, #fffbeb)" }}>
            <div className="max-w-3xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Preguntas Frecuentes</h2>
              <div className="space-y-4">
                {[{ q: "Es realmente gratis?", a: "Si, StoryMinds es 100% gratuito. Puedes generar todas las historias que quieras." }, { q: "Las historias son unicas?", a: "Cada historia es completamente original y nunca se repite. La IA crea contenido nuevo cada vez." }, { q: "Puedo usar las historias para lo que quiera?", a: "Si! Puedes compartirlas en redes, usarlas en tu blog o simplemente disfrutarlas." }].map((f, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-sm p-5">
                    <h4 className="font-semibold text-gray-800 mb-2">{f.q}</h4>
                    <p className="text-sm text-gray-500">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      {/* FOOTER */}
      <footer className="border-t border-amber-100 bg-white mt-auto">
        <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #f59e0b, #ea580c)" }}><span className="text-white text-sm">📖</span></div>
            <span className="text-sm font-semibold text-gray-600">StoryMinds</span>
          </div>
          <p className="text-xs text-gray-400">2026 StoryMinds. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
