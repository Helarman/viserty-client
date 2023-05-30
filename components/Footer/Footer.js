import Link from "next/link"
import styles from "./Fooder.module.scss"
import Logo from "../Logo/Logo"

const Vk = () => {
	return (
		<svg className={styles.contactsIcon} width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path id="vk" d="M8.38056 0.0128066C8.00129 0.0415537 7.51645 0.119581 7.32486 0.181182C6.99251 0.287957 6.58196 0.673988 6.65625 0.805403C6.67189 0.825937 6.74618 0.858791 6.82829 0.875218C7.18801 0.945032 7.48908 1.15858 7.62593 1.43784C7.85662 1.91422 7.96219 3.40906 7.83707 4.46449C7.75496 5.16263 7.71977 5.32279 7.59465 5.57741C7.27012 6.25502 6.51158 5.70061 5.68657 4.18113C5.38941 3.63493 4.56048 1.89779 4.37671 1.43373C4.14993 0.871111 4.07955 0.768443 3.8254 0.632921L3.61035 0.517933L1.9877 0.530253C0.521443 0.542573 0.353313 0.550787 0.239923 0.616494C0.0561521 0.719162 -0.0220481 0.862897 0.00532196 1.0477C0.0444221 1.37213 0.978915 3.42549 1.76483 4.91623C2.71496 6.71908 3.97007 8.59174 4.8772 9.56914C5.66702 10.4192 6.88303 11.2488 7.86444 11.6061C8.51351 11.8443 8.87323 11.9018 9.90547 11.9264C10.926 11.951 11.2192 11.9182 11.4382 11.7621C11.6141 11.6348 11.6689 11.4582 11.7041 10.912C11.7354 10.37 11.837 9.90589 11.9739 9.65949C12.099 9.44183 12.361 9.18722 12.4783 9.18311C12.8732 9.16258 13.096 9.33506 13.925 10.3125C14.7031 11.2283 14.9885 11.4952 15.4186 11.7128C15.6141 11.8073 15.8487 11.9059 15.9464 11.9305C16.181 11.988 19.3481 11.9223 19.5515 11.8607C19.7548 11.795 19.9737 11.5691 19.9777 11.4213C19.9894 11.0229 19.9464 10.8587 19.7313 10.5055C19.3912 9.94696 18.9532 9.42541 17.9562 8.38641C16.8457 7.23242 16.7714 7.12564 16.7675 6.73961C16.7675 6.41518 16.9122 6.16878 17.8858 4.81356C19.2582 2.90394 19.8056 1.97992 19.9581 1.33106C20.048 0.949138 19.9972 0.764336 19.7665 0.637028C19.5476 0.52204 19.2191 0.50972 17.1624 0.550787L15.5476 0.583641L15.4225 0.731482C15.356 0.813617 15.2231 1.08055 15.1292 1.32696C14.6405 2.60825 13.6864 4.36593 13.0374 5.17906C12.7832 5.49528 12.3883 5.81971 12.2593 5.81971C12.0755 5.81971 11.923 5.69651 11.8096 5.4501L11.7041 5.22423L11.7158 3.09285C11.7236 1.19554 11.7197 0.936818 11.6611 0.752016C11.5281 0.320811 11.36 0.193502 10.797 0.0867276C10.4646 0.0251268 8.86932 -0.0241538 8.38056 0.0128066Z" />
		</svg>
	)
}

const Tg = () => {
	const tgColor = `#ffffff`
	return (
		<svg className={styles.contactsIcon} width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path id="tg" d="M13.9907 0.0711767C12.9932 0.452774 0.685573 5.37079 0.503673 5.46238C-0.0977739 5.7585 -0.168187 6.14925 0.333507 6.41484C0.383383 6.44232 1.21367 6.71707 2.18479 7.0315L3.94805 7.60237L7.94987 4.9953C10.1532 3.56355 11.9986 2.37297 12.0514 2.35465C12.1893 2.30581 12.3067 2.30886 12.3595 2.36686C12.3976 2.40655 12.4006 2.42487 12.3683 2.48287C12.3507 2.52255 10.8867 3.90546 9.12049 5.55396C7.35429 7.20551 5.90202 8.56705 5.89615 8.58231C5.89029 8.59758 5.83161 9.42183 5.76413 10.414L5.64091 12.2151L5.77586 12.1968C5.84921 12.1876 5.96363 12.148 6.03111 12.1083C6.10153 12.0716 6.55921 11.6381 7.05504 11.1466C7.54793 10.6551 7.97041 10.243 7.99095 10.2369C8.01148 10.2278 8.79777 10.8078 9.73954 11.5252C10.6784 12.2426 11.5204 12.8623 11.6114 12.905C11.849 13.021 12.1131 13.0302 12.2862 12.9356C12.4417 12.8501 12.5913 12.6364 12.6558 12.4135C12.6793 12.3281 13.2191 9.74237 13.8499 6.66822C14.9032 1.55177 15 1.05722 15 0.791631C15 0.541303 14.9912 0.480249 14.9267 0.348979C14.8826 0.254343 14.8034 0.159707 14.7271 0.104757C14.554 -0.0204066 14.2665 -0.0356704 13.9907 0.0711767Z" />
		</svg>
	)
}

const Wa = () => {
	return (
		<svg className={styles.contactsIcon} width="16" height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
			<path id="wa" d="M7.08021 0.047138C3.38231 0.504411 0.473706 3.47669 0.0908171 7.18867C0.0337197 7.73673 0.0673064 8.77904 0.161349 9.30692C0.305772 10.1374 0.547596 10.8704 0.923767 11.6202L1.11185 11.9968L0.550955 14.0511C0.241957 15.1842 -0.00658431 16.1122 0.000133026 16.1156C0.00685037 16.1223 0.947278 15.8769 2.09258 15.5743C3.75849 15.1338 4.19175 15.0296 4.25893 15.0565C4.30595 15.0733 4.52426 15.1708 4.74593 15.2716C5.46469 15.5978 6.22039 15.813 7.0164 15.9206C7.57058 15.9945 8.54123 15.9945 9.07862 15.9206C10.8453 15.6718 12.4205 14.8917 13.6632 13.6477C14.3148 12.9987 14.7481 12.4036 15.1578 11.5933C15.5273 10.8637 15.7892 10.0668 15.937 9.22623C16.021 8.73533 16.021 7.28618 15.937 6.77175C15.7926 5.90091 15.5676 5.20491 15.188 4.43494C14.1032 2.24608 12.1014 0.685976 9.70669 0.164819C8.96107 0.00342807 7.84935 -0.0470065 7.08021 0.047138ZM9.17938 1.43913C10.1433 1.61733 10.9427 1.94012 11.732 2.468C13.0822 3.37246 14.073 4.77454 14.4659 6.32792C14.7548 7.4711 14.7313 8.76895 14.4055 9.86843C13.8748 11.6437 12.6153 13.1399 10.9628 13.9469C10.0023 14.4176 9.11556 14.6227 8.03743 14.6227C6.80144 14.6227 5.70987 14.3235 4.59144 13.6779L4.40335 13.5703L3.16736 13.8965C2.48891 14.0747 1.92465 14.2159 1.92129 14.2092C1.91458 14.2024 2.05228 13.6712 2.23029 13.0256C2.40494 12.3801 2.55272 11.8287 2.55272 11.8018C2.55608 11.7715 2.46876 11.6034 2.36128 11.4285C0.775986 8.84629 1.19246 5.44364 3.35209 3.29176C4.42686 2.22255 5.79048 1.56354 7.31532 1.37525C7.72843 1.32481 8.75619 1.3618 9.17938 1.43913Z" />
			<path id="wa" d="M4.90041 4.37454C4.70896 4.46868 4.35294 4.88897 4.20516 5.1983C3.91296 5.80352 3.91967 6.57012 4.22196 7.27621C4.59141 8.14705 5.56206 9.38437 6.51929 10.2048C7.19102 10.7797 7.75192 11.1193 8.57479 11.4421C9.41782 11.7716 9.57904 11.8086 10.1366 11.8086C10.5766 11.8086 10.6471 11.8019 10.8486 11.7245C11.1845 11.5968 11.4364 11.4387 11.6849 11.1933C11.8797 11.0016 11.92 10.9411 11.9838 10.7394C12.0611 10.4838 12.1081 10.077 12.0712 9.93579C12.0544 9.86182 11.957 9.8013 11.48 9.56257C10.6068 9.12548 10.2541 8.97417 10.1063 8.97417C9.98208 8.97417 9.96192 8.98762 9.81414 9.18263C9.47492 9.62982 9.16256 9.97614 9.08195 9.99631C8.98455 10.0198 8.79311 9.94924 8.35312 9.72733C7.63772 9.37092 7.05667 8.89011 6.55623 8.24791C6.28418 7.89823 6.039 7.50148 6.039 7.40734C6.039 7.37035 6.16663 7.17198 6.32112 6.97024C6.6234 6.57685 6.71073 6.42891 6.71073 6.31795C6.71073 6.28097 6.64356 6.09604 6.56631 5.90439C6.4857 5.7161 6.32448 5.32607 6.20693 5.04028C6.05915 4.68387 5.95839 4.4855 5.8845 4.40816L5.77702 4.30057H5.41428C5.10864 4.30057 5.02468 4.31402 4.90041 4.37454Z" />
		</svg>
	)
}
const Footer = (global) => {
	const firstColumn = global.global.data.attributes.footerFitsColumnLInks;
	const secondColumn = global.global.data.attributes.footerSecondColumnLInks;
	const thirdColumn = global.global.data.attributes.footerThirdColumnLInks;
	const firstTitle = global.global.data.attributes.firstColumnTitle;
	const secondTitle = global.global.data.attributes.secondColumnTitle;
	const thirdTitle = global.global.data.attributes.thirdColumnTitle;
	const email = global.global.data.attributes.email;
	const socialLinks = global.global.data.attributes.socialLinks;
	const phone = global.global.data.attributes.Phone;
	const copyright = global.global.data.attributes.copyrightInfo;
	const legal = global.global.data.attributes.legalInfo;

	return (
		<div className={styles.footer}>
			<div className={`container`}>

				<div className={`row`}>
					<div className={`col-xl-2 col-lg-1`}>
						<div className={styles.footerLogo}>
							<Logo />
						</div>
					</div>
					<div className={`col-xl-8 col-lg-9`}>
						<div className={styles.footerMenu}>
							<ul>
								<p>{firstTitle}</p>
								{firstColumn.map(({ id, label, link }) => (
									<Link key={id} href={link}>
										{label}
									</Link>
								))}
							</ul>
							<ul>
								<p>{secondTitle}</p>
								{secondColumn.map(({ id, label, link }) => (
									<Link key={id} href={link}>
										{label}
									</Link>
								))}
							</ul>
							<ul>
								<p>{thirdTitle}</p>
								{thirdColumn.map(({ id, label, link }) => (
									<Link key={id} href={link}>
										{label}
									</Link>
								))}
							</ul>
						</div>
					</div>
					<div className={`col-xl-2 col-lg-2`}>
						<div className={styles.contacts}>
							<ul>
								<p>Контакты</p>
								<a href={email.emailLink}>{email.email}</a>
								<a href={phone.phoneLink}>{phone.phone}</a>
								<a prefetch={false} href={`//${socialLinks.vkLink}`} >
									<Vk />
								</a>
								<a prefetch={false} href={`//${socialLinks.tgLink}`}>
									<Tg />
								</a>
								<a prefetch={false} href={`//${socialLinks.waLink}`}>
									<Wa />
								</a>
							</ul>
						</div>
					</div>
				</div>
				<div className={`row`}>
					<div className={`col-xl-12`}>
						<div className={styles.footerLine}></div>
						<div className={styles.copyright}>
							<p>{legal}</p>
							<p>{copyright}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer;