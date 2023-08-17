import React from 'react';
import styles from '../Layout/Layout.module.scss';

type SidebarProps = {
	className: string;
};

const Sidebar = ({ className }: SidebarProps) => {
	return (
		<main className={className}>
			<nav className={styles.main__nav}>
				<ul className={styles.main__menu_list}>
					<li className={styles.main__menu_item}>Home Page</li>
					<li className={styles.main__menu_item}>Posts</li>
					<li className={styles.main__menu_item}>Albums</li>
					<li className={styles.main__menu_item}>Etc</li>
				</ul>
			</nav>
		</main>
	);
};

export default Sidebar;
