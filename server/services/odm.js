import mongoose from 'mongoose';
import log from '../config/winston';

class MongooseOdm {
  // Constructor de la clase
  constructor(url) {
    this.url = url;
  }

  // metodo para conectar a la BD
  async connect() {
    try {
      // Estableciendo el sistema de promesas
      // por defecto en mongoose
      mongoose.Promise = global.Promise;
      log.info(`📞📞 Conectando a la base de datos ...${this.url}`);
      const connection = await mongoose.connect(this.url);
      return connection;
    } catch (error) {
      log.error('Ocurrio un error');
      throw new Error(
        `💢 No se pudo establecer conexión a la base de datos debido a: ${error.message} 💢`
      );
    }
  }
}

export default MongooseOdm;
