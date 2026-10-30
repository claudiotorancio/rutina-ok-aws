//Fcion auxiliar apara extraer coordenadas

export const extraerCoordenadas = (textoUbicacion) => {
    if (!textoUbicacion) return null;
    // Expresión regular flexible para "Latitud[:=] ... Longitud[:=] ..."
    const match = textoUbicacion.match(/Latitud\s*[:=]?\s*([-\d.]+)[,\s]+Longitud\s*[:=]?\s*([-\d.]+)/i);
    if (match) {
        return {
            lat: parseFloat(match[1]),
            lon: parseFloat(match[2])
        };
    }
    return null;
};

//Renderizar la seccion del mapa
export const seccionMapa = (coords) => {
    if (coords) {
        const delta = 0.005;
        const bbox = `${coords.lon - delta},${coords.lat - delta},${coords.lon + delta},${coords.lat + delta}`;
        const osmUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${coords.lat},${coords.lon}`;
        const googleMapsUrl = `https://www.google.com/maps?q=${coords.lat},${coords.lon}`;

        return `
                <div class="mb-4">
                    <h6 class="fw-bold text-light mb-3"><i class="bi bi-map text-accent me-2"></i>Ubicación de la Intervención</h6>
                    <div class="p-3 bg-dark border border-secondary rounded">
                        <div class="mb-2 text-muted small">
                            <i class="bi bi-geo-alt-fill text-danger me-1"></i> 
                            Lat: ${coords.lat} | Lon: ${coords.lon}
                        </div>
                        <div class="ratio ratio-16x9 rounded overflow-hidden border border-secondary mb-2" style="max-height: 250px;">
                            <iframe src="${osmUrl}" style="border: 0;" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                        <div class="text-end">
                            <a href="${googleMapsUrl}" target="_blank" class="btn btn-outline-info btn-sm">
                                <i class="bi bi-box-arrow-up-right me-1"></i> Abrir en Google Maps
                            </a>
                        </div>
                    </div>
                </div>
            `;
    }
}