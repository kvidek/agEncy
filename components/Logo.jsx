import Link from 'next/link';
import styles from '../styles/components/Logo.module.scss';

const Logo = ({ variant }) => {
    return (
        <div className={styles['c-logo']}>
            <Link href="/">
                <a className={styles['c-logo__logo']}>
                    <svg
                        width="79"
                        height="21"
                        viewBox="0 0 79 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11.6308 16.5066H7.66633V15.9027C7.45629 16.1128 7.07998 16.3053 6.53738 16.4803C5.99479 16.6379 5.42594 16.7166 4.83084 16.7166C3.60563 16.7166 2.5817 16.3841 1.75906 15.719C0.936412 15.0363 0.525091 14.0999 0.525091 12.9097C0.525091 11.7895 0.953916 10.8881 1.81156 10.2055C2.66921 9.50538 3.7544 9.15532 5.06713 9.15532C6.18732 9.15532 7.05372 9.3741 7.66633 9.81168V9.0503C7.66633 8.64773 7.54381 8.31517 7.29877 8.05262C7.05372 7.77258 6.69491 7.63255 6.22233 7.63255C5.50471 7.63255 5.04087 7.92135 4.83084 8.49895H0.945164C1.12019 7.32625 1.68904 6.35483 2.65171 5.5847C3.63188 4.79706 4.86584 4.40324 6.3536 4.40324C8.03389 4.40324 9.32912 4.83207 10.2393 5.68971C11.1669 6.52986 11.6308 7.72007 11.6308 9.26033V16.5066ZM7.66633 13.1985V12.5159C7.38628 11.9733 6.80868 11.702 5.93353 11.702C5.47845 11.702 5.09338 11.7983 4.77833 11.9908C4.46327 12.1833 4.30575 12.4634 4.30575 12.831C4.30575 13.216 4.46327 13.5048 4.77833 13.6974C5.09338 13.8899 5.47845 13.9862 5.93353 13.9862C6.79118 13.9862 7.36878 13.7236 7.66633 13.1985ZM21.0441 15.6927V14.8526C20.3789 15.6227 19.4425 16.0078 18.2348 16.0078C16.6245 16.0078 15.3468 15.4652 14.4016 14.38C13.474 13.2773 13.0102 11.8858 13.0102 10.2055C13.0102 8.54271 13.474 7.16872 14.4016 6.08353C15.3468 4.98084 16.6245 4.4295 18.2348 4.4295C19.46 4.4295 20.3964 4.81456 21.0441 5.5847V4.69204H25.1135V14.8C25.1135 16.8129 24.5534 18.3357 23.4332 19.3683C22.3305 20.4185 20.8428 20.9436 18.9699 20.9436C17.3772 20.9436 16.0557 20.5673 15.0055 19.8147C13.9728 19.062 13.3515 18.0119 13.1414 16.6641H17.1059C17.3509 17.5043 17.9723 17.9243 18.9699 17.9243C20.3527 17.9243 21.0441 17.1805 21.0441 15.6927ZM21.0441 11.7283V8.68273C20.6415 8.01762 20.0464 7.68506 19.2587 7.68506C18.5936 7.68506 18.0598 7.92135 17.6572 8.39393C17.2721 8.84901 17.0796 9.45287 17.0796 10.2055C17.0796 10.9581 17.2721 11.5707 17.6572 12.0433C18.0423 12.4984 18.5761 12.7259 19.2587 12.7259C20.0639 12.7259 20.659 12.3934 21.0441 11.7283ZM27.4366 0.386295H38.9624V4.00942H31.5848V6.52986H38.3323V10.0742H31.5848V12.8572H38.9624V16.5066H27.4366V0.386295ZM40.946 16.5066V4.69204H45.068V5.71597C45.8381 4.85832 46.8971 4.4295 48.2448 4.4295C49.54 4.4295 50.5552 4.82331 51.2903 5.61095C52.043 6.38108 52.4193 7.43127 52.4193 8.7615V16.5066H48.3236V9.75917C48.3236 9.25158 48.1923 8.84901 47.9297 8.55146C47.6672 8.23641 47.2821 8.07888 46.7745 8.07888C46.3545 8.07888 45.9869 8.19265 45.6718 8.42019C45.3743 8.64773 45.173 8.96278 45.068 9.36535V16.5066H40.946ZM55.5844 15.0626C54.4817 13.9074 53.9303 12.4196 53.9303 10.5993C53.9303 8.779 54.4817 7.29999 55.5844 6.1623C56.6871 5.0071 58.1223 4.4295 59.8901 4.4295C61.4479 4.4295 62.7081 4.84957 63.6708 5.68971C64.6335 6.52986 65.2023 7.65881 65.3773 9.07655H61.3866C61.3341 8.70899 61.1679 8.41144 60.8878 8.1839C60.6253 7.95636 60.2927 7.84259 59.8901 7.84259C59.3125 7.84259 58.8487 8.09638 58.4986 8.60397C58.1661 9.09406 57.9998 9.75917 57.9998 10.5993C57.9998 11.4395 58.1661 12.1046 58.4986 12.5947C58.8487 13.0847 59.3125 13.3298 59.8901 13.3298C60.3102 13.3298 60.6515 13.2248 60.9141 13.0147C61.1766 12.7872 61.3341 12.4896 61.3866 12.1221H65.3773C65.2023 13.5223 64.6335 14.6513 63.6708 15.5089C62.7081 16.3491 61.4479 16.7691 59.8901 16.7691C58.1223 16.7691 56.6871 16.2003 55.5844 15.0626ZM72.4138 20.6811H68.3443L70.0771 16.2178L65.6663 4.69204H69.9458L72.2037 11.4132L74.4091 4.69204H78.5048L72.4138 20.6811Z"
                            fill={variant === 'dark' ? '#161617' : '#ffffff'}
                        />
                    </svg>
                </a>
            </Link>
        </div>
    );
};

export default Logo;
