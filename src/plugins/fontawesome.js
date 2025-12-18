import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Importa ícones que você quer usar

//import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons'

// importa o ícone desejado
import { faGift, faEye, faHeart, faFaceGrinHearts } from '@fortawesome/free-solid-svg-icons'


// Adiciona os ícones à biblioteca
library.add( faGift, faEye, faHeart, faFaceGrinHearts )

export default FontAwesomeIcon