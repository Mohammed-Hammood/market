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
			<nav className={(styles.Navbar)}>
				<h1 className={clsx(styles.Logo, {[styles.LogoDark]: theme === Theme.DARK })}>Market</h1>
				<button
					title={theme === Theme.DARK ? "Dark mode": "Light mode"}
					className={styles.ThemeButton}
					onClick={themeToggle}
				>
					<img src={theme === Theme.DARK ? DarkSVG: LightSVG} />
				</button>
			</nav>
		</header>
	);
};
