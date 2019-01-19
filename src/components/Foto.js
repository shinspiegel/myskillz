import React from 'react';
import imagemPerfil from '../img/perfil.png'

const foto = () => {
    return (
        <section className='foto'>
            <div className='foto__wrapper'>
                <img className='foto__imagem' src={imagemPerfil} alt='Imagem Perfil' />
            </div>
        </section>
    );
}

export default foto;