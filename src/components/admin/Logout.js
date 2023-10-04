export const Logout = ({ onLogout }) => {
    return (
        <div>
            <h2>Are you sure you want to log out?</h2>
            <button onClick={onLogout}>Yes</button>
        </div>
    );
};