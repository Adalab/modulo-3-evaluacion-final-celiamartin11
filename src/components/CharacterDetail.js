import { Link } from 'react-router-dom';

function CharacterDetail (props) {
    return <main className='contain_detail'>
    <section className='character_detail'>
        <div className='info_detail'>
            <h2 className='name_detail'>{props.character.name}</h2>
            <p className='specie_detail'>{props.character.specie}</p>
            <p className='status_detail'>{props.character.status}</p>
            <p className='status_detail'>{props.character.origin}</p>
            <p className='status_detail'>{`${props.character.episodes} Episodes`}</p>
        </div>
        <img className='image_detail' src={props.character.img} alt={props.character.name}/>
        <Link to="/" className='link_detail'>Inicio</Link>
    </section>
    </main>
};

export default CharacterDetail;