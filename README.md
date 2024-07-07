# Solución - Prueba de Frontend de RNB

[Link - Calculadora de Hipotecas](https://frontend-test-solution.vercel.app/)

![Vista previa del diseño del desafío de la calculadora de amortización de hipotecas](./preview.jpg)

## Descripción del reto

Tu reto es construir esta calculadora de hipotecas en ReactJS y lograr que se vea lo más cercano posible al diseño proporcionado.

Tus usuarios deberán poder:

- Ingresar información sobre la hipoteca y ver los montos de pago mensual y total después de enviar el formulario.
- Ver mensajes de validación del formulario si algún campo está incompleto.
- Completar el formulario solo usando su teclado.
- Ver la disposición óptima de la interfaz dependiendo del tamaño de la pantalla de su dispositivo.
- Ver estados de hover y focus para todos los elementos interactivos de la página.

# Tecnologías Utilizadas

- Next.js para construcción del proyecto.
- Diseño de componentes: React.js y CSS.
- Diseño de secciones: React.js, Typescript y Tailwind CSS.
- Vercel para deploy.

# Bitácora

Antes de empezar el reto, tuve que dedicar un día a repasar conceptos cruciales de React como useEffect y los manejos de formularios, al igual que un repaso en tailwind CSS.
Me hubiera gustado empezar pronto, pero por cuestiones universitarias y familiares no pude empezar hasta el jueves por la noche.
El viernes le dediqué tiempo a analizar el reto, ver qué secciones hacer y qué componentes crear e inicializar el proyecto en next.js. Conseguí ajustar toda la metadata necesaria y dejar preparado temas como variables globales de CSS, las carpetas de componentes y secciones y pruebas dentro del proyecto. Concluí la noche adelantando el diseño inicial, ya que desde un principio supe que era lo que más costaría.
El sábado dediqué todo el día a pulir la estructura de la calculadora, finalizar el diseño de los componentes, y antes de colocar la lógica del formulario, hice un programa básico en javascript para testear datos y corroborar que los resultados fueran correstos utilizando [Mortgage Calculator de Bankrate](https://www.bankrate.com/mortgages/mortgage-calculator/) como guía. Finalmente conseguí añadir los toques finales como renderizado condicional, funciones para validar datos y manejar cambios, refinar la calculadora de hipotecas y añadir pseudoelementos como hover y focus.

# Guías y tutoriales utilizados para completar el reto

- [Tailwind References](https://tailwindcss.com/resources)
- [React.js References](https://react.dev/reference/react)
- [Mortgage Calculator - Bankrate](https://www.bankrate.com/mortgages/mortgage-calculator/)
- [Mortgage Calculators - Wikipedia](https://en.wikipedia.org/wiki/Mortgage_calculator)
- [Aprende React ahora! curso completo para crear aplicaciones - HolaMundo](https://youtu.be/yIr_1CasXkM?si=P680VUHPHqSiqD3f)