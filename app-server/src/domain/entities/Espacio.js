class Espacio {
  constructor({
    idEspacio,
    nombre,
    uso,
    categoria,
    edificio,
    planta,
    superficie,
    reservable,
    aforo,
    geom,
  }) {
    this.idEspacio = idEspacio;
    this.nombre = nombre;
    this.uso = uso;
    this.categoria = categoria;
    this.edificio = edificio;
    this.planta = planta;
    this.superficie = superficie;
    this.reservable = reservable;
    this.aforo = aforo;
    this.geom = geom;
  }
}

module.exports = Espacio;