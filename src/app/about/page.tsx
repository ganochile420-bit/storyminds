import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "linear-gradient(to bottom, #fffbeb, #ffffff)" }}>
      <header className="bg-white/80 backdrop-blur-md border-b border-amber-200/50">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #f59e0b, #ea580c)" }}>
              <span className="text-white text-lg">📖</span>
            </div>
            <span className="text-xl font-bold" style={{ color: "#d97706" }}>StoryMinds</span>
          </Link>
        </div>
      </header>
      <main className="flex-1 max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6" style={{ color: "#d97706" }}>Acerca de StoryMinds</h1>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>StoryMinds es una plataforma gratuita que utiliza Inteligencia Artificial para generar historias unicas e irrepetibles. Nuestro objetivo es democratizar la creatividad, permitiendo a cualquier persona crear narrativas cautivadoras sin necesidad de experiencia en escritura.</p>
          <p>Utilizamos modelos avanzados de lenguaje de Groq para generar cada historia. Cada vez que creas una nueva historia, la IA produce contenido completamente original, con personajes memorables, giros inesperados y descripciones vividas.</p>
          <h2 className="text-xl font-bold mt-8 mb-3 text-gray-800">Como funciona</h2>
          <p>Solo necesitas elegir un genero literario (aventura, romance, terror, fantasia, ciencia ficcion, entre otros), describir tus personajes principales, opcionalmente definir un escenario y un tono emocional, y nuestra IA se encargara del resto. En segundos, tendras una historia completa con inicio, nudo y desenlace.</p>
          <h2 className="text-xl font-bold mt-8 mb-3 text-gray-800">Nuestra mision</h2>
          <p>Creamos StoryMinds porque creemos que todos tienen una historia que contar. Ya sea que busques entretenimiento, inspiracion para tu propia escritura, o simplemente quieras ver lo que la IA puede crear, StoryMinds esta aqui para ti.</p>
          <h2 className="text-xl font-bold mt-8 mb-3 text-gray-800">Contacto</h2>
          <p>Si tienes preguntas, sugerencias o necesitas ayuda, no dudes en contactarnos en nuestra <Link href="/contact" className="underline" style={{ color: "#d97706" }}>pagina de contacto</Link>.</p>
        </div>
      </main>
      <footer className="border-t border-amber-100 bg-white py-6 text-center">
        <p className="text-xs text-gray-400">2026 StoryMinds. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
