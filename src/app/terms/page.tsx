import Link from "next/link";

export default function Terms() {
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
        <h1 className="text-3xl font-bold mb-6" style={{ color: "#d97706" }}>Terminos de Uso</h1>
        <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
          <p><strong>Ultima actualizacion:</strong> Abril 2026</p>
          <h2 className="text-xl font-bold mt-6 mb-2 text-gray-800">1. Aceptacion de los terminos</h2>
          <p>Al utilizar StoryMinds, aceptas estos terminos de uso en su totalidad. Si no estas de acuerdo con alguno de estos terminos, por favor no utilices nuestro servicio.</p>
          <h2 className="text-xl font-bold mt-6 mb-2 text-gray-800">2. Descripcion del servicio</h2>
          <p>StoryMinds es una herramienta gratuita que genera historias de ficcion utilizando Inteligencia Artificial. El servicio se proporciona "tal cual" sin garantias de ningun tipo.</p>
          <h2 className="text-xl font-bold mt-6 mb-2 text-gray-800">3. Uso del contenido generado</h2>
          <p>Las historias generadas por StoryMinds son creadas por IA y son gratuitas para uso personal y comercial. Sin embargo, no garantizamos la originalidad absoluta ni la exactitud del contenido generado.</p>
          <h2 className="text-xl font-bold mt-6 mb-2 text-gray-800">4. Restricciones</h2>
          <p>No puedes utilizar StoryMinds para generar contenido ilegal, ofensivo, difamatorio, violento, sexualmente explicito o que infrinja derechos de terceros. Nos reservamos el derecho de limitar el uso del servicio si detectamos un uso indebido.</p>
          <h2 className="text-xl font-bold mt-6 mb-2 text-gray-800">5. Limitacion de responsabilidad</h2>
          <p>StoryMinds no se hace responsable del contenido generado por la IA. Las historias son creadas automaticamente y pueden contener errores o inexactitudes. El usuario es responsable de como utilice el contenido generado.</p>
          <h2 className="text-xl font-bold mt-6 mb-2 text-gray-800">6. Modificaciones al servicio</h2>
          <p>Nos reservamos el derecho de modificar, suspender o descontinuar el servicio en cualquier momento y sin previo aviso.</p>
          <h2 className="text-xl font-bold mt-6 mb-2 text-gray-800">7. Contacto</h2>
          <p>Para cualquier pregunta sobre estos terminos, visita nuestra <Link href="/contact" className="underline" style={{ color: "#d97706" }}>pagina de contacto</Link>.</p>
        </div>
      </main>
      <footer className="border-t border-amber-100 bg-white py-6 text-center">
        <p className="text-xs text-gray-400">2026 StoryMinds. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
