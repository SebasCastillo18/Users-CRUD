import React from "react";
import UserCard from "./UserCard";

const UsersList = ({
    users,
    deleteUser,
    setUpdatingUser,
    handleClickShowModal,
}) => {
    return (
        <section>
            {users.map((user) => (
                <UserCard
                    handleClickShowModal={handleClickShowModal}
                    key={user.id}
                    user={user}
                    deleteUser={deleteUser}
                    setUpdatingUser={setUpdatingUser}
                />
            ))}
        </section>
    );
};

export default UsersList;
