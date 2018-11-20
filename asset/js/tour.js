class Tour {
  constructor() {
    this.messages = {
      spanish: {
        done: 'Terminar',
        close: 'Cerrar',
        next: 'Siguiente',
        previous: 'Anterior',
        welcome: {
          title: '¡Bienvenido a FROAC!',
          description: 'Contamos con herramientas de accesibilidad para ayudarte a navegar en nuestro sitio. En esta guia aprenderas a usarlas para que puedas sacar el mayor provecho.'
        },
        'card-font-size': {
          title: 'Tamaño de fuente',
          description: 'Cambia el tamaño de la fuente escribiendo un número entre 9 y 36.'
        },
        'card-interline-size': {
          title: 'Tamaño de interlineado',
          description: 'Cambia el espacio entre una línea y otra con un numero entre 1 y 2.'
        },
        'card-contrast-colors': {
          title: 'Contraste',
          description: 'Cambia los colores para una mejor visibilidad del contenido.'
        },
        'card-font-type': {
          title: 'Tipo de fuente',
          description: 'Puede cambiar el tipo de fuente con el cual se muestra el cotenido.'
        },
        'card-config-cursor': {
          title: 'Configuración del cursor',
          description: 'Cambiar el tamaño del cursor y añadir un rastro que le permita ubicar rápidamente a este.'
        },
        'card-config-colors': {
          title: 'Configuración de colores',
          description: 'Cambiar el contraste de las imagenes y elementos del contenido.'
        },
        'card-narrator-speed': {
          title: 'Velocidad de lectura',
          description: 'Elige entre estas opciones la velocidad con la cual se leeran los objetos de aprendizaje.'
        },
        'card-narrator-pitch': {
          title: 'Tono de voz',
          description: 'Elige entre estas opciones para que la voz sea mucho más amigable.'
        },
        'card-narrator-volume': {
          title: 'Volumen de voz',
          description: 'Cambie el volumen de voz'
        },
        'card-narrator-voice-gender': {
          title: 'Genero de voz',
          description: 'Cambie el genero de  la voz.'
        },
        'card-narrator-link': {
          title: 'Enlaces',
          description: 'Puede configurar cual va a ser el comportamiento a la hora de leer un enlace. Reproducir un sonido especial, un efecto de voz o no leerlo.'
        },
        'card-narrator-highlight': {
          title: 'Resaltado de texto',
          description: 'Que porción del texto va a ser resaltada cuando se lee un elemento. Una palabra, línea, oración o parrafo.'
        },
        'card-narrator-read-mode': {
          title: 'Lectura',
          description: 'Que porción del texto va a ser leida. Una palabra, línea, oración o parrafo.'
        },
        'card-screen-reader-speed': {
          title: 'Velocidad de lectura',
          description: 'Elige entre estas opciones la velocidad con la cual se leeran los objetos de aprendizaje.'
        },
        'card-screen-reader-pitch': {
          title: 'Tono de voz',
          description: 'Elige entre estas opciones para que la voz sea mucho más amigable.'
        },
        'card-screen-reader-volume': {
          title: 'Volumen de voz',
          description: 'Cambie el volumen de voz'
        },
        'card-screen-reader-voice-gender': {
          title: 'Genero de voz',
          description: 'Cambie el genero de  la voz.'
        },
        'card-screen-reader-link': {
          title: 'Enlaces',
          description: 'Puede configurar cual va a ser el comportamiento a la hora de leer un enlace. Reproducir un sonido especial, un efecto de voz o no leerlo.'
        },
        'card-lsc-translator-speed': {
          title: 'Velocidad de señas',
          description: 'Cambie la velocidad con la cual se traduce el mensaje al lenguaje de señas. 10, 20, 30 o 40 son los valores válidos.'
        },
        'card-lsc-translator-model': {
          title: 'Modelo',
          description: 'Elija quien hará la traducción del mensaje, un avatar o un humano.'
        },
        'card-structural-nav-strategy-nav': {
          title: 'Estrategia de navagación',
          description: 'Cambie el orden en el cual se enfocan los elementos.'
        },
        'card-structural-nav-show-toc': {
          title: 'Ver tabla de cotenido',
          description: 'Elija si quiere ver o no la tabla de contenidos del sitio. La tabla de contenidos le permite ver una lista de los encabezados de la página y acceder a ellos rápidamente.'
        },
        'card-virtual-keyboard-size': {
          title: 'Tamaño del teclado',
          description: 'Cambie el tamaño del teclado virtual.'
        },
        'card-virtual-keyboard-sound': {
          title: 'Sonido del teclado',
          description: 'Puede reproducir o no un sonido al presionar una tecla del teclado virtual.'
        },
        'card-virtual-keyboard-use': {
          title: 'Usar teclado',
          description: 'Puede activar o desactivar el uso del teclado virtual.'
        }
      },
      portuguese: {
        done: 'Terminar',
        close: 'Fechar',
        next: 'Próximo',
        previous: 'Anterior',
        welcome: {
          title: '¡Bem vindo ao FROAC!',
          description: 'Temos ferramentas de acessibilidade para ajudá-lo a navegar em nosso site. Neste guia, você aprenderá a usá-las para aproveitar ao máximo.'
        },
        'card-font-size': {
          title: 'Tamanho da fonte',
          description: 'Altere o tamanho da fonte digitando um número entre 9 e 36.'
        },
        'card-interline-size': {
          title: 'Tamanho do espaçamento de linha',
          description: 'Altere o espaço entre uma linha e outra com um número entre 1 e 2.'
        },
        'card-contrast-colors': {
          title: 'Contraste',
          description: 'Altere as cores para melhor visibilidade do conteúdo.'
        },
        'card-font-type': {
          title: 'Tipo de fonte',
          description: 'Você pode alterar o tipo de fonte com o qual o cotenid é exibido.'
        },
        'card-config-cursor': {
          title: 'Configurações do cursor',
          description: 'Altere o tamanho do cursor e adicione uma trilha que permita localizá-lo rapidamente.'
        },
        'card-config-colors': {
          title: 'Configuração de cores',
          description: 'Altere o contraste das imagens e dos elementos de conteúdo.'
        },
        'card-narrator-speed': {
          title: 'Velocidade de leitura',
          description: 'Escolha entre essas opções a velocidade com que os objetos de aprendizagem serão lidos.'
        },
        'card-narrator-pitch': {
          title: 'Tom de voz',
          description: 'Escolha entre essas opções para que a voz seja muito mais amigável.'
        },
        'card-narrator-volume': {
          title: 'Volume de voz',
          description: 'Alterar o volume da voz'
        },
        'card-narrator-voice-gender': {
          title: 'Gênero de voz',
          description: 'Altere o gênero da voz.'
        },
        'card-narrator-link': {
          title: 'Links',
          description: 'Você pode configurar qual será o comportamento ao ler um link. Tocar um som especial, um efeito de voz ou não lê-lo.'
        },
        'card-narrator-highlight': {
          title: 'Realçar texto',
          description: 'Qual parte do texto será destacada quando um elemento for lido. Uma palavra, linha, frase ou parágrafo.'
        },
        'card-narrator-read-mode': {
          title: 'Leitura',
          description: 'Qual parte do texto será lida. Uma palavra, linha, frase ou parágrafo.'
        },
        'card-screen-reader-speed': {
          title: 'Velocidade de leitura',
          description: 'Escolha entre essas opções a velocidade com que os objetos de aprendizagem serão lidos.'
        },
        'card-screen-reader-pitch': {
          title: 'Tom de voz',
          description: 'Escolha entre essas opções para que a voz seja muito mais amigável.'
        },
        'card-screen-reader-volume': {
          title: 'Volume de voz',
          description: 'Alterar o volume da voz'
        },
        'card-screen-reader-voice-gender': {
          title: 'Gênero de voz',
          description: 'Altere o gênero da voz.'
        },
        'card-screen-reader-link': {
          title: 'Links',
          description: 'Você pode configurar qual será o comportamento ao ler um link. Tocar um som especial, um efeito de voz ou não lê-lo.'
        },
        'card-structural-nav-strategy-nav': {
          title: 'Estratégia de navegação',
          description: 'Altere a ordem na qual os elementos estão focalizados.'
        },
        'card-structural-nav-show-toc': {
          title: 'Veja o índice',
          description: 'Escolha se deseja ou não ver o índice do site. O índice permite que você veja uma lista dos cabeçalhos da página e acesse-os rapidamente.'
        },
        'card-virtual-keyboard-size': {
          title: 'Tamanho do teclado',
          description: 'Altere o tamanho do teclado virtual.'
        },
        'card-virtual-keyboard-sound': {
          title: 'Som do teclado',
          description: 'Você pode tocar um som ou não pressionando uma tecla no teclado virtual.'
        },
        'card-virtual-keyboard-use': {
          title: 'Use o teclado',
          description: 'Você pode ativar ou desativar o uso do teclado virtual.'
        }
      },
      english: {
        done: 'Done',
        close: 'Close',
        next: 'Next',
        previous: 'Previous',
        welcome: {
          title: '¡Welcome to FROAC!',
          description: 'We have accessibility tools to help you navigate our site. In this guide you will learn to use them so that you can get the most out of them.'
        },
        'card-font-size': {
          title: 'Font size',
          description: 'Change the font size by typing a number between 9 and 36.'
        },
        'card-interline-size': {
          title: 'Line spacing size',
          description: 'Change the space between one line and another with a number between 1 and 2.'
        },
        'card-contrast-colors': {
          title: 'Contrast',
          description: 'Change the colors for better visibility of the content.'
        },
        'card-font-type': {
          title: 'Font type',
          description: 'You can change the font type with which the cotenid is displayed.'
        },
        'card-config-cursor': {
          title: 'Cursor settings',
          description: 'Change the size of the cursor and add a trail that allows you to quickly locate it.'
        },
        'card-config-colors': {
          title: 'Configuration of colors',
          description: 'Change the contrast of the images and content elements.'
        },
        'card-narrator-speed': {
          title: 'Reading speed',
          description: 'Choose among these options the speed with which the learning objects will be read.'
        },
        'card-narrator-pitch': {
          title: 'Voice tone',
          description: 'Choose between these options so that the voice is much friendlier.'
        },
        'card-narrator-volume': {
          title: 'Voice volume',
          description: 'Change the voice volume'
        },
        'card-narrator-voice-gender': {
          title: 'Gender of voice',
          description: 'Change the gender of the voice.'
        },
        'card-narrator-link': {
          title: 'Links',
          description: 'You can configure what the behavior will be when reading a link. Play a special sound, a voice effect or not read it.'
        },
        'card-narrator-highlight': {
          title: 'Highlight text',
          description: 'What portion of the text will be highlighted when an element is read. A word, line, sentence or paragraph.'
        },
        'card-narrator-read-mode': {
          title: 'Reading',
          description: 'What portion of the text will be read. A word, line, sentence or paragraph.'
        },
        'card-screen-reader-speed': {
          title: 'Reading speed',
          description: 'Choose among these options the speed with which the learning objects will be read.'
        },
        'card-screen-reader-pitch': {
          title: 'Voice tone',
          description: 'Choose between these options so that the voice is much friendlier.'
        },
        'card-screen-reader-volume': {
          title: 'Voice volume',
          description: 'Change the voice volume'
        },
        'card-screen-reader-voice-gender': {
          title: 'Gender of voice',
          description: 'Change the gender of the voice.'
        },
        'card-screen-reader-link': {
          title: 'Links',
          description: 'You can configure what the behavior will be when reading a link. Play a special sound, a voice effect or not read it.'
        },
        'card-lsc-translator-speed': {
          title: 'Signal speed',
          description: 'Change the speed with which the message is translated into sign language. 10, 20, 30 or 40 are the valid values.'
        },
        'card-lsc-translator-model': {
          title: 'Model',
          description: 'Choose who will do the translation of the message, an avatar or a human.'
        },
        'card-structural-nav-strategy-nav': {
          title: 'Navigation strategy',
          description: 'Change the order in which the elements are focused.'
        },
        'card-structural-nav-show-toc': {
          title: 'See table of contents',
          description: 'Choose whether or not you want to see the table of contents of the site. The table of contents allows you to see a list of the headers of the page and access them quickly.'
        },
        'card-virtual-keyboard-size': {
          title: 'Keyboard size',
          description: 'Change the size of the virtual keyboard.'
        },
        'card-virtual-keyboard-sound': {
          title: 'Keyboard sound',
          description: 'You can play a sound or not by pressing a key on the virtual keyboard.'
        },
        'card-virtual-keyboard-use': {
          title: 'Use keyboard',
          description: 'You can activate or deactivate the use of the virtual keyboard.'
        }
      }
    }
    this.driver = new Driver({
      doneBtnText: this.messages[userLang].done, // Text on the final button
      closeBtnText: this.messages[userLang].close, // Text on the close button for this step
      nextBtnText: this.messages[userLang].next, // Next button text for this step
      prevBtnText: this.messages[userLang].previous,
      onReset: () => {
        $('#accessibilityBar').collapse('hide')        
        $('#controlsModal').modal('show')
      },
      onNext: (elm) => {
        this.driver.preventMove()

        if (elm.node.id == 'card-config-colors') {
          $('#narrator-tab').tab('show')
          $('#narrator-tab').on('shown.bs.tab', (e) => {
            this.driver.start(6)
            $('#narrator-tab').off('shown.bs.tab')
          })
        } else if (elm.node.id == 'card-narrator-read-mode') {
          $('#screen-reader-tab').tab('show')
          $('#screen-reader-tab').on('shown.bs.tab', (e) => {
            this.driver.start(13)
            $('#screen-reader-tab').off('shown.bs.tab')
          })
        } else if (elm.node.id == 'card-screen-reader-link') {
          if (userLang == 'spanish') {
            $('#LSC-translator-tab').tab('show')
            $('#LSC-translator-tab').on('shown.bs.tab', (e) => {
              this.driver.start(18)
              $('#LSC-translator-tab').off('shown.bs.tab')
            })
          } else {
            $('#structural-navigation-tab').tab('show')
            $('#structural-navigation-tab').on('shown.bs.tab', (e) => {
              this.driver.start(18)
              $('#structural-navigation-tab').off('shown.bs.tab')
            })
          }
        } else if (elm.node.id == 'card-lsc-translator-model') {
          $('#structural-navigation-tab').tab('show')
          $('#structural-navigation-tab').on('shown.bs.tab', (e) => {
            this.driver.start(20)
            $('#structural-navigation-tab').off('shown.bs.tab')
          })
        } else if (elm.node.id == 'card-structural-nav-show-toc') {
          $('#keyboard-tab').tab('show')

          $('#keyboard-tab').on('shown.bs.tab', (e) => {
            if (userLang == 'spanish') {
              this.driver.start(22)
            } else {
              this.driver.start(20)
            }
            $('#keyboard-tab').off('shown.bs.tab')
          })
        } else {
          this.driver.moveNext()
        }
      },
      onPrevious: (elm) => {
        this.driver.preventMove()

        if (elm.node.id == 'card-narrator-speed') {
          $('#interfaz-tab').tab('show')
          $('#interfaz-tab').on('shown.bs.tab', (e) => {
            this.driver.start(5)
            $('#interfaz-tab').off('shown.bs.tab')
          })
        } else if (elm.node.id == 'card-screen-reader-speed') {
          $('#narrator-tab').tab('show')
          $('#narrator-tab').on('shown.bs.tab', (e) => {
            this.driver.start(12)
            $('#narrator-tab').off('shown.bs.tab')
          })
        } else if (elm.node.id == 'card-lsc-translator-speed') {
          $('#screen-reader-tab').tab('show')
          $('#screen-reader-tab').on('shown.bs.tab', (e) => {
            this.driver.start(17)
            $('#screen-reader-tab').off('shown.bs.tab')
          })
        } else if (elm.node.id == 'card-structural-nav-strategy-nav') {
          $('#LSC-translator-tab').tab('show')
          $('#LSC-translator-tab').on('shown.bs.tab', (e) => {
            this.driver.start(19)
            $('#LSC-translator-tab').off('shown.bs.tab')
          })
        } else if (elm.node.id == 'card-virtual-keyboard-size') {
          $('#structural-navigation-tab').tab('show')
          $('#structural-navigation-tab').on('shown.bs.tab', (e) => {
            this.driver.start(21)
            $('#structural-navigation-tab').off('shown.bs.tab')
          })
        } else {
          this.driver.movePrevious()
        }
      },

    })

    this.buttons = `${ userLang == 'spanish' ? `
    <button onclick="tour.interprete()" class="btn btn-outline-success btn-lg" type="submit"> 
      <i class="fas fa-sign-language"></i>
      Interpretar
    </button>`: ''}
    <button class="btn btn-outline-success btn-lg" type="submit">
      <i class="fas fa-headphones"></i>
      Escuchar
    </button>`

    if (userLang == 'spanish') {
      this.driver.defineSteps([{
          element: '#card-font-size',
          popover: {
            title: `${ this.messages[userLang]['card-font-size'].title }`,
            description: `
            <p class="description">
              ${ this.messages[userLang]['card-font-size'].description }
            </p>
            <br/>
            ${ this.buttons }
            `,
            position: 'bottom'
          }
        },
        {
          element: '#card-interline-size',
          popover: {
            title: `${ this.messages[userLang]['card-interline-size'].title }`,
            description: `
            <p class="description">
              ${ this.messages[userLang]['card-interline-size'].description }
            </p>
            <br/>
            ${ this.buttons }
            `,
            position: 'bottom'
          }
        },
        {
          element: '#card-contrast-colors',
          popover: {
            title: `${ this.messages[userLang]['card-contrast-colors'].title }`,
            description: `
              <p class="description">
                ${ this.messages[userLang]['card-contrast-colors'].description }  
              </p>
              <br/>
              ${ this.buttons }
            `,
            position: 'bottom'
          }
        },
        {
          element: '#card-font-type',
          popover: {
            title: `${ this.messages[userLang]['card-font-type'].title }`,
            description: `
              <p class="description">
                ${ this.messages[userLang]['card-font-type'].description }
              </p>
              <br/>
              ${ this.buttons }
            `,
            position: 'bottom'
          }
        },
        {
          element: '#card-config-cursor',
          popover: {
            title: `${ this.messages[userLang]['card-config-cursor'].title }`,
            description: `
              <p class="description">
                ${ this.messages[userLang]['card-config-cursor'].description }
              </p>
              <br/>
              ${ this.buttons }
            `,
            position: 'top'
          }
        },
        {
          element: '#card-config-colors',
          popover: {
            title: `${ this.messages[userLang]['card-config-colors'].title }`,
            description: `
              <p class="description">
                ${ this.messages[userLang]['card-config-colors'].description }
              </p>
              <br/>
              ${ this.buttons }
            `,
            position: 'top'
          }
        },
        {
          element: '#card-narrator-speed',
          popover: {
            title: `${ this.messages[userLang]['card-narrator-speed'].title }`,
            description: `
              <p class="description">
                ${ this.messages[userLang]['card-narrator-speed'].description }
              </p>
              <br/>
              ${ this.buttons }
            `,
            position: 'bottom'
          }
        },
        {
          element: '#card-narrator-pitch',
          popover: {
            title: `${ this.messages[userLang]['card-narrator-pitch'].title }`,
            description: `
              <p class="description">
                ${ this.messages[userLang]['card-narrator-pitch'].description }
              </p>
              <br/>
              ${ this.buttons }
            `,
            position: 'bottom'
          }
        },
        {
          element: '#card-narrator-volume',
          popover: {
            title: `${ this.messages[userLang]['card-narrator-volume'].title }`,
            description: `
              <p class="description">
                ${ this.messages[userLang]['card-narrator-volume'].description }
              </p>
              <br/>
              ${ this.buttons }
            `,
            position: 'bottom'
          }
        },
        {
          element: '#card-narrator-voice-gender',
          popover: {
            title: `${ this.messages[userLang]['card-narrator-voice-gender'].title }`,
            description: `
              <p class="description">
                ${ this.messages[userLang]['card-narrator-voice-gender'].description }
              </p>
              <br/>
              ${ this.buttons }
            `,
            position: 'bottom'
          }
        },
        {
          element: '#card-narrator-link',
          popover: {
            title: `${ this.messages[userLang]['card-narrator-link'].title }`,
            description: `
              <p class="description">
                ${ this.messages[userLang]['card-narrator-link'].description }
              </p>
              <br/>
              ${ this.buttons }
            `,
            position: 'bottom'
          }
        },
        {
          element: '#card-narrator-highlight',
          popover: {
            title: `${ this.messages[userLang]['card-narrator-highlight'].title }`,
            description: `
              <p class="description">
                ${ this.messages[userLang]['card-narrator-highlight'].description }
              </p>
              <br/>
              ${ this.buttons }
            `,
            position: 'top'
          }
        },
        {
          element: '#card-narrator-read-mode',
          popover: {
            title: `${ this.messages[userLang]['card-narrator-read-mode'].title }`,
            description: `
            <p class="description">
              ${ this.messages[userLang]['card-narrator-read-mode'].description }
            </p>
              <br/>
              ${ this.buttons }
            `,
            position: 'top'
          }
        },
        {
          element: '#card-screen-reader-speed',
          popover: {
            title: `${ this.messages[userLang]['card-screen-reader-speed'].title }`,
            description: `
            <p class="description">
            ${ this.messages[userLang]['card-screen-reader-speed'].description }
            </p>
              <br/>
              ${ this.buttons }
            `,
            position: 'bottom'
          }
        },
        {
          element: '#card-screen-reader-pitch',
          popover: {
            title: `${ this.messages[userLang]['card-screen-reader-pitch'].title }`,
            description: `
            <p class="description">
              ${ this.messages[userLang]['card-screen-reader-pitch'].description }
            </p>
              <br/>
              ${ this.buttons }
            `,
            position: 'bottom'
          }
        },
        {
          element: '#card-screen-reader-volume',
          popover: {
            title: `${ this.messages[userLang]['card-screen-reader-volume'].title }`,
            description: `
              <p class="description">
                ${ this.messages[userLang]['card-screen-reader-volume'].title }
              </p>
              <br/>
              ${ this.buttons }
            `,
            position: 'bottom'
          }
        },
        {
          element: '#card-screen-reader-voice-gender',
          popover: {
            title: `${ this.messages[userLang]['card-screen-reader-voice-gender'].title }`,
            description: `
            <p class="description">
            ${ this.messages[userLang]['card-screen-reader-voice-gender'].description }
            </p>
              <br/>
              ${ this.buttons }
            `,
            position: 'bottom'
          }
        },
        {
          element: '#card-screen-reader-link',
          popover: {
            title: `${ this.messages[userLang]['card-screen-reader-link'].title }`,
            description: `
            <p class="description">
              ${ this.messages[userLang]['card-screen-reader-link'].description }
            </p>
              <br/>
              ${ this.buttons }
            `,
            position: 'bottom'
          }
        },
        {
          element: '#card-lsc-translator-speed',
          popover: {
            title: `${ this.messages[userLang]['card-lsc-translator-speed'].title }`,
            description: `
            <p class="description">
              ${ this.messages[userLang]['card-lsc-translator-speed'].description }
            </p>
              <br/>
              ${ this.buttons }
            `,
            position: 'bottom'
          }
        },
        {
          element: '#card-lsc-translator-model',
          popover: {
            title: `${ this.messages[userLang]['card-lsc-translator-model'].title }`,
            description: `
            <p class="description">
              ${ this.messages[userLang]['card-lsc-translator-model'].description }
            </p>
              <br/>
              ${ this.buttons }
            `,
            position: 'bottom'
          }
        },
        {
          element: '#card-structural-nav-strategy-nav',
          popover: {
            title: `${ this.messages[userLang]['card-structural-nav-strategy-nav'].title }`,
            description: `
            <p class="description">
              ${ this.messages[userLang]['card-structural-nav-strategy-nav'].description }
            </p>
              <br/>
              ${ this.buttons }
            `,
            position: 'bottom'
          }
        },
        {
          element: '#card-structural-nav-show-toc',
          popover: {
            title: `${ this.messages[userLang]['card-structural-nav-show-toc'].title }`,
            description: `
            <p class="description">
              ${ this.messages[userLang]['card-structural-nav-show-toc'].description }
            </p>
              <br/>
              ${ this.buttons }
            `,
            position: 'bottom'
          }
        },
        {
          element: '#card-virtual-keyboard-size',
          popover: {
            title: `${ this.messages[userLang]['card-virtual-keyboard-size'].title }`,
            description: `
            <p class="description">
              ${ this.messages[userLang]['card-virtual-keyboard-size'].description }
            </p>
              <br/>
              ${ this.buttons }
            `,
            position: 'bottom'
          }
        },
        {
          element: '#card-virtual-keyboard-key-sound',
          popover: {
            title: `${ this.messages[userLang]['card-virtual-keyboard-sound'].title }`,
            description: `
          <p class="description">
            ${ this.messages[userLang]['card-virtual-keyboard-sound'].description }
          </p>
              <br/>
              ${ this.buttons }
            `,
            position: 'bottom'
          }
        },
        {
          element: '#card-virtual-keyboard-use',
          popover: {
            title: `${ this.messages[userLang]['card-virtual-keyboard-use'].title }`,
            description: `
          <p class="description">
            ${ this.messages[userLang]['card-virtual-keyboard-use'].description }
          </p>
              <br/>
              ${ this.buttons }
            `,
            position: 'bottom'
          }
        },
      ])
    } else {
      this.driver.defineSteps([{
          element: '#card-font-size',
          popover: {
            title: `${ this.messages[userLang]['card-font-size'].title }`,
            description: `
          <p class="description">
            ${ this.messages[userLang]['card-font-size'].description }
          </p>
          <br/>
          ${ this.buttons }
          `,
            position: 'bottom'
          }
        },
        {
          element: '#card-interline-size',
          popover: {
            title: `${ this.messages[userLang]['card-interline-size'].title }`,
            description: `
          <p class="description">
            ${ this.messages[userLang]['card-interline-size'].description }
          </p>
          <br/>
          ${ this.buttons }
          `,
            position: 'bottom'
          }
        },
        {
          element: '#card-contrast-colors',
          popover: {
            title: `${ this.messages[userLang]['card-contrast-colors'].title }`,
            description: `
            <p class="description">
              ${ this.messages[userLang]['card-contrast-colors'].description }  
            </p>
            <br/>
            ${ this.buttons }
          `,
            position: 'bottom'
          }
        },
        {
          element: '#card-font-type',
          popover: {
            title: `${ this.messages[userLang]['card-font-type'].title }`,
            description: `
            <p class="description">
              ${ this.messages[userLang]['card-font-type'].description }
            </p>
            <br/>
            ${ this.buttons }
          `,
            position: 'bottom'
          }
        },
        {
          element: '#card-config-cursor',
          popover: {
            title: `${ this.messages[userLang]['card-config-cursor'].title }`,
            description: `
            <p class="description">
              ${ this.messages[userLang]['card-config-cursor'].description }
            </p>
            <br/>
            ${ this.buttons }
          `,
            position: 'top'
          }
        },
        {
          element: '#card-config-colors',
          popover: {
            title: `${ this.messages[userLang]['card-config-colors'].title }`,
            description: `
            <p class="description">
              ${ this.messages[userLang]['card-config-colors'].description }
            </p>
            <br/>
            ${ this.buttons }
          `,
            position: 'top'
          }
        },
        {
          element: '#card-narrator-speed',
          popover: {
            title: `${ this.messages[userLang]['card-narrator-speed'].title }`,
            description: `
            <p class="description">
              ${ this.messages[userLang]['card-narrator-speed'].description }
            </p>
            <br/>
            ${ this.buttons }
          `,
            position: 'bottom'
          }
        },
        {
          element: '#card-narrator-pitch',
          popover: {
            title: `${ this.messages[userLang]['card-narrator-pitch'].title }`,
            description: `
            <p class="description">
              ${ this.messages[userLang]['card-narrator-pitch'].description }
            </p>
            <br/>
            ${ this.buttons }
          `,
            position: 'bottom'
          }
        },
        {
          element: '#card-narrator-volume',
          popover: {
            title: `${ this.messages[userLang]['card-narrator-volume'].title }`,
            description: `
            <p class="description">
              ${ this.messages[userLang]['card-narrator-volume'].description }
            </p>
            <br/>
            ${ this.buttons }
          `,
            position: 'bottom'
          }
        },
        {
          element: '#card-narrator-voice-gender',
          popover: {
            title: `${ this.messages[userLang]['card-narrator-voice-gender'].title }`,
            description: `
            <p class="description">
              ${ this.messages[userLang]['card-narrator-voice-gender'].description }
            </p>
            <br/>
            ${ this.buttons }
          `,
            position: 'bottom'
          }
        },
        {
          element: '#card-narrator-link',
          popover: {
            title: `${ this.messages[userLang]['card-narrator-link'].title }`,
            description: `
            <p class="description">
              ${ this.messages[userLang]['card-narrator-link'].description }
            </p>
            <br/>
            ${ this.buttons }
          `,
            position: 'bottom'
          }
        },
        {
          element: '#card-narrator-highlight',
          popover: {
            title: `${ this.messages[userLang]['card-narrator-highlight'].title }`,
            description: `
            <p class="description">
              ${ this.messages[userLang]['card-narrator-highlight'].description }
            </p>
            <br/>
            ${ this.buttons }
          `,
            position: 'top'
          }
        },
        {
          element: '#card-narrator-read-mode',
          popover: {
            title: `${ this.messages[userLang]['card-narrator-read-mode'].title }`,
            description: `
          <p class="description">
            ${ this.messages[userLang]['card-narrator-read-mode'].description }
          </p>
            <br/>
            ${ this.buttons }
          `,
            position: 'top'
          }
        },
        {
          element: '#card-screen-reader-speed',
          popover: {
            title: `${ this.messages[userLang]['card-screen-reader-speed'].title }`,
            description: `
          <p class="description">
          ${ this.messages[userLang]['card-screen-reader-speed'].description }
          </p>
            <br/>
            ${ this.buttons }
          `,
            position: 'bottom'
          }
        },
        {
          element: '#card-screen-reader-pitch',
          popover: {
            title: `${ this.messages[userLang]['card-screen-reader-pitch'].title }`,
            description: `
          <p class="description">
            ${ this.messages[userLang]['card-screen-reader-pitch'].description }
          </p>
            <br/>
            ${ this.buttons }
          `,
            position: 'bottom'
          }
        },
        {
          element: '#card-screen-reader-volume',
          popover: {
            title: `${ this.messages[userLang]['card-screen-reader-volume'].title }`,
            description: `
            <p class="description">
              ${ this.messages[userLang]['card-screen-reader-volume'].title }
            </p>
            <br/>
            ${ this.buttons }
          `,
            position: 'bottom'
          }
        },
        {
          element: '#card-screen-reader-voice-gender',
          popover: {
            title: `${ this.messages[userLang]['card-screen-reader-voice-gender'].title }`,
            description: `
          <p class="description">
          ${ this.messages[userLang]['card-screen-reader-voice-gender'].description }
          </p>
            <br/>
            ${ this.buttons }
          `,
            position: 'bottom'
          }
        },
        {
          element: '#card-screen-reader-link',
          popover: {
            title: `${ this.messages[userLang]['card-screen-reader-link'].title }`,
            description: `
          <p class="description">
            ${ this.messages[userLang]['card-screen-reader-link'].description }
          </p>
            <br/>
            ${ this.buttons }
          `,
            position: 'bottom'
          }
        },
        {
          element: '#card-structural-nav-strategy-nav',
          popover: {
            title: `${ this.messages[userLang]['card-structural-nav-strategy-nav'].title }`,
            description: `
          <p class="description">
            ${ this.messages[userLang]['card-structural-nav-strategy-nav'].description }
          </p>
            <br/>
            ${ this.buttons }
          `,
            position: 'bottom'
          }
        },
        {
          element: '#card-structural-nav-show-toc',
          popover: {
            title: `${ this.messages[userLang]['card-structural-nav-show-toc'].title }`,
            description: `
          <p class="description">
            ${ this.messages[userLang]['card-structural-nav-show-toc'].description }
          </p>
            <br/>
            ${ this.buttons }
          `,
            position: 'bottom'
          }
        },
        {
          element: '#card-virtual-keyboard-size',
          popover: {
            title: `${ this.messages[userLang]['card-virtual-keyboard-size'].title }`,
            description: `
          <p class="description">
            ${ this.messages[userLang]['card-virtual-keyboard-size'].description }
          </p>
            <br/>
            ${ this.buttons }
          `,
            position: 'bottom'
          }
        },
        {
          element: '#card-virtual-keyboard-key-sound',
          popover: {
            title: `${ this.messages[userLang]['card-virtual-keyboard-sound'].title }`,
            description: `
        <p class="description">
          ${ this.messages[userLang]['card-virtual-keyboard-sound'].description }
        </p>
            <br/>
            ${ this.buttons }
          `,
            position: 'bottom'
          }
        },
        {
          element: '#card-virtual-keyboard-use',
          popover: {
            title: `${ this.messages[userLang]['card-virtual-keyboard-use'].title }`,
            description: `
        <p class="description">
          ${ this.messages[userLang]['card-virtual-keyboard-use'].description }
        </p>
            <br/>
            ${ this.buttons }
          `,
            position: 'bottom'
          }
        },
      ])
    }
  }

  interprete(name) {
    let text = ''

    if (!name) {
      const activeElement = this.driver.getHighlightedElement()
      text = `${ this.messages[userLang][activeElement.node.id].title }. ${ this.messages[userLang][activeElement.node.id].description }`
    } else {
      text = `${ this.messages[userLang][name].title }. ${ this.messages[userLang][name].description }`
    }

    if (accessibilityBar.lscTranslator.minimized) {
      accessibilityBar.lscTranslator.maximize()
    }

    accessibilityBar.lscTranslator.containerIris.style.zIndex = 5000000000

    accessibilityBar.lscTranslator.onEnd = () => {
      accessibilityBar.lscTranslator.containerIris.style.zIndex = 1001
    }

    accessibilityBar.lscTranslator.translate(text)
  }

  start() {
    this.driver.start()
  }
}
