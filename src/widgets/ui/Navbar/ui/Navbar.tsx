import { useContext } from 'react';
import styles from './Navbar.module.scss';
import { Theme, ThemeContext } from '@/app/providers/ThemeProvider/ThemeProvider';
import DarkSVG from "@/shared/assets/icons/theme-dark.svg";
import LightSVG from "@/shared/assets/icons/theme-light.svg";
import clsx from 'clsx';

export const Navbar = (): JSX.Element => {
	const { theme, themeToggle } = useContext(ThemeContext);

	return (
		<header className={styles.Header}>
			<nav className={clsx(styles.Navbar, [theme],  {[styles.DarkTheme]: theme === Theme.DARK } )}>
				<h1 className={clsx(styles.Logo, [theme])}>Market</h1>
				<button
					className={styles.ThemeButton}
					onClick={themeToggle}
				>
					<img src={theme === Theme.DARK ? DarkSVG: LightSVG} />
				</button>
			</nav>
		</header>
	);
};
