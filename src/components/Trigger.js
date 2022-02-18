import { ImageMap } from '@qiuz/react-image-map';
import styles from './cmptStyles/gameplayStyles.module.css';

const Trigger = ({img: mapImage, handler: mapClickHandler, area: mapArea, name: mapName, setTargetCharClicked }) => {

    const {imageMap, ultimateMap} = styles;

    /* Normally for component elements that are children of the Tippy cmpt, would have to forward 
    ref.  Since <ImageMap> comes from a library and unable to do so, workaround is wrapping with the
    <span>  */
    
    return (
        <span tabIndex='0' className={imageMap}>
            <ImageMap
                src={mapImage}
                map={mapArea}
                onMapClick={(area, index) => mapClickHandler(setTargetCharClicked, area, index)}
                onClick={() => setTargetCharClicked(false)}
                // the Ultimate Space Battle map is much wider than the 
                // other maps.  The 'ultimateMap' class is applied only 
                // to this map in order to have it appear "zoomed-in" enough
                // for the player to be able to identify and click on the 
                // characters
                className={mapName === 'Ultimate Space Battle' ? ultimateMap : ''}
            />
        </span>
    )
}

export default Trigger;