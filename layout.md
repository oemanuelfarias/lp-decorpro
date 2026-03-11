# Especificação de Layout: Decor PRO

## Visão Geral e Linguagem Visual (Baseada no Design Aprovado)

**Paleta de Cores Exata:**
- Primária/Accent: `#AB8057` (Marrom)
- Texto Principal: `#4F4F4F` (Cinza Escuro)
- Texto Secundário: `#666666` (Cinza Médio)
- Botões/Destaques: `#00795F` (Verde Botões), Hover: `#00956f`
- Fundo Principal: `#fdfaf8` (Off-white Quente)
- Fundo Escuro (Usado em seções específicas): `#1a1614`
- Branco: `#ffffff`

**Tipografia:**
- Heading: `Plus Jakarta Sans`, sans-serif (Premium Geometric)
- Body: `Inter`, sans-serif
- Tamanhos Desktop: Title 40px, Subtitle 24px, Text 16px
- Tamanhos Mobile: Title 28px, Subtitle 18px, Text 16px

**Espaçamentos e Containers:**
- `Max-width Desktop`: 1200px
- `Max-width Mobile`: 420px
- `Padding padrão em seções`: 80px a 120px vertical

**Tom Geral e Interatividade:**
- Estética premium, elegante, moderna e focada em gerar autoridade (Tech e Apple-style com toque humano).
- Glassmorphism, sobreposições dinâmicas, sombras suaves e micro-interações que agregam valor sem distrair.

---

## Seção 1: Hero (S1)

### Arquétipo e Constraints
- Arquétipo: Video Immersive
- Constraints: Glassmorphism, Video Loop
- Justificativa: O design atual já estabelece essas diretrizes para o hero, transmitindo a sensação de modernidade e sonhos instantaneamente através do vídeo contínuo e o container de vidro (glass-panel).

### Conteúdo
- Subtítulo: Seja bem-vindo à Decor PRO!
- Título: Não é sobre paredes, é sobre sonhos.
- CTA: CONHEÇA NOSSAS SOLUÇÕES

### Layout
- Hero ocupa `100vh` (min-height: 600px).
- Container do conteúdo centralizado, flex direction column, gap de 20px.
- Glass panel com largura máxima de 800px e padding de `60px 48px` em desktop.

### Tipografia
- Subtítulo: Plus Jakarta Sans, 500, 24px (desktop), letter-spacing 1px.
- Título: Plus Jakarta Sans, 700, 40px (desktop), letter-spacing -0.5px.
- CTA: Plus Jakarta Sans, 600, 16px.

### Cores
- Fundo do Glass Panel: `rgba(255, 255, 255, 0.08)` com borda `rgba(255, 255, 255, 0.15)`.
- Texto: `#ffffff`.
- Botão: Fundo `#00795F`, Cor `#ffffff`. Hover `#00956f`.

### Elementos Visuais
- Video em background ocupando 100% cobrindo com `object-fit: cover`.
- Overlay linear-gradient escurecendo para permitir leitura (135deg).

### Animações
- Botão CTA: no hover, `translateY(-4px)` com box-shadow verde neon sutil durando 400ms (cubic-bezier 0.165, 0.84, 0.44, 1).

### Interatividade
- Nenhuma interatividade com scroll no hero, entrada imediata e forte.

### Responsividade
- Mobile: Padding reduzido no glass-panel (`40px 24px`), título 28px.

---

## Seção 2: Introdução (S2)

### Arquétipo e Constraints
- Arquétipo: Split Assimetrico
- Constraints: Imagem Recortada, Float Loop, Container Narrow
- Justificativa: Apresenta os fundadores com personalidade. Quebra o grid tradicional com um polígono inovador.

### Conteúdo
- Título: Beleza, Qualidade e Durabilidade para Sua Casa ou Negócio
- Texto: Seja para construir, reformar ou dar um toque especial ao seu ambiente, a Decor Pro tem a solução perfeita para você! Trabalhamos com revestimentos de alto padrão e oferecemos mão de obra especializada para garantir um resultado impecável.

### Layout
- Grid 1fr 1fr no desktop (gap 80px), alinhado ao centro vertical.
- Esquerda: Textos em flex column com gap de 24px.
- Direita: Wrapper de imagem contendo a foto dos fundadores.

### Tipografia
- Título: Plus Jakarta Sans, 700, 40px, cor `#AB8057`.
- Texto: Inter, 400, 16px, cor `#666666`, line-height 1.8.

### Cores
- Fundo: `#fdfaf8`.

### Elementos Visuais
- Wrapper de imagem usa `clip-path: polygon(0 5%, 100% 0, 100% 95%, 0 100%)`.

### Animações
- Animação de entrada no scroll: Content e Imagem sofrem fade-up e clip-path expansion de durações diferentes baseadas no trigger da viewport.
- Hover na imagem: `translateY(-10px)` e altera o `clip-path` para um retângulo completo, revelando as bordas.

### Interatividade
- Interação ligada ao hover no contêiner da imagem.

### Responsividade
- Mobile: stack column, padding 80px 0, imagem embaixo do texto.

---

## Seção 3: Benefícios (S3)

### Arquétipo e Constraints
- Arquétipo: Bento Box
- Constraints: Card Stack, Hover Lift, Stagger, Noise Texture
- Justificativa: Evita o clichê das "listas" ou 4 ícones lado a lado. O Bento Box agrupa informações complexas de maneira ultra-moderna (estilo Apple), passando riqueza visual com pesos destintos nos cards.

### Conteúdo
- Título: Por que escolher a Decor Pro?
- Item 1: Variedade de Revestimentos / Borracha Líquida, Cimento Queimado...
- Item 2: Soluções Personalizadas / Produtos para todos os estilos...
- Item 3: Mão de Obra Especializada / Profissionais treinados...
- Item 4: Atendimento Especial para Arquitetos... / Suporte completo...

### Layout
- CSS Grid Bento Box customizado (desktop):
  - Card 1 (Variedade): Ocupa 2 colunas, 1 linha (Destaque principal).
  - Card 2 (Personalizadas): Ocupa 1 coluna, 1 linha.
  - Card 3 (Mão de Obra) e Card 4 (Atendimento): Ocupam o espaço restante dividindo horizontal ou verticalmente com proporções assimétricas.
- Gap do grid: 24px. Padding da seção: `120px 0`.

### Tipografia
- Título Principal da Seção: Plus Jakarta Sans, 700, 40px, Centralizado, margem base de 64px.
- Título dos Cards: Plus Jakarta Sans, 600, 20px (Desktop), cor `#4F4F4F`.
- Texto dos Cards: Inter, 400, 15px, cor `#666666`.

### Cores
- Fundo da seção: `#fdfaf8`.
- Fundo dos Cards: `#ffffff`.
- Ícones em `#AB8057` circundados por um background sutil `rgba(171, 128, 87, 0.1)`.

### Elementos Visuais
- Bordas de 1px `solid rgba(79, 79, 79, 0.08)` e `border-radius: 24px` para cada card.
- Textura de "noise" overlay super sutil (10% opacidade) nos cards de destaque para um toque premium.

### Animações
- Stagger Entry: No scroll (trigger 15% da viewport), cards aparecem em cadeia usando fade-up com delay de +100ms por card, cubic-bezier(0.16, 1, 0.3, 1).

### Interatividade
- Hover Lift: `translateY(-6px)`, aplicando box-shadow `0 20px 40px rgba(0,0,0,0.06)` durando 300ms. O ícone dentro do card tem um leve Scale Out (1.05).

### Responsividade
- Mobile: O layout do Bento Box é convertido em coluna simples (`1fr`), gap 16px. Padding de 80px verticais.

---

## Seção 4: Prova Social (S4)

### Arquétipo e Constraints
- Arquétipo: Carousel Coverflow
- Constraints: Floating Cards, Drag Horizontal, Blur Background, Asymmetric Padding
- Justificativa: Torna os depoimentos interativos e táteis (App feel). Cards centrais focados, laterais desfocados (depth of field).

### Conteúdo
- Título: O que nossos clientes dizem?
- Conteúdo: Carrossel de imagens de feedbacks de clientes.

### Layout
- Container do carrossel transbordando a tela do usuário (Overflow Visible). Ocupará max-width de 1400px (100% largura estendida).
- Wrapper do Swiper/Custom Slider no centro.
- Cada slide (feedback card) tem largura fixa (ex: 350px) e altura responsiva (~500px para imagens com aspect ratio de celular).

### Tipografia
- Título: Plus Jakarta Sans, 600, 40px, cor `#AB8057`, alinhado à esquerda.

### Cores
- Fundo da Seção: Variando para um tom `rgba(171, 128, 87, 0.04)` bege hiper suave para separar da S3.

### Elementos Visuais
- Cards de Feedback: Imagens do celular/WhatsApp contendo as mensagens. Bordas de 16px.
- Depth Blur (Blur Background): Slides nativos que não estão no centro usam filtro `blur(4px)` e opacidade `0.5`, criando tridimensionalidade.

### Animações
- Carousel 3D Effect: Transition `transform 400ms ease`, slide central escala a `1`, offsets laterais `0.85`.

### Interatividade
- Drag Horizontal total. Cursor Custom de "Hold & Drag" ativado ao entrar no container.

### Responsividade
- Mobile: Largura do card reduz para 280px. Título centralizado, font 28px.

---

## Seção 5: Inspiração (S5)

### Arquétipo e Constraints
- Arquétipo: Scroll Cinematico 
- Constraints: Imagem Fullbleed, Parallax Layers, Text Reveal, Dark Mode
- Justificativa: Alto impacto emocional. Uma imagem premium de ambiente concluído que consome a tela, com textos dramáticos que aparecem com o escrolar da página.

### Conteúdo
- Título: Explore as Possibilidades e Inspire-se!
- Texto: Deixe sua criatividade fluir e transforme qualquer espaço com revestimentos inovadores que unem beleza, praticidade e resistência.
- CTA: VER PRODUTOS

### Layout
- Fundo Imagem Fullbleed (100vh) grudando com posição `sticky` ou parallax puro seção inteira.
- O texto ocupa uma caixa (glassmorphism sombrio) posicionada assimetricamente no bottom-left do container de 1200px.

### Tipografia
- Título: Plus Jakarta Sans, 700, clamp(2.5rem, 4vw, 3.5rem), cor `#ffffff`.
- Texto: Inter, 400, 18px, cor `rgba(255,255,255,0.85)`.
- Botão CTA: igual ao do Hero, mas com cor de fundo do botão transparente com border branca e blur (Secondary ghost button).

### Cores
- Overlay Gradient: Escurece muito do canto inferior esquerdo, indo do preto absoluto (`rgba(0,0,0,0.8)`) para cima.

### Animações
- Imagem de fundo tem Parallax com velocidade de 0.5x do scroll geral.
- Elementos textuais (Text Reveal) aparecem por linha assim que entram 50% na janela, utilizando clip-path.

### Responsividade
- Mobile: a caixa de texto consome a largura total (padding 24px) do bottom da imagem, diminuindo títulos.

---

## Seção 6: Catálogo (S6)

### Arquétipo e Constraints
- Arquétipo: Spotlight
- Constraints: High Contrast, Hover Glow, Scale In
- Justificativa: Foco total na conversão principal: visualizar o catálogo. O uso do fundo bem marcado (verde escuro) dá solidez à marca ao lado das paletas em tons marrons.

### Conteúdo
- Título: Visite o nosso catálogo virtual!
- Texto: Encante-se com tudo o que a Decor PRO tem para te oferecer!
- CTA: ACESSAR CATÁLOGO VIRTUAL

### Layout
- Padding: `100px 0`. Contêiner muito contido no centro e centralizado textualmente (Container Narrow, max-width 700px).

### Tipografia
- Título: Plus Jakarta Sans, 700, 36px.
- Texto: Inter, 500, 20px.

### Cores
- Fundo: `#00795F` (Usando a cor verde dos botões como fundo principal da seção).
- Texto: `#ffffff`.
- Botão CTA: Fundo `#ffffff`, Cor `#00795F` (inverso).

### Elementos Visuais
- Um leve brilho radial (Radial Gradient) ao fundo do container, tom `#00956f` nas pontas, para trazer textura no flat design.

### Animações
- Botão: Hover Glow gigantesco (`box-shadow: 0 0 25px rgba(255, 255, 255, 0.4)`), translateY.

---

## Seção 7 e 8: Quem Somos (S7+8)

### Arquétipo e Constraints
- Arquétipo: Scroll Storytelling
- Constraints: Sticky Element, Progressive Reveal, Text with Opacity States (Focus)
- Justificativa: O "Quem somos" é muito longo (5 blocos densos de texto). Parágrafos normais seriam entediantes. Em vez disso, texto rola por cima, e as imagens dos sócios/da loja permanecem sticky ao fundo/lado.

### Conteúdo
- Textos da Copy 1, 2, 3, 4, e 5 sobre os fundadores. Título: Quem somos.

### Layout
- Wrapper mestre de uns 250vh para garantir o scroll estendido.
- Desktop Grid `1fr 1fr`.
- Esquerda: Imagens dos sócios e da Decor Pro empilhadas dentro de um container com `position: sticky; top: 120px; height: calc(100vh - 120px)`.
- Direita: Textos agrupados verticalmente com ampla margem (margin-bottom: 50vh entre blocos de texto).

### Tipografia
- Título da Seção (Fixo ou no início): Plus Jakarta Sans, 700, 56px, cor `#AB8057`.
- Parágrafos: Inter, 400, 24px (tamanho editorial forte para história), line-height 1.6.

### Cores
- Fundo geral de rolagem: `#fdfaf8`.
- Texto inativo (longe): `#e5e2df`
- Texto ativo (centro da viewport): `#4F4F4F`.

### Animações
- Texto muda sua transparência quando o scroll alcança seu topo (`opacity: 0.2` => `opacity: 1` => `opacity: 0.2` via JS Observer ou CSS Timeline).
- As imagens na div Sticky fazem leve cross-fade (quando chega na parte de Edison, a foto transiciona por opacidade da Cati para o Edison).

### Responsividade
- Mobile: O layout passa a ser empilhado (fotos em cima dos textos, ou carrossel dos textos). Para simplificar e manter a UI perfomática sem bugs nativos no iOS, faz apenas blocos normais no mobile mas que revelam com fade-up.

---

## Seção 9: Portfólio (S9)

### Arquétipo e Constraints
- Arquétipo: Masonry Gallery
- Constraints: Object-fit Hover, Cursor Custom (View), Zero Padding (Edge to edge Grid)
- Justificativa: Exala inspiração e qualidade. Grid irregular faz jus ao trabalho artesanal.

### Conteúdo
- Título: Nosso portfólio contempla linhas que combinam estética e funcionalidade, como: Revestimentos líquidos... Revestimentos vinílicos... Acabamentos...

### Layout
- Header da seção: Centralizado, padding topo 120px, com o texto copy servindo de subtitulo.
- Masonry Layout de fotos que ocupam 100% da largura da tela. 3 a 4 colunas em desktop, alturas irregulares fluidas.

### Tipografia
- Título Principal: 36px, centralizado.
- Lista resumida no top text: 16px, separada por dots ou badges horizontais com pílulas arredondadas (Badges de linha).

### Cores e Visual
- Fundo: Branco `#ffffff`.
- Badges: Borda de `#AB8057`, texto cor `#AB8057`, fundo transparente.
- Imagens: Saturadas, sem distorção fotográfica. O texto descritivo por cima não existe para manter o foco limpo.

### Animações
- Hover In Image: A imagem tem um scale `1.03` suave. Filtro escurece via overlay leve.

### Interatividade
- Troca do cursor do navegador para uma bola sólida amarela/marrom claro escrita de branco "VER" cravada nela no mousemove interno do JS.

---

## Seção 10: Conhecimento (S10)

### Arquétipo e Constraints
- Arquétipo: Broken Grid / Editorial
- Constraints: Bleed Left, Typography as Decor (Text Outline), Image com Shadow Colorida
- Justificativa: Palestras e aprendizados precisam transmitir autoridade mas com postura acadêmica e acessível. A tipografia ousada atua decorativamente.

### Conteúdo
- Título: Além de atender ao público final, também somos apaixonados por compartilhar conhecimento!
- Texto: Nossa equipe já ministrou... contribuindo ativamente para a valorização e qualificação do mercado.

### Layout
- O layout é "desconectado", onde uma grande fonte de background outline passa atrás da imagem, quebre a margem esquerda com Overflow.
- Caixa de texto flutuando assimetricamente com sombra suave para a direita.

### Tipografia
- Background Decorativo Text: Plus Jakarta Sans gigantecsa (ex: 150px), Stroke text (outline apenas), transparente com stroke `#e8e4df`, text: "CONHECIMENTO".
- Heading normal: 32px.
- Reading Text: 18px.

### Cores
- Fundo da seção: `#fdfaf8`.
- Texto e Headings `#4F4F4F`.

---

## Seção 11: Contato (S11)

### Arquétipo e Constraints
- Arquétipo: Split Horizontal
- Constraints: Map Bleed Both, Hover Reveal Icons, Mix Tones
- Justificativa: Usabilidade máxima no rodapé, permitindo achar rapidamente informações.

### Conteúdo
- Título: Agende um café conosco!
- Texto: Rua Sinval Saldanha, 239, Santa Rosa/RS.
- Endereço no maps acompanhando.

### Layout e Visual
- Topo da seção tem o texto e um convite pro café, centralizado, ocupando padão do container.
- Imediatamente depois, o mapa sangra nas pontas da tela (Google Maps Embed sem border, width 100%, height 400px). Filtro em css `filter: grayscale(0.5) contrast(1.1);` para manter tons harmonicos se derrapar um verde/azul forte do default.

### Tipografia
- Título: Plus Jakarta Sans, 700, 32px `#AB8057`.

---

## Rodapé

### Arquétipo e Constraints
- Arquétipo: Minimal
- Constraints: Monocromatico Escuro
- Justificativa: Rodapé sólido, com foco absoluto nas redes e fechamento de página.

### Conteúdo
- Redes, Copyright...

### Layout e Cor
- Fundo absolute dark `#1e1917` (Marrom ultra fechado/preto).
- Layout em flex justify-between em desktop no container principal.
- Textos em branco `rgba(255,255,255,0.7)`.
- Ícones redes sociais centralizados e brancos.

### Animações
- Ícones dão um pequeno `rotate(-10deg) + scale(1.1)` no hover com cor de destaque (`#AB8057`).

---
*(Fim do Arquivo)*
