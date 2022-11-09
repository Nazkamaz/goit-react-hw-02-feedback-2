import PropTypes from 'prop-types';
import styles from '../Section/Section.module.css';

const Section = ({title,children})=>
{
    return(<section
    className={styles.section}>
        <h2>{title}</h2>
        {children}
</section>
    )
}

Section.propType={
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default Section;