import React from 'react';
import styles from '../Layout/Layout.module.scss';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
	return (
		<div className={styles.sidebar}>
			<nav className={styles.main__nav}>
				<ul className={styles.main__menu_list}>
					<li className={styles.main__menu_item}>
						<NavLink end to='/' className={styles.main__menu_item}>
							Home Page
						</NavLink>
					</li>
					<li className={styles.main__menu_item}>
						<NavLink end to='/' className={styles.main__menu_item}>
							Posts
						</NavLink>
					</li>
					<li className={styles.main__menu_item}>
						<NavLink end to='/Users' className={styles.main__menu_item}>
							Users
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Sidebar;
