// Molde (interfaz) que describe cómo es un usuario registrado en ManSys.
export interface Usuario {
  perfil: string;
  nombres: string;
  apellidos: string;
  documento: string; // la cédula se usa como "usuario" para iniciar sesión
  celular: string;
  correo: string;
  contrasena: string;
}
