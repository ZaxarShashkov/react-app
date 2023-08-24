import React, { useState, MouseEvent } from 'react';
import styles from './Select.module.scss';
import cn from 'classnames';

type SelectProps = {
	setOrder: (e: string | undefined) => void;
	order: string | undefined;
};

const Select = ({ order, setOrder }: SelectProps): JSX.Element => {
	const [isVisible, setIsVisible] = useState<boolean>(false);

	const onVisible = () => {
		setIsVisible((isVisible) => !isVisible);
	};

	const handleClick = (e: MouseEvent<HTMLDivElement>) => {
		setOrder(e.currentTarget.dataset.sort);
		setIsVisible(false);
	};

	return (
		<div className={styles.select__container}>
			<div className={styles.selectDate}>
				<div className={styles.selectDate__container}>
					<div className={styles.selectDate__select} onClick={onVisible}>
						<div className={styles.selectDate__date}>
							<span>{order === 'desc' ? 'First new' : 'Old ones first'}</span>
						</div>
						<div
							className={cn({
								[styles.select__arrowOpen]: isVisible,
								[styles.select__arrow]: !isVisible,
							})}>
							<svg
								width='20'
								height='9'
								viewBox='0 0 20 9'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M0.433594 0.508411C0.705097 0.195587 1.17879 0.16209 1.49161 0.433594L8.9007 6.86403C9.49367 7.37867 10.5063 7.37867 11.0993 6.86403L18.5084 0.433594C18.8212 0.16209 19.2949 0.195587 19.5664 0.508411C19.8379 0.821235 19.8044 1.29493 19.4916 1.56643L12.0825 7.99686C10.9255 9.00106 9.07453 9.00106 7.9175 7.99686L0.508411 1.56643C0.195587 1.29493 0.16209 0.821235 0.433594 0.508411Z'
									fill='#407BFF'
								/>
							</svg>
						</div>
					</div>
				</div>
				{isVisible && (
					<div className={styles.selectDate__dropdown}>
						<React.Fragment key={'First new'}>
							<div
								className={styles.selectDate__item}
								data-sort='desc'
								onClick={(e) => handleClick(e)}>
								<div className={styles.selectDate__date}>First new</div>
							</div>
						</React.Fragment>
						<React.Fragment key={'Old ones first'}>
							<div
								className={styles.selectDate__item}
								onClick={(e) => handleClick(e)}
								data-sort='asc'>
								<div className={styles.selectDate__date}>Old ones first</div>
							</div>
						</React.Fragment>
					</div>
				)}
			</div>
		</div>
	);
};

export default Select;
