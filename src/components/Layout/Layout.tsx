import React, { ReactNode } from 'react';
import styles from './Layout.module.scss';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

type LayoutProps = {
	children: ReactNode;
};

const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<main className={styles.main}>{children}</main>
			<footer className={styles.footer}>footer</footer>
		</div>
	);
};

export default Layout;
