import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../../tools/fetchUsers";
import { targetUser } from "../../tools/interfaces";

export const useSingleResult = ({myUser}: targetUser) => {
    const { data, isLoading, isError } = useQuery(['user', myUser.login], () => fetchUsers(`https://api.github.com/users/${myUser.login}`));
    const [targetUser, setTargetUser] = useState<targetUser | null>(null);

    useEffect(() => {
        if(data){
            setTargetUser(data.find((user: targetUser) => user.login === myUser.login));
        }
    }, [data, myUser.login]);

    return { targetUser, isLoading, isError };
};