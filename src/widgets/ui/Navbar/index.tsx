import { useContext } from 'react';
import styles from './styles.module.scss';
import { ThemeContext } from '@/app/providers/ThemeProvider';
import ICON from '@/shared/ui/Icons';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { AppRoutes } from '@/shared/routes';
import { Theme } from '@/app/providers/ThemeProvider';


const Navbar = (): JSX.Element => {
	const { theme, themeToggle } = useContext(ThemeContext);

	return (
		<header className={styles.Header}>
			<nav className={(styles.Navbar)}>
				<Link
					to={AppRoutes.home}
					className={clsx(styles.Logo, { [styles.LogoDark]: theme === Theme.DARK })}
				>
					Market
				</Link>
				<button
					title={theme === Theme.DARK ? "Dark mode" : "Light mode"}
					className={styles.ThemeButton}
					onClick={themeToggle}
				>
					<ICON
						name={theme === Theme.DARK ? 'moon-ellipsis-solid' : 'sun-ellipsis-solid'}
						height='28'
						width='59'
						color='none'
					/>

				</button>
			</nav>
		</header>
	);
};

export default Navbar;