import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

export interface ResultadoRegistro {
  ok: boolean;
  mensaje: string;
  campo?: string; // id del campo del formulario que tiene el problema
}

// Un servicio guarda la lógica y los datos de usuarios.
// Por ahora usa localStorage porque aún no hay servidor ni base de datos.
// OJO: guardar contraseñas así es solo para practicar; en un sistema real
// se guardan cifradas en una base de datos.
@Injectable({ providedIn: 'root' })
export class AuthService {
  private claveUsuarios = 'mansys_usuarios';

  private leerUsuarios(): Usuario[] {
    try {
      return JSON.parse(localStorage.getItem(this.claveUsuarios) ?? '[]');
    } catch {
      return [];
    }
  }

  registrar(nuevo: Usuario): ResultadoRegistro {
    const usuarios = this.leerUsuarios();

    if (usuarios.some(u => u.documento === nuevo.documento)) {
      return { ok: false, mensaje: 'Esa cédula ya está registrada.', campo: 'documento-registro' };
    }
    if (usuarios.some(u => u.correo.toLowerCase() === nuevo.correo.toLowerCase())) {
      return { ok: false, mensaje: 'Ese correo ya está registrado.', campo: 'correo-registro' };
    }

    usuarios.push(nuevo);
    localStorage.setItem(this.claveUsuarios, JSON.stringify(usuarios));
    return { ok: true, mensaje: 'Cuenta creada correctamente.' };
  }

  // Devuelve el usuario si cédula, contraseña y perfil coinciden; si no, null.
  iniciarSesion(documento: string, contrasena: string, perfil: string): Usuario | null {
    return (
      this.leerUsuarios().find(
        u => u.documento === documento && u.contrasena === contrasena && u.perfil === perfil
      ) ?? null
    );
  }
}
