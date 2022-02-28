import { useMutation } from '@apollo/client'
import { useDispatch } from 'react-redux'
import { setUser } from '../../modules/user'
import { updateUserMutation, updateUserMutationVariables } from '../../__generated__/updateUserMutation'
import { UPDATE_USER } from '../graphql'

export function useUpdateUser() {
  const dispatch = useDispatch()
  const onCompleted = ({ updateUser }: updateUserMutation) => {
    if (updateUser.ok && updateUser.user !== null) dispatch(setUser(updateUser.user))
  }
  const [updateUser] = useMutation<updateUserMutation, updateUserMutationVariables>(UPDATE_USER, { onCompleted })
  return [updateUser]
}
