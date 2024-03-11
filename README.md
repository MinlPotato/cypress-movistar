<h1>Cypress casos de prueba - Movistar</h1>

<h2>Casos de prueba</h2>

<h3>CP001 - Validar cuotas en compra de equipo -Cuotas.3 -Equipo.A14</h3>
<p>Descripción: El objetivo del caso de prueba es visitar la tienda de Movistar (https://tiendaonline.movistar.com.ar), 
    luego realizar la búsqueda del equipo A14 e ingresar al mismo y verificar que se pueda pagar en 3 cuotas sin interes
</p>
<p>Resultado Esperado:</p>
<ol>
  <li>Que se pueda ingresar a la página indicada</li>
  <li>Que el equipo seleccionado sea el A14</li>
  <li>Que se indique en el equipo que puede ser pagado en 3 cuotas sin interes</li>
  <li>De no estar disponible el equipo A14 tomar alguno que si lo esté.</li>
</ol>

<p>Resultado Obtenido:</p>
<p>En la pagina del Equipo A14 no se indica que se pueda pagar en 3 cuotas sin intereses, lo que se indica es: 6 cuotas sin intereses.</p>

<br/>

<h3>CP002 - Aplicar filtro de equipos - Memoria Interna.128GB -Precio Entre 200Ky300K</h3>
<p>
  Descripción: El objetivo del caso de prueba es visitar la tienda de Movistar (https://tiendaonline.movistar.com.ar), luego utilizando los filtros de la página, filtrar por Memoria Interna 128GB y precio entre “$200.000 - $300.000” e indicar cuantos equipos devuelve la búsqueda  
</p>
<p>Resultado esperado:</p>
<ol>
  <li>Que se pueda ingresar a la página indicada</li>
  <li>Que se pueda aplicar los filtros</li>
  <li>Que se obtengan equipos luego del filtrado validando la cantidad mostrada</li>
</ol>

<br/>

<h3>CP003 - Validar cuotas en compra de equipo -Cuotas.60 -Equipo.Tercero de la lista -Banco.Credicoop -Tarjeta.Visa </h3>
<p>
    Descripción: El objetivo del caso de prueba es visitar la tienda de Movistar (https://tiendaonline.movistar.com.ar), luego ingresar al tercer equipo de la lista inicial que se obtenga y verificar que NO exista el método de pago de 60 cuotas para el banco Credicoop con Tarjeta VISA. 
</p>
<p>Resultado esperado:</p>
<ol>
  <li>Que se pueda ingresar a la página indicada</li>
  <li>Que el equipo seleccionado sea el tercero de la lista</li>
  <li>Que no exista un medio de pago con 60 cuotas para el banco Credicoop con tarjeta VISA</li>
</ol>

<br/>

<h3>CP004 – Comprobar el correcto funcionamiento del Carrito de compras</h3>
<p>
    Descripción: El objetivo del caso de prueba es visitar la tienda de Movistar (https://tiendaonline.movistar.com.ar), luego ingresar a cualquier equipo que este disponible, apretar el botón de comprar y verificar que el equipo aparezca correctamente en el carrito de compras.
</p>
<p>Resultado esperado:</p>
<ol>
  <li>Que se pueda ingresar a la página indicada</li>
  <li>Que el equipo seleccionado esté disponible</li>
  <li>Que al apretar el botón de comprar aparezca el equipo correctamente en el carrito de compras</li>
</ol>
