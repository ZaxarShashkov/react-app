import React from 'react';
import cn from 'classnames';
import styles from '../Layout/Layout.module.scss';

type Props = {
	className: string;
};

const Header = ({ className }: Props) => {
	return (
		<>
			<header className={className}>
				<nav className={styles.header__nav}>
					<ul className={styles.menu__list}>
						<li className={styles.menu__item}>Home Page</li>
						<li className={styles.menu__item}>Posts</li>
						<li className={styles.menu__item}>Albums</li>
						<li className={styles.menu__item}>Etc</li>
					</ul>
				</nav>
			</header>
		</>
	);
};

export default Header;
