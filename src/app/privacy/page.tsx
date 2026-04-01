import Link from "next/link";

export default function Privacy() {
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
        <h1 className="text-3xl font-bold mb-6" style={{ color: "#d97706" }}>Politica de Privacidad</h1>
        <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
          <p><strong>Ultima actualizacion:</strong> Abril 2026</p>
          <h2 className="text-xl font-bold mt-6 mb-2 text-gray-800">1. Informacion que recopilamos</h2>
          <p>StoryMinds es una herramienta gratuita de generacion de historias con Inteligencia Artificial. No recopilamos informacion personal de nuestros usuarios. No solicitamos registros, cuentas, correos electronicos ni datos personales para utilizar nuestro servicio.</p>
          <h2 className="text-xl font-bold mt-6 mb-2 text-gray-800">2. Cookies y tecnologias similares</h2>
          <p>Podemos utilizar cookies de terceros (como Google Analytics y Google AdSense) para analizar el trafico de nuestro sitio web y mostrar anuncios relevantes. Estas cookies recopilan informacion anonima sobre como los visitantes interactuan con nuestro sitio.</p>
          <h2 className="text-xl font-bold mt-6 mb-2 text-gray-800">3. Contenido generado</h2>
          <p>Las historias generadas por nuestra IA son creadas en tiempo real y no se almacenan en nuestros servidores. No guardamos, compartimos ni utilizamos el contenido generado por los usuarios de ninguna manera.</p>
          <h2 className="text-xl font-bold mt-6 mb-2 text-gray-800">4. Servicios de terceros</h2>
          <p>Utilizamos los siguientes servicios de terceros: Vercel (alojamiento web), Groq (procesamiento de IA), Google AdSense (publicidad) y Google Analytics (analisis de trafico). Cada uno de estos servicios tiene sus propias politicas de privacidad.</p>
          <h2 className="text-xl font-bold mt-6 mb-2 text-gray-800">5. Derechos del usuario</h2>
          <p>Dado que no recopilamos informacion personal, no existen datos que puedas solicitar modificar o eliminar. Si tienes alguna preocupacion sobre privacidad, contactanos a traves de nuestra <Link href="/contact" className="underline" style={{ color: "#d97706" }}>pagina de contacto</Link>.</p>
          <h2 className="text-xl font-bold mt-6 mb-2 text-gray-800">6. Cambios a esta politica</h2>
          <p>Nos reservamos el derecho de actualizar esta politica de privacidad en cualquier momento. Cualquier cambio sera publicado en esta pagina con la fecha de ultima actualizacion.</p>
        </div>
      </main>
      <footer className="border-t border-amber-100 bg-white py-6 text-center">
        <p className="text-xs text-gray-400">2026 StoryMinds. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
