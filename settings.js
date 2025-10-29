// Este es el archivo de configuración estándar de Node-RED.
// Solo modificamos la sección de credenciales de administrador.

var fs = require('fs');
var path = require('path');

module.exports = {
    // Configuración general
    flowFile: 'flows.json',
    userDir: path.join(__dirname, 'data'),

    // Puerto (necesario para Render)
    uiPort: process.env.PORT || 1880,

    // Credenciales de acceso al editor (¡CRÍTICO para la seguridad!)
    adminAuth: {
        type: "credentials",
        users: [{
            // Lee el nombre de usuario de la variable de entorno de Render
            username: process.env.NODE_RED_USERNAME, 
            // Lee el password de la variable de entorno de Render
            password: process.env.NODE_RED_PASSWORD, 
            permissions: "*"
        }]
    },

    // Deshabilita el auto-guardado en la nube (buena práctica en servicios efímeros)
    // Para guardar tus flujos, debes exportarlos/importarlos.
    functionGlobalContext: { },
    
    // Opcional: Deshabilita la paleta de gestión de nodos para ahorrar recursos
    disableEditor: false, 

    // Configuración para el dashboard (si decides usarlo más tarde)
    httpAdminRoot: '/red',
    httpNodeRoot: '/',
    webSocketNodeRoot: '/ws/',
    debugMaxLength: 1000,
    editorTheme: {},

    // ... otras configuraciones estándar ...
};
