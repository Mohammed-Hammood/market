import { useContext } from 'react';
import styles from './styles.module.scss';
import { Theme, ThemeContext } from '@/app/providers/ThemeProvider/ThemeProvider';
import ICON from '@/shared/ui/Icons';
import clsx from 'clsx';


export const Navbar = (): JSX.Element => {
	const { theme, themeToggle } = useContext(ThemeContext);

	return (
		<header className={styles.Header}>
			<nav className={(styles.Navbar)}>
				<h1 className={clsx(styles.Logo, { [styles.LogoDark]: theme === Theme.DARK })}>Market</h1>
				<button
					title={theme === Theme.DARK ? "Dark mode" : "Light mode"}
					className={styles.ThemeButton}
					onClick={themeToggle}
				>
					<ICON
						name={theme === Theme.DARK ?  'moon-ellipsis-solid': 'sun-ellipsis-solid'}
						height='28'
						width='59'
						color='none'
					/>

				</button>
			</nav>
		</header>
	);
};
