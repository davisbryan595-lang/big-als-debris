"use client"

export default function AreasServed() {
  const areas = [
    "Corpus Christi",
    "Kingsville",
    "Robstown",
    "Nueces County",
    "San Patricio County",
    "Surrounding Areas",
  ]

  return (
    <section id="areas" className="py-20 sm:py-32 bg-surface relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-black text-text mb-4">
            Serving <span className="text-primary">Corpus Christi</span> & Beyond
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            We proudly serve homes and businesses throughout the Corpus Christi area and surrounding communities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Placeholder */}
          <div className="lg:col-span-2">
            <div className="relative w-full h-96 bg-background rounded-xl border-2 border-primary/30 overflow-hidden group hover:border-primary transition-colors">
              <svg viewBox="0 0 400 300" className="w-full h-full">
                {/* Simplified Texas map outline */}
                <path
                  d="M 100 50 L 150 40 L 180 60 L 200 50 L 220 70 L 240 60 L 260 80 L 280 70 L 300 90 L 320 80 L 330 110 L 340 130 L 350 150 L 360 180 L 350 200 L 340 220 L 320 230 L 300 240 L 280 250 L 260 260 L 240 265 L 220 270 L 200 275 L 180 270 L 160 265 L 140 260 L 120 250 L 100 240 L 80 220 L 70 200 L 60 180 L 50 160 L 45 140 L 40 120 L 35 100 L 40 80 L 50 70 L 70 60 L 90 55 Z"
                  fill="rgba(34, 197, 94, 0.1)"
                  stroke="rgba(34, 197, 94, 0.5)"
                  strokeWidth="2"
                />
                {/* Corpus Christi marker */}
                <circle cx="200" cy="200" r="8" fill="#22c55e" className="animate-pulse" />
                <circle
                  cx="200"
                  cy="200"
                  r="15"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="2"
                  opacity="0.5"
                  className="animate-pulse"
                />
                <text x="200" y="225" textAnchor="middle" fill="#f1f5f9" fontSize="14" fontWeight="bold">
                  Corpus Christi
                </text>
              </svg>
            </div>
          </div>

          {/* Areas List */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-text mb-6">Service Areas</h3>
            {areas.map((area, index) => (
              <div
                key={index}
                className="p-4 bg-background/50 backdrop-blur border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300 cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform"></div>
                  <span className="text-text group-hover:text-primary transition-colors font-medium">{area}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
