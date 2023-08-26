import React from 'react';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from '../Layout/Layout.module.scss';

type Props = {};

const Header = () => {
	return (
		<>
			<header className={styles.header}>
				<nav className={styles.header__nav}>
					<ul className={styles.menu__list}>
						<li className={styles.menu__item}>Home Page</li>
						<li className={styles.menu__item}>Posts</li>
						<li className={styles.menu__item}>
							<NavLink end to='/Users'>
								Users
							</NavLink>
						</li>
						<li className={styles.menu__item}>Etc</li>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default Header;
