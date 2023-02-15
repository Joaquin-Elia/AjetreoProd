import React from 'react';
import CookiesAccordion from './CookiesAccordion/CookiesAccordion';
import './CookiesPolicy.css';

export const CookiesPolicy = () => {

  return (
    <div className="bg-cookies-policy">
      <div className='cookies-policy'>
          <h1 className="cookies-h1">Política de cookies</h1>
          <i>Esta Política de cookies fue actualizada por última vez el 10/01/2023.</i>
          <h2 className="cookies-h2">1. Introducción</h2>
          <p className='cookies-policy-p'>Nuestra web, 'Dominio + enlace' (en adelante: «la web») utiliza cookies y otras tecnologías relacionadas (para mayor comodidad, todas las tecnologías se denominan «cookies»). Las cookies también son colocadas por terceros a los que hemos contratado. En el siguiente documento te informamos sobre el uso de cookies en nuestra web.</p>
          <h2 className="cookies-h2">2. ¿Qué son las cookies?</h2>
          <p className="cookies-policy-p">Las cookies constituyen una herramienta empleada por los servidores Web para almacenar y recuperar información acerca de sus visitantes. No es más que un fichero de texto que algunos servidores piden a nuestro navegador que escriba en nuestro disco duro, con información acerca de lo que hemos estado haciendo por sus páginas. Poseen una fecha de caducidad, que puede oscilar desde el tiempo que dure la sesión hasta una fecha futura especificada, a partir de la cual dejan de ser operativa.</p>
          <h2 className="cookies-h2">3. Cookies</h2>
          <h3 className="cookies-h3">3.1 Cookies técnicas o funcionales</h3>
          <p className="cookies-policy-p">Algunas cookies aseguran que ciertas partes de la web funcionen correctamente y que tus preferencias de usuario sigan recordándose. Al colocar cookies funcionales, te facilitamos la visita a nuestra web. De esta manera, no necesitas introducir repetidamente la misma información cuando visitas nuestra web y, por ejemplo, los artículos permanecen en tu carrito de compra hasta que hayas pagado. Podemos colocar estas cookies sin tu consentimiento.</p>
          <h3 className="cookies-h3">3.2 Cookies analitícas</h3>
          <p className="cookies-policy-p">Utilizamos cookies analitícas para optimizar la experiencia de la web para nuestros usuarios. Con estas cookies analíticas obtenemos información sobre el uso de nuestra web, con el fin de en un futuro poder introducir mejoras. Te pedimos tu permiso para colocar cookies analitícas.</p>
          <h2 className="cookies-h2">4. Cookies usadas</h2>
          <CookiesAccordion />
          <h2 className="cookies-h2">5. Consentimiento</h2>
          <p className="cookies-policy-p">Cuando visites nuestra web por primera vez, te mostraremos una ventana emergente con una explicación sobre las cookies. Tan pronto como hagas clic en «Aceptar», aceptas que usemos todas las cookies y plugins tal como se describe en la ventana emergente y en esta política de cookies. Puedes desactivar el uso de cookies a través de tu navegador, pero, por favor, ten en cuenta que nuestra web puede dejar de funcionar correctamente.</p>
          <h2 className="cookies-h2">6. Activación/desactivación y eliminación de cookies</h2>
          <p className="cookies-policy-p">Puedes utilizar tu navegador de Internet para eliminar las cookies de forma automática o manual. También puedes especificar que ciertas cookies no pueden ser colocadas. Otra opción es cambiar los ajustes de tu navegador de Internet para que recibas un mensaje cada vez que se coloca una cookie. Para obtener más información sobre estas opciones, consulta las instrucciones de la sección «Ayuda» de tu navegador.</p>
          <p className="cookies-policy-p">Ten en cuenta que nuestra web puede no funcionar correctamente si todas las cookies están desactivadas. Si borras las cookies de tu navegador, se volverán a colocar después de tu consentimiento cuando vuelvas a visitar nuestras webs.</p>
          <p className='cookies-policy-credits'>Esta politica de cookies ha sido sincronizada con <a href="https://cookiedatabase.org/" target="_blank" rel="noopener noreferrer" className='cookies-credits-link'>cookiedatabase.org</a></p> 
      </div>

    </div>
  )
}
