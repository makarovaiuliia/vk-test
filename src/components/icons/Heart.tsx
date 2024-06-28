interface HeartIconProps {
    filled: boolean;
    onClick: () => void;
}

const HeartIcon = ({ filled, onClick }: HeartIconProps): JSX.Element => (
    <svg
        onClick={onClick}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={filled ? "black" : "none"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-heart"
        style={{ cursor: "pointer" }}
    >
        <path d="M12 21C12 21 18 14.611 18 9.5C18 7.015 16.209 5 13.5 5C12.152 5 10.871 5.895 10.371 7.046C9.871 5.895 8.588 5 7.244 5C4.532 5 2.747 7.015 2.747 9.5C2.747 14.611 12 21 12 21Z"></path>
    </svg>
);

export default HeartIcon;
