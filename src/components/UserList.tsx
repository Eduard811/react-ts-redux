import { useTypedSelector } from '../hooks/useTypedSelector'

const UserList: React.FC = () => {

    const {users, isLoading, error} = useTypedSelector(state => state.user)

    return (
        <div>

        </div>
    )
}

export default UserList