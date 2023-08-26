import React from 'react';
import styles from '../Layout/Layout.module.scss';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
	return (
		<div className={styles.sidebar}>
			<nav className={styles.main__nav}>
				<ul className={styles.main__menu_list}>
					<li className={styles.main__menu_item}>Home Page</li>
					<li className={styles.main__menu_item}>
						<NavLink end to='/'>
							Posts
						</NavLink>
					</li>
					<li className={styles.menu__item}>
						<NavLink end to='/Users' className={styles.menu__item}>
							Users
						</NavLink>
					</li>
					<li className={styles.main__menu_item}>Etc</li>
				</ul>
			</nav>
		</div>
	);
};

export default Sidebar;
