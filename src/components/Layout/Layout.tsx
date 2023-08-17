import React from 'react';
import styles from './Layout.module.scss';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

type Props = {};

const Layout = (props: Props) => {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar}/>
			<div className={styles.main}>main</div>
			<footer className={styles.footer}>footer</footer>
		</div>
	);
};

export default Layout;
