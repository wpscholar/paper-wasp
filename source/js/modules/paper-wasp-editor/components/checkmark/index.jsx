const Checkmark = () => {
    return (
        <div className="paper-wasp-checkmark-container">
            <svg className="paper-wasp-checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <path className="paper-wasp-checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg><br />
            <span className="paper-wasp-checkmark-text">Saved!</span>
        </div>
    )
}

export default Checkmark;
