# if/else

Durante o processo de criação, recorri também ao editor online do p5.js como ferramenta de apoio, onde pude experimentar e testar algumas ideias antes de as aplicar no código final. A composição é constituída por uma grelha de círculos distribuídos uniformemente por todo o ecrã, sobre um fundo preto.

Comecei por definir as dimensões do canvas através de createCanvas(windowWidth, windowHeight), para que a composição ocupasse toda a janela do navegador. Para criar as bolinhas, utilizei dois ciclos for, que permitem repetir a criação dos círculos nos eixos horizontal e vertical, formando uma grelha regular. Defini o valor inicial de 20 para criar uma margem em relação aos limites do ecrã e utilizei o intervalo de 35 entre círculos, de forma a garantir um espaçamento uniforme.

A interação acontece através da posição do rato, que divide o ecrã em quatro partes imaginários. Para identificar a localização do rato, utilizei as variáveis mouseX e mouseY, que representam, respetivamente, a sua posição horizontal e vertical. Através de "width / 2" e "height / 2", determinei o centro do canvas, permitindo distinguir as quatro partes.

Utilizei as estruturas condicionais if/else para definir uma resposta visual diferente em cada quadrante. No superior esquerdo, as bolinhas ficam roxas e têm 10 píxeis de diâmetro; no superior direito, ficam rosas e têm 18 píxeis; no inferior direito, ficam laranjas e têm 30 píxeis; e no inferior esquerdo, ficam vermelhas e têm 40 píxeis.

Para controlar a variação do tamanho, criei a variável tamanho, à qual atribuí um valor diferente em cada condição. Posteriormente, utilizei esse valor na função circle(x, y, tamanho), permitindo que o diâmetro de todos os círculos se alterasse automaticamente. As cores foram definidas através de valores RGB e utilizei noStroke() para retirar o contorno das formas. Escolhi o preto para o fundo, de modo a criar contraste e destacar as cores das bolinhas.

