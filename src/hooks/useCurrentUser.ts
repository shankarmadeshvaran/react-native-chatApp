import useAppContext from './useAppContext';

type Props = {
  _id: string;
};

export function useCurrentUser({_id}: Props) {
  const {
    state: {userData},
  } = useAppContext();
  if (userData.length > 0 && _id) {
    const result = userData.find(item => item?._id === _id);
    return result;
  }
}
