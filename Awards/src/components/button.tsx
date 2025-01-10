const Button = (props: {
    title: string;
    id: string;
    leftIcon?: React.JSX.Element;
    containerClassName: string;
}) => {
    return (
        <button
            id={props.id}
            className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-8 py-3 text-black ${props.containerClassName}`}
        >
            {props.leftIcon}
            <span className='relative incline-flex overflow-hideen font-general text-xs uppercase'>
                <div>
                    {props.title}
                </div>
            </span>
        </button>
    );
};

export default Button;
