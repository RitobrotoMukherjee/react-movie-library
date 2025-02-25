import reactLogo from '../../assets/react.svg';

const Card = ({ setCount }) => {
    return (
        <>
            <div className="card flex-1">
                <div>
                    <a href="https://react.dev" target="_blank">
                        <img src={reactLogo} className="logo react" alt="React logo" />
                    </a>
                </div>
                <button onClick={() => setCount((count) => count + 1)}>
                    count increment
                </button>
            </div>
        </>
    );
}

export default Card;