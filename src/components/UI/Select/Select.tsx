import React, {
	useState,
	MouseEvent,
	useEffect,
	useRef,
	DetailedHTMLProps,
	HTMLAttributes,
} from 'react';
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

	const positionRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, { capture: true });
		return () => document.removeEventListener('click', handleClickOutside, { capture: true });
	}, [handleClickOutside, isVisible]);

	function handleClickOutside(e: any /*MouseEvent<HTMLElement>*/) {
		const { current } = positionRef;
		if (current && !current.contains(e.target as HTMLElement) && isVisible) {
			setIsVisible(false);
		}
	}

	return (
		<div className={styles.select__container} ref={positionRef}>
			<div className={styles.select}>
				<div className={styles.select__container}>
					<div className={styles.select__select} onClick={onVisible}>
						<div className={styles.select__date}>
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
					<div className={styles.select__dropdown}>
						<React.Fragment key={'First new'}>
							<div
								className={styles.select__item}
								data-sort='desc'
								onClick={(e) => handleClick(e)}>
								<div className={styles.select__date}>First new</div>
								{order === 'desc' ? (
									<svg
										width='18'
										height='18'
										viewBox='0 0 18 18'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M16.8687 3.66222C17.0552 3.86582 17.0414 4.1821 16.8378 4.36865L5.92408 14.3687C5.73294 14.5438 5.43965 14.5438 5.24851 14.3687L1.16222 10.6245C0.95862 10.4379 0.944801 10.1216 1.13135 9.91803C1.31791 9.71443 1.63419 9.70062 1.83779 9.88717L5.5863 13.3218L16.1622 3.63135C16.3658 3.4448 16.6821 3.45862 16.8687 3.66222Z'
											fill='#407BFF'
										/>
									</svg>
								) : null}
							</div>
						</React.Fragment>
						<React.Fragment key={'Old ones first'}>
							<div
								className={styles.select__item}
								onClick={(e) => handleClick(e)}
								data-sort='asc'>
								<div className={styles.select__date}>Old ones first</div>
								{order === 'asc' ? (
									<svg
										width='18'
										height='18'
										viewBox='0 0 18 18'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M16.8687 3.66222C17.0552 3.86582 17.0414 4.1821 16.8378 4.36865L5.92408 14.3687C5.73294 14.5438 5.43965 14.5438 5.24851 14.3687L1.16222 10.6245C0.95862 10.4379 0.944801 10.1216 1.13135 9.91803C1.31791 9.71443 1.63419 9.70062 1.83779 9.88717L5.5863 13.3218L16.1622 3.63135C16.3658 3.4448 16.6821 3.45862 16.8687 3.66222Z'
											fill='#407BFF'
										/>
									</svg>
								) : null}
							</div>
						</React.Fragment>
					</div>
				)}
			</div>
		</div>
	);
};

export default Select;
