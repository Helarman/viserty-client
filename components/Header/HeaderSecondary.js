import styles from './HeaderSecondary.module.scss'

const HeaderSecondary = ({title, background}) => {
return(
    <div style={{ background: `url(${background.url}) center center no-repeat `, backgroundSize: `cover` } } className={styles.header}>
			<div className={`container`}>
			    <p>{title}</p>
			</div>
	</div>
)
};

export default HeaderSecondary;