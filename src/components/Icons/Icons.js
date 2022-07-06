export const BarsIcon = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path fillRule="evenodd" clipRule="evenodd" d="M21,6H3V5h18V6z M21,11H3v1h18V11z M21,17H3v1h18V17z"></path>
    </svg>
);

export const ArrowDownSolidIcon = ({ width = '2rem', height = '2rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path fillRule="evenodd" clipRule="evenodd" d="M18,9l-6,6L6,9H18z"></path>
    </svg>
);

export const ArrowUpSolidIcon = ({ width = '2rem', height = '2rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path fillRule="evenodd" clipRule="evenodd" d="M18,15H6l6-6L18,15z"></path>
    </svg>
);

export const SearchIcon = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"
        ></path>
    </svg>
);

export const CloseIcon = ({ width = '2rem', height = '2rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.7,12l6.6,6.6l-0.7,0.7L12,12.7l-6.6,6.6l-0.7-0.7l6.6-6.6L4.6,5.4l0.7-0.7l6.6,6.6l6.6-6.6l0.7,0.7L12.7,12z"
        ></path>
    </svg>
);

export const MicroPhoneIcon = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 3C10.34 3 9 4.37 9 6.07V11.93C9 13.63 10.34 15 12 15C13.66 15 15 13.63 15 11.93V6.07C15 4.37 13.66 3 12 3ZM18.5 12H17.5C17.5 15.03 15.03 17.5 12 17.5C8.97 17.5 6.5 15.03 6.5 12H5.5C5.5 15.24 7.89 17.93 11 18.41V21H13V18.41C16.11 17.93 18.5 15.24 18.5 12Z"
        ></path>
    </svg>
);

export const AppsIcon = ({ width = '2.4rem', height = '2.4rem', className, solidIcon }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        {solidIcon ? (
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16,4v4h4V4H16z M16,10v4h4v-4H16z M10,4v4h4V4H10z M10,10v4h4v-4H10z M16,16v4h4v-4H16z M10,16v4h4v-4H10z M4,4v4h4V4H4z M4,10v4h4v-4H4z M4,16v4h4v-4H4z"
            ></path>
        ) : (
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16,4v4h4V4H16z M19,7h-2V5h2V7z M16,10v4h4v-4H16z M19,13h-2v-2h2V13z M10,4v4h4V4H10z M13,7h-2V5h2V7z M10,10v4h4v-4H10z M13,13h-2v-2h2V13z M16,16v4h4v-4H16z M19,19h-2v-2h2V19z M10,16v4h4v-4H10z M13,19h-2v-2h2V19z M4,4v4h4V4H4z M7,7H5V5h2V7z M4,10 v4h4v-4H4z M7,13H5v-2h2V13z M4,16v4h4v-4H4z M7,19H5v-2h2V19z"
            ></path>
        )}
    </svg>
);

export const CreateIcon = ({ width = '2.4rem', height = '2.4rem', className, solidIcon }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        {solidIcon ? (
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18,8.83V5H2v14h16v-5.83L22,15V7L18,8.83z M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z"
            ></path>
        ) : (
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14,13h-3v3H9v-3H6v-2h3V8h2v3h3V13z M17,6H3v12h14v-6.39l4,1.83V8.56l-4,1.83V6 M18,5v3.83L22,7v8l-4-1.83V19H2V5H18L18,5 z"
            ></path>
        )}
    </svg>
);

export const NotifyIcon = ({ width = '2.4rem', height = '2.4rem', className, solidIcon }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        {solidIcon ? (
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96	c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z"
            ></path>
        ) : (
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10,20h4c0,1.1-0.9,2-2,2S10,21.1,10,20z M20,17.35V19H4v-1.65l2-1.88v-5.15c0-2.92,1.56-5.22,4-5.98V3.96 c0-1.42,1.49-2.5,2.99-1.76C13.64,2.52,14,3.23,14,3.96l0,0.39c2.44,0.75,4,3.06,4,5.98v5.15L20,17.35z M19,17.77l-2-1.88v-5.47 c0-2.47-1.19-4.36-3.13-5.1c-1.26-0.53-2.64-0.5-3.84,0.03C8.15,6.11,7,7.99,7,10.42v5.47l-2,1.88V18h14V17.77z"
            ></path>
        )}
    </svg>
);

export const MenuIcon = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z"
        ></path>
    </svg>
);

export const UserIcon = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,3c4.96,0,9,4.04,9,9 c0,1.42-0.34,2.76-0.93,3.96c-1.53-1.72-3.98-2.89-7.38-3.03C14.57,12.6,16,10.97,16,9c0-2.21-1.79-4-4-4C9.79,5,8,6.79,8,9 c0,1.97,1.43,3.6,3.31,3.93c-3.4,0.14-5.85,1.31-7.38,3.03C3.34,14.76,3,13.42,3,12C3,7.04,7.04,3,12,3z M9,9c0-1.65,1.35-3,3-3 s3,1.35,3,3c0,1.65-1.35,3-3,3S9,10.65,9,9z M12,21c-3.16,0-5.94-1.64-7.55-4.12C6.01,14.93,8.61,13.9,12,13.9 c3.39,0,5.99,1.03,7.55,2.98C17.94,19.36,15.16,21,12,21z"
        ></path>
    </svg>
);

export const SearchedIcon = ({ width = '2rem', height = '2rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 20 20"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.475 14.1253L8.3333 11.5587V5.83366H9.99997V10.6337L13.3583 12.7087L12.475 14.1253ZM18.3333 10.0003C18.3333 14.592 14.5916 18.3337 9.99997 18.3337C5.4083 18.3337 1.66663 14.592 1.66663 10.0003H2.49997C2.49997 14.1337 5.86663 17.5003 9.99997 17.5003C14.1333 17.5003 17.5 14.1337 17.5 10.0003C17.5 5.86699 14.1333 2.50033 9.99997 2.50033C7.34163 2.50033 4.9333 3.86699 3.56663 6.15033C3.47497 6.30033 3.3833 6.45866 3.3083 6.61699C3.29997 6.63366 3.29163 6.65033 3.2833 6.66699H6.66663V7.50033H1.6333V2.50033H2.46663V6.45033C2.49997 6.37533 2.52497 6.30866 2.5583 6.24199C2.64997 6.05866 2.74997 5.89199 2.84997 5.71699C4.34997 3.21699 7.09163 1.66699 9.99997 1.66699C14.5916 1.66699 18.3333 5.40866 18.3333 10.0003Z"
        />
    </svg>
);

export const ThemeIcon = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 22C10.93 22 9.86998 21.83 8.83998 21.48L7.41998 21.01L8.83998 20.54C12.53 19.31 15 15.88 15 12C15 8.12 12.53 4.69 8.83998 3.47L7.41998 2.99L8.83998 2.52C9.86998 2.17 10.93 2 12 2C17.51 2 22 6.49 22 12C22 17.51 17.51 22 12 22ZM10.58 20.89C11.05 20.96 11.53 21 12 21C16.96 21 21 16.96 21 12C21 7.04 16.96 3 12 3C11.53 3 11.05 3.04 10.58 3.11C13.88 4.81 16 8.21 16 12C16 15.79 13.88 19.19 10.58 20.89Z"
        ></path>
    </svg>
);

export const LanguageIcon = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.26,16.18l-2.93-2.87c-0.8,0.86-1.64,1.71-2.48,2.54L4.6,18.1L3.9,17.4l2.25-2.25c0.84-0.84,1.68-1.69,2.48-2.55 c-1.18-1.23-2.17-2.64-2.9-4.18L5.73,8.4h1.14c0.65,1.26,1.47,2.43,2.44,3.45c1.59-1.81,2.89-3.69,3.43-5.7H2.08v-1h6.65V3h1v2.15 h6.78v1h-2.73c-0.54,2.32-2.01,4.42-3.77,6.42l2.63,2.58C12.51,15.5,12.39,15.82,12.26,16.18z M21.51,21.01h-0.95l-1.12-3.04h-4.91 l-1.11,3.04h-0.96l4.09-10.81h0.87L21.51,21.01z M19.15,17.2l-2.17-5.89l-2.17,5.89H19.15z"
        ></path>
    </svg>
);

export const LocationIcon = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.99,1.98C6.46,1.98,1.98,6.47,1.98,12s4.48,10.02,10.01,10.02c5.54,0,10.03-4.49,10.03-10.02S17.53,1.98,11.99,1.98z M8.86,14.5c-0.16-0.82-0.25-1.65-0.25-2.5c0-0.87,0.09-1.72,0.26-2.55h6.27c0.17,0.83,0.26,1.68,0.26,2.55 c0,0.85-0.09,1.68-0.25,2.5H8.86z M14.89,15.5c-0.54,1.89-1.52,3.64-2.89,5.15c-1.37-1.5-2.35-3.25-2.89-5.15H14.89z M9.12,8.45 c0.54-1.87,1.52-3.61,2.88-5.1c1.36,1.49,2.34,3.22,2.88,5.1H9.12z M16.15,9.45h4.5c0.24,0.81,0.37,1.66,0.37,2.55 c0,0.87-0.13,1.71-0.36,2.5h-4.51c0.15-0.82,0.24-1.65,0.24-2.5C16.39,11.13,16.3,10.28,16.15,9.45z M20.29,8.45h-4.38 c-0.53-1.97-1.47-3.81-2.83-5.4C16.33,3.45,19.04,5.56,20.29,8.45z M10.92,3.05c-1.35,1.59-2.3,3.43-2.83,5.4H3.71 C4.95,5.55,7.67,3.44,10.92,3.05z M3.35,9.45h4.5C7.7,10.28,7.61,11.13,7.61,12c0,0.85,0.09,1.68,0.24,2.5H3.34 c-0.23-0.79-0.36-1.63-0.36-2.5C2.98,11.11,3.11,10.26,3.35,9.45z M3.69,15.5h4.39c0.52,1.99,1.48,3.85,2.84,5.45 C7.65,20.56,4.92,18.42,3.69,15.5z M13.09,20.95c1.36-1.6,2.32-3.46,2.84-5.45h4.39C19.08,18.42,16.35,20.55,13.09,20.95z"
        ></path>
    </svg>
);

export const SettingsIcon = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,8c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4 S14.21,8,12,8L12,8z M13.22,3l0.55,2.2l0.13,0.51l0.5,0.18c0.61,0.23,1.19,0.56,1.72,0.98l0.4,0.32l0.5-0.14l2.17-0.62l1.22,2.11 l-1.63,1.59l-0.37,0.36l0.08,0.51c0.05,0.32,0.08,0.64,0.08,0.98s-0.03,0.66-0.08,0.98l-0.08,0.51l0.37,0.36l1.63,1.59l-1.22,2.11 l-2.17-0.62l-0.5-0.14l-0.4,0.32c-0.53,0.43-1.11,0.76-1.72,0.98l-0.5,0.18l-0.13,0.51L13.22,21h-2.44l-0.55-2.2l-0.13-0.51 l-0.5-0.18C9,17.88,8.42,17.55,7.88,17.12l-0.4-0.32l-0.5,0.14l-2.17,0.62L3.6,15.44l1.63-1.59l0.37-0.36l-0.08-0.51 C5.47,12.66,5.44,12.33,5.44,12s0.03-0.66,0.08-0.98l0.08-0.51l-0.37-0.36L3.6,8.56l1.22-2.11l2.17,0.62l0.5,0.14l0.4-0.32 C8.42,6.45,9,6.12,9.61,5.9l0.5-0.18l0.13-0.51L10.78,3H13.22 M14,2h-4L9.26,4.96c-0.73,0.27-1.4,0.66-2,1.14L4.34,5.27l-2,3.46 l2.19,2.13C4.47,11.23,4.44,11.61,4.44,12s0.03,0.77,0.09,1.14l-2.19,2.13l2,3.46l2.92-0.83c0.6,0.48,1.27,0.87,2,1.14L10,22h4 l0.74-2.96c0.73-0.27,1.4-0.66,2-1.14l2.92,0.83l2-3.46l-2.19-2.13c0.06-0.37,0.09-0.75,0.09-1.14s-0.03-0.77-0.09-1.14l2.19-2.13 l-2-3.46L16.74,6.1c-0.6-0.48-1.27-0.87-2-1.14L14,2L14,2z"
        ></path>
    </svg>
);

export const DataIcon = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12,3.06l7,3.21v4.84c0,1.3-0.25,2.6-0.75,3.86c-0.15,0.37-0.33,0.76-0.55,1.17c-0.15,0.27-0.31,0.54-0.48,0.81 c-1.32,2.01-3.17,3.42-5.23,3.98c-2.06-0.56-3.91-1.97-5.23-3.98c-0.17-0.27-0.33-0.54-0.48-0.81c-0.22-0.41-0.4-0.79-0.55-1.17 C5.25,13.71,5,12.41,5,11.11V6.27L12,3.06 M12,1.96L4,5.63v5.49c0,1.47,0.3,2.9,0.81,4.22c0.17,0.44,0.37,0.86,0.6,1.28 c0.16,0.3,0.34,0.6,0.52,0.88c1.42,2.17,3.52,3.82,5.95,4.44L12,21.96l0.12-0.03c2.43-0.61,4.53-2.26,5.95-4.43 c0.19-0.29,0.36-0.58,0.52-0.88c0.22-0.41,0.43-0.84,0.6-1.28C19.7,14.01,20,12.58,20,11.11V5.63L12,1.96L12,1.96z M13.08,12.11 c-0.32-0.06-0.64-0.11-0.96-0.12C13.72,11.92,15,10.62,15,9c0-1.66-1.34-3-3-3S9,7.34,9,9c0,1.62,1.28,2.92,2.88,2.99 c-0.32,0.01-0.64,0.06-0.96,0.12h0C8.64,12.58,7,14.62,7,17h10C17,14.62,15.36,12.58,13.08,12.11z M10,9c0-1.1,0.9-2,2-2s2,0.9,2,2 s-0.9,2-2,2S10,10.1,10,9z M11.12,13.09c0.37-0.08,0.64-0.11,0.88-0.11s0.51,0.03,0.88,0.11c1.48,0.3,2.63,1.46,3,2.91H8.12 C8.49,14.55,9.64,13.39,11.12,13.09z"
        ></path>
    </svg>
);

export const HelpIcon = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.36,9.96c0,1.09-0.67,1.67-1.31,2.24c-0.53,0.47-1.03,0.9-1.16,1.6L12.85,14h-1.75l0.03-0.28 c0.14-1.17,0.8-1.76,1.47-2.27c0.52-0.4,1.01-0.77,1.01-1.49c0-0.51-0.23-0.97-0.63-1.29c-0.4-0.31-0.92-0.42-1.42-0.29 c-0.59,0.15-1.05,0.67-1.19,1.34L10.32,10H8.57l0.06-0.42c0.2-1.4,1.15-2.53,2.42-2.87c1.05-0.29,2.14-0.08,2.98,0.57 C14.88,7.92,15.36,8.9,15.36,9.96z M12,18c0.55,0,1-0.45,1-1s-0.45-1-1-1s-1,0.45-1,1S11.45,18,12,18z M12,3c-4.96,0-9,4.04-9,9 s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z"
        ></path>
    </svg>
);

export const FeedbackIcon = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13,14h-2v-2h2V14z M13,5h-2v6h2V5z M19,3H5v16.59l3.29-3.29L8.59,16H9h10V3 M20,2v15H9l-5,5V2H20L20,2z"
        ></path>
    </svg>
);

export const KeyboardIcon = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16,16H8v-2h8V16z M16,11h-2v2h2V11z M19,11h-2v2h2V11z M13,11h-2v2h2V11z M10,11H8v2h2V11z M7,11H5v2h2V11z M16,8h-2v2h2V8 z M19,8h-2v2h2V8z M13,8h-2v2h2V8z M10,8H8v2h2V8z M7,8H5v2h2V8z M22,5v14H2V5H22z M21,6H3v12h18V6z"
        ></path>
    </svg>
);

export const YoutubeTvIcon = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
    >
        <g>
            <path
                fill="#FF0000"
                d="M6,18h12v1H6V18z M22,6.2v9.6c0,0.66-0.54,1.2-1.2,1.2H3.2C2.54,17,2,16.46,2,15.8V6.2C2,5.54,2.54,5,3.2,5 h17.6C21.46,5,22,5.54,22,6.2z"
            ></path>
            <polygon fill="#FFFFFF" points="15,11 10,8.35 10,13.65 "></polygon>
        </g>
    </svg>
);

export const YoutubeMusicIcon = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
    >
        <g>
            <circle fill="#FF0000" cx="12" cy="12" r="10"></circle>
            <polygon fill="#FFFFFF" points="10,14.65 10,9.35 15,12 "></polygon>
            <path
                fill="#FFFFFF"
                d="M12,7c2.76,0,5,2.24,5,5s-2.24,5-5,5s-5-2.24-5-5S9.24,7,12,7 M12,6c-3.31,0-6,2.69-6,6s2.69,6,6,6s6-2.69,6-6 S15.31,6,12,6L12,6z"
            ></path>
        </g>
    </svg>
);

export const YoutubeKidsIcon = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
    >
        <g>
            <path
                fill="#FF0000"
                d="M21.39,13.19c0-0.08,0-0.15,0-0.22c-0.01-0.86-0.5-5-0.78-5.74c-0.32-0.85-0.76-1.5-1.31-1.91 c-0.9-0.67-1.66-0.82-2.6-0.84l-0.02,0c-0.4,0-3.01,0.32-5.2,0.62C9.28,5.4,6.53,5.8,5.88,6.04c-0.9,0.33-1.62,0.77-2.19,1.33 c-1.05,1.04-1.18,2.11-1.04,3.51c0.1,1.09,0.69,5.37,1.02,6.35c0.45,1.32,1.33,2.12,2.47,2.24c0.28,0.03,0.55,0.05,0.82,0.05 c1,0,1.8-0.21,2.72-0.46c1.45-0.39,3.25-0.87,6.97-0.87l0.09,0h0.02c0.91,0,3.14-0.2,4.16-2.07C21.44,15.12,21.41,13.91,21.39,13.19 z"
            ></path>
            <path
                fill="#000"
                d="M21.99,13.26c0-0.08,0-0.16-0.01-0.24c-0.01-0.92-0.54-5.32-0.83-6.11c-0.34-0.91-0.81-1.59-1.4-2.03 C18.81,4.17,17.99,4.02,17,4l-0.02,0c-0.43,0-3.21,0.34-5.54,0.66c-2.33,0.32-5.25,0.75-5.95,1C4.53,6.01,3.76,6.48,3.16,7.08 c-1.12,1.1-1.25,2.25-1.11,3.74c0.11,1.16,0.73,5.71,1.08,6.75c0.48,1.41,1.41,2.25,2.63,2.38C6.06,19.98,6.34,20,6.63,20 c1.07,0,1.91-0.23,2.89-0.49c1.54-0.41,3.46-0.93,7.41-0.93l0.1,0h0.02c0.97,0,3.34-0.21,4.42-2.2 C22.04,15.32,22.01,14.03,21.99,13.26z M20.59,15.91c-0.82,1.51-2.75,1.68-3.56,1.68l-0.1,0c-4.09,0-6.07,0.53-7.67,0.96 C8.31,18.8,7.56,19,6.63,19c-0.25,0-0.5-0.01-0.76-0.04c-1.04-0.11-1.54-0.99-1.79-1.71c-0.3-0.88-0.91-5.21-1.04-6.53 C2.9,9.25,3.1,8.54,3.86,7.79c0.5-0.5,1.15-0.89,1.97-1.19c0.17-0.06,1.1-0.32,5.74-0.95C14.2,5.29,16.64,5.01,16.99,5 c0.83,0.02,1.43,0.13,2.17,0.69c0.43,0.32,0.79,0.86,1.06,1.58c0.22,0.58,0.76,4.78,0.77,5.77l0.01,0.25 C21.01,13.96,21.04,15.08,20.59,15.91z"
            ></path>
            <path
                fill="#000"
                d="M11.59,14.76c-0.48,0.36-0.8,0.45-1.01,0.45c-0.16,0-0.25-0.05-0.3-0.08c-0.34-0.18-0.42-0.61-0.5-1.2l-0.01-0.1 c-0.04-0.31-0.26-2.1-0.38-3.16L9.3,9.94C9.26,9.66,9.2,9.19,9.54,8.94c0.32-0.23,0.75-0.09,0.96-0.03c0.53,0.17,3.6,1.23,4.59,1.73 c0.21,0.09,0.67,0.28,0.68,0.83c0.01,0.5-0.38,0.74-0.53,0.82L11.59,14.76z"
            ></path>
            <path
                fill="#FFF"
                d="M10.3,9.89c0,0,0.5,4.08,0.51,4.19c0.06-0.04,3.79-2.58,3.79-2.58C13.71,11.07,11.07,10.14,10.3,9.89z"
            ></path>
        </g>
    </svg>
);

export const YoutubeArtistsIcon = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        viewBox="0 0 24 24"
        preserveAspectRatio="xMidYMid meet"
        focusable="false"
        className={className}
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
    >
        <g>
            <defs>
                <radialGradient
                    cx="5.4%"
                    cy="7.11%"
                    r="107.93%"
                    fx="5.4%"
                    fy="7.11%"
                    gradientTransform="matrix(.70653 0 0 1 .016 0)"
                >
                    <stop offset="0%" stopColor="#FFF"></stop>
                    <stop offset="100%" stopColor="#FFF" stopOpacity="0"></stop>
                </radialGradient>
            </defs>
            <g fill="none" fillRule="evenodd">
                <path d="M1 1h21.77v22H1z"></path>
                <g fillRule="nonzero">
                    <path
                        fill="#F00"
                        d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v1.66c.04 1.78.26 3.55.26 3.55s.2 1.5.86 2.18c.83.87 1.9.84 2.4.94 1.7.15 7.2.2 7.38.2 0 0 4.57 0 7.6-.22.43-.05 1.35-.06 2.18-.93.65-.67.86-2.18.86-2.18s.22-1.77.24-3.55v-1.66c-.02-1.78-.24-3.55-.24-3.55z"
                    ></path>
                    <path fill="#FAFAFA" d="M9.68 8.9v6.18l5.84-3.1"></path>
                    <path fill="#000" fillOpacity=".12" d="M9.68 8.88l5.13 3.48.73-.38"></path>
                    <path
                        fill="#FFF"
                        fillOpacity=".2"
                        d="M22.54 7.6s-.2-1.5-.86-2.17c-.83-.87-1.75-.88-2.18-.93-3.04-.22-7.6-.2-7.6-.2s-4.56-.02-7.6.2c-.43.05-1.35.06-2.18.93-.65.67-.86 2.18-.86 2.18S1.04 9.4 1 11.18v.1c.04-1.76.26-3.54.26-3.54s.2-1.5.86-2.17c.83-.88 1.75-.88 2.18-.93 3.04-.22 7.6-.2 7.6-.2s4.56-.02 7.6.2c.43.05 1.35.05 2.18.93.65.66.86 2.17.86 2.17s.22 1.78.23 3.55v-.1c0-1.8-.23-3.56-.23-3.56z"
                    ></path>
                    <path
                        fill="#3E2723"
                        fillOpacity=".2"
                        d="M22.54 16.4s-.2 1.5-.86 2.17c-.83.87-1.75.88-2.18.93-3.04.22-7.6.2-7.6.2s-4.56.02-7.6-.2c-.43-.05-1.35-.06-2.18-.93-.65-.67-.86-2.18-.86-2.18s-.22-1.8-.26-3.57v-.1c.04 1.76.26 3.54.26 3.54s.2 1.5.86 2.17c.83.88 1.75.88 2.18.93 3.04.22 7.6.2 7.6.2s4.56.02 7.6-.2c.43-.05 1.35-.05 2.18-.93.65-.66.86-2.17.86-2.17s.22-1.78.23-3.55v.1c0 1.8-.23 3.56-.23 3.56z"
                    ></path>
                    <path fill="#FFF" fillOpacity=".2" d="M9.68 15.08v.1l5.84-3.08v-.12"></path>
                    <path fill="#3E2723" fillOpacity=".2" d="M9.68 8.9v-.13l5.84 3.1v.1"></path>
                    <path
                        fill="url(#youtube_round__a)"
                        fillOpacity=".1"
                        d="M21.54 3.4s-.2-1.5-.86-2.18C19.85.35 18.93.35 18.5.3 15.46.07 10.9.1 10.9.1S6.34.07 3.3.3c-.43.05-1.35.05-2.18.92C.47 1.9.26 3.4.26 3.4S.04 5.17 0 6.95V8.6c.04 1.8.26 3.56.26 3.56s.2 1.52.86 2.18c.83.87 1.9.85 2.4.94 1.7.16 7.2.2 7.38.2 0 0 4.57 0 7.6-.2.43-.06 1.35-.07 2.18-.94.65-.66.86-2.18.86-2.18s.22-1.77.24-3.55V6.97c-.02-1.78-.24-3.55-.24-3.55z"
                        transform="translate(1 4.208)"
                    ></path>
                </g>
            </g>
        </g>
    </svg>
);

export const ChannelIcon = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3,3v18h18V3H3z M4.99,20c0.39-2.62,2.38-5.1,7.01-5.1s6.62,2.48,7.01,5.1H4.99z M9,10c0-1.65,1.35-3,3-3s3,1.35,3,3 c0,1.65-1.35,3-3,3S9,11.65,9,10z M12.72,13.93C14.58,13.59,16,11.96,16,10c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4 c0,1.96,1.42,3.59,3.28,3.93c-4.42,0.25-6.84,2.8-7.28,6V4h16v15.93C19.56,16.73,17.14,14.18,12.72,13.93z"
        ></path>
    </svg>
);

export const PurchasesIcon = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12,3c4.96,0,9,4.04,9,9s-4.04,9-9,9s-9-4.04-9-9S7.04,3,12,3 M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10 S17.52,2,12,2L12,2z M12.45,10.95c-0.67-0.22-1.18-0.47-1.52-0.72c-0.34-0.26-0.52-0.57-0.52-0.95c0-0.41,0.15-0.73,0.44-0.98 c0.29-0.25,0.71-0.37,1.24-0.37c0.55,0,1.23,0.15,1.53,0.44C13.8,8.53,13.93,8.75,14,9h2c-0.07-0.46-0.26-0.88-0.49-1.27 c-0.33-0.55-0.78-0.98-1.37-1.28C13.79,6.27,13.41,6.17,13,6.09V5h-2v1.12c-0.31,0.07-0.62,0.16-0.9,0.29 C9.5,6.7,9.04,7.08,8.72,7.58C8.4,8.07,8.24,8.63,8.24,9.26c0,1.21,0.6,2.18,1.8,2.9c0.44,0.26,1.04,0.53,1.79,0.8 c0.75,0.27,1.27,0.53,1.56,0.77c0.29,0.24,0.43,0.59,0.43,1.05c0,0.42-0.14,0.74-0.43,0.97c-0.29,0.23-0.69,0.35-1.21,0.35 c-1.05,0-1.92-0.37-2.18-1.1H8c0.08,0.42,0.22,0.81,0.44,1.16c0.35,0.57,0.86,1.02,1.52,1.35c0.33,0.16,0.67,0.28,1.04,0.37V19h2 v-1.05c0.79-0.11,1.45-0.38,1.97-0.81c0.69-0.57,1.03-1.37,1.03-2.38c0-0.91-0.28-1.67-0.85-2.28S13.69,11.36,12.45,10.95z"
        ></path>
    </svg>
);

export const YtStudioIcon = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10,9l5.2,3L10,15V9z M13.22,3h-2.44l-0.55,2.2L10.1,5.71L9.61,5.9C9,6.12,8.42,6.45,7.88,6.88L7.48,7.2l-0.5-0.14 L4.82,6.44L3.6,8.56l1.63,1.59l0.37,0.36l-0.08,0.51C5.47,11.34,5.44,11.67,5.44,12s0.03,0.66,0.08,0.98l0.08,0.51l-0.37,0.36 L3.6,15.44l1.22,2.11l2.17-0.62l0.5-0.14l0.4,0.32C8.42,17.55,9,17.88,9.61,18.1l0.5,0.18l0.13,0.51l0.55,2.2h2.44l0.55-2.2 l0.13-0.51l0.5-0.18c0.61-0.23,1.19-0.56,1.72-0.98l0.4-0.32l0.5,0.14l2.17,0.62l1.22-2.11l-1.63-1.59l-0.37-0.36l0.08-0.51 c0.05-0.32,0.08-0.64,0.08-0.98s-0.03-0.66-0.08-0.98l-0.08-0.51l0.37-0.36l1.63-1.59l-1.22-2.11l-2.17,0.62l-0.5,0.14l-0.4-0.32 C15.58,6.45,15,6.12,14.39,5.9l-0.5-0.18L13.77,5.2L13.22,3 M14,2l0.74,2.96c0.73,0.27,1.4,0.66,2,1.14l2.92-0.83l2,3.46l-2.19,2.13 c0.06,0.37,0.09,0.75,0.09,1.14s-0.03,0.77-0.09,1.14l2.19,2.13l-2,3.46l-2.92-0.83c-0.6,0.48-1.27,0.87-2,1.14L14,22h-4l-0.74-2.96 c-0.73-0.27-1.4-0.66-2-1.14l-2.92,0.83l-2-3.46l2.19-2.13C4.47,12.77,4.44,12.39,4.44,12s0.03-0.77,0.09-1.14L2.34,8.73l2-3.46 L7.26,6.1c0.6-0.48,1.27-0.87,2-1.14L10,2H14L14,2z"
        ></path>
    </svg>
);

export const AccountIcon = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4,20h14v1H3V6h1V20z M6,3v15h15V3H6z M8.02,17c0.36-2.13,1.93-4.1,5.48-4.1s5.12,1.97,5.48,4.1H8.02z M11,8.5 C11,7.12,12.12,6,13.5,6S16,7.12,16,8.5c0,1.38-1.12,2.5-2.5,2.5S11,9.88,11,8.5z M14.21,11.93C15.8,11.6,17,10.19,17,8.5 C17,6.57,15.43,5,13.5,5S10,6.57,10,8.5c0,1.69,1.2,3.1,2.79,3.43c-3.48,0.26-5.4,2.42-5.78,5.07H7V4h13v13h-0.01 C19.61,14.35,17.68,12.19,14.21,11.93z"
        ></path>
    </svg>
);

export const SignOutIcon = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20,3v18H8v-1h11V4H8V3H20z M11.1,15.1l0.7,0.7l4.4-4.4l-4.4-4.4l-0.7,0.7l3.1,3.1H3v1h11.3L11.1,15.1z"
        ></path>
    </svg>
);

export const UploadIcon = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path fillRule="evenodd" clipRule="evenodd" d="M10,8l6,4l-6,4V8L10,8z M21,3v18H3V3H21z M20,4H4v16h16V4z"></path>
    </svg>
);

export const LiveIcon = ({ width = '2.4rem', height = '2.4rem', className, solidIcon }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        {solidIcon ? (
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14,12c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2S14,10.9,14,12z M6.36,6.33L4.95,4.92C3.13,6.73,2,9.24,2,12 s1.13,5.27,2.95,7.08l1.41-1.41C4.9,16.22,4,14.21,4,12S4.9,7.78,6.36,6.33z M19.05,4.92l-1.41,1.41C19.1,7.78,20,9.79,20,12 s-0.9,4.22-2.36,5.67l1.41,1.41C20.87,17.27,22,14.76,22,12S20.87,6.73,19.05,4.92z M9.19,9.16L7.77,7.75C6.68,8.83,6,10.34,6,12 s0.68,3.17,1.77,4.25l1.41-1.41C8.46,14.11,8,13.11,8,12S8.46,9.89,9.19,9.16z M16.23,7.75l-1.41,1.41C15.54,9.89,16,10.89,16,12 s-0.46,2.11-1.19,2.84l1.41,1.41C17.32,15.17,18,13.66,18,12S17.32,8.83,16.23,7.75z"
            ></path>
        ) : (
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14,12c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2S14,10.9,14,12z M8.48,8.45L7.77,7.75C6.68,8.83,6,10.34,6,12 s0.68,3.17,1.77,4.25l0.71-0.71C7.57,14.64,7,13.39,7,12S7.57,9.36,8.48,8.45z M16.23,7.75l-0.71,0.71C16.43,9.36,17,10.61,17,12 s-0.57,2.64-1.48,3.55l0.71,0.71C17.32,15.17,18,13.66,18,12S17.32,8.83,16.23,7.75z M5.65,5.63L4.95,4.92C3.13,6.73,2,9.24,2,12 s1.13,5.27,2.95,7.08l0.71-0.71C4.02,16.74,3,14.49,3,12S4.02,7.26,5.65,5.63z M19.05,4.92l-0.71,0.71C19.98,7.26,21,9.51,21,12 s-1.02,4.74-2.65,6.37l0.71,0.71C20.87,17.27,22,14.76,22,12S20.87,6.73,19.05,4.92z"
            ></path>
        )}
    </svg>
);

export const ArrowLeftIcon = ({ width = '1.6rem', height = '1.6rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.15,13.35L4.79,8l5.35-5.35l0.71,0.71L6.21,8l4.65,4.65L10.15,13.35z"
        ></path>
    </svg>
);

export const ArrowRightIcon = ({ width = '1.6rem', height = '1.6rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.97,12.65L9.62,8L4.97,3.35l0.71-0.71L11.03,8l-5.35,5.35L4.97,12.65z"
        ></path>
    </svg>
);

export const ArrowIcon = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z"
        ></path>
    </svg>
);

export const BackIcon = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21,11v1H5.64l6.72,6.72l-0.71,0.71L3.72,11.5l7.92-7.92l0.71,0.71L5.64,11H21z"
        ></path>
    </svg>
);

export const CheckIcon = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path fillRule="evenodd" clipRule="evenodd" d="M9,18.7l-5.4-5.4l0.7-0.7L9,17.3L20.6,5.6l0.7,0.7L9,18.7z"></path>
    </svg>
);

export const HomeIcon = ({ width = '2.4rem', height = '2.4rem', className, solidIcon }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        {solidIcon ? (
            <path fillRule="evenodd" clipRule="evenodd" d="M4,10V21h6V15h4v6h6V10L12,3Z"></path>
        ) : (
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12,4.33l7,6.12V20H15V14H9v6H5V10.45l7-6.12M12,3,4,10V21h6V15h4v6h6V10L12,3Z"
            ></path>
        )}
    </svg>
);

export const ExploreIcon = ({ width = '2.4rem', height = '2.4rem', className, solidIcon }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        {solidIcon ? (
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.23,13.08c-0.29-0.21-0.48-0.51-0.54-0.86c-0.06-0.35,0.02-0.71,0.23-0.99c0.21-0.29,0.51-0.48,0.86-0.54 c0.35-0.06,0.7,0.02,0.99,0.23c0.29,0.21,0.48,0.51,0.54,0.86c0.06,0.35-0.02,0.71-0.23,0.99c-0.21,0.29-0.51,0.48-0.86,0.54 c-0.07,0.01-0.15,0.02-0.22,0.02C11.72,13.33,11.45,13.25,11.23,13.08z M22,12c0,5.52-4.48,10-10,10S2,17.52,2,12 C2,6.48,6.48,2,12,2S22,6.48,22,12z M18.03,5.97L9.8,9.8l-3.83,8.23l8.23-3.83L18.03,5.97z"
            ></path>
        ) : (
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.8,9.8l-3.83,8.23l8.23-3.83l3.83-8.23L9.8,9.8z M13.08,12.77c-0.21,0.29-0.51,0.48-0.86,0.54 c-0.07,0.01-0.15,0.02-0.22,0.02c-0.28,0-0.54-0.08-0.77-0.25c-0.29-0.21-0.48-0.51-0.54-0.86c-0.06-0.35,0.02-0.71,0.23-0.99 c0.21-0.29,0.51-0.48,0.86-0.54c0.35-0.06,0.7,0.02,0.99,0.23c0.29,0.21,0.48,0.51,0.54,0.86C13.37,12.13,13.29,12.48,13.08,12.77z M12,3c4.96,0,9,4.04,9,9s-4.04,9-9,9s-9-4.04-9-9S7.04,3,12,3 M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2 L12,2z"
            ></path>
        )}
    </svg>
);

export const ShortsIcon = ({ width = '2.4rem', height = '2.4rem', className, solidIcon }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        {solidIcon ? (
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.77 10.32c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zM10 14.65v-5.3L15 12l-5 2.65z"
            ></path>
        ) : (
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"
            ></path>
        )}
    </svg>
);

export const SubsIcon = ({ width = '2.4rem', height = '2.4rem', className, solidIcon }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        {solidIcon ? (
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20,7H4V6h16V7z M22,9v12H2V9H22z M15,15l-5-3v6L15,15z M17,3H7v1h10V3z"
            ></path>
        ) : (
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"
            ></path>
        )}
    </svg>
);

export const LibraryIcon = ({ width = '2.4rem', height = '2.4rem', className, solidIcon }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        {solidIcon ? (
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4,20h14v1H3V6h1V20z M21,3v15H6V3H21z M17,10.5L11,7v7L17,10.5z"
            ></path>
        ) : (
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"
            ></path>
        )}
    </svg>
);

export const HistoryIcon = ({ width = '2.4rem', height = '2.4rem', className, solidIcon }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        {solidIcon ? (
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,2C8.73,2,5.8,3.44,4,5.83V3.02H2V9h6V7H5.62 C7.08,5.09,9.36,4,12,4c4.41,0,8,3.59,8,8s-3.59,8-8,8s-8-3.59-8-8H2c0,5.51,4.49,10,10,10s10-4.49,10-10S17.51,2,12,2z"
            ></path>
        ) : (
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M22,12c0,5.51-4.49,10-10,10S2,17.51,2,12h1c0,4.96,4.04,9,9,9 s9-4.04,9-9s-4.04-9-9-9C8.81,3,5.92,4.64,4.28,7.38C4.17,7.56,4.06,7.75,3.97,7.94C3.96,7.96,3.95,7.98,3.94,8H8v1H1.96V3h1v4.74 C3,7.65,3.03,7.57,3.07,7.49C3.18,7.27,3.3,7.07,3.42,6.86C5.22,3.86,8.51,2,12,2C17.51,2,22,6.49,22,12z"
            ></path>
        )}
    </svg>
);

export const VideoIcon = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path fillRule="evenodd" clipRule="evenodd" d="M10,8l6,4l-6,4V8L10,8z M21,3v18H3V3H21z M20,4H4v16h16V4z"></path>
    </svg>
);

export const WatchIcon = ({ width = '2.4rem', height = '2.4rem', className, solidIcon }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        {solidIcon ? (
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M14.97,16.95L10,13.87V7h2v5.76 l4.03,2.49L14.97,16.95z"
            ></path>
        ) : (
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z"
            ></path>
        )}
    </svg>
);

export const LikeIcon = ({ width = '2.4rem', height = '2.4rem', className, solidIcon }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        {solidIcon ? (
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3,11h3v10H3V11z M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11v10h10.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z"
            ></path>
        ) : (
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"
            ></path>
        )}
    </svg>
);

export const DislikeIcon = ({ width = '2.4rem', height = '2.4rem', className, solidIcon }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        {solidIcon ? (
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"
            ></path>
        ) : (
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"
            ></path>
        )}
    </svg>
);

export const ShareIcon = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15,5.63L20.66,12L15,18.37V15v-1h-1c-3.96,0-7.14,1-9.75,3.09c1.84-4.07,5.11-6.4,9.89-7.1L15,9.86V9V5.63 M14,3v6 C6.22,10.13,3.11,15.33,2,21c2.78-3.97,6.44-6,12-6v6l8-9L14,3L14,3z"
        ></path>
    </svg>
);

export const SaveIcon = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22,13h-4v4h-2v-4h-4v-2h4V7h2v4h4V13z M14,7H2v1h12V7z M2,12h8v-1H2V12z M2,16h8v-1H2V16z"
        ></path>
    </svg>
);

export const CutIcon = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8,7c0,0.55-0.45,1-1,1S6,7.55,6,7c0-0.55,0.45-1,1-1S8,6.45,8,7z M7,16c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1s1-0.45,1-1 C8,16.45,7.55,16,7,16z M10.79,8.23L21,18.44V20h-3.27l-5.76-5.76l-1.27,1.27C10.89,15.97,11,16.47,11,17c0,2.21-1.79,4-4,4 c-2.21,0-4-1.79-4-4c0-2.21,1.79-4,4-4c0.42,0,0.81,0.08,1.19,0.2l1.37-1.37l-1.11-1.11C8,10.89,7.51,11,7,11c-2.21,0-4-1.79-4-4 c0-2.21,1.79-4,4-4c2.21,0,4,1.79,4,4C11,7.43,10.91,7.84,10.79,8.23z M10.08,8.94L9.65,8.5l0.19-0.58C9.95,7.58,10,7.28,10,7 c0-1.65-1.35-3-3-3S4,5.35,4,7c0,1.65,1.35,3,3,3c0.36,0,0.73-0.07,1.09-0.21L8.7,9.55l0.46,0.46l1.11,1.11l0.71,0.71l-0.71,0.71 L8.9,13.91l-0.43,0.43l-0.58-0.18C7.55,14.05,7.27,14,7,14c-1.65,0-3,1.35-3,3c0,1.65,1.35,3,3,3s3-1.35,3-3 c0-0.38-0.07-0.75-0.22-1.12l-0.25-0.61L10,14.8l1.27-1.27l0.71-0.71l0.71,0.71L18.15,19H20v-0.15L10.08,8.94z M17.73,4H21v1.56 l-5.52,5.52l-2.41-2.41L17.73,4z M18.15,5l-3.67,3.67l1,1L20,5.15V5H18.15z"
        ></path>
    </svg>
);

export const SortIcon = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path fillRule="evenodd" clipRule="evenodd" d="M21,6H3V5h18V6z M15,11H3v1h12V11z M9,17H3v1h6V17z"></path>
    </svg>
);

export const CommentLikeIcon = ({ width = '1.6rem', height = '1.6rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.42,14A1.54,1.54,0,0,0,14,12.87l1-4.24C15.12,7.76,15,7,14,7H10l1.48-3.54A1.17,1.17,0,0,0,10.24,2a1.49,1.49,0,0,0-1.08.46L5,7H1v7ZM9.89,3.14A.48.48,0,0,1,10.24,3a.29.29,0,0,1,.23.09S9,6.61,9,6.61L8.46,8H14c0,.08-1,4.65-1,4.65a.58.58,0,0,1-.58.35H6V7.39ZM2,8H5v5H2Z"
        ></path>
    </svg>
);

export const CommentDislikeIcon = ({ width = '1.6rem', height = '1.6rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.54,2A1.55,1.55,0,0,0,2,3.13L1,7.37C.83,8.24,1,9,2,9H6L4.52,12.54A1.17,1.17,0,0,0,5.71,14a1.49,1.49,0,0,0,1.09-.46L11,9h4V2ZM6.07,12.86a.51.51,0,0,1-.36.14.28.28,0,0,1-.22-.09l0-.05L6.92,9.39,7.5,8H2a1.5,1.5,0,0,1,0-.41L3,3.35A.58.58,0,0,1,3.54,3H10V8.61ZM14,8H11l0-5h3Z"
        ></path>
    </svg>
);

export const ArrowDownIcon = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12,15.7L5.6,9.4l0.7-0.7l5.6,5.6l5.6-5.6l0.7,0.7L12,15.7z"
        ></path>
    </svg>
);

export const GamingIcon = ({ width = '2.4rem', height = '2.4rem', className, solidIcon }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        {solidIcon ? (
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.97,4l-4.99,2.8L6.99,4L2,6.8v7.6l9.98,5.6l9.98-5.6V6.8L16.97,4z M10,12H8v2H6v-2H4v-2h2V8h2v2h2V12z M15.5,14 c-0.83,0-1.5-0.67-1.5-1.5c0-0.83,0.67-1.5,1.5-1.5c0.83,0,1.5,0.67,1.5,1.5C17,13.33,16.33,14,15.5,14z M18.5,11 c-0.83,0-1.5-0.67-1.5-1.5C17,8.67,17.67,8,18.5,8C19.33,8,20,8.67,20,9.5C20,10.33,19.33,11,18.5,11z"
            ></path>
        ) : (
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10,12H8v2H6v-2H4v-2h2V8h2v2h2V12z M17,12.5c0-0.83-0.67-1.5-1.5-1.5S14,11.67,14,12.5c0,0.83,0.67,1.5,1.5,1.5 S17,13.33,17,12.5z M20,9.5C20,8.67,19.33,8,18.5,8S17,8.67,17,9.5c0,0.83,0.67,1.5,1.5,1.5S20,10.33,20,9.5z M16.97,5.15l-4.5,2.53 l-0.49,0.27l-0.49-0.27l-4.5-2.53L3,7.39v6.43l8.98,5.04l8.98-5.04V7.39L16.97,5.15 M16.97,4l4.99,2.8v7.6L11.98,20L2,14.4V6.8 L6.99,4l4.99,2.8L16.97,4L16.97,4z"
            ></path>
        )}
    </svg>
);

export const TrophyIcon = ({ width = '2.4rem', height = '2.4rem', className, solidIcon }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        {solidIcon ? (
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18 5V2H6V5H4V6V10V11H6.01C6.07 13.53 7.63 15.78 9.97 16.64C9.98 16.64 9.99 16.64 10 16.65V19H9V20H8V22H16V20H15V19H14V16.65C14.01 16.65 14.02 16.65 14.03 16.64C16.36 15.78 17.93 13.54 17.99 11H20V10V6V5H18ZM6 10H5V6H6V10ZM19 10H18V6H19V10Z"
            ></path>
        ) : (
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17 3V5V6V10V10.51L16.99 10.97C16.94 13.1 15.66 14.94 13.74 15.67H13.72L13.66 15.69L13 15.95V16.65V19V20H14V21H15H10V20H11V19V16.65V15.95L10.34 15.71L10.26 15.68H10.25C8.33 14.95 7.05 13.11 7 10.98V10.51V10V6V5V3H17ZM18 2H6V5H4V6V10V11H6.01C6.07 13.53 7.63 15.78 9.97 16.64C9.98 16.64 9.99 16.64 10 16.65V19H9V20H8V22H16V20H15V19H14V16.65C14.01 16.65 14.02 16.65 14.03 16.64C16.36 15.78 17.93 13.54 17.99 11H20V10V6V5H18V2ZM18 10V6H19V10H18ZM5 10V6H6V10H5Z"
            ></path>
        )}
    </svg>
);

export const FlagIcon = ({ width = '2.4rem', height = '2.4rem', className, solidIcon }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        {solidIcon ? (
            <path fillRule="evenodd" clipRule="evenodd" d="M14,3H5v18h1v-9h6.6l0.4,2h7V5h-5.6L14,3L14,3z"></path>
        ) : (
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.18,4l0.24,1.2L13.58,6h0.82H19v7h-5.18l-0.24-1.2L13.42,11H12.6H6V4H13.18 M14,3H5v18h1v-9h6.6l0.4,2h7V5h-5.6L14,3 L14,3z"
            ></path>
        )}
    </svg>
);

export const AddIcon = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17,13h-4v4h-2v-4H7v-2h4V7h2v4h4V13z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9c4.96,0,9-4.04,9-9S16.96,3,12,3 M12,2 c5.52,0,10,4.48,10,10s-4.48,10-10,10C6.48,22,2,17.52,2,12S6.48,2,12,2L12,2z"
        ></path>
    </svg>
);

export const TickIcon = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M9.8,17.3l-4.2-4.1L7,11.8l2.8,2.7L17,7.4 l1.4,1.4L9.8,17.3z"
        ></path>
    </svg>
);

export const FilterIcon = ({ width = '2.4rem', height = '2.4rem', className, solidIcon }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        {solidIcon ? (
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15,17h6v2h-6V17z M11,17H3v2h8v2h2v-6h-2V17z M14,9h2V3h-2v2H3v2h11V9z M18,5v2h3V5H18z M6,15h2V9H6v2H3v2h3V15z M10,13h11 v-2H10V13z"
            ></path>
        ) : (
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15,17h6v1h-6V17z M11,17H3v1h8v2h1v-2v-1v-2h-1V17z M14,8h1V6V5V3h-1v2H3v1h11V8z M18,5v1h3V5H18z M6,14h1v-2v-1V9H6v2H3v1 h3V14z M10,12h11v-1H10V12z"
            ></path>
        )}
    </svg>
);

export const PlaylistIcon = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22,7H2v1h20V7z M13,12H2v-1h11V12z M13,16H2v-1h11V16z M15,19v-8l7,4L15,19z"
        ></path>
    </svg>
);

export const PlayIcon = ({ width = '2.4rem', height = '2.4rem', className }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path fillRule="evenodd" clipRule="evenodd" d="M6,4l12,8L6,20V4z"></path>
    </svg>
);
