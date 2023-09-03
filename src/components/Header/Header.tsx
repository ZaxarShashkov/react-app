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
						<li className={styles.menu__item}>
							<NavLink end to='/' className={styles.menu__item}>
								Posts
							</NavLink>
						</li>
						<li className={styles.menu__item}>
							<NavLink end to='/Users' className={styles.menu__item}>
								Users
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default Header;
