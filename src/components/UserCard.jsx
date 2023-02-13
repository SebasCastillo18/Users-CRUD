import React from "react";
import "./styles/UserCard.css"

const UserCard = ({
    user,
    deleteUser,
    setUpdatingUser,
    handleClickShowModal,
}) => {
    const handleClickEdit = () => {
        setUpdatingUser(user);
        handleClickShowModal();
    };
    return (
        <article className="userCard">
           

                <h3 className="userCard_title">
                    {user.first_name} {user.last_name}
                </h3>
                <hr />
                <ul className="userCard_list">
                    <li className="userCard_item">
                        <span>Email: </span>
                        {user.email}
                    </li>
                    <li className="userCard_item">
                        <span>Birthday: </span> <i className="bx bxs-gift"></i>
                        {user.birthday}
                    </li>
                </ul>
                <hr />

           
            <footer className="userCard_footer">
                <button className="userCard_btn" onClick={() => deleteUser(user.id)}>
                    <i className="bx bxs-trash"></i>
                </button>
                <button className="userCard_btn" onClick={handleClickEdit}>
                    <i className="bx bxs-pencil"></i>
                </button>
            </footer>
        </article>
    );
};

export default UserCard;
