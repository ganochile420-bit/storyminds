import Link from "next/link";

export default function Contact() {
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
        <h1 className="text-3xl font-bold mb-6" style={{ color: "#d97706" }}>Contacto</h1>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>Gracias por visitar StoryMinds. Si tienes alguna pregunta, sugerencia, reportar un problema o simplemente quieres decirnos hola, puedes contactarnos a traves de los siguientes medios:</p>
          <div className="bg-white rounded-xl p-6 shadow-sm space-y-3">
            <p><strong>Correo electronico:</strong> storyminds.contacto@gmail.com</p>
            <p><strong>Tiempo de respuesta:</strong> Intentamos responder a todos los correos en un plazo de 24 a 48 horas habiles.</p>
          </div>
          <p>Tambien puedes encontrarnos en nuestras redes sociales donde compartimos historias generadas por nuestra IA, tips creativos y mas contenido.</p>
        </div>
      </main>
      <footer className="border-t border-amber-100 bg-white py-6 text-center">
        <p className="text-xs text-gray-400">2026 StoryMinds. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
