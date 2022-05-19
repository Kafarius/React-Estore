import classes from '../css/Opinions.module.css';
import { useSelector } from 'react-redux';
import OpinionItem from './OpinionItem';


const Opinions = () => {
    const opinions = useSelector(state => state.op.opinions);


    return(
        <div className={classes.opinions}>
            <h2>Opinions - in maintenance</h2>

            {
                opinions.map((opinion) => (
                    <OpinionItem
                        key={opinion.id}
                        item={{
                            id: opinion.id,
                            title: opinion.title,
                            text: opinion.text,
                            name: opinion.name,

                        }}
                    />
                ))
            }
        </div>
    )
};

export default Opinions;