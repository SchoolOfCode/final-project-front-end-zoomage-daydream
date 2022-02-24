import css from "./Sidebar.module.css";

function Sidebar() {
    return (
        <div className={css.sidebarContainer}>
            <h2>Username</h2>
            <h2>Home</h2>
            <h2>Messages</h2>
            <h2>My Bookings</h2>
            <h2>Favourites</h2>
            <h2>Settings</h2>
            <h2>Log Out</h2>
        </div>
    )
}
export default Sidebar